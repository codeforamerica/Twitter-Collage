<?php
/**
 * @package    Firefox 4 Twitter Party
 * @subpackage server
 * @version    v.0.4
 * @author     Andre Torgal <andre@quodis.com>
 * @license    http://www.opensource.org/licenses/bsd-license.php BSD License
 */

/**
 * escape from global scope
 */
function main()
{
	DEFINE('CLIENT', 'script');
	DEFINE('CONTEXT', __FILE__);
	include dirname(__FILE__) . '/../bootstrap.php';

	Debug::setLogMsgFile($config['App']['pathLog'] .'/twitter-search.msg.log');
	Debug::setLogErrorFile($config['App']['pathLog'] .'/twitter-search.error.log');
	Debug::setForceLogToFile(TRUE);

	$period = $config['Jobs']['twitter-search']['period'];
	$hasCronSchedule = $config['Jobs']['twitter-search']['hasCronSchedule'];

	while (TRUE)
	{
		// will return nothing on first call
		$lastId = Tweet::getLastTwitterId();

		// fetch results using twitter API
		$newTweets = Twitter::search($config['Twitter']['terms'], $config['Twitter']['rpp'], $lastId);

		Debug::logMsg('total tweets returned: ' . count($newTweets));

		// start time
		$start = time();
		$tweets = 0;
		$freeSlots = array();

		// add new tweets
		foreach ($newTweets as $tweet)
		{
			// find a(nother) page with free slots
			if (!count($freeSlots))
			{
				// this page has them
				$pageNo = Mosaic::getPriorityPageNo();

				// all slots
				$pageSize = Mosaic::getPageSize();
				for ($i = 0; $i < $pageSize; $i++) $freeSlots[$i] = $i;
				// remove used slots
				$result = Tweet::getByPage($pageNo);
				while ($row = $result->row())
				{
					// should not happen, but is sane
					if (!isset($freeSlots[$row['p']])) continue;
					// remove slot
					unset($freeSlots[$row['p']]);
				}

				// sane
				if (!count($freeSlots)) break;

				// shuffle slots
				shuffle($freeSlots);
				Debug::logMsg('using page:' . $pageNo . ' free slots:' . count($freeSlots));
			}

			// blacklisted username?
			if (in_array($tweet['from_user'], $config['Twitter']['blacklist'])) continue;

			// pop one (but only after insert succeeds)
			$position = $freeSlots[count($freeSlots) - 1];

			// insert tweet
			$tweet['page'] = $pageNo;
			$tweet['position'] = $position;
			// ... and pop freee slot (on success)
			if (Mosaic::addTweet($tweet))
			{
				$tweets++;
				array_pop($freeSlots);
			}
		}

		// sleep?
		$elapsed = time() - $start;
		$sleep = $period - $elapsed;
		if ($sleep < 1) $sleep = 1;

		Debug::logMsg('OK! ... new tweets:' . $tweets . ' took ' . $elapsed . ' seconds');

		if ($hasCronSchedule) break;

		Debug::logMsg('... sleeping for ' . $sleep . ' seconds ...');

		sleep($sleep);
	}

} // main()


try
{
	main();
}
catch(Exception $e) {
	Debug::logError($e, 'EXCEPTION ' . $e->getMessage());
	Dispatch::now(0, 'EXCEPTION ' . $e->getMessage());
}

?>