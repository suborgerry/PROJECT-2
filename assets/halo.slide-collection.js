(function ($) {
    var halo = {
        initCollectionBannerSlider: function () {
            var collectionSlider = $('[data-home-collections-slider]');

            if (window.innerWidth >= 1200) {
                collectionSlider.each(function () {
                    var self = $(this),
                        rows = self.data('rows');

                    if (self.not('.slick-initialized')) {
                        self.slick({
                            slidesToShow: rows,
                            slidesToScroll: rows,
                            infinite: false,
                            speed: 1000,
                            get nextArrow() {
                                if (window.layout_style == 'layout_style_1170') {
                                    return this.nextArrow = '<button type="button" class="slick-next"><svg viewBox="0 0 50 50"><path d="M 11.957031 13.988281 C 11.699219 14.003906 11.457031 14.117188 11.28125 14.308594 L 1.015625 25 L 11.28125 35.691406 C 11.527344 35.953125 11.894531 36.0625 12.242188 35.976563 C 12.589844 35.890625 12.867188 35.625 12.964844 35.28125 C 13.066406 34.933594 12.972656 34.5625 12.71875 34.308594 L 4.746094 26 L 48 26 C 48.359375 26.003906 48.695313 25.816406 48.878906 25.503906 C 49.058594 25.191406 49.058594 24.808594 48.878906 24.496094 C 48.695313 24.183594 48.359375 23.996094 48 24 L 4.746094 24 L 12.71875 15.691406 C 13.011719 15.398438 13.09375 14.957031 12.921875 14.582031 C 12.753906 14.203125 12.371094 13.96875 11.957031 13.988281 Z"></path></svg></button>';
                                } else {
                                    return this.nextArrow = '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>';
                                }
                            },
                            get prevArrow() {
                                if (window.layout_style == 'layout_style_1170') {
                                    return this.prevArrow = '<button type="button" class="slick-prev"><svg viewBox="0 0 50 50"><path d="M 11.957031 13.988281 C 11.699219 14.003906 11.457031 14.117188 11.28125 14.308594 L 1.015625 25 L 11.28125 35.691406 C 11.527344 35.953125 11.894531 36.0625 12.242188 35.976563 C 12.589844 35.890625 12.867188 35.625 12.964844 35.28125 C 13.066406 34.933594 12.972656 34.5625 12.71875 34.308594 L 4.746094 26 L 48 26 C 48.359375 26.003906 48.695313 25.816406 48.878906 25.503906 C 49.058594 25.191406 49.058594 24.808594 48.878906 24.496094 C 48.695313 24.183594 48.359375 23.996094 48 24 L 4.746094 24 L 12.71875 15.691406 C 13.011719 15.398438 13.09375 14.957031 12.921875 14.582031 C 12.753906 14.203125 12.371094 13.96875 11.957031 13.988281 Z"></path></svg></button>';
                                } else {
                                    return this.prevArrow = '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>';
                                }
                            },
                            responsive: [{
                                breakpoint: 1200,
                                settings: "unslick"
                            }]
                        });
                    }
                });
            };
        }
    }
    halo.initCollectionBannerSlider();
})(jQuery);
