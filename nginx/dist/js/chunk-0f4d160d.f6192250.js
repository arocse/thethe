(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f4d160d"],{"8aa2":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-xs-center"},[n("v-bottom-sheet",{attrs:{inset:""},scopedSlots:t._u([{key:"activator",fn:function(){return[t._t("default")]},proxy:!0}],null,!0),model:{value:t.sheet,callback:function(e){t.sheet=e},expression:"sheet"}},[n("v-list",[n("v-subheader",[n("b",[t._v("Available plugins")]),t._v(" (click on a entry to launch task) ")]),n("v-divider"),t._l(t.plugin_list,(function(e){return n("v-list-tile",{key:e.name,attrs:{"two-line":""},on:{click:function(n){t.launch(e),t.sheet=!1}}},[n("v-list-tile-avatar",[e.is_active?n("v-icon",{attrs:{color:t.avatar_color(e.last_update)}},[t._v("warning")]):n("v-icon",{attrs:{color:t.avatar_color(e.last_update)}},[t._v("info")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.name))]),n("v-list-tile-sub-title",[n("v-layout",{attrs:{"align-center":""}},[n("v-flex",{attrs:{lg8:""}},[t._v(t._s(e.description))]),e.last_update?n("v-flex",{attrs:{"offset-lg1":""}},[n("v-layout",{attrs:{"align-center":""}},[n("span",[t._v("Last update: ")]),n("span",[t._v(t._s(e.last_update))])])],1):t._e()],1)],1)],1)],1)}))],2)],1)],1)},i=[],a=(n("a4d3"),n("e01a"),n("d28b"),n("99af"),n("7db0"),n("0d03"),n("b0c0"),n("d3b7"),n("3ca3"),n("ddb0"),n("7c15")),o={name:"PluginSelector",props:{resource:Object},data:function(){return{sheet:!1,plugin_list:[]}},mounted:function(){var t=this,e={url:"/api/get_related_plugins",resource_id:this.resource._id,resource_type:this.resource.resource_type,project_id:this.$store.getters["get_opened_project"]._id};Object(a["a"])(e).then((function(e){t.plugin_list=e.data})).then((function(e){return t.update_pluginglist_dates()}))},methods:{launch:function(t){var e={url:"/api/launch_plugin",resource_id:this.resource._id,resource_type:this.resource.resource_type,plugin_name:t.name};Object(a["a"])(e)},formatted_time:function(t){if(!t)return"Not launched yet";var e=new Date(1e3*t);return"".concat(e.toLocaleDateString()," at ").concat(e.toLocaleTimeString())},avatar_color:function(t){return null!==t?"blue":"green"},update_pluginglist_dates:function(){var t=this,e=!0,n=!1,r=void 0;try{for(var i,a=function(){var e=i.value,n=t.resource.plugins.find((function(t){return 0==t.name.localeCompare(e.name)}));e.last_update="undefined"!==typeof n?t.formatted_time(n.update_time):null},o=this.plugin_list[Symbol.iterator]();!(e=(i=o.next()).done);e=!0)a()}catch(l){n=!0,r=l}finally{try{e||null==o["return"]||o["return"]()}finally{if(n)throw r}}}},watch:{resource:{deep:!0,handler:function(){this.update_pluginglist_dates()}}}},l=o,s=n("2877"),u=Object(s["a"])(l,r,i,!1,null,null,null);e["default"]=u.exports},d28b:function(t,e,n){var r=n("746f");r("iterator")},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),a=n("da84"),o=n("5135"),l=n("861d"),s=n("9bf2").f,u=n("e893"),c=a.Symbol;if(i&&"function"==typeof c&&(!("description"in c.prototype)||void 0!==c().description)){var d={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new c(t):void 0===t?c():c(t);return""===t&&(d[e]=!0),e};u(p,c);var v=p.prototype=c.prototype;v.constructor=p;var _=v.toString,f="Symbol(test)"==String(c("test")),h=/^Symbol\((.*)\)[^)]+$/;s(v,"description",{configurable:!0,get:function(){var t=l(this)?this.valueOf():this,e=_.call(t);if(o(d,t))return"";var n=f?e.slice(7,-1):e.replace(h,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}}}]);
//# sourceMappingURL=chunk-0f4d160d.f6192250.js.map