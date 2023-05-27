var K=Object.defineProperty,Y=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var q=(e,t,r)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,P=(e,t)=>{for(var r in t||(t={}))Z.call(t,r)&&q(e,r,t[r]);if(F)for(var r of F(t))ee.call(t,r)&&q(e,r,t[r]);return e},j=(e,t)=>Y(e,J(t));import{s as d,L as te,R as H,r as _,h as re,j as c,a as m,B as ne,F as oe,Q as B}from"./index.5c34451a.js";import{N as ie,a as ae}from"./NoImagePlaceholder.92c8e6d4.js";const ce=d.div`
  display: flex;
  justify-content: space-between;
`;d.div`
  width: 50%;
`;d.div`
  width: 50%;
`;d.form`
  display: flex;
  flex-direction: column;
`;d.div`
  margin-bottom: 1rem;
`;d.div`
  margin-top: 1rem;
`;const se=d(te)`
  background-color: #1da1f2;
  color: #fff;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;
  z-index: 5;
  &:hover {
    background-color: #0c8de4;
  }
`,de=d.h3`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #2b0505;
`,pe=d.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;var G={exports:{}},le="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",he=le,ue=he;function Q(){}function V(){}V.resetWarningCache=Q;var fe=function(){function e(n,o,a,u,x,y){if(y!==ue){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:V,resetWarningCache:Q};return r.PropTypes=r,r};G.exports=fe();var g=G.exports;function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},N.apply(this,arguments)}function me(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function E(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ge(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var k=function(e){ge(t,e);function t(){var n;return n=e.call(this)||this,n.handleExpired=n.handleExpired.bind(E(n)),n.handleErrored=n.handleErrored.bind(E(n)),n.handleChange=n.handleChange.bind(E(n)),n.handleRecaptchaRef=n.handleRecaptchaRef.bind(E(n)),n}var r=t.prototype;return r.getValue=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this.props.grecaptcha.getResponse(this._widgetId):null},r.getWidgetId=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this._widgetId:null},r.execute=function(){var o=this.props.grecaptcha;if(o&&this._widgetId!==void 0)return o.execute(this._widgetId);this._executeRequested=!0},r.executeAsync=function(){var o=this;return new Promise(function(a,u){o.executionResolve=a,o.executionReject=u,o.execute()})},r.reset=function(){this.props.grecaptcha&&this._widgetId!==void 0&&this.props.grecaptcha.reset(this._widgetId)},r.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},r.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},r.handleChange=function(o){this.props.onChange&&this.props.onChange(o),this.executionResolve&&(this.executionResolve(o),delete this.executionReject,delete this.executionResolve)},r.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&this._widgetId===void 0){var o=document.createElement("div");this._widgetId=this.props.grecaptcha.render(o,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(o)}this._executeRequested&&this.props.grecaptcha&&this._widgetId!==void 0&&(this._executeRequested=!1,this.execute())},r.componentDidMount=function(){this.explicitRender()},r.componentDidUpdate=function(){this.explicitRender()},r.componentWillUnmount=function(){this._widgetId!==void 0&&(this.delayOfCaptchaIframeRemoving(),this.reset())},r.delayOfCaptchaIframeRemoving=function(){var o=document.createElement("div");for(document.body.appendChild(o),o.style.display="none";this.captcha.firstChild;)o.appendChild(this.captcha.firstChild);setTimeout(function(){document.body.removeChild(o)},5e3)},r.handleRecaptchaRef=function(o){this.captcha=o},r.render=function(){var o=this.props;o.sitekey,o.onChange,o.theme,o.type,o.tabindex,o.onExpired,o.onErrored,o.size,o.stoken,o.grecaptcha,o.badge,o.hl;var a=me(o,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]);return H.createElement("div",N({},a,{ref:this.handleRecaptchaRef}))},t}(H.Component);k.displayName="ReCAPTCHA";k.propTypes={sitekey:g.string.isRequired,onChange:g.func,grecaptcha:g.object,theme:g.oneOf(["dark","light"]),type:g.oneOf(["image","audio"]),tabindex:g.number,onExpired:g.func,onErrored:g.func,size:g.oneOf(["compact","normal","invisible"]),stoken:g.string,hl:g.string,badge:g.oneOf(["bottomright","bottomleft","inline"])};k.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};function A(){return A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},A.apply(this,arguments)}function ye(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function ve(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var b={},xe=0;function be(e,t){return t=t||{},function(n){var o=n.displayName||n.name||"Component",a=function(x){ve(y,x);function y(R,s){var i;return i=x.call(this,R,s)||this,i.state={},i.__scriptURL="",i}var f=y.prototype;return f.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+xe++),this.__scriptLoaderID},f.setupScriptURL=function(){return this.__scriptURL=typeof e=="function"?e():e,this.__scriptURL},f.asyncScriptLoaderHandleLoad=function(s){var i=this;this.setState(s,function(){return i.props.asyncScriptOnLoad&&i.props.asyncScriptOnLoad(i.state)})},f.asyncScriptLoaderTriggerOnScriptLoaded=function(){var s=b[this.__scriptURL];if(!s||!s.loaded)throw new Error("Script is not loaded.");for(var i in s.observers)s.observers[i](s);delete window[t.callbackName]},f.componentDidMount=function(){var s=this,i=this.setupScriptURL(),p=this.asyncScriptLoaderGetScriptLoaderID(),l=t,h=l.globalName,w=l.callbackName,O=l.scriptId;if(h&&typeof window[h]!="undefined"&&(b[i]={loaded:!0,observers:{}}),b[i]){var S=b[i];if(S&&(S.loaded||S.errored)){this.asyncScriptLoaderHandleLoad(S);return}S.observers[p]=function(v){return s.asyncScriptLoaderHandleLoad(v)};return}var D={};D[p]=function(v){return s.asyncScriptLoaderHandleLoad(v)},b[i]={loaded:!1,observers:D};var L=document.createElement("script");L.src=i,L.async=!0;for(var U in t.attributes)L.setAttribute(U,t.attributes[U]);O&&(L.id=O);var z=function(I){if(b[i]){var X=b[i],T=X.observers;for(var W in T)I(T[W])&&delete T[W]}};w&&typeof window!="undefined"&&(window[w]=function(){return s.asyncScriptLoaderTriggerOnScriptLoaded()}),L.onload=function(){var v=b[i];v&&(v.loaded=!0,z(function(I){return w?!1:(I(v),!0)}))},L.onerror=function(){var v=b[i];v&&(v.errored=!0,z(function(I){return I(v),!0}))},document.body.appendChild(L)},f.componentWillUnmount=function(){var s=this.__scriptURL;if(t.removeOnUnmount===!0)for(var i=document.getElementsByTagName("script"),p=0;p<i.length;p+=1)i[p].src.indexOf(s)>-1&&i[p].parentNode&&i[p].parentNode.removeChild(i[p]);var l=b[s];l&&(delete l.observers[this.asyncScriptLoaderGetScriptLoaderID()],t.removeOnUnmount===!0&&delete b[s])},f.render=function(){var s=t.globalName,i=this.props;i.asyncScriptOnLoad;var p=i.forwardedRef,l=ye(i,["asyncScriptOnLoad","forwardedRef"]);return s&&typeof window!="undefined"&&(l[s]=typeof window[s]!="undefined"?window[s]:void 0),l.ref=p,_.exports.createElement(n,l)},y}(_.exports.Component),u=_.exports.forwardRef(function(x,y){return _.exports.createElement(a,A({},x,{forwardedRef:y}))});return u.displayName="AsyncScriptLoader("+o+")",u.propTypes={asyncScriptOnLoad:g.func},re(u,n)}}var M="onloadcallback",Re="grecaptcha";function we(){return typeof window!="undefined"&&window.recaptchaOptions||{}}function _e(){var e=we(),t=e.useRecaptchaNet?"recaptcha.net":"www.google.com";return"https://"+t+"/recaptcha/api.js?onload="+M+"&render=explicit"}var Le=be(_e,{callbackName:M,globalName:Re})(k);const Se=d.div`
  display: inline-flex;
  justify-content: center;
  flex-basis: 50%;
`,Ie=d.form`
  width: 400px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 4px;
`,C=d.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 14px;
  }
`,Oe=d.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`,Ee=d.button`
  padding: 10px 20px;
  background-color: #4285f4;
  color: #fff;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0d47a1;
  }
`,Ce=({handleInputChange:e,handleSubmit:t,formData:r})=>c(Se,{children:m(Ie,{onSubmit:t,children:[m(C,{children:[c("label",{children:"Name:"}),c("input",{type:"text",name:"name",value:r.name,onChange:e,required:!0})]}),m(C,{children:[c("label",{children:"Email:"}),c("input",{type:"email",name:"email",value:r.email,onChange:e,required:!0})]}),m(C,{children:[c("label",{children:"Phone:"}),c("input",{type:"tel",name:"phone",value:r.phone,onChange:e,required:!0})]}),m(C,{children:[c("label",{children:"Address:"}),c("input",{type:"text",name:"address",value:r.address,onChange:e,required:!0})]}),c(Le,{sitekey:"6Lc7zkUmAAAAANvm_ujvH1vCBpmVR2aWnXXdLhWo"})," ",c(Oe,{children:c(Ee,{type:"submit",children:"Submit"})})]})}),ke=d.div`
  flex-basis: 50%;
  max-height: 80vh;
  overflow-y: scroll;

  ul {
    width: 100%;
    list-style-type: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #e6e6e6;
  }

  li:last-child {
    border-bottom: none;
  }
`,Te=d.div`
  display: flex;
  align-items: center;
`,$=d.img`
  flex-shrink: 0;
  width: 150px;
  height: auto;
  object-fit: cover;
`,Pe=d.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`,je=d.div`
  font-size: 18px;
  font-weight: bold;
`,Ne=d.div`
  margin-top: 5px;
  font-size: 14px;
  color: #373434;
`,Ae=d.div`
  margin-top: 5px;
  font-size: 14px;

  input[type='number'] {
    width: 50px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`,De=d.div`
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
  color: #063c56;
`,Ue=d.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  color: #ff0000;
  transition: color 0.2s;

  &:hover {
    color: #ff5555;
  }
`,ze=d.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  color: #00aaff;
`,We=({cartItems:e,handleQuantityChange:t,handleDeleteItem:r,totalPrice:n})=>m(ke,{children:[c("ul",{children:e.map(({_id:o,imgUrl:a,title:u,price:x,quantity:y})=>c("li",{children:m(Te,{children:[a?c($,{src:a,alt:u}):c($,{src:ie,alt:u}),m(Pe,{children:[c(je,{children:u}),m(Ne,{children:["Price: $",x]}),m(Ae,{children:["Quantity:",c("input",{type:"number",value:y,onChange:f=>t(o,parseInt(f.target.value)),min:"1"})]}),m(De,{children:["Total: $",(y*x).toFixed(2)]})]}),c(Ue,{onClick:()=>r(o),children:c(ne,{})})]})},o))}),m(ze,{children:["Total Price: $",n.toFixed(2)]})]}),Be=({items:e})=>{const[t,r]=_.exports.useState({name:"",email:"",phone:"",address:""}),[n,o]=_.exports.useState("");_.exports.useEffect(()=>{e.length>0&&o(e[0].shopId)},[e]);const[a,u]=_.exports.useState(e),[x,y]=_.exports.useState(0);_.exports.useEffect(()=>{let p=0;a.forEach(l=>{p+=l.price*l.quantity}),y(p)},[a]);const f=(p,l)=>{const h=a.map(w=>{if(w._id===p){const O=w.price*l;return j(P({},w),{quantity:l,total:O})}return w});u(h)},R=p=>{const l=a.filter(h=>h._id!==p);u(l)},s=p=>{const{name:l,value:h}=p.target;r(w=>j(P({},w),{[l]:h}))},i=async p=>{p.preventDefault();const l={user:{name:t.name,email:t.email,phone:t.phone,address:t.address},shopId:n,items:a.map(h=>({name:h.title,quantity:h.quantity,price:h.price})),totalPrice:x,date:new Date().toISOString()};try{await ae(l)&&B.success("Thank you for your order. Wait for the delivery"),r({name:"",email:"",phone:"",address:""}),u([])}catch(h){console.error(h.message),B.error("Something wrong. Please try again later")}};return c(ce,{children:a.length>0?m(oe,{children:[c(Ce,{handleInputChange:s,handleSubmit:i,formData:t}),c(We,{cartItems:a,handleQuantityChange:f,handleDeleteItem:R,totalPrice:x})]}):m(pe,{children:[c(de,{children:"Add more items to the cart"}),c(se,{to:"/",children:"Back to Shop"})]})})};export{Be as default};
