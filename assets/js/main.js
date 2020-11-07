$(document).ready(function() {
    $(".menu-btn").click(function() {
        $(".navbar-nav").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    })

    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $("nav").addClass("sticky");
        }
        else {
            $("nav").removeClass("sticky");
        }
        if(this.scrollY > 500) {
            $(".to-top").addClass("show");
        }
        else {
            $(".to-top").removeClass("show");
        }
    });
    $(".to-top").click(function(){
        $("html").animate({scrollTop: 0})
    });
    var typed = new Typed(".typing", {
        strings: ["Front-end Developer","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Front-end Developer","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
})