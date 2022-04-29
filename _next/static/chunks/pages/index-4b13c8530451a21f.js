(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2090:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return G}});var i={};n.r(i),n.d(i,{Lift:function(){return E},Right:function(){return R},SunriseRight:function(){return P}});var r=n(8995),o=n.n(r),s=n(1987),a=n(7607),c=n.n(a),l=n(9080),u=n(9338),d=n(6078),f=n(785),m=n(9496),p=n(9928),h=n(9463),g=h.um.DEVELOP.fps;function x(e){var t=JSON.parse(JSON.stringify(e)),n=0,i=0,r="WebVTT - generated using TomByrer's prep-transcript\n",o=0;for(t.length;o<t.length;o++){var s,a=t[o],c=null!==(s=a.timeSrtSec)&&void 0!==s?s:n;a.timeSrtSec=c;var l=c*g;a.timeSrtFrame=Math.round(l+i),i+=l-a.timeSrtFrame,a.timeEndSec?a.timeDurSecs=a.timeEndSec-c:a.timeDurSecs?a.timeEndSec=c+a.timeDurSecs:(a.timeEndSec=t[o+1].timeSrtSec,a.timeDurSecs=a.timeEndSec-c),n=a.timeEndSec;var u=a.timeEndSec*g;a.timeEndFrame=Math.round(u+i),i+=u-a.timeEndFrame,a.timeDurFrames=a.timeEndFrame-a.timeSrtFrame+1,a.title||(a.title="Sequence "+o),r+="\n".concat(new Date(1e3*c).toISOString().slice(11,23)," --\x3e ").concat(new Date(1e3*n).toISOString().slice(11,23),"\n- ").concat(a.title,"\n"),r+=a.subtitle?"- ".concat(a.subtitle,"\n"):"",t[o]=a}return{tr:t,vtt:r}}var v=[{layout:"IntroCode",timeDurSecs:3.75,title:"{{techText}}",fontVWRatio:3.5,colorBack:"#10131f",colorFront:"#d9d0c6"},{layout:"IntroCode",timeDurSecs:3.75,title:"What would you create if you could...",fontVWRatio:3.5,colorBack:"#10131f",colorFront:"#d9d0c6"},{layout:"ThreeRowsImgTitleSub",timeDurSecs:7.5,logo:"<Logos.React />",logoAnimation:"<Slide.SunriseRight />",animatedLogo:"<Slide.SunriseRight><Logos.React /></Slide.SunriseRight>",title:"use ReactJS to build animations...",subtitle:"Animate with web technologies you know & love.",colorBack:"#161b28",colorFront:"#e9e4d7"},{layout:"ThreeRowsImgTitleSub",timeDurSecs:7.5,logo:"<Logos.MovieCamera />",logoAnimation:"<Slide.Right pcLeftStart={-81} />",animatedLogo:"<Slide.Right pcLeftStart={-81}><Logos.MovieCamera /></Slide.Right>",title:"then capture them as a movie...",subtitle:"Export a MP4 file or use the <Player>.",colorBack:"#21304c",colorFront:"#d7d9df"},{layout:"ThreeRowsImgTitleSub",timeDurSecs:7.5,transition:"<Logos.Remotion use='transition'/>",logo:"<Logos.Remotion />",logoAnimation:"<Slide.Lift />",animatedLogo:"<Logos.Remotion use='transition'/><Slide.Lift><Logos.Remotion /></Slide.Lift>",title:"with Remotion!",subtitle:"Create videos programmatically in React.",colorBack:"#21304c",colorFront:"#21304c"}],y=n(3426),j=n(3542);function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.618,t=arguments.length>1?arguments[1]:void 0,n=(0,y.useCurrentFrame)(),i="undefined"!==typeof e?j.m9(e):j.m9(.5),r="undefined"!==typeof t?i*t:.25*i;return(0,y.interpolate)(n,[0,r,i-r,i],[0,.32,.8382,.999],{extrapolateLeft:"clamp",extrapolateRight:"clamp"})}function w(e,t){var n=(0,y.useCurrentFrame)(),i="undefined"!==typeof e?j.m9(e):j.m9(.5),r="undefined"!==typeof t?i*t:.25*i;return(0,y.interpolate)(n,[0,r,i-r,i],[0,1,.8382,0],{extrapolateLeft:"clamp",extrapolateRight:"clamp"})}var S=n(4637);function k(e){var t=e.aspects,n=void 0===t?{timeDurSecs:2,title:"def title text",fontVWRatio:3.7234,colorBack:"#111",colorFront:"#eee"}:t;return(0,S.jsx)("div",{style:{flex:"90",backgroundColor:n.colorBack},children:(0,S.jsx)("pre",{children:(0,S.jsx)("code",{style:{position:"absolute",margin:"0 6.18%",bottom:j.vh(12.9629),color:n.colorFront,fontFamily:"monospace",fontSize:j.vw(n.fontVWRatio),textAlign:"left",opacity:w(n.timeDurSecs)},children:n.title})})})}var O=n(3403),C=n.n(O);function z(e){var t=e.startSeconds,n=void 0===t?0:t,i=e.startFrames,r=void 0===i?Math.round(j.m9(n)):i,o=e.layout,s=void 0===o?"none":o,a=e.children;return(0,S.jsx)(y.Sequence,{from:r,layout:s,children:a})}var F=n(2396),L=["distanceInVH","transitionStart"],T=["transitionStart","vhAdjust","pcLeftStart"],D=["transitionStart","vhAdjust","pcLeftStart"];function E(e){var t=e.distanceInVH,n=void 0===t?-13.8888:t,i=e.transitionStart,r=void 0===i?j.m9(.833333):i,o=(0,F.Z)(e,L),s=1+.44*(2.388888888-j.Dm()),a=(0,y.useVideoConfig)().height*(1-s)*.09,c=(0,y.interpolate)((0,y.spring)({frame:(0,y.useCurrentFrame)()-r,fps:(0,y.useVideoConfig)().fps,config:{damping:100,mass:.5}}),[0,1],[a,j.vh(n)]);return(0,S.jsx)("div",{style:{transform:"scale(".concat(s,") translateY(").concat(c,"px)")},children:o.children})}function R(e){var t=e.transitionStart,n=void 0===t?0:t,i=e.vhAdjust,r=void 0===i?-13.8888:i,o=e.pcLeftStart,s=void 0===o?-100:o,a=(0,F.Z)(e,T),c=(0,y.interpolate)((0,y.spring)({frame:(0,y.useCurrentFrame)()-n,fps:(0,y.useVideoConfig)().fps,config:{damping:61,mass:8.09}}),[0,1],[s,0]);return(0,S.jsx)("div",{style:{transform:"translate(".concat(c,"%, ").concat(j.vh(r),"px)")},children:a.children})}function P(e){var t=e.transitionStart,n=void 0===t?0:t,i=e.vhAdjust,r=void 0===i?63.8888:i,o=e.pcLeftStart,s=void 0===o?-47:o,a=(0,F.Z)(e,D),c=(0,y.interpolate)((0,y.spring)({frame:(0,y.useCurrentFrame)()-n,fps:(0,y.useVideoConfig)().fps,config:{damping:61,mass:8.09}}),[0,1],[s,0]),l=j.RO(1),u=j.vh(r),d=j.Dm();d<1&&(u+=u*(.065/d));var f=j.vr(-1.2*c)-u;return(0,S.jsx)("div",{style:{transform:"translate(".concat(c,"%, ").concat(f,"px) scale(").concat(l,")")},children:a.children})}var V=n(525),M=n(1781);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){(0,M.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e){var t=e.displayText,n=void 0===t?"subtitle text":t,i=e.style,r=void 0===i?{color:"teal"}:i,o=j.Dm()<0?null:700,s=j.s8(3.7234,o);return(0,S.jsx)("h2",{style:N(N({},r),{},{fontFamily:"Helvetica, Arial",fontSize:s,fontWeight:"lighter",textAlign:"center",opacity:b(.618)}),children:n})}function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){(0,M.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=function(e){var t=e.displayText,n=void 0===t?"title text":t,i=e.style,r=void 0===i?{color:"red"}:i,o=n.split(" ").map((function(e){return" ".concat(e," ")})),s=(0,y.useVideoConfig)(),a=j.Dm(),c=a>1?null:s.height+s.height*(a-.5)*.4,l=j.s8(5.05,c),u=j.s8(.505,c),d=(0,y.useCurrentFrame)();return(0,S.jsx)("h1",{style:B(B({},r),{},{fontFamily:"SF Pro Text, Helvetica, Arial",fontWeight:"bold",fontSize:l,textAlign:"center"}),children:o.map((function(e,t){return(0,S.jsx)("span",{style:{marginRight:u,marginLeft:u,transform:"scale(".concat((0,y.spring)({fps:s.fps,frame:d-t*j.m9(.1618),config:{damping:100,stiffness:200,mass:.5}}),")"),display:"inline-block"},children:e},e)}))})};function q(e){var t=e.aspects,n=void 0===t?{timeDurSecs:2,logo:(0,S.jsx)("div",{children:"logo"}),title:"def title text",subtitle:"def subtitle text",colorBack:"#111",colorFront:"#eee"}:t,r=(0,S.jsx)(C(),{renderInWrapper:!1,components:{Logos:V,Slide:i},jsx:n.animatedLogo});return(0,S.jsxs)("div",{style:{width:"100%",display:"grid",gridTemplateRows:"8fr 1fr 2.5fr",gridGap:"0",backgroundColor:n.colorBack},children:[r,(0,S.jsx)(z,{startSeconds:.1618*n.timeDurSecs,style:{},children:(0,S.jsx)(W,{displayText:n.title,style:{gridRow:"2",margin:"0 0.5em",color:n.colorFront}})}),(0,S.jsx)(z,{startSeconds:.45*n.timeDurSecs,style:{margin:"0"},children:(0,S.jsx)(A,{displayText:n.subtitle,style:{gridRow:"3",alignSelf:"start",margin:"0.18em 0.5em 0 0.5em",color:n.colorFront}})})]})}function _(e){var t=e.transcript,n=e.techText;return(0,S.jsx)(S.Fragment,{children:t.map((function(e,t){j.m9(e.timeDurSecs);var i=t+e.layout;return"IntroCode"===e.layout?(e.title=e.title.replace(/{{techText}}/,n),(0,S.jsx)(y.Sequence,{from:e.timeSrtFrame,durationInFrames:e.timeDurFrames,children:(0,S.jsx)(k,{aspects:e})},i)):"ThreeRowsImgTitleSub"===e.layout?(0,S.jsx)(y.Sequence,{from:e.timeSrtFrame,durationInFrames:e.timeDurFrames,children:(0,S.jsx)(q,{durationInSeconds:e.timeDurSecs,aspects:e})},i):void 0}))})}function Z(e){var t=e.durationInFrames,n=void 0===t?(0,y.useVideoConfig)().durationInFrames:t,i=e.speed,r=void 0===i?1:i,o=(e.titleText,e.frontColor),s=void 0===o?"#39f437":o,a=e.backColor,c=void 0===a?"#161b28d1":a,l=(0,y.useCurrentFrame)();return(0,S.jsx)("div",{style:{flex:"90",backgroundColor:c},children:(0,S.jsx)("pre",{children:(0,S.jsx)("code",{style:{position:"absolute",margin:"-25px 0 0 355px",color:s,fontFamily:"monospace",fontSize:"27px",textAlign:"left",opacity:90},children:"".concat(l,"/").concat(l-n," FPS:").concat((0,y.useVideoConfig)().fps," Speed:").concat(r)})})})}function J(){J=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,i,r){var o=new RegExp(e,i);return t.set(o,r||t.get(e)),(0,d.Z)(o,n.prototype)}function i(e,n){var i=t.get(n);return Object.keys(i).reduce((function(t,n){return t[n]=e[i[n]],t}),Object.create(null))}return(0,u.Z)(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=i(n,this)),n},n.prototype[Symbol.replace]=function(n,r){if("string"===typeof r){var o=t.get(this);return e[Symbol.replace].call(this,n,r.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+o[t]})))}if("function"===typeof r){var s=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!==typeof e[e.length-1]&&(e=[].slice.call(e)).push(i(e,s)),r.apply(this,e)}))}return e[Symbol.replace].call(this,n,r)},J.apply(this,arguments)}function X(){var e=(0,m.useState)(v),t=e[0],n=e[1],i=(0,m.useState)(x(t)),r=i[0],o=i[1],s=(0,m.useState)(r.tr.at(-1).timeEndFrame),a=s[0],c=s[1];(0,m.useEffect)((function(){o(x(t)),c(r.tr.at(-1).timeEndFrame),console.log("preparedTR",r.tr)}),t);var u=(0,m.useState)(h.um.DEVELOP.fps),d=u[0],g=(u[1],(0,m.useState)(h.um.DEVELOP.vidSizes)),y=g[0],j=(g[1],Object.keys(y)),b=(0,m.useState)(h.um.DEVELOP.player.speed),w=b[0],k=b[1],O=(0,m.useState)(!1),C=O[0],z=O[1],F=(0,m.useState)((function(){return["Configuring: "].concat((0,f.Z)(j),["Playback speed: "+w])})),L=F[0],T=F[1];function D(e){T((function(t){return[].concat((0,f.Z)(t),[" ".concat(Date.now()," ").concat(e)])}))}var E={};j.map((function(e,t){E[e]=(0,m.useRef)(null)}));var R=(0,m.useRef)(null);function P(){return R.current.getCurrentFrame()}function V(e){return J(/^([\$A-Z_a-z]+([\$0-9A-Z_a-z]*))\((.*)\)/,{methodName:1,methodParam:3}).exec(e).groups}function M(e){D("ctr "+e);var t=V(e),n=t.methodName,i=t.methodParam;R.current[n](i)}function I(e){D("all "+e);var t=V(e),n=t.methodName,i=t.methodParam;j.map((function(e,t){E[e].current[n](i)}))}function N(e){D("setPlaybackRate: "+e),k(e)}return(0,m.useEffect)((function(){var e=function(){I("play()")},t=function(){I("pause()")},n=function(e){I("seekTo(".concat(e.detail.frame,")"))},i=function(){D("ended")},r=function(e){D("error")},o=R.current;if(o)return o.addEventListener("play",e),o.addEventListener("pause",t),o.addEventListener("seeked",n),o.addEventListener("ended",i),o.addEventListener("error",r),function(){o.removeEventListener("play",e),o.removeEventListener("pause",t),o.removeEventListener("seeked",n),o.removeEventListener("ended",i),o.removeEventListener("error",r)}}),[]),(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"1.16vmax",margin:"0 1vw"},children:[(0,S.jsxs)("div",{className:"player-controlls",onMouseEnter:function(){return z(!0)},onMouseLeave:function(){return z(!1)},style:{alignSelf:"start",opacity:C?1:.1618,width:"clamp(475px, 30vw, 1000px)"},children:[(0,S.jsx)(p.J5,{component:Z,inputProps:{speed:w},fps:d,durationInFrames:a,compositionWidth:900,compositionHeight:80,playbackRate:w,ref:R,controls:!0,style:{height:"76px",width:"clamp(475px, 30vw, 1000px)",backgroundColor:"black"}},"controller"),(0,S.jsxs)("div",{children:[(0,S.jsx)("button",{type:"button",onClick:function(){return M("toggle()")},children:"\u23ef\ufe0f Toggle"}),(0,S.jsxs)("span",{children:[(0,S.jsx)("button",{type:"button",onClick:function(){return M("seekTo(50)")},children:"seekTo 50"}),(0,S.jsx)("button",{type:"button",onClick:function(){return M("seekTo(200)")},children:"seekTo 200"})]}),(0,S.jsxs)("span",{children:[(0,S.jsx)("button",{type:"button",onClick:function(){return M("seekTo(".concat(P()-5*d,")"))},children:"-5 seconds"}),(0,S.jsx)("button",{type:"button",onClick:function(){return M("seekTo(".concat(P()+5*d,")"))},children:"+5 seconds"})]}),(0,S.jsxs)("span",{children:[(0,S.jsx)("button",{type:"button",onClick:function(){return M("seekTo(".concat(P()-1,")"))},children:"-1 frame"}),"\xa0",(0,S.jsx)("button",{type:"button",onClick:function(){return M("seekTo(".concat(P()+1,")"))},children:"+1 frame"})]}),(0,S.jsx)("span",{children:(0,S.jsx)("button",{type:"button",onClick:function(){return T((function(e){return[].concat((0,f.Z)(e),["currentFrame=".concat(P())])}))},children:"log currentFrame"})}),(0,S.jsxs)("span",{children:[(0,S.jsx)("button",{type:"button",onClick:function(){return N(.5)},children:"\ud83d\udc22 0.5 speed"}),(0,S.jsx)("button",{type:"button",onClick:function(){return N(1)},children:"1x speed"}),(0,S.jsx)("button",{type:"button",onClick:function(){return N(2)},children:"\ud83d\udc07 2x speed"})]})]}),(0,S.jsxs)("div",{className:"log",onMouseEnter:function(){return z(!0)},onMouseLeave:function(){return z(!1)},style:{alignSelf:"start",opacity:C?1:.1618},children:[(0,S.jsx)("h4",{children:"Log"}),L.slice(0).reverse().slice(0,7).reverse().map((function(e){return(0,S.jsx)("div",{children:e},e)}))]})]}),(0,S.jsxs)("div",{className:"transcript",children:[(0,S.jsx)("h4",{children:"Transcript"}),(0,S.jsx)("p",{children:"Use buttons to change the script.  Below is the JSON configureation.  Experiment by editing it!  If you 'break' the video, then reload the page."}),(0,S.jsx)("textarea",{onChange:function(e){return n(JSON.parse(e.target.value))},value:JSON.stringify(t,void 0,2)})]}),(0,S.jsxs)("div",{className:"webvtt",children:[(0,S.jsx)("h4",{children:"WebVTT"}),(0,S.jsx)("p",{children:(0,S.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API#webvtt_files",children:"Web Video Text Tracks (captions)"})}),(0,S.jsx)("textarea",{value:r.vtt})]}),Object.entries(y).map((function(e,t){var n=(0,l.Z)(e,2),i=n[0],o=n[1];return(0,S.jsxs)("div",{className:"player",children:[(0,S.jsx)("h6",{style:{opacity:C?1:.1618},children:o.info.ratio+" ~ "+o.info.about}),(0,S.jsx)(p.J5,{component:_,inputProps:{transcript:r.tr,techText:"aspectratio: ".concat(i,"-").concat(o.info.ratio," ").concat(JSON.stringify(o.dimention))},fps:d,durationInFrames:a,compositionWidth:o.dimention.w,compositionHeight:o.dimention.h,playbackRate:w,ref:E[i],style:{outline:"0.16rem dashed #777"}},"remotion"+t+i)]},"playerdiv"+t+i)}))]})})}function G(){return(0,S.jsxs)("div",{className:"jsx-2990485341 not-container",children:[(0,S.jsxs)(s.default,{children:[(0,S.jsx)("title",{className:"jsx-2990485341",children:"Remotion Multi Player Demo"}),(0,S.jsx)("link",{rel:"icon",href:"/favicon.ico",className:"jsx-2990485341"})]}),(0,S.jsxs)("main",{className:"jsx-2990485341",children:[(0,S.jsx)("h3",{className:"jsx-2990485341 title",children:"Remotion Player System"}),(0,S.jsxs)("h4",{className:"jsx-2990485341 title",children:["By ",(0,S.jsx)(c(),{href:"/",children:"Tom Byrer"})," using ",(0,S.jsx)("a",{href:"https://www.remotion.dev/",target:"_blank",className:"jsx-2990485341",children:"Remotion"})]}),(0,S.jsx)(X,{})]}),(0,S.jsx)(o(),{id:"3104163109",children:[".container.jsx-2990485341{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#124365;}","main.jsx-2990485341{padding:0.5rem 0;}","footer.jsx-2990485341{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","footer.jsx-2990485341 img.jsx-2990485341{margin-left:0.5rem;}","footer.jsx-2990485341 a.jsx-2990485341{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","a.jsx-2990485341{color:inherit;-webkit-text-decoration:none;text-decoration:none;}",".title.jsx-2990485341 a.jsx-2990485341{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}",".title.jsx-2990485341 a.jsx-2990485341:hover,.title.jsx-2990485341 a.jsx-2990485341:focus,.title.jsx-2990485341 a.jsx-2990485341:active{-webkit-text-decoration:underline;text-decoration:underline;}",".title.jsx-2990485341{margin:0;line-height:1.15;font-size:1.6rem;}",".title.jsx-2990485341,.description.jsx-2990485341{text-align:center;}",".description.jsx-2990485341{line-height:1.5;font-size:1.3rem;}","code.jsx-2990485341{background-color:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}","@media (max-width:600px){.grid.jsx-2990485341{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}"]}),(0,S.jsx)(o(),{id:"359903089",children:["html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;font-size:1.162em;}","*{box-sizing:border-box;}",".player{padding-left:22px;}",".player h6{margin:0.162em 0;font-size:1.162em;color:#000;margin-left:27px;-webkit-transform-origin:-27px 0;-ms-transform-origin:-27px 0;transform-origin:-27px 0;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}",".player-controlls{margin-top:27px;}",".player-controlls div span{display:inline-block;}",".player-controlls button{margin:0.3236em 0.162em;padding:0.162em;font-size:1.162em;}",".log{margin-top:27px;font-size:1.162em;height:13em;}",".transcript,.webvtt{margin-top:27px;width:28em;}","textarea{height:18em;width:inherit;font-size:1.162em;}","h4{margin:0 0 0.618em 0;}"]})]})}},9463:function(e,t,n){"use strict";n.d(t,{YX:function(){return i},eL:function(){return r},um:function(){return c}});var i="#86A8E7",r="#91EAE4",o={"43:18":{info:{about:"ultrawide",ratio:"43/18",float:2.388888888},sizes:{wqhdQuarter:{w:860,h:360},ultrawideSmall:{w:1720,h:720},wqhd:{w:3440,h:1440}}},"64:27":{info:{about:"ultrawide",ratio:"64/20",float:2.388888888,uses:"Dashcam, Anamorphic 1.33x on 4:3"},sizes:{wfhd:{w:2560,h:1080}}},"16:9":{info:{about:"HDTV: common horizontally wide ratio",ratio:"16/9",float:1.777777777},sizes:{"240p":{w:426,h:240},"360p":{w:640,h:360},"480p":{w:854,h:480},"720p":{w:1280,h:720},"1080p":{w:1920,h:1080},"1440p":{w:2560,h:1440}}},"4:3":{info:{about:"tube TV, art films, OG YouTube",ratio:"4/3",float:1.333333333},sizes:{qvga:{w:320,h:240},vga:{w:640,h:480},svga:{w:800,h:600},xga:{w:1024,h:768},uxga:{w:1600,h:1200}}},"1:1":{info:{about:"semi-universal soical media",ratio:"1/1",float:1},sizes:{squareHalf:{w:540,h:540},squareTictok:{w:640,h:640},squareTwitter:{w:720,h:720},square:{w:1080,h:1080}}},"4:5":{info:{about:"Instagram portrait",ratio:"4/5",float:.8},sizes:{feed480:{w:480,h:600},feedHalf:{w:540,h:675},feed:{w:1080,h:1350}}},"9:16":{info:{about:"TicTok, common Instagram",ratio:"9/16",float:.5625},sizes:{story480:{w:480,h:854},storyTwitter:{w:720,h:1280},story:{w:1080,h:1920}}}},s=15,a=30,c={DEVELOP:{vidSizes:{square:{info:o["1:1"].info,dimention:o["1:1"].sizes.squareHalf},HDTV:{info:o["16:9"].info,dimention:o["16:9"].sizes["480p"]},feed:{info:o["4:5"].info,dimention:o["4:5"].sizes.feed480},story:{info:o["9:16"].info,dimention:o["9:16"].sizes.story480},SDTV:{info:o["4:3"].info,dimention:o["4:3"].sizes.vga},ultrawide:{info:o["43:18"].info,dimention:o["43:18"].sizes.wqhdQuarter}},fps:s,player:{speed:1.5}},PRODUCTION:{vidSizes:{square:{info:o["1:1"].info,dimention:o["1:1"].sizes.squareTwitter},HDTV:{info:o["16:9"].info,dimention:o["16:9"].sizes["1080p"]},feed:{info:o["4:5"].info,dimention:o["4:5"].sizes.feed},story:{info:o["9:16"].info,dimention:o["9:16"].sizes.storyTwitter},SDTV:{info:o["4:3"].info,dimention:o["4:3"].sizes.xga},ultrawide:{info:o["43:18"].info,dimention:o["43:18"].sizes.ultrawideSmall}},fps:a,player:{speed:1}}}},3542:function(e,t,n){"use strict";n.d(t,{Dm:function(){return f},RO:function(){return h},XK:function(){return p},j1:function(){return m},m9:function(){return r},s8:function(){return c},v0:function(){return u},vh:function(){return o},vr:function(){return d},vw:function(){return s}});var i=n(3426);function r(e){return Math.ceil(e*(0,i.useVideoConfig)().fps)}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return e*(0,i.useVideoConfig)().height*.01}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return e*(0,i.useVideoConfig)().width*.01}function a(e){return Math.max((0,i.useVideoConfig)().height,(0,i.useVideoConfig)().width,e)}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e*a(t)*.01}function l(){return Math.min((0,i.useVideoConfig)().height,(0,i.useVideoConfig)().width)}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return e*l()*.01}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e*(0,i.useVideoConfig)().height*.005+.5*(0,i.useVideoConfig)().height}function f(){return(0,i.useVideoConfig)().width/(0,i.useVideoConfig)().height}function m(){var e=f();return e>1?e:1/e}function p(e,t){return f()>=t?e:e*t}function h(e){var t=f();if(t>1)return e;var n=1/t*e;return n-=n*n*.11}},7109:function(e,t,n){"use strict";n.r(t),n.d(t,{MovieCamera:function(){return a}});var i=n(1781),r=n(3426),o=n(3542),s=n(4637);function a(e){var t=e.color,n=void 0===t?"#acb0bd":t,a=e.scaleOuter,c=void 0===a?.59:a,l=(0,r.useVideoConfig)();return c=o.XK(c,.9191),(0,s.jsx)(r.AbsoluteFill,{style:{width:l.width,height:l.height,transform:"scale(".concat(c,")")},children:(0,s.jsxs)("svg",{viewBox:"0 0 201.719 389.719",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{fill:n,d:"M127.22 0c-20.599 0-37.69 14.991-40.969 34.656l-5.094.969c-5.99-10.118-17.01-16.906-29.625-16.906-19.007 0-34.406 15.4-34.406 34.406 0 16.16 11.136 29.709 26.156 33.406v3.844h-6.969l-.03-.313L28.032 87H22.25l9.125 19 3.375-.907 1.875-3.062h6.656V145h11.031l-1.281 9.562-26.25 5-5.656-2.937L0 160.656 1.47 172.5l21.219-4.031 4.906-4.938 28.53-6.156L58.158 145h104.72V73.562h-9.188c9.217-7.62 15.094-19.138 15.094-32.03C168.783 18.584 150.166 0 127.221 0zM91.126 62.094a41.66 41.66 0 0 0 9.625 11.469H79.22a34.236 34.236 0 0 0 5.156-10.188l6.75-1.281zm59.75 68.469a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5z"}),(0,s.jsx)("path",{fill:n,d:"M74.92 147.56h67.735v14.286H74.92z"}),(0,s.jsx)("path",(0,i.Z)({fill:n,d:"M126.62 19.57c-11.598 0-21 9.402-21 21s9.402 21 21 21 21-9.402 21-21-9.402-21-21-21zm-2.005 6.198c1.88 0 3.409 1.511 3.409 3.39s-1.53 3.41-3.41 3.41-3.408-1.53-3.408-3.41 1.53-3.39 3.409-3.39zm10.518 6.38c1.88 0 3.409 1.53 3.409 3.409s-1.53 3.409-3.41 3.409-3.408-1.53-3.408-3.409 1.53-3.409 3.409-3.409zm-18.557 2.68c1.88 0 3.39 1.53 3.39 3.409s-1.51 3.408-3.39 3.408-3.41-1.529-3.41-3.408 1.53-3.41 3.41-3.41zm17.318 9.297c1.88 0 3.409 1.51 3.409 3.39s-1.53 3.41-3.41 3.41-3.408-1.53-3.408-3.41 1.53-3.39 3.409-3.39zm-12.578 2.06c1.88 0 3.409 1.51 3.409 3.39s-1.53 3.409-3.41 3.409-3.408-1.53-3.408-3.409 1.53-3.39 3.409-3.39zM51.62 34.57c-9.389 0-17 7.611-17 17s7.611 17 17 17 17-7.611 17-17-7.611-17-17-17zm-1.623 5.017c1.521 0 2.76 1.224 2.76 2.745s-1.239 2.76-2.76 2.76-2.76-1.238-2.76-2.76 1.238-2.745 2.76-2.745zm8.515 5.165c1.52 0 2.76 1.238 2.76 2.76s-1.239 2.76-2.76 2.76-2.76-1.239-2.76-2.76 1.238-2.76 2.76-2.76zm-15.023 2.17c1.52 0 2.744 1.238 2.744 2.76S45.01 52.44 43.49 52.44s-2.76-1.238-2.76-2.76 1.238-2.76 2.76-2.76zm14.019 7.526c1.52 0 2.76 1.223 2.76 2.744s-1.239 2.76-2.76 2.76-2.76-1.238-2.76-2.76 1.238-2.744 2.76-2.744zm-10.183 1.667c1.522 0 2.76 1.223 2.76 2.745s-1.238 2.76-2.76 2.76-2.76-1.239-2.76-2.76 1.239-2.745 2.76-2.745z"},"fill","#fff")),(0,s.jsx)("path",{fill:n,d:"m91.53 161.85 14.156 227.88 6.344-.031 11.78-227.84h-6.405l-8.844 171.62-10.625-171.62H91.53z"}),(0,s.jsx)("path",{fill:n,d:"m118.84 161.85 58.781 216.44.031.156.063.188 5.187-1.25-.031-.156-43.438-215.38h-5.438l27.656 137.31-37.28-137.31h-5.532zM78.59 161.85 35.715 374.54l-.031.156 5.187 1.25.063-.187.031-.156 58.094-213.75h-5.563l-36.561 134.62 27.124-134.62h-5.468zM99.82 245.19h19.489v8.995H99.82z"}),(0,s.jsx)("path",{fill:n,d:"M58.6 244.44h19.489v8.995H58.6zM141.28 244.44h19.489v8.995H141.28zM201.71 69.16l-21.094 12.781h-16.5v31.844h16.5l21.094 12.781V69.16z"})]})})}},99:function(e,t,n){"use strict";n.r(t),n.d(t,{LogoReact:function(){return a}});var i=n(3426),r=n(3542),o=n(9463),s=n(4637);function a(e){e.use;var t=(0,i.useVideoConfig)(),n=Math.min(t.height,t.width),a=.5*n,c=(0,i.useCurrentFrame)(),l=(0,i.spring)({config:{damping:100,mass:1.618},fps:t.fps,frame:c});function u(e){var t=e.rotation,i=.125*n,r=2.2*i,c=2*Math.PI*Math.sqrt(.5*(i*i+r*r)),u=.01666*c;return(0,s.jsxs)("svg",{viewBox:"0 0 ".concat(n," ").concat(n),style:{position:"absolute",transform:"rotate(".concat(t*l,"deg)")},children:[(0,s.jsx)("defs",{children:(0,s.jsxs)("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[(0,s.jsx)("stop",{offset:"0%",stopColor:o.YX}),(0,s.jsx)("stop",{offset:"100%",stopColor:o.eL})]})}),(0,s.jsx)("ellipse",{cx:a,cy:a,rx:i,ry:r,fill:"none",stroke:"url(#gradient)",strokeDasharray:c,strokeDashoffset:c-c*l,strokeLinecap:"round",strokeWidth:u})]})}function d(){var e=r.v0(7.20255);return(0,s.jsxs)("svg",{viewBox:"0 0 ".concat(n," ").concat(n),style:{position:"absolute",transform:"scale(".concat(l,")")},children:[(0,s.jsx)("defs",{children:(0,s.jsxs)("linearGradient",{id:"gradient2",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[(0,s.jsx)("stop",{offset:"0%",stopColor:o.YX}),(0,s.jsx)("stop",{offset:"100%",stopColor:o.eL})]})}),(0,s.jsx)("circle",{r:e,cx:a,cy:a,fill:"url(#gradient2)"})]})}var f=.5*t.width-a,m=.5*t.height-a,p=(0,i.spring)({frame:c,config:{mass:.5},fps:t.fps}),h=(0,i.interpolate)(c,[0,t.durationInFrames],[0,360]);return(0,s.jsxs)("div",{style:{position:"absolute",width:n,height:n,left:f,top:m,transform:"scale(".concat(p,") rotate(").concat(h,"deg)")},children:[(0,s.jsx)(u,{rotation:30}),(0,s.jsx)(u,{rotation:90}),(0,s.jsx)(u,{rotation:-30}),(0,s.jsx)(d,{})]})}},8118:function(e,t,n){"use strict";n.r(t),n.d(t,{LogoRemotion:function(){return d}});var i=n(1781),r=n(3426),o=n(3542),s=n(4637);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e){var t=e.size,n=e.opacity,i=void 0===n?1:n,r=e.color1,o=void 0===r?"#42e9f5":r,a=e.color2,c=void 0===a?"#4290f5":a,l=e.idSlug,u=void 0===l?"gradient".concat(o+c).replaceAll("#",""):l;return(0,s.jsxs)("svg",{width:t,height:t,style:{opacity:i,width:t,height:t,position:"absolute",transform:"rotate(90deg)"},viewBox:"0 0 400 400",children:[(0,s.jsx)("defs",{children:(0,s.jsxs)("linearGradient",{id:u,children:[(0,s.jsx)("stop",{stopColor:o,stopOpacity:1,offset:"0"}),(0,s.jsx)("stop",{stopColor:c,stopOpacity:1,offset:"100%"})]})}),(0,s.jsx)("g",{stroke:"url(#".concat(u,")"),strokeWidth:"100",strokeLinejoin:"round",children:(0,s.jsx)("path",{fill:"url(#".concat(u,")"),d:"M 102 272 a 196 100 0 0 0 195 5 A 196 240 0 0 0 200 102.259 A 196 240 0 0 0 102 272 z"})})]})}var u={justifyContent:"center",alignItems:"center"};function d(e){var t=e.animationSeconds,n=void 0===t?.618:t,i=e.use,a=void 0===i?"logo":i,d=e.opacityReduce,f=void 0===d?"logo"===a?1:.1618:d,m=e.fitDimention,p=void 0===m?220:m,h=(0,r.useVideoConfig)();function g(e){return(0,r.spring)({frame:(0,r.useCurrentFrame)()-e*o.m9(n),fps:h.fps,config:{mass:2,damping:200}})}var x="transition"===a?o.s8(214-33*o.j1()):p,v=[1.3185694*x,1.1157082*x,.9128541*x,.71*x],y=.5*p,j=.5*h.width-y,b=.5*h.height-y;return(0,s.jsxs)("div",{className:a,style:{position:"absolute",width:p,height:p,left:j,top:b},children:[(0,s.jsx)(r.AbsoluteFill,{style:c(c({},u),{},{transform:"scale(".concat(g(0),")")}),children:(0,s.jsx)(l,{size:v[0],color1:"white",color2:"white"})}),(0,s.jsx)(r.AbsoluteFill,{style:c(c({},u),{},{transform:"scale(".concat(g(.6),")")}),children:(0,s.jsx)(l,{size:v[1],opacity:.2*f})}),(0,s.jsx)(r.AbsoluteFill,{style:c(c({},u),{},{transform:"scale(".concat(g(1),")")}),children:(0,s.jsx)(l,{size:v[2],opacity:.4*f})}),(0,s.jsx)(r.AbsoluteFill,{style:c(c({},u),{},{transform:"scale(".concat(g(2),")")}),children:(0,s.jsx)(l,{size:v[3],opacity:f})})]})}},525:function(e,t,n){"use strict";var i=n(7109),r=n(99),o=n(8118);e.exports={MovieCamera:i.MovieCamera,React:r.LogoReact,Remotion:o.LogoRemotion}},1678:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2090)}])}},function(e){e.O(0,[774,411,348,888,179],(function(){return t=1678,e(e.s=t);var t}));var t=e.O();_N_E=t}]);