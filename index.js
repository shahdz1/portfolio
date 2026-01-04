const btnTaps = document.querySelectorAll(".taps-btn");
const content = document.querySelectorAll(".all");
const colors = ["pink", "green", "blue", "red", "orange", "purple"];
const fonts = ["AlexFont", "tajawelFont", "cairoFont"];
const scrollToTopBtn = document.querySelector("#scroll-to-top");
scrollToTopBtn.style.display = "none";
const nextSlideBtn = document.querySelector("#next-testimonial");
const prevSlideBtn = document.querySelector("#prev-testimonial");

const elements = [
    {
        name: 'أحمد السعيد',
        job: 'مدير شركة التقنية الحديثة',
        reveiw: `"شغل أحمد معانا كان حاجة تانية خالص. قدم حلول مبتكرة لكل
                                        المشاكل اللي واجهتنا. الموقع اللي عمله عدى كل توقعاتنا في
                                        التصميم والأداء."`,
        image: `./images/avatar-1.jpg`
    },
    {
        name: 'سيف أسامة',
        job: 'ميديا باير',
        reveiw: `
                                        "المتجر بتاعنا بقى محترف ومريح جداً في الاستخدام. مبيعاتنا زادت 60% في أول شهر.
                                        شكراً يا أحمد على المجهود الجبار!"`,
        image: `./images/avatar-2.jpg`
    },
    {
        name: 'خالد صلاح',
        job: 'مدير تطوير الأعمال',
        reveiw: `"شغل محترفين بجد ومواعيد مظبوطة.
                                        التطبيق اللي عمله لنا شغال زي الفل على كل الأجهزة. بننصح بيه جداً لأي مشروع."`,
        image: `./images/avatar-3.jpg`
    },
    {
        name: 'أحمد الرفاعي',
        job: 'جرافيك ديزاينر',
        reveiw: `"تجربة ممتازة من الأول للآخر. أحمد
                                        سمع طلباتنا كويس وقدم أفكار برة الصندوق. الموقع الجديد عجب العملاء جداً."`,
        image: `./images/avatar-4.avif`
    },
    {
        name: 'عمر عادل',
        job: 'مؤسس شركة ناشئة',
        reveiw: `"أحمد ساعدنا نحول الفكرة لواقع. الـ MVP اللي عمله كان ممتاز عشان نجذب مستثمرين.
                                        شطارة تقنية وإبداع ملوش حل."`,
        image: `./images/avatar-5.jpg`
    },
    {
        name: 'كريم ياسر',
        job: 'دكتور صيدلي',
        reveiw: `""الشغل مع أحمد كان مريح ومنظم جداً. دايماً بيبعت تحديثات وبيرد بسرعة على أي
                                        تعديل. النتيجة النهائية أحسن من اللي كنا متخيلينه."`,
        image: `./images/avatar-6.avif`
    },
];
let currentIndex = 0;

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


colors.forEach(color => {
    document.querySelector(`.${color}-btn`).addEventListener("click", function () {
        colors.forEach(color => document.body.classList.remove(color));
        document.body.classList.add(color);
    })
});

fonts.forEach(font => {
    document.querySelector(`#${font}`).addEventListener("click", function () {
        fonts.forEach(font => document.querySelector(`#${font}`).classList.remove("active-font"));
        fonts.forEach(font => document.body.classList.remove(font));
        document.body.classList.add(font);
        this.classList.add("active-font");
    })
});

document.querySelector("#toggle-btn").addEventListener("click", function () {
    document.body.classList.toggle("light")
});

document.querySelector("#settings-toggle").addEventListener("click", function () {
    document.getElementById("settings-sidebar").classList.replace("d-none", "d-flex")
    const toggle = document.getElementById("settings-toggle");
    toggle.style.transform = "translateY(-50%)";
    toggle.style.right = "20rem";
});
function closeBar() {
    document.getElementById("settings-sidebar").classList.replace("d-flex", "d-none")
    const toggle = document.getElementById("settings-toggle");
    toggle.style.transform = "translateY(0%)";
    toggle.style.right = "0";
};
document.querySelector("#close-settings").addEventListener("click", function () {
    closeBar();
});

document.querySelector("#reset-settings").addEventListener("click", function () {
    document.body.classList.remove(...colors)
    document.body.classList.remove(...fonts)
    closeBar()
})


function renderCards(startIndex) {
    const activeCarxds = [
        elements[startIndex % elements.length],
        elements[(startIndex + 1) % elements.length],
        elements[(startIndex + 2) % elements.length]
    ]

    console.log(activeCarxds, startIndex % elements.length, startIndex)
    const sliderContainer = document.getElementById('testimonials-carousel');
    sliderContainer.innerHTML = '';
    activeCarxds.forEach(card => {
        sliderContainer.innerHTML += `
                                    <div class="testimonial-card px-3 d-flex flex-column align-self-stretch flex-shrink-0">
                                <div class=" basic-border rounded-4 h-100 d-flex flex-column">
                                    <div class="d-flex align-items-center mb-4">
                                        <img src="${card.image}" alt="ahmed elrefaay"
                                            class="object-fit-cover rounded-circle ms-3" />
                                        <div>
                                            <h4 class="fw-bold  fs-5 text-white">${card.name}</h4>
                                            <p class="text-light-gray">
                                                ${card.job}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20px"
                                            height="20px">
                                            <path fill="#fdc700"
                                                d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20px"
                                            height="20px">
                                            <path fill="#fdc700"
                                                d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20px"
                                            height="20px">
                                            <path fill="#fdc700"
                                                d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20px"
                                            height="20px">
                                            <path fill="#fdc700"
                                                d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20px"
                                            height="20px">
                                            <path fill="#fdc700"
                                                d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                                        </svg>
                                    </div>
                                    <p class="fs-18 text-lighter-gray flex-grow-1">${card.reveiw}
                                    </p>
                                </div>
                            </div>
        `
    })
}

function getNextCards() {
    if ((currentIndex + 2) % elements.length === elements.length - 1) {
        currentIndex = -1;
    }
    currentIndex++;
    renderCards(currentIndex);
    console.log("next");
    updateIndicators();
}

function getPreviousCards() {
    if (currentIndex === 0) {
        currentIndex = elements.length - 2;
    }
    currentIndex--;
    renderCards(currentIndex);
    console.log("prev");
    updateIndicators();
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicators');
    indicators.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active-indicarots');
        } else {
            dot.classList.remove('active-indicarots');
        }
    });
}
document.querySelectorAll('.indicators').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        renderCards(currentIndex);
        updateIndicators();
    });
});
window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
        scrollToTopBtn.style.display = "flex";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
    });
});

nextSlideBtn.addEventListener("click", getNextCards);
prevSlideBtn.addEventListener("click", getPreviousCards);
renderCards(currentIndex);