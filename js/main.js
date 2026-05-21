/* =========================================
   Modern School Website Main JS
========================================= */

"use strict";

/* =========================================
   Helpers
========================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const currentYear = new Date().getFullYear();

function currentSchoolYear() {

    const month = new Date().getMonth();

    return month >= 8
        ? `${currentYear}/${currentYear + 1}`
        : `${currentYear - 1}/${currentYear}`;
}

/* =========================================
   Dynamic Years
========================================= */

function updateYears() {

    $$(".current-year").forEach(el => {
        el.textContent = currentYear;
    });

    $$(".school-year").forEach(el => {
        el.textContent = currentSchoolYear();
    });
}

/* =========================================
   Mobile Menu
========================================= */

function initMobileMenu() {

    const toggle = $("#navToggle");
    const menu = $("#navMenu");

    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {

        menu.classList.toggle("active");

        const icon = toggle.querySelector("i");

        if (menu.classList.contains("active")) {

            icon.classList.replace(
                "fa-bars",
                "fa-xmark"
            );

        } else {

            icon.classList.replace(
                "fa-xmark",
                "fa-bars"
            );
        }
    });

    $$("#navMenu a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");

            const icon = toggle.querySelector("i");

            icon.classList.replace(
                "fa-xmark",
                "fa-bars"
            );
        });
    });
}

/* =========================================
   Smooth Scroll
========================================= */

function initSmoothScroll() {

    $$('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
}

/* =========================================
   Navbar Scroll Effect
========================================= */

function initNavbarEffect() {

    const navbar = $(".navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add(
                "navbar-scrolled"
            );

        } else {

            navbar.classList.remove(
                "navbar-scrolled"
            );
        }
    });
}

/* =========================================
   Announcements Data
========================================= */

const announcements = [

    {
        title: "موعد امتحانات الفصل الأول",
        date: "15 يناير 2026",
        desc: "تبدأ امتحانات الفصل الأول لجميع المستويات."
    },

    {
        title: "التسجيلات الجديدة",
        date: "20 يناير 2026",
        desc: "فتح باب التسجيل للموسم الدراسي الجديد."
    },

    {
        title: "مسابقة الرياضيات",
        date: "28 يناير 2026",
        desc: "تنظيم مسابقة علمية داخل الثانوية."
    },

    {
        title: "اجتماع أولياء الأمور",
        date: "05 فبراير 2026",
        desc: "لقاء خاص لمتابعة نتائج التلاميذ."
    }
];

/* =========================================
   Load Announcements
========================================= */

function loadAnnouncements() {

    const container = $("#announcementsGrid");

    if (!container) return;

    container.innerHTML = announcements.map(item => `

        <div class="announcement-card hidden">

            <div class="announcement-img">

                <i class="fas fa-bullhorn"></i>

                <span class="announcement-date">
                    ${item.date}
                </span>

            </div>

            <div class="announcement-content">

                <h3 class="announcement-title">
                    ${item.title}
                </h3>

                <p class="announcement-desc">
                    ${item.desc}
                </p>

            </div>

        </div>

    `).join("");
}

/* =========================================
   Stats Counter Animation
========================================= */

function animateCounter(el, target) {

    let current = 0;

    const increment = target / 80;

    function update() {

        current += increment;

        if (current < target) {

            el.textContent =
                Math.floor(current);

            requestAnimationFrame(update);

        } else {

            el.textContent = target;
        }
    }

    update();
}

function initStatsAnimation() {

    const stats = $$(".stat-number");

    if (!stats.length) return;

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const el = entry.target;

                    const target =
                        +el.dataset.count;

                    animateCounter(
                        el,
                        target
                    );

                    observer.unobserve(el);
                }
            });

        }, {
            threshold:0.5
        });

    stats.forEach(stat =>
        observer.observe(stat)
    );
}

/* =========================================
   Scroll Animations
========================================= */

function initScrollAnimations() {

    const elements = $$(
        ".card, .announcement-card, .stat-item"
    );

    if (!elements.length) return;

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );
                }
            });

        }, {
            threshold:0.1
        });

    elements.forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);
    });
}

/* =========================================
   Gallery Data
========================================= */

const galleryData = [

    {
        title:"النشاط العلمي",
        category:"activities",
        image:"activity1.jpg"
    },

    {
        title:"حفل التخرج",
        category:"events",
        image:"event1.jpg"
    },

    {
        title:"المخبر العلمي",
        category:"classes",
        image:"class1.jpg"
    },

    {
        title:"الدوري الرياضي",
        category:"sports",
        image:"sport1.jpg"
    }
];

/* =========================================
   Load Gallery
========================================= */

function loadGallery(category = "all") {

    const grid = $("#galleryGrid");

    if (!grid) return;

    const filtered =
        category === "all"
        ? galleryData
        : galleryData.filter(
            item =>
            item.category === category
        );

    grid.innerHTML = filtered.map(item => `

        <div class="gallery-item">

            <div class="gallery-img">
                <i class="fas fa-image"></i>
            </div>

            <div class="gallery-info">

                <h3>${item.title}</h3>

                <p>
                    الصورة: ${item.image}
                </p>

            </div>

        </div>

    `).join("");
}

/* =========================================
   Gallery Filters
========================================= */

function initGalleryFilters() {

    const buttons = $$(".category-btn");

    if (!buttons.length) return;

    buttons.forEach(btn => {

        btn.addEventListener("click", () => {

            buttons.forEach(b =>
                b.classList.remove("active")
            );

            btn.classList.add("active");

            loadGallery(
                btn.dataset.category
            );
        });
    });

    loadGallery();
}

/* =========================================
   Contact Form
========================================= */

function initContactForm() {

    const form = $("#contactForm");

    if (!form) return;

    form.addEventListener("submit", e => {

        e.preventDefault();

        const inputs =
            form.querySelectorAll(
                "input, textarea"
            );

        let valid = true;

        inputs.forEach(input => {

            if (
                input.value.trim() === ""
            ) {

                input.style.borderColor =
                    "#ef4444";

                valid = false;

            } else {

                input.style.borderColor =
                    "#e2e8f0";
            }
        });

        if (!valid) {

            alert(
                "يرجى ملء جميع الحقول"
            );

            return;
        }

        alert(
            "تم إرسال رسالتك بنجاح ✅"
        );

        form.reset();
    });
}

/* =========================================
   Login System
========================================= */

function initLogin() {

    const tabs = $$(".tab-btn");

    tabs.forEach(btn => {

        btn.addEventListener("click", () => {

            tabs.forEach(t =>
                t.classList.remove("active")
            );

            btn.classList.add("active");

            $$(".login-form").forEach(form => {

                form.classList.remove(
                    "active"
                );
            });

            const target = $(
                "#" + btn.dataset.tab + "Tab"
            );

            if (target) {

                target.classList.add(
                    "active"
                );
            }
        });
    });
}

/* =========================================
   Dashboard
========================================= */

function initDashboard() {

    const links = $$(".sidebar-nav a[data-section]");

    if (!links.length) return;

    links.forEach(link => {

        link.addEventListener("click", e => {

            e.preventDefault();

            const section =
                link.dataset.section;

            $$(".dashboard-section")
            .forEach(sec => {

                sec.style.display =
                    "none";
            });

            const target = $(
                "#" + section + "Section"
            );

            if (target) {

                target.style.display =
                    "block";
            }

            links.forEach(l =>
                l.classList.remove("active")
            );

            link.classList.add("active");
        });
    });
}

/* =========================================
   Schedule System
========================================= */

const schedules = {

    first:[
        ["الأحد","رياضيات","فيزياء","عربية"],
        ["الإثنين","علوم","إنجليزية","تاريخ"]
    ],

    second:[
        ["الأحد","رياضيات","علوم","فيزياء"],
        ["الإثنين","إنجليزية","فلسفة","عربية"]
    ]
};

function loadSchedule(level = "first") {

    const container =
        $("#scheduleContent");

    if (!container) return;

    const data = schedules[level];

    let html = `

        <table class="schedule-table">

            <thead>

                <tr>

                    <th>اليوم</th>
                    <th>الحصة 1</th>
                    <th>الحصة 2</th>
                    <th>الحصة 3</th>

                </tr>

            </thead>

            <tbody>
    `;

    data.forEach(row => {

        html += `

            <tr>

                <td>${row[0]}</td>
                <td>${row[1]}</td>
                <td>${row[2]}</td>
                <td>${row[3]}</td>

            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    container.innerHTML = html;
}

/* =========================================
   Back To Top Button
========================================= */

function initBackToTop() {

    const button =
        document.createElement("button");

    button.className = "back-to-top";

    button.innerHTML = `
        <i class="fas fa-chevron-up"></i>
    `;

    document.body.appendChild(button);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            button.classList.add("show");

        } else {

            button.classList.remove(
                "show"
            );
        }
    });

    button.addEventListener("click", () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
}

/* =========================================
   Page Loaded
========================================= */

window.addEventListener("load", () => {

    document.body.classList.add(
        "loaded"
    );
});

/* =========================================
   Initialization
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateYears();

        initMobileMenu();

        initSmoothScroll();

        initNavbarEffect();

        loadAnnouncements();

        initStatsAnimation();

        initScrollAnimations();

        initGalleryFilters();

        initContactForm();

        initLogin();

        initDashboard();

        initBackToTop();
    }
);

/* =========================================
   Global Functions
========================================= */

window.loadGallery = loadGallery;

window.loadSchedule = loadSchedule;
