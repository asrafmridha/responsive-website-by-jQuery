jQuery(document).ready(function(){

        jQuery(".menu ul ul").parent("li").children("a").append('<i class="fa-solid fa-chevron-down"></i>');

        jQuery(".menu ul li").click(function(){
        jQuery("ul").slideDown(2000);

        });




});