define("~fastboot/app-factory",["ember-data-request-service-cheat-sheet/app","ember-data-request-service-cheat-sheet/config/environment"],(function(e,t){return e=e.default,t=t.default,{default:function(){return e.create(t.APP)}}})),define("ember-data-request-service-cheat-sheet/components/guide-section.css",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={"title-container":"_title-container_6yfw8t",title:"_title_6yfw8t",permalink:"_permalink_6yfw8t","subsection-container":"_subsection-container_6yfw8t"}})),define("ember-data-request-service-cheat-sheet/components/guide-section/subsection.css",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={"title-container":"_title-container_1fds5d",title:"_title_1fds5d",permalink:"_permalink_1fds5d",description:"_description_1fds5d","code-examples-container":"_code-examples-container_1fds5d","ember-classic":"_ember-classic_1fds5d","ember-octane":"_ember-octane_1fds5d","edit-link-container":"_edit-link-container_1fds5d","code-snippet":"_code-snippet_1fds5d"}})),define("ember-data-request-service-cheat-sheet/components/locale-menu.css",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={container:"_container_nm2iph",select:"_select_nm2iph"}})),define("ember-data-request-service-cheat-sheet/initializers/ajax",["exports","ember"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const{get:r}=t.default
var i=function(e){let t=r(this,"fastboot.request.protocol")
if(/^\/\//.test(e.url))e.url=t+e.url
else if(!/^https?:\/\//.test(e.url))try{e.url=t+"//"+r(this,"fastboot.request.host")+e.url}catch(i){throw new Error("You are using Ember Data with no host defined in your adapter. This will attempt to use the host of the FastBoot request, which is not configured for the current host of this request. Please set the hostWhitelist property for in your environment.js. FastBoot Error: "+i.message)}if(!najax)throw new Error("najax does not seem to be defined in your app. Did you override it via `addOrOverrideSandboxGlobals` in the fastboot server?")
najax(e)},o={name:"ajax-service",initialize:function(e){e.register("ajax:node",i,{instantiate:!1}),e.inject("adapter","_ajaxRequest","ajax:node"),e.inject("adapter","fastboot","service:fastboot")}}
e.default=o})),define("ember-data-request-service-cheat-sheet/initializers/error-handler",["exports","ember"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"error-handler",initialize:function(){t.default.onerror||(t.default.onerror=function(e){const t=`There was an error running your app in fastboot. More info about the error: \n ${e.stack||e}`
console.error(t)})}}
e.default=r})),define("ember-data-request-service-cheat-sheet/instance-initializers/setup-fetch",["exports","fetch"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"fetch",initialize:function(e){const r=e.lookup("service:fastboot");(0,t.setupFastboot)(r.get("request"))}}
e.default=r})),define("ember-data-request-service-cheat-sheet/styles/app",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={}})),define("ember-data-request-service-cheat-sheet/styles/application",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={header:"_header_1h71my",main:"_main_1h71my",logo:"_logo_1h71my","locale-menu-container":"_locale-menu-container_1h71my","guide-section-container":"_guide-section-container_1h71my"}}))
