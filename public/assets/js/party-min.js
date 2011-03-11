if(!window.console||!window.console.log){window.console={};window.console.log=function(a){};window.console.dir=function(a){}}function f_scrollLeft(){return f_filterResults(window.pageXOffset?window.pageXOffset:0,document.documentElement?document.documentElement.scrollLeft:0,document.body?document.body.scrollLeft:0)}function f_scrollTop(){return f_filterResults(window.pageYOffset?window.pageYOffset:0,document.documentElement?document.documentElement.scrollTop:0,document.body?document.body.scrollTop:0)}function f_clientWidth(){return f_filterResults(window.innerWidth?window.innerWidth:0,document.documentElement?document.documentElement.clientWidth:0,document.body?document.body.clientWidth:0)}function f_clientHeight(){return f_filterResults(window.innerHeight?window.innerHeight:0,document.documentElement?document.documentElement.clientHeight:0,document.body?document.body.clientHeight:0)}function f_filterResults(d,b,a){var c=d?d:0;if(b&&(!c||(c>b))){c=b}return a&&(!c||(c>a))?a:c}function getTinyUrl(c,d){var a="http://json-tinyurl.appspot.com/?url=";var b=a+encodeURIComponent(c)+"&callback=?";$.getJSON(b,function(e){d&&d(e.tinyurl)})}function objectLength(c){var b=0,a;for(a in c){if(c.hasOwnProperty(a)){b+=1}}return b}Array.prototype.shuffle=function(){for(var c,b,a=this.length;a;c=parseInt(Math.random()*a,10),b=this[--a],this[a]=this[c],this[c]=b){}};function number_format(f,c,h,e){f=(f+"").replace(/[^0-9+\-Ee.]/g,"");var b=!isFinite(+f)?0:+f,a=!isFinite(+c)?0:Math.abs(c),j=(typeof e==="undefined")?",":e,d=(typeof h==="undefined")?".":h,i="",g=function(o,m){var l=Math.pow(10,m);return""+Math.round(o*l)/l};i=(a?g(b,a):""+Math.round(b)).split(".");if(i[0].length>3){i[0]=i[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,j)}if((i[1]||"").length<a){i[1]=i[1]||"";i[1]+=new Array(a-i[1].length+1).join("0")}return i.join(d)}function date(j,h){var g=this,i,e,b=/\\?([a-z])/gi,a,c=function(l,f){if((l=l+"").length<f){return new Array((++f)-l.length).join("0")+l}else{return l}},d=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur","January","February","March","April","May","June","July","August","September","October","November","December"],k={1:"st",2:"nd",3:"rd",21:"st",22:"nd",23:"rd",31:"st"};a=function(f,l){return e[f]?e[f]():l};e={d:function(){return c(e.j(),2)},D:function(){return e.l().slice(0,3)},j:function(){return i.getDate()},l:function(){return d[e.w()]+"day"},N:function(){return e.w()||7},S:function(){return k[e.j()]||"th"},w:function(){return i.getDay()},z:function(){var l=new Date(e.Y(),e.n()-1,e.j()),f=new Date(e.Y(),0,1);return Math.round((l-f)/86400000)+1},W:function(){var l=new Date(e.Y(),e.n()-1,e.j()-e.N()+3),f=new Date(l.getFullYear(),0,4);return 1+Math.round((l-f)/86400000/7)},F:function(){return d[6+e.n()]},m:function(){return c(e.n(),2)},M:function(){return e.F().slice(0,3)},n:function(){return i.getMonth()+1},t:function(){return(new Date(e.Y(),e.n(),0)).getDate()},L:function(){return new Date(e.Y(),1,29).getMonth()===1|0},o:function(){var m=e.n(),f=e.W(),l=e.Y();return l+(m===12&&f<9?-1:m===1&&f>9)},Y:function(){return i.getFullYear()},y:function(){return(e.Y()+"").slice(-2)},a:function(){return i.getHours()>11?"pm":"am"},A:function(){return e.a().toUpperCase()},B:function(){var l=i.getUTCHours()*3600,f=i.getUTCMinutes()*60,m=i.getUTCSeconds();return c(Math.floor((l+f+m+3600)/86.4)%1000,3)},g:function(){return e.G()%12||12},G:function(){return i.getHours()},h:function(){return c(e.g(),2)},H:function(){return c(e.G(),2)},i:function(){return c(i.getMinutes(),2)},s:function(){return c(i.getSeconds(),2)},u:function(){return c(i.getMilliseconds()*1000,6)},e:function(){throw"Not supported (see source code of date() for timezone on how to add support)"},I:function(){var l=new Date(e.Y(),0),n=Date.UTC(e.Y(),0),f=new Date(e.Y(),6),m=Date.UTC(e.Y(),6);return 0+((l-n)!==(f-m))},O:function(){var f=i.getTimezoneOffset();return(f>0?"-":"+")+c(Math.abs(f/60*100),4)},P:function(){var f=e.O();return(f.substr(0,3)+":"+f.substr(3,2))},T:function(){return"UTC"},Z:function(){return -i.getTimezoneOffset()*60},c:function(){return"Y-m-d\\Th:i:sP".replace(b,a)},r:function(){return"D, d M Y H:i:s O".replace(b,a)},U:function(){return i.getTime()/1000|0}};this.date=function(l,f){g=this;i=((typeof f==="undefined")?new Date():(f instanceof Date)?new Date(f):new Date(f*1000));return l.replace(b,a)};return this.date(j,h)}var party=party||{};(function(){var w,I,d,c=200,h,n=0,z,B=0,t={},v=[],p=[],F=[],y=0,s,r={},J=null,G=["#ACE8F1","#2D4891","#F7DC4B","#C52F14"],g={canvas:null,current:0,increment:0},Q={input:null,original_caption:null},S={active_bubble_pos:0,keep_bubble_open:false,last_id:0,last_page:0,mosaic_offset:{},initial_tiles_per_frame_incremental:1,draw_new_tiles_every:0,draw_new_tiles_every_counter:0,total_tiles:0,last_tile_drawn_pos:-1},P={high:{initial_frames_per_second:8,initial_tiles_per_frame:40,new_tiles_per_second:4,pause_after:10},medium:{initial_frames_per_second:4,initial_tiles_per_frame:80,new_tiles_per_second:2,pause_after:10},low:{initial_frames_per_second:1,initial_tiles_per_frame:200,new_tiles_per_second:1,pause_after:10}};function m(T){return T.replace(/(ftp|http|https|file):\/\/([\S]+(\b|$))/gim,'<a href="$&" class="my_link" target="_blank">$2</a>').replace(/([^\/])(www[\S]+(\b|$))/gim,'$1<a href="http://$2" class="my_link" target="_blank">$2</a>').replace(/(^|\s)@(\w+)/g,'$1<a href="http://twitter.com/$2" class="my_link" target="_blank">@$2</a>').replace(/(^|\s)#(\S+)/g,'$1<a href="http://search.twitter.com/search?q=%23$2" class="my_link" target="_blank">#$2</a>')}function L(V){var T,U;if(!V){return""}T=V.p;U=party.mosaic.index[T];if(!U){return""}return'<div class="tile" id="'+T+'" style="background-image:url(data:image/gif;base64,'+V.d+"); left: "+(U[0]*12)+"px; top: "+(U[1]*12)+'px;"></div>'}function f(){var T,U;for(T=0;T<y;T+=1){v.push(T)}v.shuffle();U=parseInt(y/party.performance.initial_tiles_per_frame,10);g.increment=parseInt(S.total_tiles/U,10);w=window.setInterval(D,(1000/party.performance.initial_frames_per_second))}function D(){var X="",U=0,T=0,W,V=0;if(S.initial_tiles_per_frame_incremental<party.performance.initial_tiles_per_frame){S.initial_tiles_per_frame_incremental+=0.02;V=(g.increment/(party.performance.initial_tiles_per_frame/S.initial_tiles_per_frame_incremental))}else{V=g.increment}T=(n+party.performance.initial_tiles_per_frame);for(U=n;U<T;U+=1){W=v[U];X=X+L(t[W])}n=U;if(X){party.canvas.append(X);if(g.current<S.total_tiles){g.current+=V;R()}}else{window.clearInterval(w);party.canvas.css("background","none");g.current=parseInt(S.total_tiles,10);R();o();q()}}function R(){g.canvas.text(number_format(g.current,0,party.l10n.dec_point,party.l10n.thousands_sep))}function E(){var V=$.makeArray($("#loading li")),T=0,Y,U=5,W=0,Z=$("#loading"),X;V.shuffle();Y=function(){$(V[T]).hide();T+=1;if(T>=V.length){T=0}$(V[T]).show()};X=function(){Z.css("background-position",-(W*240)+"px 0px");W+=1;if(W>=U){W=0}};Y();I=window.setInterval(Y,(party.loading_message_seconds*1000));X();d=window.setInterval(X,c)}function O(){window.clearInterval(I);window.clearInterval(d);$("#loading").remove()}function N(){var T,V=["assets/images/layout/bubbles.png"];for(var U=V.length;U--;){(function(){var W=new Image();W.src=V[U]})()}party.performance=party.performance_settings.high;if($.browser.msie){party.performance=party.performance_settings.medium}else{if($.browser.mozilla){if(window.navigator.userAgent.search("Firefox/4")!=-1){$("#download").remove()}}}g.canvas=$("#twitter-counter dd span");J=$("#tile-hover");party.canvas=$("#mosaic");T=$("#bubble");party.bubble={container:T,username_a:T.find("h1 a"),avatar_a:T.find("a.twitter-avatar"),avatar_img:T.find("a.twitter-avatar > img"),time:T.find("time"),time_a:T.find("time > a"),p:T.find("p")};S.mosaic_offset=party.canvas.offset();i();l();party.canvas.bind("mouseleave",function(){party.autoBubbleStartTimer=setTimeout(o,1000)});party.canvas.bind("mousemove",function(X){var W,aa,Z,Y=party.canvas.offset();clearTimeout(party.mousemoveTimer);clearTimeout(party.autoBubbleStartTimer);if(S.keep_bubble_open){return}W=Math.ceil((X.clientX+f_scrollLeft()-Y.left)/12)-1;aa=Math.ceil((X.clientY+f_scrollTop()-Y.top)/12)-1;if(W<0||aa<0){return}Z=party.mosaic.grid[W][aa];party.mousemoveTimer=setTimeout(function(){if(Z){if(S.active_bubble_pos!=Z.i){k();S.active_bubble_pos=Z.i;H(Z.i)}}else{o()}},50)});J.bind("click",function(W){S.keep_bubble_open=true;W.stopPropagation();return false});party.canvas.bind("click",a);party.bubble.container.bind("click",function(W){if(!S.keep_bubble_open){S.keep_bubble_open=true}k();W.stopPropagation();return(W.target.nodeName.toLowerCase()=="a")});party.bubble.container.bind("mouseenter",function(){J.trigger("click")});party.bubble.container.bind("mouseleave",function(){party.canvas.trigger("click")});party.init=function(){return party}}function i(){Q.input_dom=$("#search-input");Q.original_caption=Q.input_dom.val();Q.input_dom.focus(function(){if($(this).val()===Q.original_caption){$(this).val("")}});Q.input_dom.blur(function(){if($(this).val()==""){$(this).val(Q.original_caption)}});$("#search-box").submit(function(){var T=Q.input_dom.val();if(T==""){return false}$("#search-box button").addClass("loading");$.ajax({url:"/tiles-by-username.php",type:"GET",dataType:"json",data:{user_name:T},success:K});return false})}function K(T){var V,U;$("#search-box button").removeClass("loading");if(T.payload.total==0){$("#search-box .error").fadeIn("fast");window.setTimeout(function(){$("#search-box .error").fadeOut("fast")},3*1000);return}V=T.payload.tiles[0];U=V.p;$.extend(t[U],V);k();S.keep_bubble_open=true;H(U);T=null}function M(){var T;T=p[B];if(!T){B=0;return}B+=1;H(T.position)}function o(){if(!z){M();z=setInterval(M,party.auto_bubble_seconds*1000)}}function k(){clearInterval(z);z=null}function H(Y){var ab,Z,X,aa=party.bubble,W,T,U,V,ac;X=t[Y];if(!X||!aa){return}U=party.mosaic.index[Y];if(!U){return}ab=U[0];Z=U[1];V=party.mosaic.grid[ab][Z];if(!V){return}if(Z>24){if(ab>24){W="bottom-right";T={top:"",right:(564-(ab*12))+"px",bottom:(532-(Z*12))+"px",left:""}}else{W="bottom-left";T={top:"",right:"",bottom:(532-(Z*12))+"px",left:((ab*12)+2)+"px"}}}else{if(ab>24){W="top-right";T={top:((Z*12)-16)+"px",right:(564-(ab*12))+"px",bottom:"",left:""}}else{W="top-left";T={top:((Z*12)-16)+"px",right:"",left:((ab*12)+8)+"px",bottom:""}}}aa.container.hide();J.hide();J.attr("src","data:image/gif;base64,"+X.d);J.css({left:(ab*12)+"px",top:(Z*12)+"px"});ac=date(party.l10n.date_format,X.c);aa.username_a.text(X.u).attr("href","http://twitter.com/"+X.u);aa.avatar_a.attr("title",X.u).attr("href","http://twitter.com/"+X.u);aa.p.html(m(X.n));aa.time_a.attr("href","http://twitter.com/"+X.u+"/status/"+X.w).text(ac);aa.time.attr("datetime",ac);aa.avatar_img.attr("src","").hide();aa.container.css(T).removeClass().addClass("bubble "+W+" color-"+V.r);party.showBubbleImageTimer=setTimeout(function(){aa.avatar_img.attr("src",X.m);aa.avatar_img.load(function(){$(this).fadeIn("fast")});party.showBubbleImageTimer=null;X=null},500);aa.container.show();J.show()}function a(){S.active_bubble_pos=0;S.keep_bubble_open=false;party.bubble.container.hide();J.hide();if(party.showBubbleImageTimer){clearTimeout(party.showBubbleImageTimer);party.showBubbleImageTimer=null}}function e(){window.location=window.location}function l(){if(party.state.last_page==0){setTimeout(e,3*60*1000);return}E();var T=party.store_url+"/mosaic.json";$.getJSON(T,function(V){O();if(V.last_id>S.last_id){S.last_id=V.last_id}t=V.tiles;var U;for(U in t){if(t[U].p){p.push({id:parseInt(t[U].i,10),position:parseInt(t[U].p,10)})}}y=p.length;p.sort(function(X,W){return W.id-X.id});p=p.slice(0,199);S.total_tiles=parseInt(party.state.last_page*y,10);f();u();V=null})}function q(){s=window.setInterval(A,(1000/party.performance.new_tiles_per_second))}function A(){var Y,X,T,U,W,V;if(S.draw_new_tiles_every_counter>=S.draw_new_tiles_every){X=F[0];S.draw_new_tiles_every_counter=0}S.draw_new_tiles_every_counter+=1;if(X){Y=parseInt(X.p);if(!t[Y]){F.shift();return}W={"background-image":"url(data:image/gif;base64,"+X.d+")","background-position":"0px 0px"};$.extend(t[Y],X);p.shift();p.push({id:parseInt(X.i,10),position:Y});F.shift();g.current+=1;R()}else{Y=Math.floor(Math.random()*y);T=party.mosaic.index[Y];U=party.mosaic.grid[T[0]][T[1]];W={"background-image":"none","background-color":G[U.r]}}if(S.last_tile_drawn_pos>-1){$("#"+S.last_tile_drawn_pos).css({"background-image":"url(data:image/gif;base64,"+t[S.last_tile_drawn_pos].d+")","background-position":"0px 0px"})}S.last_tile_drawn_pos=Y;$("#"+Y).css(W)}function u(){C();h=window.setInterval(C,(party.polling_timer_seconds*1000));if(window.location.href.indexOf("keepgoing")<0){window.setTimeout(b,party.performance.pause_after*60*1000)}}function C(){$.ajax({url:"/poll.php",dataType:"json",data:{last_id:S.last_id},success:function(T){if(T.payload.last_id>S.last_id){S.last_id=T.payload.last_id}F=F.concat(T.payload.tiles.reverse());S.draw_new_tiles_every=Math.round((party.performance.new_tiles_per_second*party.polling_timer_seconds)/F.length);T=null}})}function x(){return S.last_id}function b(){window.clearInterval(s);window.clearInterval(h);k()}function j(){q();u();o()}$.extend(party,{loading_message_seconds:2,polling_timer_seconds:180,auto_bubble_seconds:7,grid:[],index:[],init:N,getLastId:x,pause:b,resume:j,showBubble:H,performance:r,performance_settings:P,state:S,new_tiles:F})}());$(document).ready(function(){var b=0,a=0;$("#flang").change(function(){window.location="/"+$(this).val()});$("#twitter-counter > dl > dt > a").click(function(){var d=550,f=500,c=(window.screen.width-d)/2,e=(window.screen.height-f)/2;window.open($(this).attr("href"),"tweet","left="+c+",top="+e+",width="+d+",height="+f+",toolbar=0,resizable=1");return false});b=parseInt($("#brand em").width(),10)+20;a=parseInt($("#brand p").width(),10);$("#brand em").before('<span style="left:0; width:'+(a-b)/2+'px" />').fadeIn("slow");$("#brand em").after('<span style="right:0; width:'+(a-b)/2+'px" />').fadeIn("slow");party.init()});