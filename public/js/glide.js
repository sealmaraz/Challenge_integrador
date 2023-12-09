new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    gap: 30,
    startAt: 0,
    breakpoint: {
        991: {
            perView: 2
        },
        768: {
            perView: 1
        }
    }
}).mount();