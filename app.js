jQuery(document).ready(function(){

        jQuery(".menu ul ul").parent("li").children("a").append('<i class="fa-solid fa-chevron-down"></i>');

        jQuery(".menu ul li").click(function(){
        jQuery(this).children("ul").slideToggle();

        });

        var width= jQuery("body").width();
        if(width < 768){

                jQuery(".show").show();
                jQuery(".hide").hide();
                jQuery(".menu").hide();

        }
        else{

                jQuery(".show").hide();
                jQuery(".hide").hide();
                jQuery(".menu").show();  
        }

        jQuery(".show").click(function(){

                jQuery(".show").hide();
                jQuery(".hide").show();
                jQuery(".menu").show();
               
        });

        jQuery(".hide").click(function(){
           
                jQuery(".show").show();
                jQuery(".hide").hide();
                jQuery(".menu").hide();

        });

     jQuery(window).scroll(function(){

         var p= jQuery(window).scrollTop();
        if(p >220){

                jQuery("nav").addClass("fixed");
        }
        else{

                jQuery("nav").removeClass("fixed");
        }
     });



});