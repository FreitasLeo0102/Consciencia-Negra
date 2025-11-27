(function () {

    function Slideshow(element) {
        this.el = document.querySelector(element);
        this.init();
    }

    Slideshow.prototype = {
        init: function () {
            this.wrapper = this.el.querySelector(".slider-wrapper");
            this.slides = this.el.querySelectorAll(".slide");
            this.previous = this.el.querySelector(".slider-previous");
            this.next = this.el.querySelector(".slider-next");

            this.index = 0;
            this.total = this.slides.length;

            this._slideTo(this.index);


            this.previous.style.display = "none";  
            this.next.style.display = this.total > 1 ? "block" : "none";

            this.actions();
        },

        _slideTo: function (slideIndex) {
    for (var i = 0; i < this.slides.length; i++) {

        if (i === slideIndex) {
            this.slides[i].classList.add("active");
            this.slides[i].style.opacity = 1;
        } else {
            this.slides[i].classList.remove("active");
            this.slides[i].style.opacity = 0;
        }
    }
},

        actions: function () {
            var self = this;

            self.next.addEventListener("click", function () {
                self.index++;
                self.previous.style.display = "block";

                if (self.index >= self.total - 1) {
                    self.index = self.total - 1;
                    self.next.style.display = "none";
                }

                self._slideTo(self.index);

            }, false);

            self.previous.addEventListener("click", function () {
                self.index--;
                self.next.style.display = "block";

                if (self.index <= 0) {
                    self.index = 0;
                    self.previous.style.display = "none";
                }

                self._slideTo(self.index);

            }, false);
        }
    };

    document.addEventListener("DOMContentLoaded", function () {
        var slider = new Slideshow("#main-slider");
    });

})();
