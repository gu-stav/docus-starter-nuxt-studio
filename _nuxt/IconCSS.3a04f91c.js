import{a as d,an as f,m as _,b as o,o as x,f as z,ao as S,u as a,k as I}from"./entry.5f6e8f51.js";/* empty css                    */const y=d({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(l){var r;const s=l;f(n=>({"85f54cb8":a(m)}));const e=_();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const p=o(()=>{var n;return(((n=e==null?void 0:e.nuxtIcon)==null?void 0:n.aliases)||{})[s.name]||s.name}),m=o(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),c=o(()=>{var t,i,u;if(!s.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const n=s.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(n))===n?`${n}px`:n});return(n,t)=>(x(),z("span",{style:S({width:a(c),height:a(c)})},null,4))}}),g=I(y,[["__scopeId","data-v-a58be67d"]]);export{g as default};
