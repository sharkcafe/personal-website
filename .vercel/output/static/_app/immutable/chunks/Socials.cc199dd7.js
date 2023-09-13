import{s as F,n as V}from"./scheduler.387d4020.js";import{S as P,i as X,g as v,s as w,m as O,h as y,j as p,f as g,c as b,n as z,y as E,k as _,a as Y,z as m,o as A,x as G,r as I,u as S,v as C,d as D,t as j,w as T}from"./index.c0f316b9.js";import"./iconify-icon.6d541906.js";function H(f){let e,t,r,l,o,c,a,n,u;return{c(){e=v("div"),t=v("div"),r=v("iconify-icon"),l=w(),o=v("p"),c=O(f[1]),a=w(),n=v("a"),u=O(f[3]),this.h()},l(h){e=y(h,"DIV",{class:!0});var d=p(e);t=y(d,"DIV",{class:!0});var s=p(t);r=y(s,"ICONIFY-ICON",{icon:!0,width:!0}),p(r).forEach(g),l=b(s),o=y(s,"P",{class:!0});var i=p(o);c=z(i,f[1]),i.forEach(g),s.forEach(g),a=b(d),n=y(d,"A",{href:!0,target:!0,rel:!0,class:!0});var k=p(n);u=z(k,f[3]),k.forEach(g),d.forEach(g),this.h()},h(){E(r,"icon",f[0]),E(r,"width",J),_(o,"class","svelte-1tj7bgn"),_(t,"class","text svelte-1tj7bgn"),_(n,"href",f[2]),_(n,"target","_blank"),_(n,"rel","noopener noreferrer"),_(n,"class","svelte-1tj7bgn"),_(e,"class","layout svelte-1tj7bgn")},m(h,d){Y(h,e,d),m(e,t),m(t,r),m(t,l),m(t,o),m(o,c),m(e,a),m(e,n),m(n,u)},p(h,[d]){d&1&&E(r,"icon",h[0]),d&2&&A(c,h[1]),d&8&&A(u,h[3]),d&4&&_(n,"href",h[2])},i:V,o:V,d(h){h&&g(e)}}}let J=24;function K(f,e,t){let{icon:r=""}=e,{title:l=""}=e,{href:o=""}=e,{username:c=""}=e;return f.$$set=a=>{"icon"in a&&t(0,r=a.icon),"title"in a&&t(1,l=a.title),"href"in a&&t(2,o=a.href),"username"in a&&t(3,c=a.username)},[r,l,o,c]}class N extends P{constructor(e){super(),X(this,e,K,H,F,{icon:0,title:1,href:2,username:3})}}function L(f){let e,t,r,l,o,c,a,n,u,h,d;return{c(){e=v("div"),t=v("div"),r=v("iconify-icon"),l=w(),o=v("p"),c=O(f[1]),a=w(),n=v("a"),u=O(f[3]),this.h()},l(s){e=y(s,"DIV",{class:!0});var i=p(e);t=y(i,"DIV",{class:!0,"aria-hidden":!0});var k=p(t);r=y(k,"ICONIFY-ICON",{icon:!0,width:!0}),p(r).forEach(g),l=b(k),o=y(k,"P",{class:!0});var q=p(o);c=z(q,f[1]),q.forEach(g),k.forEach(g),a=b(i),n=y(i,"A",{href:!0,target:!0,rel:!0,class:!0});var B=p(n);u=z(B,f[3]),B.forEach(g),i.forEach(g),this.h()},h(){E(r,"icon",f[0]),E(r,"width",M),_(o,"class","svelte-1a2yxbb"),_(t,"class","text svelte-1a2yxbb"),_(t,"aria-hidden","true"),_(n,"href",f[2]),_(n,"target","_blank"),_(n,"rel","noopener noreferrer"),_(n,"class","svelte-1a2yxbb"),_(e,"class","layout svelte-1a2yxbb")},m(s,i){Y(s,e,i),m(e,t),m(t,r),m(t,l),m(t,o),m(o,c),m(e,a),m(e,n),m(n,u),h||(d=G(t,"click",f[4]),h=!0)},p(s,[i]){i&1&&E(r,"icon",s[0]),i&2&&A(c,s[1]),i&8&&A(u,s[3]),i&4&&_(n,"href",s[2])},i:V,o:V,d(s){s&&g(e),h=!1,d()}}}let M=24;function Q(f,e,t){let{icon:r="simple-icons:x"}=e,{title:l="X"}=e,{href:o=""}=e,{username:c=""}=e,a=!1,n=()=>{a?(a=!1,t(0,r="simple-icons:x"),t(1,l="X")):(a=!0,t(0,r="mdi:twitter"),t(1,l="Twitter"))};return f.$$set=u=>{"icon"in u&&t(0,r=u.icon),"title"in u&&t(1,l=u.title),"href"in u&&t(2,o=u.href),"username"in u&&t(3,c=u.username)},[r,l,o,c,n]}class R extends P{constructor(e){super(),X(this,e,Q,L,F,{icon:0,title:1,href:2,username:3})}}function U(f){let e,t,r,l,o,c,a,n,u,h,d;return t=new N({props:{icon:"simple-icons:codeberg",title:"Codeberg",href:"https://codeberg.org/puppy",username:"puppy"}}),l=new N({props:{icon:"ic:round-discord",title:"Discord",href:"https://discord.com/users/969035746923126824",username:"pluwshy"}}),c=new N({props:{icon:"ic:round-tiktok",title:"TikTok",href:"https://www.tiktok.com/@pluwshyy",username:"@pluwshyy"}}),n=new R({props:{href:"https://twitter.com/pluwshyy",username:"@pluwshyy"}}),h=new N({props:{icon:"lucide:at-sign",title:"Bluesky",href:"https://bsky.app/profile/pluwshy.gay",username:"@pluwshy.gay"}}),{c(){e=v("div"),I(t.$$.fragment),r=w(),I(l.$$.fragment),o=w(),I(c.$$.fragment),a=w(),I(n.$$.fragment),u=w(),I(h.$$.fragment),this.h()},l(s){e=y(s,"DIV",{class:!0});var i=p(e);S(t.$$.fragment,i),r=b(i),S(l.$$.fragment,i),o=b(i),S(c.$$.fragment,i),a=b(i),S(n.$$.fragment,i),u=b(i),S(h.$$.fragment,i),i.forEach(g),this.h()},h(){_(e,"class","container svelte-1d2h6ds")},m(s,i){Y(s,e,i),C(t,e,null),m(e,r),C(l,e,null),m(e,o),C(c,e,null),m(e,a),C(n,e,null),m(e,u),C(h,e,null),d=!0},p:V,i(s){d||(D(t.$$.fragment,s),D(l.$$.fragment,s),D(c.$$.fragment,s),D(n.$$.fragment,s),D(h.$$.fragment,s),d=!0)},o(s){j(t.$$.fragment,s),j(l.$$.fragment,s),j(c.$$.fragment,s),j(n.$$.fragment,s),j(h.$$.fragment,s),d=!1},d(s){s&&g(e),T(t),T(l),T(c),T(n),T(h)}}}class $ extends P{constructor(e){super(),X(this,e,null,U,F,{})}}export{$ as S};