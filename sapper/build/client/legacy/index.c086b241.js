import{_ as t,a as n,b as e,c as r,i as s,s as o,d as c,S as a,e as f,f as u,t as i,h as l,l as h,m as v,j as g,n as p,o as d,r as m,g as y,q as R,k as E,u as b,p as j,v as x}from"./client.dc2edeac.js";function q(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,o=n(t);if(r){var c=n(this).constructor;s=Reflect.construct(o,arguments,c)}else s=o.apply(this,arguments);return e(this,s)}}function B(t,n,e){var r=t.slice();return r[1]=n[e],r}function D(t){var n,e,r,s,o=t[1].title+"";return{c:function(){n=f("li"),e=f("a"),r=i(o),this.h()},l:function(t){n=l(t,"LI",{});var s=h(n);e=l(s,"A",{rel:!0,href:!0});var c=h(e);r=v(c,o),c.forEach(g),s.forEach(g),this.h()},h:function(){p(e,"rel","prefetch"),p(e,"href",s="blog/"+t[1].slug)},m:function(t,s){d(t,n,s),u(n,e),u(e,r)},p:function(t,n){1&n&&o!==(o=t[1].title+"")&&m(r,o),1&n&&s!==(s="blog/"+t[1].slug)&&p(e,"href",s)},d:function(t){t&&g(n)}}}function I(t){for(var n,e,r,s,o,c=t[0],a=[],m=0;m<c.length;m+=1)a[m]=D(B(t,c,m));return{c:function(){n=y(),e=f("h1"),r=i("Recent posts"),s=y(),o=f("ul");for(var t=0;t<a.length;t+=1)a[t].c();this.h()},l:function(t){R('[data-svelte="svelte-hfp9t8"]',document.head).forEach(g),n=E(t),e=l(t,"H1",{});var c=h(e);r=v(c,"Recent posts"),c.forEach(g),s=E(t),o=l(t,"UL",{class:!0});for(var f=h(o),u=0;u<a.length;u+=1)a[u].l(f);f.forEach(g),this.h()},h:function(){document.title="Blog",p(o,"class","svelte-1frg2tf")},m:function(t,c){d(t,n,c),d(t,e,c),u(e,r),d(t,s,c),d(t,o,c);for(var f=0;f<a.length;f+=1)a[f].m(o,null)},p:function(t,n){var e=b(n,1)[0];if(1&e){var r;for(c=t[0],r=0;r<c.length;r+=1){var s=B(t,c,r);a[r]?a[r].p(s,e):(a[r]=D(s),a[r].c(),a[r].m(o,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=c.length}},i:j,o:j,d:function(t){t&&g(n),t&&g(e),t&&g(s),t&&g(o),x(a,t)}}}function L(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function S(t,n,e){var r=n.posts;return t.$set=function(t){"posts"in t&&e(0,r=t.posts)},[r]}var k=function(n){t(i,a);var e=q(i);function i(t){var n,a;return r(this,i),n=e.call(this),document.getElementById("svelte-1frg2tf-style")||((a=f("style")).id="svelte-1frg2tf-style",a.textContent="ul.svelte-1frg2tf{margin:0 0 1em 0;line-height:1.5}",u(document.head,a)),s(c(n),t,S,I,o,{posts:0}),n}return i}();export default k;export{L as preload};
