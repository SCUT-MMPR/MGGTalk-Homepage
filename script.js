document.addEventListener("DOMContentLoaded", function() {

    // Slider 1
    const slider1 = document.getElementById("slider1");
    const slider1Control = document.getElementById("slider1-control");

    function updateSlider1(value) {
        const images = slider1.getElementsByTagName("img");
        Array.from(images).forEach((img, index) => {
            img.style.display = index == value ? 'block' : 'none';
        });
    }

    slider1Control.addEventListener("input", function() {
        updateSlider1(this.value);
    });

    // Initialize slider 1 to the first image
    updateSlider1(slider1Control.value);

    // Slider 2
    const slider2 = document.getElementById("slider2");
    const slider2Control = document.getElementById("slider2-control");

    function updateSlider2(value) {
        const images = slider2.getElementsByTagName("img");
        Array.from(images).forEach((img, index) => {
            img.style.display = index == value ? 'block' : 'none';
        });
    }

    slider2Control.addEventListener("input", function() {
        updateSlider2(this.value);
    });

    // Initialize slider 2 to the first image
    updateSlider2(slider2Control.value);

});
