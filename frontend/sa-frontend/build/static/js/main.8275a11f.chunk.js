(this["webpackJsonplocal-news"]=this["webpackJsonplocal-news"]||[]).push([[0],{178:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(76),c=a.n(l),o=(a(86),a(87),a(2)),s=a(3),i=a(29),m=a(5),u=a(4),d=a(77),h=a.n(d);a(178);function p(e){return r.a.createElement("div",null,e.weather?e.weather.map((function(e){return function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"box"},r.a.createElement("img",{className:"image",src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,".png"),alt:"weathericon"}),r.a.createElement("p",{className:"card-text",id:"temp"},e.main.temp," \xb0F"),r.a.createElement("p",{className:"desc"},r.a.createElement("i",null,e.weather[0].description))))}(e)})):null)}a(28),a(179);var E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={cart:[]},n}return Object(s.a)(a,[{key:"render",value:function(){return console.log(this.props.data.name),console.log(this.props.data.images[0].url),console.log(this.props.data.url),r.a.createElement("div",{class:"card1"},r.a.createElement("img",{id:"eventsimage",class:"card-img-top",src:this.props.data.images[0].url,alt:"Card image"}),r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title"},this.props.data.name),r.a.createElement("h5",null," ",this.props.data.dates.start.localDate),r.a.createElement("a",{href:this.props.data.url,target:"_blank",class:"bt"}," Read More")))}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return void 0===this.props.data._embedded?r.a.createElement("h1",{className:"heading"},"Sorry! There are no events near the given area"):r.a.createElement("div",null,r.a.createElement("h1",{className:"heading"}," Nearby Events"),console.log(this.props.data._embedded),this.props.data._embedded.events.map((function(e,t){return r.a.createElement(E,{data:e})})))}}]),a}(n.Component),A=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),console.log(this.props.events),this.props.events?this.props.events.map((function(e){return r.a.createElement(b,{data:e})})):null)}}]),a}(n.Component),v=a(30),f=(a(180),a(78)),g=a.n(f),O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"headerContainer"},r.a.createElement("div",{className:"divRight"},r.a.createElement("div",{className:"navOptions"},r.a.createElement(v.b,{to:"/home"},"Home"),r.a.createElement("a",{href:"#footerContainer"}," Contact us")),r.a.createElement("a",{href:"#",className:"menuIcon",onClick:function(e){e.preventDefault();var t=document.querySelector(".smNavOptions");"none"===t.style.display?t.style.display="block":t.style.display="none"}},r.a.createElement("img",{src:g.a,alt:"Menu",className:"icon"})),r.a.createElement("div",{className:"smNavOptions"},r.a.createElement(v.b,{to:"/home"},"Home"),r.a.createElement("a",{href:"#footerContainer"}," Contact us"))))}}]),a}(n.Component),w=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={pic:!1},n}return Object(s.a)(a,[{key:"render",value:function(){return null!=this.props.data.urlToImage?r.a.createElement("div",{class:"card"},r.a.createElement("img",{id:"newsimage",class:"card-img-top",src:this.props.data.urlToImage,alt:"Card image cap"}),r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title"},this.props.data.title),r.a.createElement("p",{class:"card-text"},this.props.data.description),r.a.createElement("a",{href:this.props.data.url,target:"_blank",class:"bt"}," Read More"))):r.a.createElement("div",{class:"card"},r.a.createElement("img",{id:"newsimage",class:"card-img-top",src:"https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/4.1.2/bbc_news_logo.png",alt:"Card image cap"}),r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title"},this.props.data.title),r.a.createElement("p",{class:"card-text"},this.props.data.description),r.a.createElement("a",{href:this.props.data.url,class:"bt"}," Read More")))}}]),a}(n.Component),j=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.data.articles.map((function(e,t){return r.a.createElement(w,{data:e})})))}}]),a}(n.Component),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"heading"}," Top News"),this.props.news.map((function(e,t){return r.a.createElement(j,{data:e})})))}}]),a}(n.Component),y=(a(183),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"footerContainer"},r.a.createElement("div",{className:"footerHeader"},r.a.createElement("h3",{className:"secheading"},"Contact Us")),r.a.createElement("div",{className:"footerBody"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"contentRight"},r.a.createElement("h5",null,"Address"),r.a.createElement("p",null,"12, Peterborugh, Centrum Plaza,"),r.a.createElement("p",null,"Boston, MA, 02215"),r.a.createElement("h5",null,"Sources:"),r.a.createElement("p",null,"News API")),r.a.createElement("div",{className:"contentLeft"},r.a.createElement("h5",null,"Phone Number"),r.a.createElement("a",{href:"tel:123-456-7890"},"+1 123-456-7890"),r.a.createElement("h5",null,"Email Id"),r.a.createElement("a",{href:"mailto:eventino.io@gmail.com"},"eventino.io@gmail.com")))))}}]),a}(n.Component)),N=(a(184),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEnterPress=function(e){},n.onChangeZipCode=n.onChangeZipCode.bind(Object(i.a)(n)),n.onSubmit=n.onSubmit.bind(Object(i.a)(n)),n.state={zipcode:"",weather:[],events:[],news:[],data:[],weatherb:!1,eventb:!1,buttonp:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/news",{method:"POST",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(t){void 0!==t&&e.setState({news:[t.response]})}))}},{key:"onChangeZipCode",value:function(e){this.setState({zipcode:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({buttonp:!0}),fetch("/weather",{method:"POST",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},body:JSON.stringify({zipcode:this.state.zipcode})}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){void 0!==e&&t.setState({weather:[e.response]})})),fetch("/events",{method:"POST",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},body:JSON.stringify({zipcode:this.state.zipcode})}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){void 0!==e&&t.setState({events:[e.response]})})),void 0!==this.state.weatherb&&this.setState({weatherb:!0}),void 0!==this.state.eventb&&this.setState({eventb:!0}),console.log(this.state.events)}},{key:"render",value:function(){var e=this.state,t=e.weatherb,a=e.eventb,n=e.buttonp,l=void 0!==this.state.weather?r.a.createElement(p,{weather:this.state.weather,zipcode:this.state.zipcode}):null,c=void 0!==this.state.events?r.a.createElement(A,{events:this.state.events,zipcode:this.state.zipcode}):null,o=void 0!==this.state.news?r.a.createElement(C,{news:this.state.news}):null;return r.a.createElement(h.a,null,r.a.createElement(O,null),r.a.createElement("br",null),r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("h3",null,"Welcome!"),r.a.createElement("br",null),r.a.createElement("h6",null,"Enter zipcode to check the weather and to find the events happening around you"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.onSubmit,class:"form-inline"},r.a.createElement("div",{className:"form-group",id:"in"},r.a.createElement("label",{className:"tex"}," ",r.a.createElement("b",null,"ZipCode :\xa0 \xa0")," "),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Zipcode ",value:this.state.zipcode,onKeyUp:this.onEnterPress.bind(this),onChange:this.onChangeZipCode,required:!0})),r.a.createElement("div",null,r.a.createElement("div",{className:"form-group",id:"bt"},r.a.createElement("button",{type:"submit",className:"btn"},r.a.createElement("span",null,"Send "))))),t&&l," ",a&&c),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"news"},!n&&o),r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y,null))}}]),a}(n.Component)),S=a(13);a(185);var k=function(){return r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(S.d,null,r.a.createElement(S.b,{path:"/",exact:!0,component:N}),r.a.createElement(S.a,{from:"/home",to:"/"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},28:function(e,t,a){},78:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjDAoTMyle8C6cAAAAbElEQVRIx+2VsQ2AMBAD78MAdEzDDogGsRv0iKwBO8AYGSBRmIEYutzXlt6WLIOIMTLRFKoTuxFohQeCw5OK5QmvRlCpfIPR0QtlOuEmC3c5suQgqxaOXwOuVF6wEourFFnkaTMGZqFMm5zAA53WUKIoW1aSAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTEyLTEwVDE5OjUxOjQxKzAwOjAw5FXCVwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0xMi0xMFQxOTo1MTo0MSswMDowMJUIeusAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},81:function(e,t,a){e.exports=a(186)},86:function(e,t,a){},87:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.8275a11f.chunk.js.map