$(".tag-cloud").tagCloud({

        minColor: "#333",

        maxColor: "#eee",

        minSize: 40,

        maxSize: 150,

        minFontSize: 14,

        currentClass: "tag-cloud-enter",

        debug: false,

        offset: [0, 0, 0, 0],

        radius: "50%",

        bgColor: "",

        color: "",

        colorType: 16,

        method : "area",

        anim: {
            name: "bomb",
            time: "500",
            delay: "50"
        },

        enter: function(opt, id, pos, posArr, posRc, W, H, opts) {
            console.log("Event:mouseenter");
        },

        leave: function(opt, id, pos, posArr, rc, W, H, opts) {
            console.log("Event:mouseleave");
        },

        start: function(opts) {
            console.log("0");
        },

        printing: function(opts) {
            console.log("1");
        },

        printed: function(opts) {
            console.log("2");
        },

        addEvented: function(opts) {
            console.log("3");
        },

        animed: function(opts) {
            console.log("4");
        },

        complate: function(opts) {
            console.log("5");
        }
    });
// Isotope Start
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


     $(document).ready(function () {
            $(".tech_slider")
             $(".tastimonial_slider")
});