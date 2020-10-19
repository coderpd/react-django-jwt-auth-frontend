(this["webpackJsonpreact-django-jwt-auth-frontend"]=this["webpackJsonpreact-django-jwt-auth-frontend"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),l=n.n(o),s=(n(13),n(1)),i=n(2),c=n(3),u=n(4);var h=function(e){var t=r.a.createElement("ul",null,r.a.createElement("li",{onClick:function(){return e.display_form("login")}},"login"),r.a.createElement("li",{onClick:function(){return e.display_form("signup")}},"signup")),n=r.a.createElement("ul",null,r.a.createElement("li",{onClick:e.handle_logout},"logout"));return r.a.createElement("div",null,e.logged_in?n:t)},m=n(5),d=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.handle_change=function(t){var n=t.target.name,a=t.target.value;e.setState((function(e){var t=Object(m.a)({},e);return t[n]=a,t}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:function(t){return e.props.handle_login(t,e.state)}},r.a.createElement("h4",null,"Log In"),r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handle_change}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handle_change}),r.a.createElement("input",{type:"submit"}))}}]),n}(r.a.Component),g=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.handle_change=function(t){var n=t.target.name,a=t.target.value;e.setState((function(e){var t=Object(m.a)({},e);return t[n]=a,t}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:function(t){return e.props.handle_signup(t,e.state)}},r.a.createElement("h4",null,"Sign Up"),r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handle_change}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handle_change}),r.a.createElement("input",{type:"submit"}))}}]),n}(r.a.Component),p=(n(14),function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handle_login=function(e,t){e.preventDefault(),fetch("http://localhost:8000/account/user-auth/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("token",e.token),a.setState({logged_in:!0,displayed_form:"",username:e.user.username})}))},a.handle_signup=function(e,t){e.preventDefault(),fetch("http://localhost:8000/account/users/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("token",e.token),a.setState({logged_in:!0,displayed_form:"",username:e.username})}))},a.handle_logout=function(){localStorage.removeItem("token"),a.setState({logged_in:!1,username:""})},a.display_form=function(e){a.setState({displayed_form:e})},a.state={displayed_form:"",logged_in:!!localStorage.getItem("token"),username:""},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.state.logged_in&&fetch("http://localhost:8000/account/current-user/",{headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(t){e.setState({username:t.username})}))}},{key:"render",value:function(){var e;switch(this.state.displayed_form){case"login":e=r.a.createElement(d,{handle_login:this.handle_login});break;case"signup":e=r.a.createElement(g,{handle_signup:this.handle_signup});break;default:e=null}return r.a.createElement("div",{className:"App"},r.a.createElement(h,{logged_in:this.state.logged_in,display_form:this.display_form,handle_logout:this.handle_logout}),e,r.a.createElement("h3",null,this.state.logged_in?"Hello, ".concat(this.state.username):"Please Log In"))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.adeb74dd.chunk.js.map