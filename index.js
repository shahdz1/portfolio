
const btnTaps = document.querySelectorAll(".taps-btn");
const content = document.querySelectorAll(".all");
btnTaps.forEach(button => {
    button.addEventListener("click", function () {
        document.querySelector(".taps-btn.active").classList.remove("active");
        this.classList.add("active");
        const filterContent = this.getAttribute("data-filter");
        content.forEach(item => {
            if (filterContent === "all" || item.classList.contains(filterContent)) {
                item.classList.remove("d-none");
                item.classList.add("d-flex");
                item.classList.add("fade-in");
            }
            else {
                item.classList.add("d-none");
                item.classList.remove("d-flex");
                item.classList.remove("fade-in");
            }
        })
    })
});
























// const nextSlideBtn = document.querySelector("#next-testimonial");
// const prevSlideBtn = document.querySelector("#prev-testimonial");
// let currindex;
// const cardlist =Array( document.querySelectorAll(".testimonial-card"));
// const indicators = document.querySelectorAll(".indicators");

// for(var i = 0; cardlist.length; i++){
//     cardlist[i].addEventListener("click", function(e){
//         currindex = cardlist.indexOf(e.target);
//         console.log(currindex)
//     })
// }
// function nextSlide() {
//     currindex += 1;
//     if (currindex > cardlist.length - 1) {
//         currindex = 0;
//     }
//     console.log("next");
// };
// function prevSlide() {
//     currindex -= 1;
//     if (currindex < 0) {
//         currindex = cardlist.length - 1;
//     }
//     console.log("prev");
// };
// nextSlideBtn.addEventListener("click", nextSlide);
// prevSlideBtn.addEventListener("click", prevSlide);





