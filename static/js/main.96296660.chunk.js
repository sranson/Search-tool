(this.webpackJsonppics=this.webpackJsonppics||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),s=a(17),c=a.n(s),i=a(8),u=a.n(i),o=a(18),l=a(3),m=a(4),h=a(6),p=a(5),j=a(19),b=a.n(j).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID Jka735JO2x_3jcuOjhmaUzQT9CKGuTgoe4_rXW59OwQ"}}),f=a(0),d=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.term)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return Object(f.jsx)("div",{className:"ui segment",children:Object(f.jsx)("form",{onSubmit:this.onFormSubmit,className:"ui form",children:Object(f.jsxs)("div",{className:"field",children:[Object(f.jsx)("label",{children:"Image Search"}),Object(f.jsx)("input",{type:"text",placeholder:"Search for a term",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}})]})})})}}]),a}(r.a.Component),v=(a(44),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).setSpans=function(){var e=n.imageRef.current.clientHeight,t=Math.ceil(e/10);n.setState({spans:t})},n.state={spans:0},n.imageRef=r.a.createRef(),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.alt_description,a=e.urls;return Object(f.jsx)("div",{style:{gridRowEnd:"span ".concat(this.state.spans)},children:Object(f.jsx)("img",{ref:this.imageRef,alt:t,src:a.regular})})}}]),a}(r.a.Component)),O=function(e){var t=e.images.map((function(e){return Object(f.jsx)(v,{image:e},e.id)}));return Object(f.jsx)("div",{className:"image-list",children:t})},g=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={images:[]},e.onSearchSubmit=function(){var t=Object(o.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.get("/search/photos",{params:{query:a}});case 2:n=t.sent,e.setState({images:n.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"ui container",style:{marginTop:"10px"},children:[Object(f.jsx)(d,{onSubmit:this.onSearchSubmit}),Object(f.jsx)(O,{images:this.state.images})]})}}]),a}(r.a.Component);c.a.render(Object(f.jsx)(g,{}),document.querySelector("#root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.96296660.chunk.js.map