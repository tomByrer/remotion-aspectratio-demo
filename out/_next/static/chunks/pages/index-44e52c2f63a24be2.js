(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9523:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y}});var r={};n.r(r),n.d(r,{Lift:function(){return R},Right:function(){return T},SunriseRight:function(){return E}});var i=n(5413),o=n.n(i),s=n(3236),a=n(6137),c=n.n(a),l=(n(1773),n(1343)),u=n(1395),d=n(6834),f=n(1308),m=n(5159),p=n(5407),h=p.um.DEVELOP.fps;function g(e){var t=JSON.parse(JSON.stringify(e)),n=0,r=0,i="WebVTT - generated using TomByrer's prep-transcript\n",o=0;for(t.length;o<t.length;o++){var s,a=t[o],c=null!==(s=a.timeSrtSec)&&void 0!==s?s:n;a.timeSrtSec=c;var l=c*h;a.timeSrtFrame=Math.round(l+r),r+=l-a.timeSrtFrame,a.timeEndSec?a.timeDurSecs=a.timeEndSec-c:a.timeDurSecs?a.timeEndSec=c+a.timeDurSecs:(a.timeEndSec=t[o+1].timeSrtSec,a.timeDurSecs=a.timeEndSec-c),n=a.timeEndSec;var u=a.timeEndSec*h;a.timeEndFrame=Math.round(u+r),r+=u-a.timeEndFrame,a.timeDurFrames=a.timeEndFrame-a.timeSrtFrame+1,a.title||(a.title="Sequence "+o),i+="\n".concat(new Date(1e3*c).toISOString().slice(11,23)," --\x3e ").concat(new Date(1e3*n).toISOString().slice(11,23),"\n- ").concat(a.title,"\n"),i+=a.subtitle?"- ".concat(a.subtitle,"\n"):"",t[o]=a}return{tr:t,vtt:i}}var x=n(4406),v=n(9037),y=n(2086),j=function(e){var t=e.aspects,n=void 0===t?{timeDurSecs:2,title:"def title text",placeItems:"center",fontVWRatio:9,colorBack:"#111",colorFront:"#eee"}:t,r=(0,x.useCurrentFrame)(),i=(0,x.useVideoConfig)();(0,x.interpolate)(r,[i.durationInFrames-25,i.durationInFrames-15],[1,0],{extrapolateLeft:"clamp",extrapolateRight:"clamp"});return(0,y.jsx)("div",{className:"seq-frame-count",style:{minHeight:v.vh(),minWidth:v.vw(),display:"grid",placeItems:n.placeItems,backgroundColor:n.colorBack},children:(0,y.jsx)("code",{style:{color:n.colorFront,fontSize:v.vw(n.fontVWRatio)},children:n.title})})};function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.618,t=arguments.length>1?arguments[1]:void 0,n=(0,x.useCurrentFrame)(),r="undefined"!==typeof e?v.m9(e):v.m9(.5),i="undefined"!==typeof t?r*t:.25*r;return(0,x.interpolate)(n,[0,i,r-i,r],[0,.32,.8382,.999],{extrapolateLeft:"clamp",extrapolateRight:"clamp"})}function w(e,t){var n=(0,x.useCurrentFrame)(),r="undefined"!==typeof e?v.m9(e):v.m9(.5),i="undefined"!==typeof t?r*t:.25*r;return(0,x.interpolate)(n,[0,i,r-i,r],[0,1,.8382,0],{extrapolateLeft:"clamp",extrapolateRight:"clamp"})}function S(e){var t=e.aspects,n=void 0===t?{timeDurSecs:2,title:"def title text",fontVWRatio:3.7234,colorBack:"#111",colorFront:"#eee"}:t;return(0,y.jsx)("div",{style:{flex:"90",backgroundColor:n.colorBack},children:(0,y.jsx)("pre",{children:(0,y.jsx)("code",{style:{position:"absolute",margin:"0 6.18%",bottom:v.vh(12.9629),color:n.colorFront,fontFamily:"monospace",fontSize:v.vw(n.fontVWRatio),textAlign:"left",opacity:w(n.timeDurSecs)},children:n.title})})})}var k=n(4167),C=n.n(k);function F(e){var t=e.startSeconds,n=void 0===t?0:t,r=e.startFrames,i=void 0===r?Math.round(v.m9(n)):r,o=e.layout,s=void 0===o?"none":o,a=e.children;return(0,y.jsx)(x.Sequence,{from:i,layout:s,children:a})}var O=n(5700),z=["distanceInVH","transitionStart"],D=["transitionStart","vhAdjust","pcLeftStart"],L=["transitionStart","vhAdjust","pcLeftStart"];function R(e){var t=e.distanceInVH,n=void 0===t?-13.8888:t,r=e.transitionStart,i=void 0===r?v.m9(.833333):r,o=(0,O.Z)(e,z),s=1+.44*(2.388888888-v.Dm()),a=(0,x.useVideoConfig)().height*(1-s)*.09,c=(0,x.interpolate)((0,x.spring)({frame:(0,x.useCurrentFrame)()-i,fps:(0,x.useVideoConfig)().fps,config:{damping:100,mass:.5}}),[0,1],[a,v.vh(n)]);return(0,y.jsx)("div",{style:{transform:"scale(".concat(s,") translateY(").concat(c,"px)")},children:o.children})}function T(e){var t=e.transitionStart,n=void 0===t?0:t,r=e.vhAdjust,i=void 0===r?-13.8888:r,o=e.pcLeftStart,s=void 0===o?-100:o,a=(0,O.Z)(e,D),c=(0,x.interpolate)((0,x.spring)({frame:(0,x.useCurrentFrame)()-n,fps:(0,x.useVideoConfig)().fps,config:{damping:61,mass:8.09}}),[0,1],[s,0]);return(0,y.jsx)("div",{style:{transform:"translate(".concat(c,"%, ").concat(v.vh(i),"px)")},children:a.children})}function E(e){var t=e.transitionStart,n=void 0===t?0:t,r=e.vhAdjust,i=void 0===r?63.8888:r,o=e.pcLeftStart,s=void 0===o?-47:o,a=(0,O.Z)(e,L),c=(0,x.interpolate)((0,x.spring)({frame:(0,x.useCurrentFrame)()-n,fps:(0,x.useVideoConfig)().fps,config:{damping:61,mass:8.09}}),[0,1],[s,0]),l=v.RO(1),u=v.vh(i),d=v.Dm();d<1&&(u+=u*(.065/d));var f=v.vr(-1.2*c)-u;return(0,y.jsx)("div",{style:{transform:"translate(".concat(c,"%, ").concat(f,"px) scale(").concat(l,")")},children:a.children})}var P=n(6443),V=n(2036);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){(0,V.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e){var t=e.displayText,n=void 0===t?"subtitle text":t,r=e.style,i=void 0===r?{color:"teal"}:r,o=v.Dm()<0?null:700,s=v.s8(3.7234,o);return(0,y.jsx)("h2",{style:N(N({},i),{},{fontFamily:"Helvetica, Arial",fontSize:s,fontWeight:"lighter",textAlign:"center",opacity:b(.618)}),children:n})}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){(0,V.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(e){var t=e.displayText,n=void 0===t?"title text":t,r=e.style,i=void 0===r?{color:"red"}:r,o=n.split(" ").map((function(e){return" ".concat(e," ")})),s=(0,x.useVideoConfig)(),a=v.Dm(),c=a>1?null:s.height+s.height*(a-.5)*.4,l=v.s8(5.05,c),u=v.s8(.505,c),d=(0,x.useCurrentFrame)();return(0,y.jsx)("h1",{style:W(W({},i),{},{fontFamily:"SF Pro Text, Helvetica, Arial",fontWeight:"bold",fontSize:l,textAlign:"center"}),children:o.map((function(e,t){return(0,y.jsx)("span",{style:{marginRight:u,marginLeft:u,transform:"scale(".concat((0,x.spring)({fps:s.fps,frame:d-t*v.m9(.1618),config:{damping:100,stiffness:200,mass:.5}}),")"),display:"inline-block"},children:e},e)}))})};function H(e){var t=e.aspects,n=void 0===t?{timeDurSecs:2,logo:(0,y.jsx)("div",{children:"logo"}),title:"def title text",subtitle:"def subtitle text",colorBack:"#111",colorFront:"#eee"}:t,i=(0,y.jsx)(C(),{renderInWrapper:!1,components:{Logos:P,Slide:r},jsx:n.animatedLogo});return(0,y.jsxs)("div",{style:{width:"100%",display:"grid",gridTemplateRows:"8fr 1fr 2.5fr",gridGap:"0",backgroundColor:n.colorBack},children:[i,(0,y.jsx)(F,{startSeconds:.1618*n.timeDurSecs,style:{},children:(0,y.jsx)(B,{displayText:n.title,style:{gridRow:"2",margin:"0 0.5em",color:n.colorFront}})}),(0,y.jsx)(F,{startSeconds:.45*n.timeDurSecs,style:{margin:"0"},children:(0,y.jsx)(I,{displayText:n.subtitle,style:{gridRow:"3",alignSelf:"start",margin:"0.18em 0.5em 0 0.5em",color:n.colorFront}})})]})}function q(e){var t=e.transcript,n=e.playerConfigStr;(0,x.useCurrentFrame)();return(0,y.jsx)(y.Fragment,{children:t.map((function(e,t){var r=t+e.layout;switch(e.layout){case"IntroCode":return e.title=e.title.replace(/{{playerConfigStr}}/,n),(0,y.jsx)(x.Sequence,{from:e.timeSrtFrame,durationInFrames:e.timeDurFrames,children:(0,y.jsx)(S,{aspects:e})},r);case"ThreeRowsImgTitleSub":return(0,y.jsx)(x.Sequence,{from:e.timeSrtFrame,durationInFrames:e.timeDurFrames,children:(0,y.jsx)(H,{aspects:e})},r);case"FrameCount":return e.title=String((0,x.useCurrentFrame)()).padStart(e.digitCount,"_"),(0,y.jsx)(x.Sequence,{from:e.timeSrtFrame,durationInFrames:e.timeDurFrames,children:(0,y.jsx)(j,{aspects:e})},r);default:return(0,y.jsx)(x.Sequence,{from:e.timeSrtFrame,durationInFrames:e.timeDurFrames,children:(0,y.jsxs)("div",{children:["default: frames ",e.timeSrtFrame," to ",e.timeSrtFrame+e.timeDurFrames]})},r)}}))})}function _(e){var t=e.durationInFrames,n=void 0===t?(0,x.useVideoConfig)().durationInFrames:t,r=e.speed,i=void 0===r?1:r,o=(e.titleText,e.frontColor),s=void 0===o?"#39f437":o,a=e.backColor,c=void 0===a?"#161b28d1":a,l=(0,x.useCurrentFrame)();return(0,y.jsx)("div",{style:{flex:"90",backgroundColor:c},children:(0,y.jsx)("pre",{children:(0,y.jsx)("code",{style:{position:"absolute",margin:"-9px 0 0 355px",color:s,fontFamily:"monospace",fontSize:"27px",textAlign:"left",opacity:90},children:"".concat(l,"/").concat(l-n," FPS:").concat((0,x.useVideoConfig)().fps," Speed:").concat(i)})})})}function Z(){Z=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,r,i){var o=new RegExp(e,r);return t.set(o,i||t.get(e)),(0,d.Z)(o,n.prototype)}function r(e,n){var r=t.get(n);return Object.keys(r).reduce((function(t,n){return t[n]=e[r[n]],t}),Object.create(null))}return(0,u.Z)(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=r(n,this)),n},n.prototype[Symbol.replace]=function(n,i){if("string"===typeof i){var o=t.get(this);return e[Symbol.replace].call(this,n,i.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+o[t]})))}if("function"===typeof i){var s=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!==typeof e[e.length-1]&&(e=[].slice.call(e)).push(r(e,s)),i.apply(this,e)}))}return e[Symbol.replace].call(this,n,i)},Z.apply(this,arguments)}function J(e){var t=e.transcript,n=e.title,r=(0,s.useState)(t),i=r[0],o=r[1],a=(0,s.useState)(g(i)),c=a[0],u=a[1],d=(0,s.useState)(c.tr.at(-1).timeEndFrame),h=d[0],x=d[1];(0,s.useEffect)((function(){u(g(i)),x(c.tr.at(-1).timeEndFrame)}),i);var v=(0,s.useState)(p.um.DEVELOP.fps),j=v[0],b=(v[1],(0,s.useState)(p.um.DEVELOP.vidSizes)),w=b[0],S=(b[1],Object.keys(w)),k=(0,s.useState)(p.um.DEVELOP.player.speed),C=k[0],F=k[1],O=(0,s.useState)(!1),z=O[0],D=O[1],L=(0,s.useState)((function(){return["Configuring: "].concat((0,f.Z)(S),["Playback speed: "+C])})),R=L[0],T=L[1];function E(e){T((function(t){return[].concat((0,f.Z)(t),[" ".concat(Date.now()," ").concat(e)])}))}var P={};S.map((function(e,t){P[e]=(0,s.useRef)(null)}));var V=(0,s.useRef)(null);function M(){return V.current.getCurrentFrame()}function N(e){return Z(/^([\$A-Z_a-z]+([\$0-9A-Z_a-z]*))\((.*)\)/,{methodName:1,methodParam:3}).exec(e).groups}function I(e){E("ctr "+e);var t=N(e),n=t.methodName,r=t.methodParam;V.current[n](r)}function A(e){E("all "+e);var t=N(e),n=t.methodName,r=t.methodParam;S.map((function(e,t){P[e].current[n](r)}))}function W(e){E("setPlaybackRate: "+e),F(e)}return(0,s.useEffect)((function(){var e=function(){A("play()")},t=function(){A("pause()")},n=function(e){A("seekTo(".concat(e.detail.frame,")"))},r=function(){E("ended")},i=function(e){E("error")},o=V.current;if(o)return o.addEventListener("play",e),o.addEventListener("pause",t),o.addEventListener("seeked",n),o.addEventListener("ended",r),o.addEventListener("error",i),function(){o.removeEventListener("play",e),o.removeEventListener("pause",t),o.removeEventListener("seeked",n),o.removeEventListener("ended",r),o.removeEventListener("error",i)}}),[]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h2",{className:"title",style:{marginTop:"1em"},children:n}),(0,y.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"1.16vmax",margin:"0 1vw"},children:[(0,y.jsxs)("div",{className:"player-controlls",onMouseEnter:function(){return D(!0)},onMouseLeave:function(){return D(!1)},style:{alignSelf:"start",opacity:z?1:.618,width:"100%"},children:[(0,y.jsx)(m.J5,{component:_,className:"controller",inputProps:{speed:C},fps:j,durationInFrames:h,compositionWidth:900,compositionHeight:80,playbackRate:C,ref:V,controls:!0,style:{height:"76px",width:"100%",backgroundColor:"black"}},"controller"),(0,y.jsxs)("div",{children:[(0,y.jsx)("button",{type:"button",onClick:function(){return I("toggle()")},children:"\u23ef\ufe0f Play|Pause"}),(0,y.jsxs)("span",{children:[(0,y.jsx)("button",{type:"button",onClick:function(){return I("seekTo(50)")},children:"seekTo 50"}),(0,y.jsx)("button",{type:"button",onClick:function(){return I("seekTo(200)")},children:"seekTo 200"})]}),(0,y.jsxs)("span",{children:[(0,y.jsx)("button",{type:"button",onClick:function(){return I("seekTo(".concat(M()-5*j,")"))},children:"-5 seconds"}),(0,y.jsx)("button",{type:"button",onClick:function(){return I("seekTo(".concat(M()+5*j,")"))},children:"+5 seconds"})]}),(0,y.jsxs)("span",{children:[(0,y.jsx)("button",{type:"button",onClick:function(){return I("seekTo(".concat(M()-1,")"))},children:"-1 frame"}),"\xa0",(0,y.jsx)("button",{type:"button",onClick:function(){return I("seekTo(".concat(M()+1,")"))},children:"+1 frame"})]}),(0,y.jsx)("span",{children:(0,y.jsx)("button",{type:"button",onClick:function(){return T((function(e){return[].concat((0,f.Z)(e),["currentFrame=".concat(M())])}))},children:"log currentFrame"})}),(0,y.jsxs)("span",{children:[(0,y.jsx)("button",{type:"button",onClick:function(){return W(.5)},children:"\ud83d\udc22 0.5 speed"}),(0,y.jsx)("button",{type:"button",onClick:function(){return W(1)},children:"1x speed"}),(0,y.jsx)("button",{type:"button",onClick:function(){return W(2)},children:"\ud83d\udc07 2x speed"})]})]})]}),(0,y.jsx)("div",{children:(0,y.jsxs)("div",{className:"log",onMouseEnter:function(){return D(!0)},onMouseLeave:function(){return D(!1)},style:{alignSelf:"start",minWidth:"350px",opacity:z?1:.1618},children:[(0,y.jsx)("h4",{children:"Log"}),R.slice(0).reverse().slice(0,7).map((function(e){return(0,y.jsx)("div",{children:e},e)}))]})}),(0,y.jsxs)("div",{className:"transcript",onMouseEnter:function(){return D(!0)},onMouseLeave:function(){return D(!1)},style:{opacity:z?1:.618},children:[(0,y.jsx)("h4",{children:"Transcript"}),(0,y.jsx)("p",{children:"Below is the JSON configureation.  Experiment by editing it!  If you 'break' the video, then reload the page."}),(0,y.jsx)("textarea",{onChange:function(e){return o(JSON.parse(e.target.value))},value:JSON.stringify(i,void 0,2)})]}),(0,y.jsxs)("div",{className:"webvtt",onMouseEnter:function(){return D(!0)},onMouseLeave:function(){return D(!1)},style:{opacity:z?1:.618},children:[(0,y.jsx)("h4",{children:"WebVTT"}),(0,y.jsxs)("p",{children:[(0,y.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API#webvtt_files",children:"Web Video Text Tracks (captions)"}),", auto generated from the Transcript."]}),(0,y.jsx)("textarea",{value:c.vtt})]}),Object.entries(w).map((function(e,t){var n=(0,l.Z)(e,2),r=n[0],i=n[1];return(0,y.jsxs)("div",{className:"player",children:[(0,y.jsx)("h6",{style:{opacity:z?1:.323},children:i.info.ratio+" ~ "+i.info.about}),(0,y.jsx)(m.J5,{component:q,inputProps:{transcript:c.tr,playerConfigStr:"aspectratio: ".concat(r,"-").concat(i.info.ratio," ").concat(JSON.stringify(i.dimention))},fps:j,durationInFrames:h,compositionWidth:i.dimention.w,compositionHeight:i.dimention.h,playbackRate:C,ref:P[r],style:{outline:"0.16rem dashed #777"}},"remotion"+t+r)]},"playerdiv"+t+r)}))]})]})}var X=[{layout:"IntroCode",timeDurSecs:3.75,title:"{{playerConfigStr}}",fontVWRatio:3.5,colorBack:"#10131f",colorFront:"#d9d0c6"},{layout:"IntroCode",timeDurSecs:3.75,title:"What would you create if you could...",fontVWRatio:3.5,colorBack:"#10131f",colorFront:"#d9d0c6"},{layout:"ThreeRowsImgTitleSub",timeDurSecs:7.5,logo:"<Logos.React />",logoAnimation:"<Slide.SunriseRight />",animatedLogo:"<Slide.SunriseRight><Logos.React /></Slide.SunriseRight>",title:"use ReactJS to build animations...",subtitle:"Animate with web technologies you know & love.",colorBack:"#161b28",colorFront:"#e9e4d7"},{layout:"ThreeRowsImgTitleSub",timeDurSecs:7.5,logo:"<Logos.MovieCamera />",logoAnimation:"<Slide.Right pcLeftStart={-81} />",animatedLogo:"<Slide.Right pcLeftStart={-81}><Logos.MovieCamera /></Slide.Right>",title:"then capture them as a movie...",subtitle:"Export a MP4 file or use the <Player>.",colorBack:"#21304c",colorFront:"#d7d9df"},{layout:"ThreeRowsImgTitleSub",timeDurSecs:7.5,transition:"<Logos.Remotion use='transition'/>",logo:"<Logos.Remotion />",logoAnimation:"<Slide.Lift />",animatedLogo:"<Logos.Remotion use='transition'/><Slide.Lift><Logos.Remotion /></Slide.Lift>",title:"with Remotion!",subtitle:"Create videos programmatically in React.",colorBack:"#21304c",colorFront:"#21304c"}],G=[{layout:"FrameCount",timeSrtSec:0,timeEndSec:9,placeItems:"center",digitCount:3,fontVWRatio:44,colorBack:"linen",colorFront:"orange"}];function Y(){var e=(0,s.useState)(!1),t=e[0],n=e[1],r=(0,s.useState)(!0),i=r[0],a=r[1];return(0,y.jsxs)("div",{className:"jsx-909327854 not-container",children:[(0,y.jsxs)(c(),{children:[(0,y.jsx)("title",{className:"jsx-909327854",children:"Remotion Multi Player Demo"}),(0,y.jsx)("link",{rel:"icon",href:"/favicon.ico",className:"jsx-909327854"})]}),(0,y.jsxs)("main",{className:"jsx-909327854",children:[(0,y.jsxs)("h1",{className:"jsx-909327854 title",children:[(0,y.jsx)("a",{href:"https://www.remotion.dev/",target:"_blank",className:"jsx-909327854",children:"Remotion"})," AspectRatio Demo by ",(0,y.jsx)("a",{href:"https://github.com/tomByrer",target:"_blank",className:"jsx-909327854",children:"Tom Byrer"})]}),(0,y.jsxs)("p",{className:"jsx-909327854 description",children:["Please help by leaving ",(0,y.jsx)("a",{href:"https://github.com/tomByrer/remotion-aspectratio-demo/",target:"_blank",className:"jsx-909327854",children:"\u2b50 stars & issues on GitHub"}),"."]}),(0,y.jsxs)("h2",{className:"jsx-909327854 title",children:["Film toggles:",(0,y.jsxs)("button",{type:"button",onClick:function(){return n(!i)},className:"jsx-909327854",children:[t?"Hide \ud83d\udcd5":"Show \ud83d\udcd6"," 'Short Remotion Promo'"]}),(0,y.jsxs)("button",{type:"button",onClick:function(){return a(!i)},className:"jsx-909327854",children:[i?"Hide \ud83d\udcd5":"Show \ud83d\udcd6"," 'Time/Frame Test'"]})]}),t?(0,y.jsx)(J,{title:"About Remotion Demo",transcript:X}):(0,y.jsx)("h2",{className:"jsx-909327854 title",children:"\ud83d\uded1 'Short Remotion Promo' is hidden"}),i?(0,y.jsx)(J,{title:"Time/Frame Test",transcript:G}):(0,y.jsx)("h2",{className:"jsx-909327854 title",children:"\ud83d\uded1 'Time/Frame Test' is hidden"})]}),(0,y.jsx)(o(),{id:"1272987146",children:[".container.jsx-909327854{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#124365;}","main.jsx-909327854{padding:0.5rem 0;}","footer.jsx-909327854{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","footer.jsx-909327854 img.jsx-909327854{margin-left:0.5rem;}","footer.jsx-909327854 a.jsx-909327854{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","h1.jsx-909327854{font-size:1.62rem;line-height:1.6;}","code.jsx-909327854{background-color:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}","@media (max-width:600px){.grid.jsx-909327854{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}"]}),(0,y.jsx)(o(),{id:"1610551341",children:["html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;font-size:1.162em;}","*{box-sizing:border-box;}","h2{font-size:1.44rem;line-height:1.44;}","h2 button{margin:0.3236em 0.162em;padding:0.162em;font-size:0.9em;}",".title,.description{margin:0;text-align:center;}",".description{line-height:1.5;font-size:1.3rem;}","a{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}","a:hover,a:focus,a:active{-webkit-text-decoration:underline;text-decoration:underline;}",".player{padding-left:1.618rem;}",".player h6{margin:0.162em 0;font-size:1.162em;color:#000;margin-left:27px;-webkit-transform-origin:-33px 4px;-ms-transform-origin:-33px 4px;transform-origin:-33px 4px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}",".player-controlls{margin-top:27px;}",".player-controlls div span{display:inline-block;}",".player-controlls button{margin:0.3236em 0.162em;padding:0.162em;font-size:1.162em;}",".log{margin-top:27px;height:13em;width:430px;overflow:scroll;font-size:1.162em;}",".transcript,.webvtt{margin-top:27px;width:28em;}","textarea{height:20em;width:inherit;font-size:1.162em;}","h4{margin:0 0 0.618em 0;}"]})]})}},5407:function(e,t,n){"use strict";n.d(t,{YX:function(){return r},eL:function(){return i},um:function(){return c}});var r="#86A8E7",i="#91EAE4",o={"43:18":{info:{about:"ultrawide",ratio:"43/18",float:2.388888888},sizes:{wqhdQuarter:{w:860,h:360},ultrawideSmall:{w:1720,h:720},wqhd:{w:3440,h:1440}}},"64:27":{info:{about:"ultrawide",ratio:"64/20",float:2.388888888,uses:"Dashcam, Anamorphic 1.33x on 4:3"},sizes:{wfhd:{w:2560,h:1080}}},"16:9":{info:{about:"HDTV: common wide ratio",ratio:"16/9",float:1.777777777},sizes:{"240p":{w:426,h:240},"360p":{w:640,h:360},"480p":{w:854,h:480},"720p":{w:1280,h:720},"1080p":{w:1920,h:1080},"1440p":{w:2560,h:1440}}},"4:3":{info:{about:"tube TV, art films, OG YouTube",ratio:"4/3",float:1.333333333},sizes:{qvga:{w:320,h:240},vga:{w:640,h:480},svga:{w:800,h:600},xga:{w:1024,h:768},uxga:{w:1600,h:1200}}},"1:1":{info:{about:"semi-universal soical media",ratio:"1/1",float:1},sizes:{square480:{w:480,h:480},squareHalf:{w:540,h:540},squareTictok:{w:640,h:640},squareTwitter:{w:720,h:720},square:{w:1080,h:1080}}},"4:5":{info:{about:"Instagram portrait",ratio:"4/5",float:.8},sizes:{feed480:{w:480,h:600},feedHalf:{w:540,h:675},feed:{w:1080,h:1350}}},"9:16":{info:{about:"TicTok, common Instagram",ratio:"9/16",float:.5625},sizes:{story480:{w:480,h:854},storyTwitter:{w:720,h:1280},story:{w:1080,h:1920}}}},s=15,a=30,c={DEVELOP:{vidSizes:{square:{info:o["1:1"].info,dimention:o["1:1"].sizes.square480},HDTV:{info:o["16:9"].info,dimention:o["16:9"].sizes["480p"]},feed:{info:o["4:5"].info,dimention:o["4:5"].sizes.feed480},story:{info:o["9:16"].info,dimention:o["9:16"].sizes.story480},SDTV:{info:o["4:3"].info,dimention:o["4:3"].sizes.vga},ultrawide:{info:o["43:18"].info,dimention:o["43:18"].sizes.wqhdQuarter}},fps:s,player:{speed:1.5}},PRODUCTION:{vidSizes:{square:{info:o["1:1"].info,dimention:o["1:1"].sizes.squareTwitter},HDTV:{info:o["16:9"].info,dimention:o["16:9"].sizes["1080p"]},feed:{info:o["4:5"].info,dimention:o["4:5"].sizes.feed},story:{info:o["9:16"].info,dimention:o["9:16"].sizes.storyTwitter},SDTV:{info:o["4:3"].info,dimention:o["4:3"].sizes.xga},ultrawide:{info:o["43:18"].info,dimention:o["43:18"].sizes.ultrawideSmall}},fps:a,player:{speed:1}}}},9037:function(e,t,n){"use strict";n.d(t,{Dm:function(){return f},RO:function(){return h},XK:function(){return p},j1:function(){return m},m9:function(){return i},s8:function(){return c},v0:function(){return u},vh:function(){return o},vr:function(){return d},vw:function(){return s}});var r=n(4406);function i(e){return Math.ceil(e*(0,r.useVideoConfig)().fps)}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return e*(0,r.useVideoConfig)().height*.01}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return e*(0,r.useVideoConfig)().width*.01}function a(e){return Math.max((0,r.useVideoConfig)().height,(0,r.useVideoConfig)().width,e)}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e*a(t)*.01}function l(e){return Math.min((0,r.useVideoConfig)().height,(0,r.useVideoConfig)().width,e)}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e*l(t)*.01}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e*(0,r.useVideoConfig)().height*.005+.5*(0,r.useVideoConfig)().height}function f(){return(0,r.useVideoConfig)().width/(0,r.useVideoConfig)().height}function m(){var e=f();return e>1?e:1/e}function p(e,t){return f()>=t?e:e*t}function h(e){var t=f();if(t>1)return e;var n=1/t*e;return n-=n*n*.11}},5949:function(e,t,n){"use strict";n.r(t),n.d(t,{MovieCamera:function(){return a}});var r=n(2036),i=n(4406),o=n(9037),s=n(2086);function a(e){var t=e.color,n=void 0===t?"#acb0bd":t,a=e.scaleOuter,c=void 0===a?.59:a,l=(0,i.useVideoConfig)();return c=o.XK(c,.9191),(0,s.jsx)(i.AbsoluteFill,{style:{width:l.width,height:l.height,transform:"scale(".concat(c,")")},children:(0,s.jsxs)("svg",{viewBox:"0 0 201.719 389.719",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{fill:n,d:"M127.22 0c-20.599 0-37.69 14.991-40.969 34.656l-5.094.969c-5.99-10.118-17.01-16.906-29.625-16.906-19.007 0-34.406 15.4-34.406 34.406 0 16.16 11.136 29.709 26.156 33.406v3.844h-6.969l-.03-.313L28.032 87H22.25l9.125 19 3.375-.907 1.875-3.062h6.656V145h11.031l-1.281 9.562-26.25 5-5.656-2.937L0 160.656 1.47 172.5l21.219-4.031 4.906-4.938 28.53-6.156L58.158 145h104.72V73.562h-9.188c9.217-7.62 15.094-19.138 15.094-32.03C168.783 18.584 150.166 0 127.221 0zM91.126 62.094a41.66 41.66 0 0 0 9.625 11.469H79.22a34.236 34.236 0 0 0 5.156-10.188l6.75-1.281zm59.75 68.469a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5z"}),(0,s.jsx)("path",{fill:n,d:"M74.92 147.56h67.735v14.286H74.92z"}),(0,s.jsx)("path",(0,r.Z)({fill:n,d:"M126.62 19.57c-11.598 0-21 9.402-21 21s9.402 21 21 21 21-9.402 21-21-9.402-21-21-21zm-2.005 6.198c1.88 0 3.409 1.511 3.409 3.39s-1.53 3.41-3.41 3.41-3.408-1.53-3.408-3.41 1.53-3.39 3.409-3.39zm10.518 6.38c1.88 0 3.409 1.53 3.409 3.409s-1.53 3.409-3.41 3.409-3.408-1.53-3.408-3.409 1.53-3.409 3.409-3.409zm-18.557 2.68c1.88 0 3.39 1.53 3.39 3.409s-1.51 3.408-3.39 3.408-3.41-1.529-3.41-3.408 1.53-3.41 3.41-3.41zm17.318 9.297c1.88 0 3.409 1.51 3.409 3.39s-1.53 3.41-3.41 3.41-3.408-1.53-3.408-3.41 1.53-3.39 3.409-3.39zm-12.578 2.06c1.88 0 3.409 1.51 3.409 3.39s-1.53 3.409-3.41 3.409-3.408-1.53-3.408-3.409 1.53-3.39 3.409-3.39zM51.62 34.57c-9.389 0-17 7.611-17 17s7.611 17 17 17 17-7.611 17-17-7.611-17-17-17zm-1.623 5.017c1.521 0 2.76 1.224 2.76 2.745s-1.239 2.76-2.76 2.76-2.76-1.238-2.76-2.76 1.238-2.745 2.76-2.745zm8.515 5.165c1.52 0 2.76 1.238 2.76 2.76s-1.239 2.76-2.76 2.76-2.76-1.239-2.76-2.76 1.238-2.76 2.76-2.76zm-15.023 2.17c1.52 0 2.744 1.238 2.744 2.76S45.01 52.44 43.49 52.44s-2.76-1.238-2.76-2.76 1.238-2.76 2.76-2.76zm14.019 7.526c1.52 0 2.76 1.223 2.76 2.744s-1.239 2.76-2.76 2.76-2.76-1.238-2.76-2.76 1.238-2.744 2.76-2.744zm-10.183 1.667c1.522 0 2.76 1.223 2.76 2.745s-1.238 2.76-2.76 2.76-2.76-1.239-2.76-2.76 1.239-2.745 2.76-2.745z"},"fill","#fff")),(0,s.jsx)("path",{fill:n,d:"m91.53 161.85 14.156 227.88 6.344-.031 11.78-227.84h-6.405l-8.844 171.62-10.625-171.62H91.53z"}),(0,s.jsx)("path",{fill:n,d:"m118.84 161.85 58.781 216.44.031.156.063.188 5.187-1.25-.031-.156-43.438-215.38h-5.438l27.656 137.31-37.28-137.31h-5.532zM78.59 161.85 35.715 374.54l-.031.156 5.187 1.25.063-.187.031-.156 58.094-213.75h-5.563l-36.561 134.62 27.124-134.62h-5.468zM99.82 245.19h19.489v8.995H99.82z"}),(0,s.jsx)("path",{fill:n,d:"M58.6 244.44h19.489v8.995H58.6zM141.28 244.44h19.489v8.995H141.28zM201.71 69.16l-21.094 12.781h-16.5v31.844h16.5l21.094 12.781V69.16z"})]})})}},881:function(e,t,n){"use strict";n.r(t),n.d(t,{LogoReact:function(){return a}});var r=n(4406),i=n(9037),o=n(5407),s=n(2086);function a(e){e.use;var t=(0,r.useVideoConfig)(),n=Math.min(t.height,t.width),a=.5*n,c=(0,r.useCurrentFrame)(),l=(0,r.spring)({config:{damping:100,mass:1.618},fps:t.fps,frame:c});function u(e){var t=e.rotation,r=.125*n,i=2.2*r,c=2*Math.PI*Math.sqrt(.5*(r*r+i*i)),u=.01666*c;return(0,s.jsxs)("svg",{viewBox:"0 0 ".concat(n," ").concat(n),style:{position:"absolute",transform:"rotate(".concat(t*l,"deg)")},children:[(0,s.jsx)("defs",{children:(0,s.jsxs)("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[(0,s.jsx)("stop",{offset:"0%",stopColor:o.YX}),(0,s.jsx)("stop",{offset:"100%",stopColor:o.eL})]})}),(0,s.jsx)("ellipse",{cx:a,cy:a,rx:r,ry:i,fill:"none",stroke:"url(#gradient)",strokeDasharray:c,strokeDashoffset:c-c*l,strokeLinecap:"round",strokeWidth:u})]})}function d(){var e=i.v0(7.20255);return(0,s.jsxs)("svg",{viewBox:"0 0 ".concat(n," ").concat(n),style:{position:"absolute",transform:"scale(".concat(l,")")},children:[(0,s.jsx)("defs",{children:(0,s.jsxs)("linearGradient",{id:"gradient2",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[(0,s.jsx)("stop",{offset:"0%",stopColor:o.YX}),(0,s.jsx)("stop",{offset:"100%",stopColor:o.eL})]})}),(0,s.jsx)("circle",{r:e,cx:a,cy:a,fill:"url(#gradient2)"})]})}var f=.5*t.width-a,m=.5*t.height-a,p=(0,r.spring)({frame:c,config:{mass:.5},fps:t.fps}),h=(0,r.interpolate)(c,[0,t.durationInFrames],[0,360]);return(0,s.jsxs)("div",{style:{position:"absolute",width:n,height:n,left:f,top:m,transform:"scale(".concat(p,") rotate(").concat(h,"deg)")},children:[(0,s.jsx)(u,{rotation:30}),(0,s.jsx)(u,{rotation:90}),(0,s.jsx)(u,{rotation:-30}),(0,s.jsx)(d,{})]})}},2331:function(e,t,n){"use strict";n.r(t),n.d(t,{LogoRemotion:function(){return d}});var r=n(2036),i=n(4406),o=n(9037),s=n(2086);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e){var t=e.size,n=e.opacity,r=void 0===n?1:n,i=e.color1,o=void 0===i?"#42e9f5":i,a=e.color2,c=void 0===a?"#4290f5":a,l=e.idSlug,u=void 0===l?"gradient".concat(o+c).replaceAll("#",""):l;return(0,s.jsxs)("svg",{width:t,height:t,style:{opacity:r,width:t,height:t,position:"absolute",transform:"rotate(90deg)"},viewBox:"0 0 400 400",children:[(0,s.jsx)("defs",{children:(0,s.jsxs)("linearGradient",{id:u,children:[(0,s.jsx)("stop",{stopColor:o,stopOpacity:1,offset:"0"}),(0,s.jsx)("stop",{stopColor:c,stopOpacity:1,offset:"100%"})]})}),(0,s.jsx)("g",{stroke:"url(#".concat(u,")"),strokeWidth:"100",strokeLinejoin:"round",children:(0,s.jsx)("path",{fill:"url(#".concat(u,")"),d:"M 102 272 a 196 100 0 0 0 195 5 A 196 240 0 0 0 200 102.259 A 196 240 0 0 0 102 272 z"})})]})}var u={justifyContent:"center",alignItems:"center"};function d(e){var t=e.animationSeconds,n=void 0===t?.618:t,r=e.use,a=void 0===r?"logo":r,d=e.opacityReduce,f=void 0===d?"logo"===a?1:.1618:d,m=e.fitDimention,p=void 0===m?220:m,h=(0,i.useVideoConfig)();function g(e){return(0,i.spring)({frame:(0,i.useCurrentFrame)()-e*o.m9(n),fps:h.fps,config:{mass:2,damping:200}})}var x="transition"===a?o.s8(214-33*o.j1()):p,v=[1.3185694*x,1.1157082*x,.9128541*x,.71*x],y=.5*p,j=.5*h.width-y,b=.5*h.height-y;return(0,s.jsxs)("div",{className:a,style:{position:"absolute",width:p,height:p,left:j,top:b},children:[(0,s.jsx)(i.AbsoluteFill,{style:c(c({},u),{},{transform:"scale(".concat(g(0),")")}),children:(0,s.jsx)(l,{size:v[0],color1:"white",color2:"white"})}),(0,s.jsx)(i.AbsoluteFill,{style:c(c({},u),{},{transform:"scale(".concat(g(.6),")")}),children:(0,s.jsx)(l,{size:v[1],opacity:.2*f})}),(0,s.jsx)(i.AbsoluteFill,{style:c(c({},u),{},{transform:"scale(".concat(g(1),")")}),children:(0,s.jsx)(l,{size:v[2],opacity:.4*f})}),(0,s.jsx)(i.AbsoluteFill,{style:c(c({},u),{},{transform:"scale(".concat(g(2),")")}),children:(0,s.jsx)(l,{size:v[3],opacity:f})})]})}},6443:function(e,t,n){"use strict";var r=n(5949),i=n(881),o=n(2331);e.exports={MovieCamera:r.MovieCamera,React:i.LogoReact,Remotion:o.LogoRemotion}},3502:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9523)}])}},function(e){e.O(0,[774,596,434,888,179],(function(){return t=3502,e(e.s=t);var t}));var t=e.O();_N_E=t}]);