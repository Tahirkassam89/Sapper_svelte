import{S as t,i as e,e as s,a as l,s as n,t as r,c as o,g as a,h,d as f,j as c,k as i,l as u,b as g,q as p,f as d,n as m,m as v}from"./client.22acb460.js";function E(t,e,s){const l=t.slice();return l[1]=e[s],l}function b(t){let e,n,g,p,d=t[1].title+"";return{c(){e=s("li"),n=s("a"),g=r(d),this.h()},l(t){e=o(t,"LI",{});var s=a(e);n=o(s,"A",{rel:!0,href:!0});var l=a(n);g=h(l,d),l.forEach(f),s.forEach(f),this.h()},h(){c(n,"rel","prefetch"),c(n,"href",p="blog/"+t[1].slug)},m(t,s){i(t,e,s),l(e,n),l(n,g)},p(t,e){1&e&&d!==(d=t[1].title+"")&&u(g,d),1&e&&p!==(p="blog/"+t[1].slug)&&c(n,"href",p)},d(t){t&&f(e)}}}function y(t){let e,n,u,y,j,x=t[0],q=[];for(let e=0;e<x.length;e+=1)q[e]=b(E(t,x,e));return{c(){e=g(),n=s("h1"),u=r("Recent posts"),y=g(),j=s("ul");for(let t=0;t<q.length;t+=1)q[t].c();this.h()},l(t){p('[data-svelte="svelte-hfp9t8"]',document.head).forEach(f),e=d(t),n=o(t,"H1",{});var s=a(n);u=h(s,"Recent posts"),s.forEach(f),y=d(t),j=o(t,"UL",{class:!0});var l=a(j);for(let t=0;t<q.length;t+=1)q[t].l(l);l.forEach(f),this.h()},h(){document.title="Blog",c(j,"class","svelte-1frg2tf")},m(t,s){i(t,e,s),i(t,n,s),l(n,u),i(t,y,s),i(t,j,s);for(let t=0;t<q.length;t+=1)q[t].m(j,null)},p(t,[e]){if(1&e){let s;for(x=t[0],s=0;s<x.length;s+=1){const l=E(t,x,s);q[s]?q[s].p(l,e):(q[s]=b(l),q[s].c(),q[s].m(j,null))}for(;s<q.length;s+=1)q[s].d(1);q.length=x.length}},i:m,o:m,d(t){t&&f(e),t&&f(n),t&&f(y),t&&f(j),v(q,t)}}}function j({params:t,query:e}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function x(t,e,s){let{posts:l}=e;return t.$set=t=>{"posts"in t&&s(0,l=t.posts)},[l]}export default class extends t{constructor(t){var r;super(),document.getElementById("svelte-1frg2tf-style")||((r=s("style")).id="svelte-1frg2tf-style",r.textContent="ul.svelte-1frg2tf{margin:0 0 1em 0;line-height:1.5}",l(document.head,r)),e(this,t,x,y,n,{posts:0})}}export{j as preload};
