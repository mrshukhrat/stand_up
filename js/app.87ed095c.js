(function(t){function a(a){for(var i,n,l=a[0],o=a[1],c=a[2],d=0,u=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(e,n)&&e[n]&&u.push(e[n][0]),e[n]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);C&&C(a);while(u.length)u.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,a=0;a<r.length;a++){for(var s=r[a],i=!0,n=1;n<s.length;n++){var o=s[n];0!==e[o]&&(i=!1)}i&&(r.splice(a--,1),t=l(l.s=s[0]))}return t}var i={},e={app:0},r=[];function n(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"dbafa243"}[t]+".js"}function l(a){if(i[a])return i[a].exports;var s=i[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.e=function(t){var a=[],s=e[t];if(0!==s)if(s)a.push(s[2]);else{var i=new Promise((function(a,i){s=e[t]=[a,i]}));a.push(s[2]=i);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.src=n(t);var c=new Error;r=function(a){o.onerror=o.onload=null,clearTimeout(d);var s=e[t];if(0!==s){if(s){var i=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",c.name="ChunkLoadError",c.type=i,c.request=r,s[1](c)}e[t]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:o})}),12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(a)},l.m=t,l.c=i,l.d=function(t,a,s){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)l.d(s,i,function(a){return t[a]}.bind(null,i));return s},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/",l.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=a,o=o.slice();for(var d=0;d<o.length;d++)a(o[d]);var C=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"0d53":function(t,a){t.exports="data:image/png;base64,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"},"1ae4":function(t,a,s){t.exports=s.p+"img/logo.ce38c115.svg"},"56d7":function(t,a,s){"use strict";s.r(a);var i=s("2b0e"),e=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"app"}},[a("Sidebar"),a("router-view")],1)},r=[],n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"main_sidebar",class:{active:t.$store.state.is_active}},[a("div",{staticClass:"sidebars"},[a("div",[a("button",{staticClass:"exit_btn",on:{click:function(a){t.$store.state.is_active=!1}}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",viewBox:"0 0 13 13",fill:"none"}},[a("path",{attrs:{d:"M1.00059 12.6672C0.802841 12.6671 0.609825 12.6085 0.445415 12.4986C0.281006 12.3887 0.152921 12.2326 0.0772513 12.0499C0.0015813 11.8672 -0.0184451 11.6661 0.0201224 11.4722C0.05869 11.2782 0.15375 11.1001 0.29356 10.9602L10.9596 0.293213C11.1471 0.105572 11.4018 9.38308e-05 11.6671 6.26009e-08C11.9324 -9.37056e-05 12.1865 0.105156 12.3741 0.292664C12.5618 0.480172 12.6675 0.734547 12.6676 0.999817C12.6677 1.26509 12.5621 1.51957 12.3746 1.70721L1.7086 12.3742C1.61564 12.4672 1.50538 12.5409 1.38389 12.5912C1.2624 12.6415 1.13207 12.6673 1.00059 12.6672Z",fill:"white"}}),a("path",{attrs:{d:"M11.6655 12.6672C11.4003 12.6671 11.146 12.5618 10.9585 12.3742L0.292481 1.70721C0.199636 1.6143 0.126394 1.504 0.0761719 1.38263C0.0259499 1.26126 -4.63672e-05 1.13117 6.20821e-08 0.999817C4.64914e-05 0.868468 0.0258642 0.738459 0.0761719 0.617127C0.12648 0.495794 0.200059 0.385508 0.292969 0.292664C0.385879 0.199819 0.496308 0.126211 0.617676 0.0759888C0.739044 0.0257668 0.86914 -4.63668e-05 1.00049 6.25216e-08C1.13184 4.64918e-05 1.26197 0.0259252 1.3833 0.076233C1.50463 0.126541 1.61468 0.200303 1.70752 0.293213L12.3735 10.9602C12.5134 11.1001 12.6089 11.2784 12.6475 11.4724C12.686 11.6665 12.6661 11.8676 12.5903 12.0503C12.5145 12.233 12.3862 12.3892 12.2217 12.499C12.0571 12.6088 11.8634 12.6673 11.6655 12.6672Z",fill:"white"}})])])]),a("div",{staticClass:"side_menus"},[a("router-link",{attrs:{to:"/"},nativeOn:{click:function(a){t.$store.state.is_active=!1}}},[a("div",[t._v(" tadbirlar ")])]),a("router-link",{attrs:{to:"/comics"},nativeOn:{click:function(a){t.$store.state.is_active=!1}}},[a("div",[t._v(" komiklar ")])]),a("router-link",{attrs:{to:"/menu"},nativeOn:{click:function(a){t.$store.state.is_active=!1}}},[a("div",[t._v(" Menu ")])]),a("router-link",{attrs:{to:"/bar"},nativeOn:{click:function(a){t.$store.state.is_active=!1}}},[a("div",[t._v(" Bar ")])]),a("router-link",{attrs:{to:"/galery"},nativeOn:{click:function(a){t.$store.state.is_active=!1}}},[a("div",[t._v(" Galereya ")])])],1)])])},l=[],o=s("2877"),c={},d=Object(o["a"])(c,n,l,!1,null,null,null),C=d.exports,u={components:{Sidebar:C}},v=u,f=Object(o["a"])(v,e,r,!1,null,null,null),p=f.exports,h=s("9483");Object(h["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var m=s("8c4f"),g=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"home"},[a("div",{staticClass:"header"},[a("Navbar"),t._m(0),a("div",{staticClass:"carusel_crad container"},[a("VueSlickCarousel",t._b({},"VueSlickCarousel",t.settings,!1),t._l(5,(function(i){return a("div",{key:i,staticClass:"carusel_crad_f",class:{actives:2==i}},[a("div",{staticClass:"header_card"},[a("div",{staticClass:"carusel_crad_img"},[a("img",{attrs:{src:s("a497"),alt:""}})]),a("div",{staticClass:"carusel_crad_name"},[t._v(" Nastya venevitina ")]),a("div",{staticClass:"carusel_crad_about"},[a("div",{staticClass:"carusel_crad_title"},[t._v(" solnik ")]),a("div",{staticClass:"carusel_crad_desc"},[t._v(" Mirshakar Fayzulloyev MALADES nomli konsert dasturi yana sahnada, agarda siz bu konsertni jonli ko'rmagan bo'lsangiz, yana bir imkonni qo’ldan boy bermang. ")])]),a("div",{staticClass:"carusel_crad_main_price"},[a("div",{staticClass:"carusel_crad_price"},[a("div",[t._v("narxi:")]),a("div",[t._v("150 000 - 450 000")])]),a("div",{staticClass:"carusel_crad_price"},[a("div",[t._v("Tadbir sanasi::")]),a("div",[t._v("11 noyabr 2023 - 19:30")])])]),a("div",{staticClass:"carusel_crad_btn"},[a("a",{attrs:{href:"#"}},[a("div",{staticClass:"carusel_crad_btn_child"},[t._v(" sold out ")])])])])])})),0)],1)],1)]),a("section",{staticClass:"event_header"},[a("div",{staticClass:"container"},[t._m(1),a("div",{staticClass:"row"},t._l(8,(function(s){return a("div",{key:s,staticClass:"col-xl-3"},[t._m(2,!0)])})),0),a("div",{staticClass:"mere_btn_f"},[a("button",{staticClass:"more_events"},[a("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M28.4998 3C27.6707 3 26.9998 3.6717 26.9998 4.5V6.00525C24.2146 2.29965 19.7975 0 14.9998 0C7.94664 0 1.93044 4.79805 0.370435 11.6674C0.187285 12.4754 0.694135 13.2795 1.50128 13.4626C1.61408 13.4883 1.72538 13.5 1.83518 13.5C2.51933 13.5 3.13884 13.0282 3.29709 12.3326C4.54374 6.8379 9.35723 3 14.9998 3C19.3267 3 23.2522 5.34825 25.3712 9H22.4998C21.6707 9 20.9998 9.6717 20.9998 10.5C20.9998 11.3283 21.6707 12 22.4998 12H28.4998C29.3288 12 29.9998 11.3283 29.9998 10.5V4.5C29.9998 3.6717 29.3288 3 28.4998 3Z",fill:"white"}}),a("path",{attrs:{d:"M1.5 27C2.32905 27 3 26.3283 3 25.5V23.9622C5.8002 27.7275 10.1823 30 15 30C22.0532 30 28.0694 25.202 29.6294 18.3326C29.8125 17.5247 29.3057 16.7205 28.4985 16.5374C27.6827 16.3491 26.8857 16.8596 26.7026 17.6675C25.4561 23.1621 20.6426 27 15 27C10.6716 27 6.783 24.7088 4.63785 21H7.5C8.32905 21 9 20.3283 9 19.5C9 18.6717 8.32905 18 7.5 18H1.5C0.67095 18 0 18.6717 0 19.5V25.5C0 26.3283 0.67095 27 1.5 27Z",fill:"white"}})]),t._v(" Koproq ")])])])]),t._m(3),a("section",{staticClass:"about_section"},[t._m(4),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-3"},[a("div",{staticClass:"about_address_f"},[a("div",[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 50 50",fill:"none"}},[a("g",{attrs:{"clip-path":"url(#clip0_1_264)"}},[a("path",{attrs:{d:"M25.0008 14.7615C21.4173 14.7615 18.5078 17.6695 18.5078 21.2525C18.5078 24.845 21.4178 27.7445 25.0008 27.7445C28.5893 27.7445 31.4928 24.845 31.4928 21.2525C31.4928 17.6695 28.5893 14.7615 25.0008 14.7615Z",fill:"#E61A1B"}}),a("path",{attrs:{d:"M25 0C11.193 0 0 11.193 0 25C0 38.807 11.193 50 25 50C38.807 50 50 38.807 50 25C50 11.193 38.807 0 25 0ZM33.2475 27.5925C25.0005 39.145 25.0005 39.145 25.0005 39.145C25.0005 39.145 25.0005 39.145 16.754 27.594C15.4715 25.793 14.5995 23.65 14.5995 21.253C14.5995 15.5155 19.2595 10.8555 25.0005 10.8555C30.747 10.8555 35.4 15.5155 35.4 21.253C35.4 23.6435 34.5295 25.7925 33.2475 27.5925Z",fill:"#E61A1B"}})]),a("defs",[a("clipPath",{attrs:{id:"clip0_1_264"}},[a("rect",{attrs:{width:"50",height:"50",fill:"white"}})])])])]),t._m(5)])]),a("div",{staticClass:"col-xl-3"},[a("div",{staticClass:"about_address_f"},[a("div",[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 50 50",fill:"none"}},[a("path",{attrs:{d:"M25 50C38.7851 50 50 38.7851 50 25C50 11.2149 38.7851 0 25 0C11.2149 0 0 11.2149 0 25C0 38.7851 11.2149 50 25 50ZM25 3.03442C37.111 3.03442 46.9649 12.8877 46.9649 24.9994C46.9649 37.1104 37.111 46.9643 25 46.9643C12.889 46.9643 3.03506 37.1104 3.03506 24.9994C3.03506 12.8877 12.889 3.03442 25 3.03442Z",fill:"#E61A1B"}}),a("path",{attrs:{d:"M25 45.0162C36.0377 45.0162 45.0169 36.037 45.0169 24.9994C45.0169 13.9617 36.0377 4.98247 25 4.98247C13.9624 4.98247 4.98313 13.9617 4.98313 24.9994C4.98313 36.037 13.9624 45.0162 25 45.0162ZM16.2318 30.776L22.7513 25.5481C22.7078 25.3714 22.6786 25.1896 22.6786 25C22.6786 24.0701 23.2318 23.2721 24.0227 22.9019V8.39805C24.0227 7.85974 24.4591 7.42403 24.9968 7.42403C25.5344 7.42403 25.9708 7.85974 25.9708 8.39805V22.8987C26.765 23.2675 27.3202 24.0675 27.3202 24.9994C27.3202 26.2792 26.2786 27.3195 24.9994 27.3195C24.6279 27.3195 24.2812 27.2234 23.9695 27.0675L17.45 32.2948C17.2701 32.4396 17.0552 32.5091 16.8409 32.5091C16.5559 32.5091 16.2727 32.3844 16.0805 32.1442C15.7448 31.7247 15.8124 31.1117 16.2318 30.776Z",fill:"#E61A1B"}})])]),t._m(6)])]),a("div",{staticClass:"col-xl-3"},[a("div",{staticClass:"about_address_f"},[a("div",[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 50 50",fill:"none"}},[a("path",{attrs:{d:"M42.675 7.31967C32.9105 -2.44196 17.0813 -2.43961 7.31967 7.32504C-2.44196 17.0897 -2.43961 32.9188 7.32504 42.6804C17.0897 52.442 32.9188 52.4397 42.6804 42.675C47.3685 37.9855 50.0015 31.6256 50 24.9947C49.9987 18.3648 47.3638 12.007 42.675 7.31967ZM37.8617 34.8247C37.8606 34.8258 37.8595 34.827 37.8583 34.8281V34.8198L36.5916 36.0781C34.9535 37.7369 32.5676 38.4195 30.2999 37.8781C28.0153 37.2665 25.8434 36.2931 23.8666 34.9948C22.0301 33.821 20.3282 32.449 18.7916 30.9031C17.3779 29.4996 16.1078 27.9586 14.9999 26.3031C13.7882 24.5216 12.8291 22.581 12.1499 20.5364C11.3713 18.1344 12.0165 15.4988 13.8166 13.7281L15.2999 12.2448C15.7123 11.8305 16.3825 11.829 16.7966 12.2414C16.7977 12.2425 16.7989 12.2436 16.7999 12.2448L21.4832 16.9281C21.8975 17.3405 21.899 18.0106 21.4866 18.4247C21.4855 18.4258 21.4844 18.4269 21.4832 18.4281L18.7332 21.1781C17.9442 21.9585 17.845 23.1988 18.4999 24.0948C19.4946 25.4598 20.5953 26.7443 21.7916 27.9365C23.1255 29.2761 24.5756 30.4948 26.1249 31.5782C27.0202 32.2026 28.2338 32.0973 29.0082 31.3282L31.6665 28.6282C32.0789 28.2139 32.7491 28.2124 33.1632 28.6248C33.1643 28.6259 33.1654 28.627 33.1665 28.6282L37.8582 33.3282C38.2726 33.7405 38.2741 34.4105 37.8617 34.8247Z",fill:"#E61A1B"}})])]),t._m(7)])]),a("div",{staticClass:"col-xl-3"},[a("div",{staticClass:"about_address_f"},[a("div",[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 50 50",fill:"none"}},[a("path",{attrs:{d:"M25 50C38.8104 50 50 38.8104 50 25C50 11.1896 38.8104 0 25 0C11.1896 0 0 11.1896 0 25C0 38.8104 11.1896 50 25 50ZM11.4396 24.4583L35.5438 15.1646C36.6625 14.7604 37.6396 15.4375 37.2771 17.1292L37.2792 17.1271L33.175 36.4625C32.8708 37.8333 32.0562 38.1667 30.9167 37.5208L24.6667 32.9146L21.6521 35.8187C21.3187 36.1521 21.0375 36.4333 20.3917 36.4333L20.8354 30.0729L32.4187 19.6083C32.9229 19.1646 32.3062 18.9146 31.6417 19.3563L17.3271 28.3687L11.1562 26.4437C9.81667 26.0187 9.7875 25.1042 11.4396 24.4583Z",fill:"#E61A1B"}})])]),t._m(8)])])]),t._m(9)])]),t._m(10),a("Footer")],1)},_=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"nav_section"},[a("div",{staticClass:"dark_header"})])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"events"},[a("div",{staticClass:"events_title"},[t._v("tadbirlar")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"header_card event_card"},[a("div",{staticClass:"carusel_crad_img"},[a("img",{attrs:{src:s("a497"),alt:""}})]),a("div",{staticClass:"carusel_crad_name"},[t._v(" Nastya venevitina ")]),a("div",{staticClass:"carusel_crad_about"},[a("div",{staticClass:"carusel_crad_title"},[t._v(" solnik ")]),a("div",{staticClass:"carusel_crad_desc"},[t._v(" Mirshakar Fayzulloyev MALADES nomli konsert dasturi yana sahnada, agarda siz bu konsertni jonli ko'rmagan bo'lsangiz, yana bir imkonni qo’ldan boy bermang. ")])]),a("div",{staticClass:"carusel_crad_main_price"},[a("div",{staticClass:"carusel_crad_price"},[a("div",[t._v("narxi:")]),a("div",[t._v("150 000 - 450 000")])]),a("div",{staticClass:"carusel_crad_price"},[a("div",[t._v("Tadbir sanasi::")]),a("div",[t._v("11 noyabr 2023 - 19:30")])])]),a("div",{staticClass:"carusel_crad_btn"},[a("a",{attrs:{href:"#"}},[a("div",{staticClass:"carusel_crad_btn_child"},[t._v(" sold out ")])])])])},function(){var t=this,a=t._self._c;return a("section",{staticClass:"insta_messenger"},[a("div",{staticClass:"container"},[a("div",{staticClass:"events"},[a("div",{staticClass:"events_title"},[t._v("Biz INSTAGRAMDA")])]),a("div",{staticClass:"insta_contents"},[a("iframe",{attrs:{src:"https://5b6ce0850cc04ecdb5ad2f950429a973.elf.site",name:"myIFrame",width:"100%",height:"658px"}})])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"about_border"},[a("div",{staticClass:"container"},[a("div",{staticClass:"events"},[a("div",{staticClass:"events_title"},[t._v("Biz haqimizda")])]),a("div",{staticClass:"about_desc"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])])])},function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"about_address"},[t._v("manzil:")]),a("div",{staticClass:"about_address_desc"},[t._v("Toshkent, Yunusobod 4-kvartal, 28A ")])])},function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"about_address"},[t._v("Ish vaqti:")]),a("div",{staticClass:"about_address_desc"},[t._v("dushanba-payshanba: 15:00 - 00:00 juma-yakshanba: 15:00 - 02:00 ")])])},function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"about_address"},[t._v("Telefon:")]),a("div",{staticClass:"about_address_desc"},[t._v(" +998974344466 ")])])},function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"about_address"},[t._v("Tadbirlar bo'yicha savollar va takliflarni")]),a("div",{staticClass:"about_address_desc"},[t._v("t.me/sahnastandup_bot")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"about_maps"},[a("iframe",{staticStyle:{border:"0","margin-top":"30px"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2166.218806398607!2d69.28380723624899!3d41.36398181362152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8dc2138543b5%3A0x9ced870d01b40be5!2sSahna%20Stand%20Up%20Club!5e0!3m2!1suz!2s!4v1702049978652!5m2!1suz!2s",width:"100%",height:"500px",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})])},function(){var t=this,a=t._self._c;return a("section",{staticClass:"contracts"},[a("div",{staticClass:"container"},[a("div",{staticClass:"events"},[a("div",{staticClass:"events_title"},[t._v("hamkorlar")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("img",{attrs:{src:s("5a92"),alt:""}})]),a("div",{staticClass:"col"},[a("img",{attrs:{src:s("5a92"),alt:""}})]),a("div",{staticClass:"col"},[a("img",{attrs:{src:s("0d53"),alt:""}})]),a("div",{staticClass:"col"},[a("img",{attrs:{src:s("f855"),alt:""}})]),a("div",{staticClass:"col"},[a("img",{attrs:{src:s("fac4"),alt:""}})])])])])}],b=s("d178"),w=s("a7ab"),A=s.n(w),x=(s("7b8d"),s("6a2c"),s("fd2d")),L={components:{Footer:x["a"],Navbar:b["a"],VueSlickCarousel:A.a},data(){return{settings:{dots:!0,focusOnSelect:!1,infinite:!1,speed:500,slidesToShow:3,slidesToScroll:1,arrows:!1,responsive:[{breakpoint:1326,settings:{slidesToShow:2,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:800,settings:{slidesToShow:1,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},sliderPageIndex:0}},methods:{afterPageChange(t){console.log(t,"hello"),this.sliderPageIndex=t}},mounted(){this.afterPageChange()}},M=L,y=Object(o["a"])(M,g,_,!1,null,null,null),S=y.exports;i["default"].use(m["a"]);const k=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:()=>s.e("about").then(s.bind(null,"f820"))},{path:"/comics",name:"Comic",component:()=>s.e("about").then(s.bind(null,"c5c0"))},{path:"/comics/:id",name:"Comic Single",component:()=>s.e("about").then(s.bind(null,"b701"))},{path:"/menu",name:"Menu",component:()=>s.e("about").then(s.bind(null,"3452"))},{path:"/bar",name:"Bar",component:()=>s.e("about").then(s.bind(null,"db48"))},{path:"/galery",name:"Galery",component:()=>s.e("about").then(s.bind(null,"cf41"))}],T=new m["a"]({mode:"history",base:"/",routes:k});var j=T,O=s("2f62");i["default"].use(O["a"]);var N=new O["a"].Store({state:{is_active:!1,is_active_image:!1},mutations:{},actions:{},modules:{}}),Y=s("5f5b"),B=s("b1e0");s("f9e3"),s("2dd8"),s("6672");i["default"].use(Y["a"]),i["default"].use(B["a"]),i["default"].config.productionTip=!1,new i["default"]({router:j,store:N,render:t=>t(p)}).$mount("#app")},"5a92":function(t,a,s){t.exports=s.p+"img/image19.fc572df1.png"},"5b45":function(t,a,s){t.exports=s.p+"img/image_footer.2de9cf19.png"},6672:function(t,a,s){},a497:function(t,a,s){t.exports=s.p+"img/img1.3109615c.png"},d178:function(t,a,s){"use strict";var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("div",{staticClass:"main_nav"},[a("div",{staticClass:"humburger"},[a("button",{on:{click:function(a){t.$store.state.is_active=!0}}},[a("svg",{attrs:{width:"30",height:"20",viewBox:"0 0 30 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M23.2192 11.6828H6.77485C6.43159 11.6828 6.10223 11.5521 5.85951 11.3194C5.61678 11.0867 5.48047 10.7712 5.48047 10.4421C5.48047 10.113 5.61678 9.79725 5.85951 9.56456C6.10223 9.33186 6.43159 9.20117 6.77485 9.20117H23.2192C23.5625 9.20117 23.8918 9.33186 24.1345 9.56456C24.3773 9.79725 24.5136 10.113 24.5136 10.4421C24.5136 10.7712 24.3773 11.0867 24.1345 11.3194C23.8918 11.5521 23.5625 11.6828 23.2192 11.6828Z",fill:"white"}}),a("path",{attrs:{d:"M28.7059 20.0002H1.29438C0.951121 20.0002 0.621999 19.8695 0.379276 19.6368C0.136554 19.4041 0 19.0886 0 18.7595C0 18.4304 0.136554 18.1146 0.379276 17.8819C0.621999 17.6492 0.951121 17.5186 1.29438 17.5186H28.7059C29.0491 17.5186 29.3782 17.6492 29.621 17.8819C29.8637 18.1146 30 18.4304 30 18.7595C30 19.0886 29.8637 19.4041 29.621 19.6368C29.3782 19.8695 29.0491 20.0002 28.7059 20.0002Z",fill:"white"}}),a("path",{attrs:{d:"M28.7059 2.48163H1.29438C0.951121 2.48163 0.621999 2.35094 0.379276 2.11825C0.136554 1.88555 0 1.57002 0 1.24093C0 0.911843 0.136554 0.596083 0.379276 0.363384C0.621999 0.130685 0.951121 0 1.29438 0H28.7059C29.0491 0 29.3782 0.130685 29.621 0.363384C29.8637 0.596083 30 0.911843 30 1.24093C30 1.57002 29.8637 1.88555 29.621 2.11825C29.3782 2.35094 29.0491 2.48163 28.7059 2.48163Z",fill:"white"}})])])]),t._m(0),a("div",{staticClass:"messenger"},[a("div",{staticClass:"telegram"},[a("a",{attrs:{href:"#"}},[a("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M15 30C23.2863 30 30 23.2863 30 15C30 6.71375 23.2863 0 15 0C6.71375 0 0 6.71375 0 15C0 23.2863 6.71375 30 15 30ZM6.86375 14.675L21.3263 9.09875C21.9975 8.85625 22.5837 9.2625 22.3662 10.2775L22.3675 10.2762L19.905 21.8775C19.7225 22.7 19.2337 22.9 18.55 22.5125L14.8 19.7487L12.9912 21.4913C12.7912 21.6913 12.6225 21.86 12.235 21.86L12.5013 18.0438L19.4513 11.765C19.7538 11.4987 19.3838 11.3488 18.985 11.6138L10.3963 17.0212L6.69375 15.8663C5.89 15.6113 5.8725 15.0625 6.86375 14.675Z",fill:"#fff"}})])])]),a("div",[a("a",{attrs:{href:"#"}},[a("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("g",{attrs:{"clip-path":"url(#clip0_1_182)"}},[a("path",{attrs:{d:"M15 18.0762C16.6989 18.0762 18.0762 16.6989 18.0762 15C18.0762 13.3011 16.6989 11.9238 15 11.9238C13.3011 11.9238 11.9238 13.3011 11.9238 15C11.9238 16.6989 13.3011 18.0762 15 18.0762Z",fill:"white"}}),a("path",{attrs:{d:"M15 0.351562C6.9099 0.351562 0.351562 6.9099 0.351562 15C0.351562 23.0901 6.9099 29.6484 15 29.6484C23.0901 29.6484 29.6484 23.0901 29.6484 15C29.6484 6.9099 23.0901 0.351562 15 0.351562ZM24.0503 18.723C23.98 20.1157 23.5886 21.489 22.5737 22.4931C21.549 23.5068 20.1691 23.8845 18.7631 23.9541H11.237C9.83074 23.8845 8.45109 23.5071 7.42635 22.4931C6.41139 21.489 6.0201 20.1157 5.94979 18.723V11.277C6.0201 9.8843 6.41145 8.51098 7.42635 7.5068C8.45109 6.49312 9.83092 6.11543 11.237 6.04588H18.763C20.1693 6.11543 21.5489 6.49295 22.5737 7.5068C23.5886 8.51098 23.9799 9.8843 24.0502 11.277L24.0503 18.723Z",fill:"white"}}),a("path",{attrs:{d:"M18.6677 7.74229C16.8345 7.69202 13.1654 7.69202 11.3322 7.74229C10.3783 7.76849 9.29679 8.00597 8.6171 8.73194C7.91081 9.48657 7.64392 10.3983 7.61685 11.4182C7.56927 13.2084 7.61685 18.5814 7.61685 18.5814C7.64785 19.6013 7.91081 20.5131 8.6171 21.2677C9.29679 21.9939 10.3783 22.2312 11.3322 22.2574C13.1654 22.3076 16.8345 22.3076 18.6677 22.2574C19.6217 22.2312 20.7031 21.9937 21.3828 21.2677C22.0891 20.5131 22.356 19.6014 22.3831 18.5814V11.4182C22.356 10.3983 22.0891 9.48657 21.3828 8.73194C20.7029 8.00573 19.6214 7.76849 18.6677 7.74229ZM14.9997 19.7679C14.0567 19.7679 13.1348 19.4883 12.3507 18.9643C11.5666 18.4404 10.9555 17.6957 10.5946 16.8245C10.2337 15.9532 10.1393 14.9945 10.3233 14.0696C10.5072 13.1447 10.9614 12.2951 11.6282 11.6283C12.295 10.9615 13.1446 10.5074 14.0695 10.3234C14.9944 10.1394 15.9531 10.2338 16.8244 10.5947C17.6956 10.9556 18.4403 11.5667 18.9642 12.3508C19.4881 13.1349 19.7678 14.0568 19.7678 14.9998C19.7678 16.2644 19.2654 17.4772 18.3713 18.3714C17.4771 19.2656 16.2643 19.7679 14.9997 19.7679ZM19.7881 11.216C19.5995 11.2159 19.4151 11.16 19.2583 11.0551C19.1015 10.9503 18.9793 10.8014 18.9072 10.6271C18.8351 10.4529 18.8162 10.2611 18.853 10.0762C18.8899 9.8912 18.9807 9.72131 19.1141 9.58796C19.2474 9.45462 19.4174 9.36382 19.6023 9.32705C19.7873 9.29027 19.979 9.30917 20.1533 9.38135C20.3275 9.45354 20.4764 9.57576 20.5812 9.73258C20.686 9.88939 20.7419 10.0738 20.7419 10.2624C20.7419 10.3876 20.7172 10.5116 20.6693 10.6273C20.6214 10.7431 20.5511 10.8482 20.4625 10.9367C20.3739 11.0253 20.2688 11.0955 20.1531 11.1434C20.0373 11.1914 19.9133 11.216 19.7881 11.216Z",fill:"white"}})]),a("defs",[a("clipPath",{attrs:{id:"clip0_1_182"}},[a("rect",{attrs:{width:"30",height:"30",fill:"white"}})])])])])])])])])},e=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"logo_img"},[a("img",{attrs:{src:s("1ae4"),alt:""}})])}],r=s("2877"),n={},l=Object(r["a"])(n,i,e,!1,null,null,null);a["a"]=l.exports},f855:function(t,a,s){t.exports=s.p+"img/image21.0c5a6e3f.png"},fac4:function(t,a,s){t.exports=s.p+"img/image22.dd826326.png"},fd2d:function(t,a,s){"use strict";var i=function(){var t=this;t._self._c;return t._m(0)},e=[function(){var t=this,a=t._self._c;return a("div",[a("footer",{staticClass:"m_footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"footer_text"},[a("div",[a("div",{staticClass:"f_title"},[t._v("©2023 "),a("span",[t._v("Sahna.uz")])]),a("div",{staticClass:"f_desk"},[t._v("Barcha huquqlar himoyalangan")])]),a("div",{staticClass:"f_center"},[t._v(" MAZZA QILING! ")]),a("div",[a("img",{attrs:{src:s("5b45"),alt:""}})])])])])])}],r=s("2877"),n={},l=Object(r["a"])(n,i,e,!1,null,null,null);a["a"]=l.exports}});
//# sourceMappingURL=app.87ed095c.js.map