define("org/forgerock/commons/ui/common/EnableCookiesView",["org/forgerock/commons/ui/common/main/AbstractView","org/forgerock/commons/ui/common/util/CookieHelper"],function(e,t){var n=e.extend({template:"templates/common/EnableCookiesTemplate.html",baseTemplate:"templates/common/LoginBaseTemplate.html",render:function(){t.cookiesEnabled()?location.href="#login/":this.parentRender()}});return new n})