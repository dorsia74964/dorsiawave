(function($) {
    "use strict";

    function stop_videos() {
        var video = document.getElementById("video");
        if (video && video.paused !== true && video.ended !== true) {
            video.pause();
        }
        var yt = $('.youtube-video')[0];
        if (yt) yt.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }

    $(document).ready(function() {

        // Stop videos on slideshow nav click
        $('.slideshow nav span').on('click', function () {
            stop_videos();
        });

        // Revealator fix
        $(".revealator-delay1").addClass('no-transform');

        // Initialize Reports gallery
        if (document.getElementById('grid-gallery')) {
            new CBPGridGallery(document.getElementById('grid-gallery'));
        }

        // Initialize Machines gallery
        if (document.getElementById('grid-machines-gallery')) {
            new CBPGridGallery(document.getElementById('grid-machines-gallery'));
        }

        // Hide header on open
        $(".grid figure").on('click', function() {
            $("#navbar-collapse-toggle").addClass('hide-header');
        });

        // Show header on close
        $(".nav-close").on('click', function() {
            $("#navbar-collapse-toggle").removeClass('hide-header');
        });
        $(".nav-prev, .nav-next").on('click', function() {
            if ($('.slideshow ul li:first-child').hasClass('current') || $('.slideshow ul li:last-child').hasClass('current')) {
                $("#navbar-collapse-toggle").removeClass('hide-header');
            }
        });

        // Hover effect
        var item = $(".grid li figure");
        var elementsLength = item.length;
        for (var i = 0; i < elementsLength; i++) {
            $(item[i]).hoverdir();
        }

        // AJAX contact form
        $(".contactform").on("submit", function() {
            $(".output_message").text("Sending...");
            var form = $(this);
            $.ajax({
                url: form.attr("action"),
                method: form.attr("method"),
                data: form.serialize(),
                success: function(result) {
                    if (result == "success") {
                        $(".form-inputs").hide();
                        $(".box p").hide();
                        form.find(".output_message").addClass("success").text("Message Sent!");
                    } else {
                        $(".tabs-container").css("height", "440px");
                        form.find(".output_message").addClass("error").text("Error Sending!");
                    }
                }
            });
            return false;
        });

    });

    // Keyboard navigation
    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            stop_videos();
            $('.close-content').click();
            $("#navbar-collapse-toggle").removeClass('hide-header');
        }
        if ((e.keyCode === 37) || (e.keyCode === 39)) {
            stop_videos();
        }
    });

})(jQuery);