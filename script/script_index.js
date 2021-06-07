$(function(){
	setInterval(fnFade, 6000);

	setInterval(fnSlide, 8000);

	function fnFade() {
		$("div#bannerFrame a:first-child").fadeOut(500);
		$("div#bannerFrame a:nth-child(2)").fadeIn(
			1000,
			function(){
                $("#bannerFrame a:first-child").insertAfter("#bannerFrame a:last-child");
            }
		);
	}


	function fnSlide() {
        $("#wbstFrame").animate(
            { "margin-left": "-352px" },
            1000,
            "swing",
            function () {
                $("#wbstFrame>a:first-child").insertAfter("#wbstFrame>a:last-child");
                $("#wbstFrame").css({ "margin-left": "0" });
            }
        );

    }

});
