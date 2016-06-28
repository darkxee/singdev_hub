(function($) {
    $.fn.light = function() {

    };
    var mystone = {
        slideindex: function(
            a = 'li.active-revslide',
            b = '#rev_slider_1_1 ul > li'
        ) {
            return $(a).index(b);
        },
        numslide: function(
            a = '#rev_slider_1_1 ul > li'
        ) {
            return $(a).size();
        },

        btn_bullet_width: function(
            a = '.tp-bullets'
        ) {
            return $(a).width();
        },
        bullet_lenth: function() {
            var l = 0
            var i = this.slideindex();
            if (this.slideindex() < 3) {
                i = 0;
                l = 100;
            } else {
                i -= 1;
                l -= 20;
            }
            return l -= (this.btn_bullet_width() / this.numslide() * i);
        },
        bullet_move: function(
            a = this.bullet_lenth(),
            b = '.overflow-bullet .btn-bullet'
        ) {
            $(b).animate({
                'left': a
            }, 1000, function() {
                arrow_move();
            });
        },
    };

    function arrow_move() {
        var x = $('.tp-bullets').find('.tp-bullet.selected').length;
        if (x) {
            var pos1 = $('.overflow-bullet .tp-bullet.selected .tp-bullet-title').offset();

            $('#nav-arrow').animate({
                'top': pos1.top + 'px',
                'left': pos1.left + 'px'
            }, 1000);
            // console.log('pos1.left +' + pos1.left);
        }
    }
    $(document).ready(function() {
        if ($('body.page-id-24').length > 0) {
            revapi1.bind("revolution.slide.onloaded", function(e) {
                $('#rev_slider_1_1 .tp-bullets').wrapAll("<div class='overflow-bullet' />").wrapAll("<div class='btn-bullet'/>");
                //.log("slider loaded");
                $('.overflow-bullet .btn-bullet').width($('.overflow-bullet .tp-bullets').width());

                //  $('.overflow-bullet .btn-bullet').append('<img width="105" height="126" id ="nav-arrow" src="/wp-content/uploads/2016/06/arrow.png" class="vc_single_image-img attachment-thumbnail" alt="arrow">');
            });

            // Slide change function
            revapi1.bind("revolution.slide.onafterswap", function(e) {

                mystone.bullet_move(mystone.bullet_lenth());
                // arrow_move();

            });
        }




        var controller = new ScrollMagic.Controller();
            var tween = TweenMax.to(".p1",1,{ css:{color:"#ff0004",left: 100}, ease:Back.easeOut});
            var scene = new ScrollMagic.Scene({
              //triggerHook: 'onEnter',
              triggerElement: "#start1",
              duration: "1300",
              offset : 0
            })
              .setPin('.p1')
    					.setTween(tween)
    					.addIndicators() // add indicators (requires plugin)
    					.addTo(controller);

    });
	function light(){

	}
})(jQuery);
