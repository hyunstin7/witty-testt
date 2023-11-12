$(document).on("click", ".sitemap-open", function () {
        $(".nav-bg").addClass("active"),
            $(".sitemap-open .bars").css("position", "static"),
            setTimeout(function () {
                $(".sitemap").fadeIn(100),
                    $(".nav-bg").addClass("delay"),
                    $("body, html").addClass("fix")
            }, 600),
            setTimeout(function () {
                $(".sitemap .nav-list").addClass("active")
            }, 650)
    }),

    $(document).on("click", ".sitemap-close", function () {
        $(".nav-bg").removeClass("active"),
            $(".sitemap").fadeOut(150),
            setTimeout(function () {
                $(".sitemap-open .bars").css("position", "relative"),
                    $(".nav-bg").removeClass("delay"),
                    $("body, html").removeClass("fix")
            }, 500),
            setTimeout(function () {
                $(".sitemap .nav-list").removeClass("active")
            }, 700)
    }),

    $(document).on("mouseover", ".sitemap .depth-1 > .link", function () {
        $(this).addClass("active"),
            $(this).parent().siblings().children(".link").addClass("disable")
    }),
    $(document).on("mouseout", ".sitemap .depth-1 > .link", function () {
        $(".sitemap .depth-1 > .link").removeClass("active"),
            $(".sitemap .depth-1 > .link").removeClass("disable")
    }),
    $(document).on("click", ".link-list .inner", function () {
        $(this).next().length > 0 && $(this).next().stop().slideToggle(500, "easeOutQuart", refreshScrollTrigger)
    });
