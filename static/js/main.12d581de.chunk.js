(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){e.exports=t.p+"static/media/logo.06e73328.svg"},16:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(3),c=t.n(o);t(13),t(15),t(16);function r(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},e.about))),l.a.createElement("form",{className:"d-flex"},l.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Search")))))}r.defaultProps={title:"Set title",about:"set about"};var s=t(1);function i(e){var a=Object(n.useState)("Enter text here...."),t=Object(s.a)(a,2),o=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h2",null,e.Heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:o,onChange:function(e){c(e.target.value)},id:"MyBox",rows:"6"})),l.a.createElement("button",{type:"button",className:"btn btn-success mx-1",onClick:function(){var e=o.toUpperCase();c(e)}},"Convert into UpperCase"),l.a.createElement("button",{type:"button",className:"btn btn-danger mx-1",onClick:function(){var e=o.toLowerCase();c(e)}},"Convert into LowerCase"),l.a.createElement("button",{type:"button",className:"btn btn-primary mx-1",onClick:function(){c(" ")}},"Clear Text"),l.a.createElement("button",{type:"button",className:"btn btn-success mx-1",onClick:function(){document.getElementById("MyBox");o.select(),navigator.clipboard.writeText(o.value)}},"copy Text")),l.a.createElement("div",{className:"container my-3"},l.a.createElement("h2",null,"Your text summary"),l.a.createElement("p",null,o.split(" ").length," words and",o.length," characters "),l.a.createElement("p",null,.008+o.split(" ").length," minutes read "),l.a.createElement("h3",null,"Preview"),l.a.createElement("p",null,o)))}function d(){var e=Object(n.useState)({color:"black",backgroundColor:"white"}),a=Object(s.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)("Enable Dark Mode"),r=Object(s.a)(c,2),i=r[0],d=r[1];return l.a.createElement("div",{className:"container",style:t},l.a.createElement("h2",{className:"my-3"},"About Us"),l.a.createElement("div",{class:"accordion",id:"accordionExample"},l.a.createElement("div",{class:"accordion-item"},l.a.createElement("h2",{class:"accordion-header",id:"headingOne"},l.a.createElement("button",{class:"accordion-button",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Accordion Item #1")),l.a.createElement("div",{id:"collapseOne",class:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},l.a.createElement("div",{class:"accordion-body"},l.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),l.a.createElement("div",{class:"accordion-item"},l.a.createElement("h2",{class:"accordion-header",id:"headingTwo"},l.a.createElement("button",{class:"accordion-button collapsed",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Accordion Item #2")),l.a.createElement("div",{id:"collapseTwo",class:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},l.a.createElement("div",{class:"accordion-body"},l.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),l.a.createElement("div",{class:"accordion-item"},l.a.createElement("h2",{class:"accordion-header",id:"headingThree"},l.a.createElement("button",{class:"accordion-button collapsed",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"Accordion Item #3")),l.a.createElement("div",{id:"collapseThree",class:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},l.a.createElement("div",{class:"accordion-body"},l.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))),l.a.createElement("div",{className:"container my-3"},l.a.createElement("button",{onClick:function(){"black"===t.color?(o({color:"white",backgroundColor:"black"}),d("Enable Light Mode")):(o({color:"black",backgroundColor:"white"}),d("Enable Dark Mode"))},type:"button",class:"btn btn-primary my-3"},i)))}function m(e){return l.a.createElement("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert"},l.a.createElement("strong",null," ",e.alert),l.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"}))}var u=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(r,{title:"TextUtils",about:"About Us"}),l.a.createElement(m,{alert:"This is alert"}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(i,{heading:"Enter text to manipulate which you want"})),l.a.createElement(d,null))},b=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,19)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,o=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),b()},4:function(e,a,t){e.exports=t(18)}},[[4,3,2]]]);
//# sourceMappingURL=main.12d581de.chunk.js.map