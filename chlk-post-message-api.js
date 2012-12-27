

var requestSiteRoot = function () {
    var result = "";
    var scripts = document.getElementsByTagName('script');

    for (var index = 0; index < scripts.length; index++) {
        var script = scripts[index];

        if (script.src.toString().match(/chlk-post-message-api.js$/i)) {
            result = script.src.toString().toLowerCase().replace('/scripts/api/chlk-post-message-api.js','');
           break;
        }
    }
    return result;
};

var CHLK_MESSENGER = (function($){
    var parentURL = requestSiteRoot();
    var messenger = {
        closeMe : function(data){
            this.postAction(data, 'closeMe', parentURL);
        },

        postAction : function(data, action, rURL){
            var res = data || {};
            $.extend(res, {action: action, isApp : true});
            this.postMessage(res, null, rURL);
        },

        addMe : function(data){
            this.postAction(data, 'addMe', parentURL);
        },

        addApp : function(rWindow, rURL, data){
            var res = data || {};
            $.extend(res, {action: 'addYourself'});
            this.postMessage(res, rWindow, rURL);
        },

        showPlus : function(data){
            var res = data || {};
            $.extend(res, {action: 'showPlus', isApp : true});
            this.postMessage(res, null, parentURL);
        },

        addCallback : function(callback){
            if (document.addEventListener) {
                window.addEventListener("message", callback, false);
            } else if (document.attachEvent) {
                window.attachEvent("onmessage", callback);
            }
        },

        removeCallback : function(callback){
            if (document.removeEventListener) {
                window.removeEventListener("message", callback, false);
            } else if (document.detachEvent) {
                window.detachEvent("onmessage", callback);
            }
        },

        addYourself : function(fn){
            function callback(e){
                if(e.data.action == 'addYourself'){
                    if(fn(e.data)){
                        CHLK_MESSENGER.addMe();
                    }
                }
            }
            
            if (document.addEventListener) {
                window.addEventListener("message", callback, false);
            } else if (document.attachEvent) {
                window.attachEvent("onmessage", callback);
            }
        },

        postMessage : function(data, rWindow, rURL){
            (rWindow || window.parent).postMessage(data, rURL || parentURL);
        }
    };

    return messenger;
})(jQuery);
