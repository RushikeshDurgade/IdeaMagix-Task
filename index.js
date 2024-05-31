


//!---------------------- Story

document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;

    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots');

    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('data-index', i);
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');

    const updateSlidePosition = () => {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlidePosition();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlidePosition();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (event) => {
            currentIndex = parseInt(event.target.getAttribute('data-index'));
            updateSlidePosition();
        });
    });
});

//!--------------------------- doctors 

document.addEventListener("DOMContentLoaded", function () {
    const doctors23 = [
        {
            name: "Dr. Faique Falke",
            location: "Musaffah Industrial - Abu Dhabi",
            degree: "Doctor Degree & Specialist",
            imageUrl: "/image/doctor1.jpg"
        },
        {
            name: "Dr. Jane Doe",
            location: "Al Zahra Hospital - Dubai",
            degree: "Doctor Degree & Specialist",
            imageUrl: "/image/doctor2.jpg"
        },
        {
            name: "Dr. John Smith",
            location: "Cleveland Clinic - Abu Dhabi",
            degree: "Doctor Degree & Specialist",
            imageUrl: "/image/doctor4.jpg"
        },
        {
            name: "Dr. Emily Clark",
            location: "Mediclinic City Hospital - Dubai",
            degree: "Doctor Degree & Specialist",
            imageUrl: "/image/doctor3.jpg"
        },
        {
            name: "Dr. Michael Brown",
            location: "Sheikh Khalifa Medical City - Abu Dhabi",
            degree: "Doctor Degree & Specialist",
            imageUrl: "/image/doctor5.jpg"
        }
    ];

    const track23 = document.getElementById("carousel-track-23");
    const pagination23 = document.getElementById("pagination-dots-23");
    const cardsToShow23 = 1;
    let currentIndex23 = 0;

    doctors23.forEach((doctor23, index23) => {
        const card23 = document.createElement("li");
        card23.classList.add("card-23");

        card23.innerHTML = `
            <img src="${doctor23.imageUrl}" alt="Doctor Image">
            <h3>${doctor23.name}</h3>
            <p>${doctor23.location}</p>
            <p>${doctor23.degree}</p>
        `;

        track23.appendChild(card23);
    });

    const numDots23 = Math.ceil(doctors23.length / cardsToShow23);
    for (let i = 0; i < numDots23; i++) {
        const dot23 = document.createElement("span");
        dot23.classList.add("dot-23");
        if (i === 0) {
            dot23.classList.add("active");
        }
        dot23.addEventListener("click", () => goToSlide23(i));
        pagination23.appendChild(dot23);
    }

    function goToSlide23(index23) {
        const cardWidth23 = track23.children[0].offsetWidth;
        currentIndex23 = index23;
        track23.style.transform = `translateX(-${index23 * cardWidth23}px)`;
        updateDots23();
    }

    function updateDots23() {
        const dots23 = document.querySelectorAll(".dot-23");
        dots23.forEach((dot23, index23) => {
            dot23.classList.toggle("active", index23 === currentIndex23);
        });
    }

    window.prevSlide23 = function () {
        currentIndex23 = (currentIndex23 - 1 + numDots23) % numDots23;
        goToSlide23(currentIndex23);
    }

    window.nextSlide23 = function () {
        currentIndex23 = (currentIndex23 + 1) % numDots23;
        goToSlide23(currentIndex23);
    }

    window.addEventListener('resize', () => goToSlide23(currentIndex23));
});


//!------------------------------- hospitals 

document.addEventListener("DOMContentLoaded", function () {
    const hospitals25 = [
        {
            name: "Apollo Hospital",
            location: "Bangalore",
            imageUrl: "/image/apollo.jpg"
        },
        {
            name: "Medanta Hospital",
            location: "Gurgaon",
            imageUrl: "/image/medanta.jpg"
        },
        {
            name: "Jaslok Hospital",
            location: "Mumbai",
            imageUrl: "/image/jaslok.jpg"
        },
        {
            name: "Fortis Hospital",
            location: "Delhi",
            imageUrl: "/image/fortis.jpg"
        },
        {
            name: "AIIMS Hospital",
            location: "Delhi",
            imageUrl: "/image/aiims.jpg"
        }
    ];

    const track25 = document.getElementById("carousel-track-25");
    const pagination25 = document.getElementById("pagination-dots-25");
    const cardsToShow25 = 1;
    let currentIndex25 = 0;

    hospitals25.forEach((hospital25, index25) => {
        const card25 = document.createElement("li");
        card25.classList.add("card-25");

        card25.innerHTML = `
            <img src="${hospital25.imageUrl}" alt="Hospital Image">
            <h3>${hospital25.name}</h3>
            <p>${hospital25.location}</p>
        `;

        track25.appendChild(card25);
    });

    const numDots25 = Math.ceil(hospitals25.length / cardsToShow25);
    for (let i = 0; i < numDots25; i++) {
        const dot25 = document.createElement("span");
        dot25.classList.add("dot-25");
        if (i === 0) {
            dot25.classList.add("active");
        }
        dot25.addEventListener("click", () => goToSlide25(i));
        pagination25.appendChild(dot25);
    }

    function goToSlide25(index25) {
        const cardWidth25 = track25.children[0].offsetWidth;
        currentIndex25 = index25;
        track25.style.transform = `translateX(-${index25 * cardWidth25}px)`;
        updateDots25();
    }

    function updateDots25() {
        const dots25 = document.querySelectorAll(".dot-25");
        dots25.forEach((dot25, index25) => {
            dot25.classList.toggle("active", index25 === currentIndex25);
        });
    }

    window.prevSlide25 = function () {
        currentIndex25 = (currentIndex25 - 1 + numDots25) % numDots25;
        goToSlide25(currentIndex25);
    }

    window.nextSlide25 = function () {
        currentIndex25 = (currentIndex25 + 1) % numDots25;
        goToSlide25(currentIndex25);
    }

    window.addEventListener('resize', () => goToSlide25(currentIndex25));
});


//!---------------- FAQ 

document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const faqItem = item.parentElement;
        faqItem.classList.toggle('open');
    });
});


//!------------------ story  

const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

updateCarousel();