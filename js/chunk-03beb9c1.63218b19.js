(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03beb9c1"],{"02f4":function(t,e,s){var i=s("4588"),a=s("be13");t.exports=function(t){return function(e,s){var n,o,r=String(a(e)),c=i(s),l=r.length;return c<0||c>=l?t?"":void 0:(n=r.charCodeAt(c),n<55296||n>56319||c+1===l||(o=r.charCodeAt(c+1))<56320||o>57343?t?r.charAt(c):n:t?r.slice(c,c+2):o-56320+(n-55296<<10)+65536)}}},"0390":function(t,e,s){"use strict";var i=s("02f4")(!0);t.exports=function(t,e,s){return e+(s?i(t,e).length:1)}},"0bfb":function(t,e,s){"use strict";var i=s("cb7c");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,s){"use strict";s("b0c5");var i=s("2aba"),a=s("32e9"),n=s("79e5"),o=s("be13"),r=s("2b4c"),c=s("520a"),l=r("species"),d=!n((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),v=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var s="ab".split(t);return 2===s.length&&"a"===s[0]&&"b"===s[1]}();t.exports=function(t,e,s){var u=r(t),p=!n((function(){var e={};return e[u]=function(){return 7},7!=""[t](e)})),h=p?!n((function(){var e=!1,s=/a/;return s.exec=function(){return e=!0,null},"split"===t&&(s.constructor={},s.constructor[l]=function(){return s}),s[u](""),!e})):void 0;if(!p||!h||"replace"===t&&!d||"split"===t&&!v){var g=/./[u],m=s(o,u,""[t],(function(t,e,s,i,a){return e.exec===c?p&&!a?{done:!0,value:g.call(e,s,i)}:{done:!0,value:t.call(s,e,i)}:{done:!1}})),f=m[0],w=m[1];i(String.prototype,t,f),a(RegExp.prototype,u,2==e?function(t,e){return w.call(t,this,e)}:function(t){return w.call(t,this)})}}},"28a5":function(t,e,s){"use strict";var i=s("aae3"),a=s("cb7c"),n=s("ebd6"),o=s("0390"),r=s("9def"),c=s("5f1b"),l=s("520a"),d=s("79e5"),v=Math.min,u=[].push,p="split",h="length",g="lastIndex",m=4294967295,f=!d((function(){RegExp(m,"y")}));s("214f")("split",2,(function(t,e,s,d){var w;return w="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[h]||2!="ab"[p](/(?:ab)*/)[h]||4!="."[p](/(.?)(.?)/)[h]||"."[p](/()()/)[h]>1||""[p](/.?/)[h]?function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!i(t))return s.call(a,t,e);var n,o,r,c=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,p=void 0===e?m:e>>>0,f=new RegExp(t.source,d+"g");while(n=l.call(f,a)){if(o=f[g],o>v&&(c.push(a.slice(v,n.index)),n[h]>1&&n.index<a[h]&&u.apply(c,n.slice(1)),r=n[0][h],v=o,c[h]>=p))break;f[g]===n.index&&f[g]++}return v===a[h]?!r&&f.test("")||c.push(""):c.push(a.slice(v)),c[h]>p?c.slice(0,p):c}:"0"[p](void 0,0)[h]?function(t,e){return void 0===t&&0===e?[]:s.call(this,t,e)}:s,[function(s,i){var a=t(this),n=void 0==s?void 0:s[e];return void 0!==n?n.call(s,a,i):w.call(String(a),s,i)},function(t,e){var i=d(w,t,this,e,w!==s);if(i.done)return i.value;var l=a(t),u=String(this),p=n(l,RegExp),h=l.unicode,g=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(f?"y":"g"),C=new p(f?l:"^(?:"+l.source+")",g),b=void 0===e?m:e>>>0;if(0===b)return[];if(0===u.length)return null===c(C,u)?[u]:[];var _=0,x=0,y=[];while(x<u.length){C.lastIndex=f?x:0;var k,D=c(C,f?u:u.slice(x));if(null===D||(k=v(r(C.lastIndex+(f?0:x)),u.length))===_)x=o(u,x,h);else{if(y.push(u.slice(_,x)),y.length===b)return y;for(var I=1;I<=D.length-1;I++)if(y.push(D[I]),y.length===b)return y;x=_=k}}return y.push(u.slice(_)),y}]}))},"520a":function(t,e,s){"use strict";var i=s("0bfb"),a=RegExp.prototype.exec,n=String.prototype.replace,o=a,r="lastIndex",c=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[r]||0!==e[r]}(),l=void 0!==/()??/.exec("")[1],d=c||l;d&&(o=function(t){var e,s,o,d,v=this;return l&&(s=new RegExp("^"+v.source+"$(?!\\s)",i.call(v))),c&&(e=v[r]),o=a.call(v,t),c&&o&&(v[r]=v.global?o.index+o[0].length:e),l&&o&&o.length>1&&n.call(o[0],s,(function(){for(d=1;d<arguments.length-2;d++)void 0===arguments[d]&&(o[d]=void 0)})),o}),t.exports=o},"5f1b":function(t,e,s){"use strict";var i=s("23c6"),a=RegExp.prototype.exec;t.exports=function(t,e){var s=t.exec;if("function"===typeof s){var n=s.call(t,e);if("object"!==typeof n)throw new TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},8530:function(t,e,s){t.exports=s.p+"img/icon.26d763db.jpg"},aae3:function(t,e,s){var i=s("d3f4"),a=s("2d95"),n=s("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==a(t))}},b0c5:function(t,e,s){"use strict";var i=s("520a");s("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},eea6:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-container"},[s("section",{staticClass:"section section-header"},[s("div",{staticClass:"section-bg section-header-bg"}),s("div",{staticClass:"section-bg section-content-bg"}),s("div",{staticClass:"container"},[s("header",{staticClass:"header"},[s("div",{staticClass:"header-box"},[t._m(0),s("h1",{staticClass:"name text-center wow inShow no-print"},[t._v(t._s(t.userInfo.nickname))]),s("h1",{staticClass:"name text-center hide show-print-block"},[t._v(t._s(t.userInfo.name))])])]),s("div",{staticClass:"section-content"},[s("div",{staticClass:"content-box"},[s("div",{staticClass:"name-slogan"},[s("a",{attrs:{href:"https://quhongqiang.com/",target:"_blank"}},[s("h2",{staticClass:"wow inShow no-print",attrs:{"data-wow-delay":"0.1s"}},[s("span",{staticClass:"text-light"},[t._v(t._s(t.userInfo.lastName))]),t._v(" "+t._s(t.userInfo.firstName)+"\n              ")])]),s("div",{staticClass:"description wow inShow no-print",attrs:{"data-wow-delay":"0.15s"}},[s("i",{staticClass:"slogan"},[t._v(t._s(t.userInfo.slogan))])]),s("div",{staticClass:"description wow inShow printing",attrs:{"data-wow-delay":"0.1s"}},[t._v("(Ctrl+p to print this resume)")])]),s("div",{staticClass:"contact-info"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 col-lg-3 flex"},[s("div",{staticClass:"item wow inShow",attrs:{"data-wow-delay":"0.3s"}},[s("h4",[t._v("Gender")]),s("div",{staticClass:"info"},[t._v(t._s(t.userInfo.sex))])])]),s("div",{staticClass:"col-md-6 col-lg-3 flex"},[s("div",{staticClass:"item wow inShow",attrs:{"data-wow-delay":"0.45s"}},[s("h4",[t._v("Age")]),s("div",{staticClass:"info"},[t._v(t._s(t.calcDate(t.userInfo.birthday)))])])]),s("div",{staticClass:"col-md-6 col-lg-3 flex"},[s("div",{staticClass:"item wow inShow",attrs:{"data-wow-delay":"0.5s",href:"mailto:"+t.userInfo.email}},[s("h4",[t._v("Education")]),s("div",{staticClass:"info"},[t._v(t._s(t.userInfo.education))])])]),t._m(1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 col-lg-3 flex"},[s("div",{staticClass:"item wow inShow",attrs:{"data-wow-delay":"0.6s"}},[s("h4",[t._v("Phone")]),s("address",{staticClass:"info"},[t._v(t._s(t.userInfo.phone))])])]),s("div",{staticClass:"col-md-6 col-lg-3 flex"},[s("div",{staticClass:"item wow inShow",attrs:{"data-wow-delay":"0.65s"}},[s("h4",[t._v("Telegram")]),s("div",{staticClass:"info"},[t._v(t._s(t.userInfo.telegram.number))])])]),s("div",{staticClass:"col-md-6 col-lg-3"},[s("h4",[t._v("Website")]),s("a",{staticClass:"item wow inShow",attrs:{"data-wow-delay":"0.7s",href:t.userInfo.website,target:"_blank"}},[s("div",{staticClass:"info mobile"},[t._v(t._s(t.userInfo.website))])])]),s("div",{staticClass:"col-md-6 col-lg-3"},[s("h4",[t._v("Github")]),s("a",{staticClass:"item wow inShow",attrs:{"data-wow-delay":"0.75s",href:t.userInfo.github,target:"_blank"}},[s("div",{staticClass:"info"},[t._v(t._s(t.userInfo.github))])])])])])])])])]),s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("div",{staticClass:"section-bg section-header-bg"}),s("div",{staticClass:"section-bg section-content-bg"}),t._m(2),s("div",{staticClass:"section-content"},[s("div",{staticClass:"intro"},t._l(t.userInfo.intro.content,(function(e,i){return s("p",{key:i,domProps:{innerHTML:t._s(e)}})})),0)])])]),s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("div",{staticClass:"section-bg section-header-bg"}),s("div",{staticClass:"section-bg section-content-bg"}),t._m(3),s("div",{staticClass:"section-content"},[s("div",{staticClass:"row skill"},t._l(t.userInfo.skill,(function(e){return s("div",{key:e.name,staticClass:"col-md-6"},[s("div",{staticClass:"item"},[s("div",{staticClass:"text-info"},[s("span",{staticClass:"num text-light"},[t._v(t._s(e.percent))]),t._v(t._s(e.name)+"\n              ")]),s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar wow progressShow",style:"width:"+e.percent})])])])})),0)])])]),s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("div",{staticClass:"section-bg section-header-bg"}),s("div",{staticClass:"section-bg section-content-bg"}),t._m(4),s("div",{staticClass:"section-content"},[s("div",{staticClass:"experience"},t._l(t.userInfo.project,(function(e,i){return s("div",{key:e.title,staticClass:"item",class:{printOnly:2===i}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-5"},[s("div",{staticClass:"time"},[t._v(t._s(e.time))]),s("div",{staticClass:"title",domProps:{innerHTML:t._s(e.title)}}),s("div",{staticClass:"description"},[t._v(t._s(e.intro))])]),s("div",{staticClass:"col-md-7"},[s("div",{staticClass:"content"},[t._v(t._s(e.description))]),t._l(e.tips,(function(e){return s("div",{key:e.title,staticClass:"tips"},[s("b",[t._v(t._s(e.title))]),s("ul",t._l(e.content,(function(e){return s("li",{key:e},[t._v(t._s(e))])})),0)])})),t._l(e.technology,(function(e){return s("div",{key:e.title,staticClass:"technology"},[s("b",[t._v(t._s(e.title))]),s("ul",{staticClass:"inline"},t._l(e.content,(function(e,i){return s("li",{key:i},[t._v(t._s(e))])})),0)])}))],2)])])})),0)])])]),s("section",{staticClass:"section no-print"},[s("div",{staticClass:"container"},[s("div",{staticClass:"section-bg section-header-bg"}),s("div",{staticClass:"section-bg section-content-bg"}),t._m(5),s("div",{staticClass:"section-content"},[s("div",{staticClass:"contact"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 col-lg-3"},[s("div",{staticClass:"item"},[s("h4",[t._v("Phone")]),s("div",{staticClass:"info"},[t._v(t._s(t.userInfo.phone))])])]),s("div",{staticClass:"col-md-6 col-lg-3"},[s("div",{staticClass:"item"},[s("h4",[t._v("Telegram")]),s("div",{staticClass:"info"},[t._v(t._s(t.userInfo.telegram.number))])])]),s("div",{staticClass:"col-md-6 col-lg-3"},[s("div",{staticClass:"item"},[s("h4",[t._v("Location")]),s("div",{staticClass:"info"},[t._v(t._s(t.userInfo.location))])])]),s("div",{staticClass:"col-md-6 col-lg-3"},[s("a",{staticClass:"item",attrs:{href:"mailto:"+t.userInfo.email}},[s("h4",[t._v("Email")]),s("div",{staticClass:"info"},[t._v(t._s(t.userInfo.email))])])])])]),s("div",{staticClass:"name-slogan"},[s("a",{attrs:{href:"https://quhongqiang.com/",target:"_blank"}},[s("h2",{staticClass:"wow inShow"},[s("span",{staticClass:"text-light"},[t._v(t._s(t.userInfo.lastName))]),t._v(" "+t._s(t.userInfo.firstName)+"\n            ")])]),s("div",{staticClass:"description wow inShow",attrs:{"data-wow-delay":"0.05s"}},[t._v(t._s(t.userInfo.slogan))]),s("div",{staticClass:"description wow inShow printing",attrs:{"data-wow-delay":"0.1s"}},[t._v("("+t._s(t.userInfo.tips)+")")])])])])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"avatar wow inShow no-print"},[i("img",{staticClass:"img-responsive",attrs:{src:s("8530"),alt:"logo"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-6 col-lg-3 flex"},[s("a",{staticClass:"item wow inShow",attrs:{"data-wow-delay":"0.55s"}},[s("h4",[t._v("College")]),s("div",{staticClass:"info"},[t._v("OUHK")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header"},[s("div",{staticClass:"content-box"},[s("h2",{staticClass:"title"},[t._v("About me / \n            "),s("small",[s("i",[t._v("Intro")])])]),s("div",{staticClass:"description"},[t._v("Tech Background")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header"},[s("div",{staticClass:"content-box"},[s("h2",{staticClass:"title"},[t._v("Skills / \n            "),s("small",[s("i",[t._v("Skills")])])]),s("div",{staticClass:"description"},[t._v("Language & Frameworks")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header"},[s("div",{staticClass:"content-box"},[s("h2",{staticClass:"title"},[t._v("Projects / \n            "),s("small",[s("i",[t._v("Experience")])])]),s("div",{staticClass:"description"},[t._v("Side projects")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header"},[s("div",{staticClass:"content-box"},[s("h2",{staticClass:"title"},[t._v("Contact / \n            "),s("small",[s("i",[t._v("Contact")])])]),s("div",{staticClass:"description"},[t._v("Conact me via the following info")])])])}],n=(s("28a5"),s("fcaf")),o={name:"front",data:function(){return{userInfo:n}},methods:{calcDate:function(t){var e=t.split("/").pop(),s=new Date;return s.getFullYear()-e}}},r=o,c=s("2877"),l=Object(c["a"])(r,i,a,!1,null,null,null);e["default"]=l.exports},fcaf:function(t){t.exports=JSON.parse('{"name":"Wing Kwan LI","sex":"M","birthday":"03/1996","workSince":"null","nickname":"Kwan","firstName":"LI","lastName":"Wing Kwan","slogan":"Life is a process of debugging, the more you hate the stronger you are","tips":"Press ctrl + p to print this resume","education":"Bachelor Of Computing","phone":"Unavailable","location":"Hong Kong","telegram":{"number":"Fingerstyle888"},"website":"https://821wkli.github.io","github":"https://github.com/821wkli","email":"wingkwanli888@gmail.com","intro":{"content":["2 years solid side project experience on building distributed system.","Involved design and implementation of cloud infrastructure, backend and frontend from scratch.","Enjoy discovering the best solution to solve complex problems.","Embrace open source community."],"technology":{"title":"技术栈和工具：","content":["scss","bootstrap","vue","gulp","node.js","angular","express","mongodb","webpack","ionic","photoshop","axure"]}},"skill":[{"name":"Css","percent":"80%"},{"name":"JavaScript","percent":"90%"},{"name":"Vue","percent":"95%"},{"name":"React","percent":"40%"},{"name":"Node.js","percent":"70%"},{"name":"Java(Android)","percent":"70%"},{"name":"Spring framework","percent":"65%"},{"name":"Python","percent":"90%"},{"name":"Flask framework","percent":"85%"},{"name":"C#","percent":"75%"},{"name":".NET Core","percent":"75%"},{"name":"Golang","percent":"65%"},{"name":"php","percent":"70%"},{"name":"Laravel","percent":"70%"}],"project":[{"time":"09/2019-11/2019","title":"Desktop Stock management Tool","intro":"Freelance","description":"Development of stock management tool dashboard","tips":[{"title":"My works","content":["Develop GUI from designed prototype.","Prepare documentations which include UML diagrams.","Write unit tests.","Implement business model.","Integrating printer SDK."]}],"technology":[{"title":"Tech stack","content":["C#",".NET framework","Entity framework","WPF","sqlite"]}]},{"time":"10/2019-03/2020","title":"Healthcare progressive web app","intro":"Freelance","description":"Development Healthcare dashboard that supports responsive solution on Tablet and Mobile screen size, both in Potrait and Landscape view","tips":[{"title":"My works","content":["Develop Page caching solution.","Develop custom splash screen.","Develop login form page.","Develop doctor appointments preview page.","Develop patient dashboard.","Develop component states exchange solution.","Develop header, footer and menu and notification component.","Implement ajax calls.","Design and Develop api signature algorithm."]}],"technology":[{"title":"Tech stack","content":["ES6","Vue","Vue-router","vuex","webpack","fetch","less"]}]},{"time":"07/2019-now","title":"yamibo manga mobile app","intro":"Freelance","description":"A cross-platform manga reader app.","tips":[{"title":"My works","content":["Develop spalsh view.","Develop home view.","Develop base components which include swiper, footer menu, lazy-loading listview.","Develop user profile.","Develop manga detail view.","Develop manga reader view.","Develop api models.","Maintenance android native Java codebase."]}],"technology":[{"title":"Tech stack","content":["Dart","flutter","Java","okhttp","retrofit","swift"]}]},{"time":"04/2019-now","title":"<a style=\'display:flex;align-items:center;\' href=\'https://github.com/821wkli/OpenAcg-PWA\'><div class=\'info\' style=\'margin-right:6px;\'>OpenAcg</div><svg width=\\"24px\\" height=\\"24px\\" style=\'display:inline-block;\'xmlns=\\"http://www.w3.org/2000/svg\\" version=\\"1.1\\"><use xmlns:xlink=\\"http://www.w3.org/1999/xlink\\" xlink:href=\\"#icon-github\\"></use></svg></a>","intro":"Personal on-growing open sourced project","description":"All-in-one progressive web app for anime enthusiast to read light novel, manga and watch TV animation.","tips":[{"title":"Everything is built from scrach","content":["Design OpenAcg system archotecture.","Design database architecture.","Design and Develop domain mdel.","Design grpc service prototype.","Develop distributed web scraping service from various websites & apps.","Integrate multiple external non-consistent raw data into standard data structure.","Develop restful apis for frontend use.","Develop auto update scheduler.","Design and implement ebook conversion algorithms to convert horizonal text layout Chinese txt, mobi, azw3, epub to Traditional Chinese ebook with vertical text layout.","Build a load-test framework, scaled cloud service provider automatically and simulate concurrent connections.","Develop in-app send to kindle ebook reader service.","Design and Develop mobile progressive web app interface.","Develop offline storage features."]}],"technology":[{"title":"Tech stack：","content":["Nginx","Python","Flask","sqlite3","Redis","Docker","grpc","Golang","Node.js","Vue.js","vue-router","vuex","vue-cli","ES6/ES7","service-worker"]}]},{"time":"4/2019-7/2019","title":"Restaurant Admin panel","intro":"Freelance","description":"Migrate bootstrap 4 + jquery web dashboard to Vue.js","tips":[{"title":"My works","content":["Refactor UI codebase in Vue template standard.","Rewrite the CRUD form and exiting route controller.","Develop componnet states controller.","Develop offline storage strategy.","Page chaching."]}],"technology":[{"title":"Tech stack","content":["ES5","fetch","Vue","Vue-router","Vuex","Vue-boostrap","webpack","service-worker"]}]}]}')}}]);