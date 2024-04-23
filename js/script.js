$(function(){

    $(".code-link").on("click", function(e){
        e.preventDefault();
        let $temp = $("<input>"),
            text = $(this).closest(".code").find(".code-field").text();
        $("body").append($temp);
        $temp.val(text).select();
        document.execCommand("copy");
        $temp.remove();
        $(this).closest(".code").append("<span class='copied'>Copied</span>")
        setTimeout(function(e){
            $(".code").find(".copied").fadeOut()
        },1000)
    })

    $(".accord-title").on("click", function(){
        let btn = $(this),
            drop = btn.next(),
            items = $(".accord-content")

        
        if(btn.hasClass("active")){
            btn.removeClass("active")
            drop.stop(true,true).slideUp()
        }else{
            $(".accord-title").removeClass("active")
            items.slideUp()
            btn.addClass("active")
            drop.stop(true,true).slideDown()
            
        }
    })

    $(".scroll").click(function(e){
		e.preventDefault()
		var el = $(this).attr('href');
		$('body, html').animate({
			scrollTop: $(el).offset().top - 55
		}, 500);
        if($(window).width() <= 768){
            $(".navigation").slideUp()
            $(".menu-btn").removeClass("active")
            $("body").css("overflow", "auto")
        }
	});

    $(".has-drop > a").on("click", function(){
        if($(window).width() <= 768){
            let btn = $(this),
            drop = btn.closest("li").find(".subnavigation");
        
            if(btn.hasClass("active")){
                btn.removeClass("active")
                drop.stop(true,true).slideUp()
            }else{
                btn.addClass("active")
                drop.stop(true,true).slideDown()
            }
        }
    })

    $(".menu-btn").on("click", function(e){
        e.preventDefault()
        let btn = $(this),
            menu = $(".navigation");
        
        if(btn.hasClass("active")){
            btn.removeClass("active")
            menu.stop(true,true).slideUp()
            $("body").css("overflow", "auto")
        }else{
            btn.addClass("active")
            menu.stop(true,true).slideDown()
            $("body").css("overflow", "hidden")
        }

    })

    var animation = bodymovin.loadAnimation({
        container: document.getElementById("mask"),
        rederer: 'svg',
        loop: true,
        autoplay: true,
        path: 'js/mshk-image-to-lottie_.json'
    })

    animation.setSpeed(.3)
    

    var height = 100,
    perfData = window.performance.timing, 
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt((EstimatedTime/1000)%60)*100;

    $(".load-animate").animate({
        height: height + "%"
    }, time);


    setTimeout(function(){
        $('.preloader').fadeOut(300);
    }, time);


})