
(function(jQuery) {
    
    
    // クッキーの名前
    var cookieName = "selectedSystem";
    
    
    function readCookie( name ){
        if( document.cookie ){
            var cookies = document.cookie.split("; ");
            for( var i = 0; i < cookies.length;i++){
                var set = cookies[i].split("=");
                if( set[0] == name ){
                    return set[1];
                }
            }
        }
        return null;
    }
    
    
    function writeCookie( name, value ){
        document.cookie = name + "=" + value;
    }
    
    
    /**
     * クッキーを読み込んでsystemの種類を返します。
     * クッキーに値がなければ自動判別の結果を返します。
     */
    function getSystemType(){
        
        var selectedSystem = readCookie( cookieName );

        if(!selectedSystem){
            var osName = navigator.userAgent;
                
            if( osName.indexOf("Windows") != -1 ){
                selectedSystem = "windows";
            } else if( osName.indexOf("Macintosh") != -1 ){
                selectedSystem = "mac";
            } else {
                selectedSystem = "console";
            }
        }
            
        return selectedSystem;
    }
    
    
    function selectionChanged( selected ){
        jQuery(".Entry-content").each(function(){
            if( jQuery(this).attr("id") == selected ){
                jQuery(this).show();
            } else {
                jQuery(this).hide();
            }
        }); 
    }
    
    
    function fireSelectionChanged(){
        var selected = jQuery(this).val();
        selectionChanged( selected );
        writeCookie( cookieName, selected );
    }
        
        
    jQuery.fn.installSelector = function(){
        return this.each(function(){   
            jQuery(this).bind("change", fireSelectionChanged );
            
        });
    };
    
    
    jQuery.systemSelector = {
        init: function(){
            var systemType = getSystemType();
            selectionChanged( systemType );
            return systemType;
        }
    }
    
})(jQuery);
