(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n.n(s),i=n(4),a=n.n(i),o=(n(14),n(5)),u=n(6),h=n(8),p=n(7),d=(n(3),function(e){return Object(r.jsxs)("form",{onSubmit:e.submit,children:[Object(r.jsx)("input",{type:"text",value:e.value,placeholder:"type city name",onChange:e.change}),Object(r.jsx)("button",{children:"Search"})]})}),l=function(e){var t=e.weather,n=t.date,s=t.city,c=t.sunrise,i=t.description,a=t.sunset,o=t.temp,u=t.pressure,h=t.wind,p=t.error,d=null;if(!p&&s){var l=new Date(1e3*c).toLocaleTimeString(),j=new Date(1e3*a).toLocaleTimeString();d=Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("h2",{children:["Results for: ",Object(r.jsx)("em",{children:s})," "]}),Object(r.jsxs)("p",{children:["Conditions:",i]}),Object(r.jsxs)("p",{children:["Data for day and time: ",n]}),Object(r.jsxs)("p",{children:["Actually temperature: ",Math.round(o)," \xb0C"]}),Object(r.jsxs)("p",{children:["Sunrise time: ",l]}),Object(r.jsxs)("p",{children:["Sunset time: ",j]}),Object(r.jsxs)("p",{children:["Wind speed: ",h," m/s"]}),Object(r.jsxs)("p",{children:["Pressure: ",u," hPa"]}),function(){if(i)for(var e=i.split(" "),t=["cloudy","clouds","overcast","cloud"],n=["sun","sunny","clear","clearly"],s=["rain","rainy"],c=["snow","snowy"],a=["storm","stormy"],o=["mist"],u=0;u<e.length;u++){if(t.includes(e[u]))return Object(r.jsx)("img",{src:"https://cdn.pixabay.com/photo/2012/04/18/13/22/cloud-37010_960_720.png"});if(n.includes(e[u]))return Object(r.jsx)("img",{src:"https://cdn.pixabay.com/photo/2013/07/13/12/12/sun-159392_960_720.png"});if(s.includes(e[u]))return Object(r.jsx)("img",{src:"https://cdn.pixabay.com/photo/2012/04/18/13/22/cloud-37011_960_720.png"});if(c.includes(e[u]))return Object(r.jsx)("img",{src:"https://cdn.pixabay.com/photo/2012/04/18/13/23/cloudy-37012_960_720.png"});if(a.includes(e[u]))return Object(r.jsx)("img",{src:"https://cdn.pixabay.com/photo/2013/04/01/09/22/thunderstorm-98541_960_720.png"});if(o.includes(e[u]))return Object(r.jsx)("img",{src:"https://cdn.pixabay.com/photo/2013/04/01/09/21/fog-98505_960_720.png"})}}()]})}return Object(r.jsx)("div",{className:"result",children:p?"We don't have ".concat(s," at database"):d})},j="30e14a2d16b4ef2e118490a52d02c246",b=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={value:"",date:"",city:"",temp:"",description:"",wind:"",pressure:"",sunset:"",sunrise:"",error:!1},e.handleInputChange=function(t){e.setState({value:t.target.value})},e.handleCitySubmit=function(t){t.preventDefault();var n="http://api.openweathermap.org/data/2.5/weather?q=".concat(e.state.value,"&APPID=").concat(j,"&units=metric");fetch(n).then((function(e){if(e.ok)return e;throw Error("Something's wrong")})).then((function(e){return e.json()})).then((function(t){var n=(new Date).toLocaleString();e.setState((function(e){return{error:!1,date:n,city:e.value,temp:t.main.temp,description:t.weather[0].description,wind:t.wind.speed,pressure:t.main.pressure,sunset:t.sys.sunset,sunrise:t.sys.sunrise}}))})).catch((function(t){e.setState((function(e){return{error:!0,city:e.value}}))}))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)("h1",{children:"WEATHER APP"}),Object(r.jsx)(d,{change:this.handleInputChange,value:this.state.value,submit:this.handleCitySubmit}),Object(r.jsx)(l,{weather:this.state})]})}}]),n}(s.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),s(e),c(e),i(e)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),m()},3:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.692ae070.chunk.js.map