(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports={picture:"picture_picture__3wZFw"}},function(e,t,a){e.exports={position:"position_position__DsOha"}},function(e,t,a){e.exports={flexRow:"candidate_flexRow__3Ol6X"}},function(e,t,a){e.exports={cardExtra:"card_cardExtra__2aMVq"}},function(e,t,a){e.exports={header:"header_header__2T9dI"}},function(e,t,a){e.exports={flexRow:"spinner_flexRow__2olPJ"}},,,function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),l=(a(21),a(2)),o=a.n(l),s=a(5),u=a(6),d=a(7),v=a(15),p=a(14);function m(e){var t=e.children;return r.a.createElement("div",null,t)}function f(e){var t=e.children;return r.a.createElement("div",{style:{fontWeight:"bold",color:"#000066"}},t)}var E=a(1),h=a.n(E);function g(e){var t=e.value,a=e.previous;return r.a.createElement("div",null,r.a.createElement(h.a,{start:a||0,end:t,duration:.2,decimals:2,decimal:",",suffix:"%"},(function(e){var t=e.countUpRef;return r.a.createElement("div",null,r.a.createElement("span",{ref:t}))})))}var x=a(8),_=a.n(x);function N(e){var t=e.sourceImage,a=e.description;return r.a.createElement("div",null,r.a.createElement("img",{className:_.a.picture,src:t,alt:a,title:a}))}var w={empty:"\u2606",full:"\u2605"};function y(e){var t=e.value,a=w.full.repeat(t),n=w.empty.repeat(10-t);return r.a.createElement("div",{style:{fontSize:"1.5rem",color:"#ffbf00"}},a,n)}var b=a(9),P=a.n(b);function R(e){var t=e.children;return r.a.createElement("div",{className:P.a.position},t)}function V(e){var t=e.value,a=e.previous;return r.a.createElement("div",null,r.a.createElement(h.a,{start:a||0,end:t,duration:.1,separator:"."},(function(e){var t=e.countUpRef;return r.a.createElement("div",null,r.a.createElement("span",{ref:t}))})))}var j=a(10),O=a.n(j);function k(e){var t=e.candidate,a=e.position,n=e.previousVote,c=e.previousPercentage,i=t.id,l=t.name,o=t.votes,s=t.percentage,u=t.popularity,d="".concat(i,".jpg");return r.a.createElement("div",{className:O.a.flexRow},r.a.createElement(R,null,a),r.a.createElement(N,{sourceImage:d,description:l}),r.a.createElement(m,null,r.a.createElement(f,null,l),r.a.createElement(V,{value:o,previous:n}),r.a.createElement(g,{value:s,previous:c},s),r.a.createElement(y,{value:u})))}var I=a(11),J=a.n(I);function S(e){var t=e.children,a="card ".concat(J.a.cardExtra);return r.a.createElement("div",{className:a},t)}function z(e){var t=e.candidates,a=e.previousVotes,n=e.previousPercentages;return r.a.createElement("div",null,r.a.createElement("div",null,t.map((function(e,t){var c=e.id,i=a.find((function(e){return e.id===c})),l=i?i.votes:0,o=n.find((function(e){return e.id===c})),s=o?o.percentage:0;return r.a.createElement("div",{key:c},r.a.createElement(S,null,r.a.createElement(k,{previousVote:l,previousPercentage:s,candidate:e,position:t+1})))}))))}var C=a(12),D=a.n(C);function M(e){var t=e.children;return r.a.createElement("h2",{className:D.a.header},t)}var U=a(13),q=a.n(U);function B(e){var t=e.description;return r.a.createElement("div",{className:q.a.flexRow},r.a.createElement("div",{className:"preloader-wrapper medium active"},r.a.createElement("div",{className:"spinner-layer spinner-green-only"},r.a.createElement("div",{className:"circle-clipper left"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"gap-patch"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"circle-clipper right"},r.a.createElement("div",{className:"circle"})))),r.a.createElement("div",{style:{fontSize:"1.5rem",marginLeft:"25px"}},t))}var F=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={candidates:[],previousVotes:[],previousPercentages:[]},e.interval=null,e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(Object(s.a)(o.a.mark((function t(){var a,n,r,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:8080/votes");case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,r=e.state.candidates.map((function(e){return{id:e.id,votes:e.votes}})),c=e.state.candidates.map((function(e){return{id:e.id,percentage:e.percentage}})),e.setState({candidates:n.candidates,previousVotes:r,previousPercentages:c});case 9:case"end":return t.stop()}}),t)}))),1e3)}},{key:"render",value:function(){var e=this.state,t=e.candidates,a=e.previousVotes,n=e.previousPercentages;return 0===t.length?r.a.createElement(B,{description:"Carregando..."}):r.a.createElement("div",{className:"container"},r.a.createElement(M,null,"\xcdndice de popularidade de Hollywood"),r.a.createElement(z,{previousPercentages:n,previousVotes:a,candidates:t}))}}]),a}(n.Component);i.a.render(r.a.createElement(F,null),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.3b28cf0f.chunk.js.map