define("org/forgerock/openam/ui/user/logout/RESTLogoutView",["org/forgerock/commons/ui/common/main/AbstractView","org/forgerock/commons/ui/common/main/Router","org/forgerock/commons/ui/common/main/Configuration","org/forgerock/commons/ui/common/util/Constants","org/forgerock/commons/ui/common/main/EventManager","org/forgerock/commons/ui/common/util/UIUtils","org/forgerock/openam/ui/user/login/RESTLoginHelper"],function(e,t,n,r,i,s,o){var u=e.extend({template:"templates/openam/RESTLogoutTemplate.html",baseTemplate:"templates/common/MediumBaseTemplate.html",data:{},events:{"click #gotoLogin":"gotoLoginViewClick"},render:function(e,t){this.parentRender(t)},gotoLoginViewClick:function(e){e.preventDefault();var s="";n.globalData.auth.fullLoginURL&&(s=o.filterUrlParams(o.getLoginUrlParams())),n.setProperty("loggedUser",null),delete n.gotoURL,i.sendEvent(r.EVENT_AUTHENTICATION_DATA_CHANGED,{anonymousMode:!0}),t.navigate(t.getLink(t.configuration.routes.login)+s,{trigger:!0})}});return new u})