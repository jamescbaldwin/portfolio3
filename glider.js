new Glider(document.querySelector(".glider"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: ".dots",
    arrows: {
        prev: ".glider-prev",
        next: ".glider-next"
    }, 
    // responsive: [{
    //     breakpoint: 775,
    //     settings: {
    //         slidesToShow: "auto",
    //         slidesToScroll: "auto",
    //         itemWidth: 150,
    //         duration: 0.25
    //     }
    // }]
});