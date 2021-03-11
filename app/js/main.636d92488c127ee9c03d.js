(()=>{var t={353:t=>{t.exports='<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <meta name="viewport" content="width=device-width,initial-scale=1"/> <title>Weather forecast</title> </head> <body> <div class="wrapper"> <div class="weather_title">Weather forecast</div> <div class="weather_btn-wrapper"> <input type="text" name="" id="search" placeholder="Search city"/> <button id="search-btn">Search</button> </div> <div class="weather" id="root"></div> <div class="pollution_map" id="pollution"></div> </div> <div class="modal" id="modal"> <div class="modal_content"><div class="modal_content-close">&#10006</div></div> </div> </body> </html> '},248:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof m?e:m,o=Object.create(a.prototype),i=new j(r||[]);return o._invoke=function(t,e,n){var r=l;return function(a,o){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===a)throw o;return q()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=d(t,e,n);if("normal"===s.type){if(r=n.done?h:f,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=h,n.method="throw",n.arg=s.arg)}}}(t,n,i),o}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l="suspendedStart",f="suspendedYield",p="executing",h="completed",v={};function m(){}function g(){}function y(){}var w={};w[o]=function(){return this};var _=Object.getPrototypeOf,b=_&&_(_(R([])));b&&b!==n&&r.call(b,o)&&(w=b);var x=y.prototype=m.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(a,o,i,c){var s=d(t[a],t,o);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(l).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}var a;this._invoke=function(t,r){function o(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(o,o):o()}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=d(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var o=a.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function R(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:q}}function q(){return{value:e,done:!0}}return g.prototype=x.constructor=y,y.constructor=g,g.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(k.prototype),k.prototype[i]=function(){return this},t.AsyncIterator=k,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new k(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(x),s(x,c,"Generator"),x[o]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=R,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return c.type="throw",c.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;S(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:R(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.p="",(()=>{"use strict";n(353),n(248);const t=n.p+"./img/humidity.c3a75f6a859f4ceb637aa31bdf203f51.png",e=n.p+"./img/thermometer.fd7cd545f8739e1f6ab91b8d5d616b7e.png",r=n.p+"./img/wind.7f390bee5d15a3cc603551660fff4d92.png",a=n.p+"./img/visibility.60c9c0631e46eca415425b95cf9238d1.png",o=n.p+"./img/cloud.a0337210c2d1153649bdd69e5f3fa017.png",i=n.p+"./img/rain.188ad4565f3061e8b66d8293d2d7d029.png",c=n.p+"./img/snow.9402146611ada322ab2fb83d61366b6e.png",s=n.p+"./img/sun.ed6e9ae80febb878317725a19c6b672f.png",u=n.p+"./img/thunderstorm.8961ef8b5413a6009ee48b5c2af9232b.png",d=n.p+"./img/cloudy_min.4e576b6ae65e5241cf095e9e111e6e40.png",l=n.p+"./img/rain_min.7f1636d2a86c64b0ee277b387cbfa1c7.png",f=n.p+"./img/snow_min.9527615882807aad411a9c89105e7d40.png",p=n.p+"./img/sun_min.ad85b0066b3ab4b94c23362ebb5301c1.png",h=n.p+"./img/weather_min.b56750dd5fb4880d0044ac7eaf7d2871.png";const v=function(t,e){return"ясно"==t||"небольшая облачность"==t?e?p:s:"снег"==t||"сильный снег"==t||"небольшой снег"==t?e?f:c:"пасмурно"==t||"переменная облачность"==t||"облачно с прояснениями"==t?e?d:o:"дождь"==t?e?h:i:"гроза"==t?e?l:u:e?d:o};var m="/weather",g="195464f1d38e5a863401fc4f0ed00086",y=document.querySelector("#root"),w=document.querySelector("#search"),_=document.querySelector("#search-btn"),b=document.querySelector("#modal"),x=document.querySelector(".modal_content");document.querySelector("#pollution"),document.querySelector(".weather_card");function L(t,e,n,r,a,o,i){try{var c=t[o](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,a)}const k=function(){var t,e=(t=regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="http://api.openweathermap.org/data/2.5".concat(n,"?q=").concat(e,",RU&appid=").concat(g,"&lang=RU"),t.prev=1,t.abrupt("return",fetch(r).then((function(t){return t.json()})).then((function(t){return t})));case 5:t.prev=5,t.t0=t.catch(1),console.log("eroro",t.t0);case 8:case"end":return t.stop()}}),t,null,[[1,5]])})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){L(o,r,a,i,c,"next",t)}function c(t){L(o,r,a,i,c,"throw",t)}i(void 0)}))});return function(t,n){return e.apply(this,arguments)}}();const E=function(t){if(t){var e='\n    <div class="error">\n      '.concat(t,"\n    </div>\n    ");return root.insertAdjacentHTML("beforebegin",e)}};function P(t,e,n,r,a,o,i){try{var c=t[o](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,a)}const S=function(){var t,n=(t=regeneratorRuntime.mark((function t(n){var r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(n,"/forecast");case 2:r=t.sent,a="",console.log(r),console.log(r.list),r.list.forEach((function(t){var n=t.dt_txt,r=(t.visibility,t.weather[0]),o=(t.wind.speed,t.main.temp),i=r.description;a='\n      <div class="weekly_cards">\n        <div class="weekly_cards-item title">'.concat(n.slice(0,16),'</div>\n        <div class="weekly_cards-item desc">\n        <img class="weekly_cards-item_img" src="').concat(v(i,!0),'">\n        </div>\n        <div class="weekly_cards-item_wrapper">\n          <img class="weekly_cards-item_img" src="').concat(e,'">\n          <span class="weekly_cards-item temp">').concat(Math.round(o-273.15),"°C</span>\n        </div>\n      </div>\n    "),x.insertAdjacentHTML("beforeend",a)}));case 7:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){P(o,r,a,i,c,"next",t)}function c(t){P(o,r,a,i,c,"throw",t)}i(void 0)}))});return function(t){return n.apply(this,arguments)}}();function j(t,e,n,r,a,o,i){try{var c=t[o](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,a)}const R=function(){var t,e=(t=regeneratorRuntime.mark((function t(e,n,r){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="http://api.openweathermap.org/data/2.5".concat(r,"?lat=").concat(n,"&lon=").concat(e,"&appid=").concat(g,"&lang=RU"),t.prev=1,t.abrupt("return",fetch(a).then((function(t){return t.json()})).then((function(t){return t})));case 5:t.prev=5,t.t0=t.catch(1),console.log("eroro",t.t0);case 8:case"end":return t.stop()}}),t,null,[[1,5]])})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){j(o,r,a,i,c,"next",t)}function c(t){j(o,r,a,i,c,"throw",t)}i(void 0)}))});return function(t,n,r){return e.apply(this,arguments)}}();function q(t,e,n,r,a,o,i){try{var c=t[o](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,a)}const O=function(){var t,e=(t=regeneratorRuntime.mark((function t(e,n,r){var a,o,i,c,s,u,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R(e,n,"/air_pollution");case 2:return a=t.sent,o=a.list[0],i=o.main.aqi,c=o.components,s=c.co,c.nh3,c.no,c.no2,c.o3,c.pm2_5,c.pm10,c.so2,console.log(s),u=function(t){return 1==t?"normal":2==t?"mid":3==t?"high":t>=4?"very_high":void 0},d='\n    <div class="progress_wrapper">\n      <div class="progress_text">Индекс качества воздуха: <span>'.concat(i,'</span> </div>\n        <div class="progress_bar"><div class="progress_bar-line ').concat(u(i),'">\n        </div>\n      </div>\n    </div>\n  '),t.abrupt("return",d);case 10:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){q(o,r,a,i,c,"next",t)}function c(t){q(o,r,a,i,c,"throw",t)}i(void 0)}))});return function(t,n,r){return e.apply(this,arguments)}}();function T(t,e,n,r,a,o,i){try{var c=t[o](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,a)}const M=function(){var n,o=(n=regeneratorRuntime.mark((function n(){var o,i,c,s,u,d,l,f,p,h,g,w,_,x,L,P,j,R=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=R.length>0&&void 0!==R[0]?R[0]:"Ufa",n.next=3,k(o,m);case 3:if(i=n.sent,console.log(i),404!=i.cod){n.next=8;break}return E(i.message),n.abrupt("return",!1);case 8:return c=i.name,s=i.visibility,u=i.id,d=i.wind.speed,l=i.weather[0],f=i.main,p=f.feels_like,h=f.humidity,g=f.temp,f.temp_max,f.temp_min,(w=i.sys).sunrise,w.sunset,_=i.coord,x=_.lon,L=_.lat,P=l.description,n.t0="\n  <div class='weather_card' data-name=".concat(c,'>\n    <div class="weather_card-header">\n      <div class="weather_card-close" data-id=').concat(u,">&#10006</div>\n      <div class='weather_card-header_img'>\n        <img src=\"").concat(v(P,!1),'" alt="">\n      </div>\n      <div class=\'weather_card-header_city\'>').concat(c,"</div>\n      <div class='weather_card-header_desc'>").concat(P,"</div>\n      <div class='weather_card-temperature'>").concat(Math.round(g-273.15),"°C</div>\n    </div>\n    <div class=\"weather_card-footer\">\n\n      <div class='weather_card-footer_parametr'>\n        <div class='weather_card-footer_parametr-icon'>\n          <img src=\"").concat(t,'" alt="">\n        </div>\n        <div class=\'weather_card-footer_parametr-title\'>\n          <span>Влажность:</span>\n          <span>').concat(h,"</span>\n        </div>\n      </div>\n\n      <div class='weather_card-footer_parametr'>\n        <div class='weather_card-footer_parametr-icon'>\n          <img src=\"").concat(e,'" alt="">\n        </div>\n        <div class=\'weather_card-footer_parametr-title\'>\n          <span>Ощущается:</span>\n          <span>').concat(Math.round(p-273.15),"°C</span>\n        </div>\n      </div>\n\n      <div class='weather_card-footer_parametr'>\n        <div class='weather_card-footer_parametr-icon'>\n          <img src=\"").concat(r,'" alt="">\n        </div>\n        <div class=\'weather_card-footer_parametr-title\'>\n          <span>Ветер:</span>\n          <span>').concat(d," м/с</span>\n        </div>\n      </div>\n\n      <div class='weather_card-footer_parametr'>\n        <div class='weather_card-footer_parametr-icon'>\n          <img src=\"").concat(a,'" alt="">\n        </div>\n        <div class=\'weather_card-footer_parametr-title\'>\n          <span>Видимость:</span>\n          <span>').concat((.001*s).toFixed(2)," км</span>\n        </div>\n      </div>\n    </div>\n    "),n.next=13,O(x,L,c);case 13:n.t1=n.sent,j=n.t0.concat.call(n.t0,n.t1,"\n  </div>\n  "),y.insertAdjacentHTML("beforeend",j),function(){var t=document.querySelector("[data-name=".concat(c,"]")),e=t.getAttribute("data-name"),n=document.querySelector('[data-id="'.concat(u,'"]'));t.addEventListener("click",(function(t){t.target!==n&&(S(e),b.classList.add("show"))}))}(),O(x,L,c);case 18:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,a){var o=n.apply(t,e);function i(t){T(o,r,a,i,c,"next",t)}function c(t){T(o,r,a,i,c,"throw",t)}i(void 0)}))});return function(){return o.apply(this,arguments)}}();const N=function(){var t=document.querySelector(".modal_content-close"),e=document.querySelector("#modal");e.addEventListener("click",(function(n){n.target!=e&&n.target!=t||e.classList.remove("show")}))};function A(t,e,n,r,a,o,i){try{var c=t[o](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,a)}function F(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){A(o,r,a,i,c,"next",t)}function c(t){A(o,r,a,i,c,"throw",t)}i(void 0)}))}}const G=function(){var t="";function e(){return(e=F(regeneratorRuntime.mark((function e(n){var r,a,o,i,c,s,u,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.coords,a=r.latitude,o=r.longitude,e.next=3,R(o,a,m);case 3:i=e.sent,c=i.name,s=i.weather[0],u=i.main.temp,d=s.description,console.log(c,u,d),t='\n      <div class="widget_current-city">\n        <div class="widget_current-city_title">\n          '.concat(c,'\n        </div>\n        <div class="widget_current-city_wrapper">\n          <img class="widget_current-city_icon" src="').concat(v(d,!0),'">\n\n          <div class="widget_current-city_temp">\n            ').concat(Math.round(u-273.15),"°C\n          </div>\n        </div>\n      </div>\n    "),y.insertAdjacentHTML("afterend",t);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}navigator.geolocation.getCurrentPosition((function(t){return e.apply(this,arguments)}))};M("Moscow"),M("Sankt peterburg"),M("Novosibirsk"),M("Ekaterinburg"),_.addEventListener("click",(function(){w.value?M(w.value):console.log("Please fill in the field")})),y.addEventListener("click",(function(t){if(t.target.dataset.id){var e=t.target.dataset.id,n=document.querySelector('[data-id="'.concat(e,'"]')).closest(".weather_card");n.classList.add("removing"),setTimeout((function(){n.remove()}),300)}})),N(),G()})()})();