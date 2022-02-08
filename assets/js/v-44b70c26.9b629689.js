"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[1284],{56063:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-44b70c26",path:"/devices/E1524_E1810.html",title:"IKEA E1524/E1810 control via MQTT",lang:"en-US",frontmatter:{title:"IKEA E1524/E1810 control via MQTT",description:"Integrate your IKEA E1524/E1810 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2019-09-08T21:16:00.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Troubleshooting: no battery level",slug:"troubleshooting-no-battery-level",children:[]},{level:3,title:"Binding",slug:"binding",children:[]},{level:3,title:"Toggle button",slug:"toggle-button",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/E1524_E1810.md",git:{updatedTime:1644346628e3}}},26839:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Z});var o=i(66252);const n=(0,o.uE)('<h1 id="ikea-e1524-e1810" tabindex="-1"><a class="header-anchor" href="#ikea-e1524-e1810" aria-hidden="true">#</a> IKEA E1524/E1810</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>E1524/E1810</td></tr><tr><td>Vendor</td><td>IKEA</td></tr><tr><td>Description</td><td>TRADFRI remote control</td></tr><tr><td>Exposes</td><td>battery, action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/E1524-E1810.jpg" alt="IKEA E1524/E1810"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Pair the remote to Zigbee2MQTT by holding it close to the coordinator and pressing the inside button, next to the CR2032 battery, 4 times. The red light on the (front of the) remote will now flash a few times.</p><h3 id="troubleshooting-no-battery-level" tabindex="-1"><a class="header-anchor" href="#troubleshooting-no-battery-level" aria-hidden="true">#</a> Troubleshooting: no battery level</h3>',6),a=(0,o.Uk)("It may help to remove the battery for a few seconds and after that reconfigure it via "),r=(0,o.Uk)("Configure"),l=(0,o.Uk)(". Right before executing the Configure make sure to wake up the device by pressing a button on it."),d=(0,o._)("h3",{id:"binding",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#binding","aria-hidden":"true"},"#"),(0,o.Uk)(" Binding")],-1),s=(0,o.Uk)("The "),u=(0,o.Uk)("binding"),c=(0,o.Uk)(" functionallity of this remote varies per firmware version:"),h=(0,o._)("ul",null,[(0,o._)("li",null,"< 2.3.014: binding is not supported, OTA update your device to get binding functionallity"),(0,o._)("li",null,[(0,o.Uk)("2.3.014 - 2.3.74: suppports binding to groups only. It can only be bound to 1 group at a time. By default this remote is bound to the default bind group which you first have to unbind it from. This can be done by sending to "),(0,o._)("code",null,"zigbee2mqtt/bridge/request/device/unbind"),(0,o.Uk)(" payload "),(0,o._)("code",null,'{"from": "DEVICE_FRIENDLY_NAME", "to": "default_bind_group"}'),(0,o.Uk)(". Wake up the device right before sending the commands by pressing a button on it.")]),(0,o._)("li",null,"2.3.75 and greater : supports binding to devices only")],-1),g=(0,o._)("p",null,[(0,o._)("strong",null,"Note:"),(0,o.Uk)(" Prior to sending a 'bind' command using an MQTT message directly or through the frontend, push a button on the remote to wake it up. Otherwise, the remote will not be in a receiving state and the bind will fail with a general 'error'.")],-1),b=(0,o.Uk)("Once bound to a group/bulb you will notice that the toggle and brightness buttons will work, but scenes/color temperature most likely won't work. This appears to be a missing piece of functionality ("),p={href:"https://github.com/Koenkk/zigbee2mqtt/issues/1232",target:"_blank",rel:"noopener noreferrer"},m=(0,o.Uk)("discussion"),f=(0,o.Uk)("), but via a workaround this can be managed;"),_=(0,o._)("li",null,[(0,o.Uk)("Create a group with ID "),(0,o._)("strong",null,"65289"),(0,o.Uk)(" (name it ie. Trafri_scenes) and add the device(s) you control with the remote.")],-1),k=(0,o.Uk)("Add/store "),y=(0,o.Uk)("scenes"),v=(0,o.Uk)(" for the created group"),w=(0,o._)("li",null,"Once you click left/right on the remote, the scenes will be called sequentially (should there be a device off sync in scenes, hold the toggle button for 3 sec.).",-1),T=(0,o._)("h3",{id:"toggle-button",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#toggle-button","aria-hidden":"true"},"#"),(0,o.Uk)(" Toggle button")],-1),U=(0,o.Uk)("When clicking the middle (center) button on the remote it will send a "),E=(0,o._)("code",null,'{"click": "toggle"}',-1),x=(0,o.Uk)(", when holding it it will "),A=(0,o._)("strong",null,"also",-1),q=(0,o.Uk)(" send a "),I=(0,o._)("code",null,'{"click": "toggle_hold"}',-1),O=(0,o.Uk)(". It is not possible to skip the "),W=(0,o._)("code",null,"toggle",-1),C=(0,o.Uk)(" when the button is hold. Also the remote won't send anything when the button is released. See "),K={href:"https://github.com/Koenkk/zigbee2mqtt/issues/2077#issuecomment-538691885",target:"_blank",rel:"noopener noreferrer"},R=(0,o.Uk)("link"),M=(0,o.Uk)(" for more details."),D=(0,o._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,o.Uk)(" OTA updates")],-1),L=(0,o.Uk)("This device supports OTA updates, for more information see "),P=(0,o.Uk)("OTA updates"),z=(0,o.Uk)("."),B=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),N=(0,o.Uk)("How to use device type specific configuration"),Q=(0,o.uE)('<ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>arrow_left_click</code>, <code>arrow_left_hold</code>, <code>arrow_left_release</code>, <code>arrow_right_click</code>, <code>arrow_right_hold</code>, <code>arrow_right_release</code>, <code>brightness_down_click</code>, <code>brightness_down_hold</code>, <code>brightness_down_release</code>, <code>brightness_up_click</code>, <code>brightness_up_hold</code>, <code>brightness_up_release</code>, <code>toggle</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),V={},Z=(0,i(83744).Z)(V,[["render",function(e,t){const i=(0,o.up)("RouterLink"),V=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[n,(0,o._)("p",null,[a,(0,o.Wm)(i,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgeconfigure"},{default:(0,o.w5)((()=>[r])),_:1}),l]),d,(0,o._)("p",null,[s,(0,o.Wm)(i,{to:"/guide/usage/binding.html"},{default:(0,o.w5)((()=>[u])),_:1}),c]),h,g,(0,o._)("p",null,[b,(0,o._)("a",p,[m,(0,o.Wm)(V)]),f]),(0,o._)("ol",null,[_,(0,o._)("li",null,[k,(0,o.Wm)(i,{to:"/guide/usage/scenes.html"},{default:(0,o.w5)((()=>[y])),_:1}),v]),w]),T,(0,o._)("p",null,[U,E,x,A,q,I,O,W,C,(0,o._)("a",K,[R,(0,o.Wm)(V)]),M]),D,(0,o._)("p",null,[L,(0,o.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,o.w5)((()=>[P])),_:1}),z]),B,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[N])),_:1})])]),Q],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);