// ============================================
// بيانات الإعلانات
// ============================================
const announcementsData = [
    { id: 1, title: "موعد امتحانات الفصل الأول", date: "2026-01-15", description: "تبدأ امتحانات الفصل الأول يوم الأحد 15 يناير 2026 لجميع الشعب" },
    { id: 2, title: "يوم مفتوح لأولياء الأمور", date: "2026-01-20", description: "ندعوكم لحضور اليوم المفتوح والتعرف على تقدم أبنائكم الدراسي" },
    { id: 3, title: "تسجيل طلاب جدد", date: "2026-01-25", description: "يفتح باب التسجيل للعام الدراسي الجديد 2026/2027" },
    { id: 4, title: "مسابقة في الرياضيات", date: "2026-01-28", description: "تنظيم مسابقة داخلية في مادة الرياضيات للمتفوقين" }
];

// ============================================
// دوال التاريخ التلقائي
// ============================================

// الحصول على السنة الحالية تلقائياً
function getCurrentYear() {
    return new Date().getFullYear();
}

// الحصول على العام الدراسي الحالي (مثال: 2025/2026 أو 2026/2027)
function getCurrentSchoolYear() {
    const currentYear = getCurrentYear();
    const currentMonth = new Date().getMonth(); // 0=يناير, 8=سبتمبر
    // إذا كان الشهر سبتمبر أو بعد (8-11) نكون في بداية العام الدراسي
    if (currentMonth >= 8) {
        return `${currentYear}/${currentYear + 1}`;
    } else {
        return `${currentYear - 1}/${currentYear}`;
    }
}

// تحديث حقوق النشر في جميع الصفحات
function updateCopyrightYear() {
    const currentYear = getCurrentYear();
    // تحديث جميع العناصر التي تحمل class="current-year"
    document.querySelectorAll('.current-year, #currentYear, .copyright-year, .footer-year').forEach(el => {
        el.textContent = currentYear;
    });
    
    // تحديث الفوتر مباشرة إذا وجد
    const footerBottom = document.querySelectorAll('.footer-bottom p');
    footerBottom.forEach(el => {
        if (el.innerHTML.includes('©')) {
            el.innerHTML = el.innerHTML.replace(/20\d{2}/g, currentYear);
        }
    });
}

// تحديث العام الدراسي في جميع الصفحات
function updateSchoolYear() {
    const schoolYear = getCurrentSchoolYear();
    document.querySelectorAll('.school-year, #schoolYear, .academic-year').forEach(el => {
        el.textContent = schoolYear;
    });
}

// تحديث جميع السنوات في الصفحة
function updateAllYears() {
    updateCopyrightYear();
    updateSchoolYear();
    
    // تحديث أي مكان يحتوي على سنة ثابتة 2025 إلى السنة الحالية
    const currentYear = getCurrentYear();
    document.querySelectorAll('[data-year]').forEach(el => {
        el.textContent = currentYear;
    });
    
    document.querySelectorAll('[data-school-year]').forEach(el => {
        el.textContent = getCurrentSchoolYear();
    });
}

// ============================================
// دوال الإعلانات
// ============================================

// تنسيق التاريخ
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' });
}

// تحميل الإعلانات مع التاريخ الصحيح
function loadAnnouncements() {
    const grid = document.getElementById('announcementsGrid');
    if (!grid) return;
    
    const currentYear = getCurrentYear();
    const schoolYear = getCurrentSchoolYear();
    
    grid.innerHTML = announcementsData.map(ann => {
        // تحديث سنة الإعلان تلقائياً
        let date = ann.date;
        let title = ann.title;
        let description = ann.description;
        
        if (date.includes('2025')) {
            date = date.replace('2025', currentYear);
        }
        if (title.includes('2025')) {
            title = title.replace('2025', currentYear);
        }
        if (description.includes('2025')) {
            description = description.replace('2025', currentYear);
        }
        if (description.includes('2025/2026')) {
            description = description.replace('2025/2026', schoolYear);
        }
        
        return `
        <div class="announcement-card">
            <div class="announcement-img">
                <i class="fas fa-newspaper"></i>
                <span class="announcement-date">${formatDate(date)}</span>
            </div>
            <div class="announcement-content">
                <h3 class="announcement-title">${title}</h3>
                <p class="announcement-desc">${description}</p>
            </div>
        </div>
    `}).join('');
}

// ============================================
// تحريك الأرقام الإحصائية
// ============================================
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        let current = 0;
        const increment = target / 50;
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target;
            }
        };
        updateCounter();
    });
}

// ============================================
// القائمة المتنقلة (Mobile Menu)
// ============================================
function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
}

// ============================================
// مراقبة التمرير للتحريك (Scroll Animation)
// ============================================
function initScrollAnimation() {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                if (entry.target.classList.contains('stats')) {
                    animateStats();
                }
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.section, .card, .stat-item').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// معرض الصور (Gallery)
// ============================================
const galleryItems = [
    { id: 1, category: "activities", title: "يوم النشاط العلمي", imgName: "activity1.jpg" },
    { id: 2, category: "events", title: "حفل تخرج دفعة 2024", imgName: "event1.jpg" },
    { id: 3, category: "sports", title: "اليوم الرياضي", imgName: "sport1.jpg" },
    { id: 4, category: "classes", title: "قسم السنة الثالثة", imgName: "class1.jpg" },
    { id: 5, category: "activities", title: "رحلة مدرسية", imgName: "activity2.jpg" },
    { id: 6, category: "events", title: "يوم العلم", imgName: "event2.jpg" },
    { id: 7, category: "sports", title: "بطولة كرة القدم", imgName: "activity3.jpg" },
    { id: 8, category: "classes", title: "مخبر العلوم", imgName: "class2.jpg" }
];

function loadGallery(category = "all") {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    
    const filtered = category === "all" ? galleryItems : galleryItems.filter(item => item.category === category);
    
    grid.innerHTML = filtered.map(item => `
        <div class="gallery-item">
            <div class="gallery-img">
                <i class="fas fa-image"></i>
                <p style="position: absolute; font-size: 12px; margin-top: 40px;">📷 ${item.imgName}</p>
            </div>
            <div class="gallery-info">
                <h3>${item.title}</h3>
                <p>ضعي الصورة في مجلد images/ باسم ${item.imgName}</p>
            </div>
        </div>
    `).join('');
}

function initGalleryFilters() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    if (categoryBtns.length === 0) return;
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            loadGallery(btn.dataset.category);
        });
    });
    
    loadGallery();
}

// ============================================
// جداول الحصص (Schedules)
// ============================================
const schedules = {
    10: { title: "السنة أولى ثانوي - جدول الحصص", schedule: [
        { day: "الأحد", p1: "رياضيات", p2: "فيزياء", p3: "عربية", p4: "إنجليزية", p5: "إسلامية" },
        { day: "الإثنين", p1: "فرنسية", p2: "رياضيات", p3: "تاريخ", p4: "فيزياء", p5: "تربية بدنية" },
        { day: "الثلاثاء", p1: "فيزياء", p2: "عربية", p3: "رياضيات", p4: "إنجليزية", p5: "جغرافيا" },
        { day: "الأربعاء", p1: "رياضيات", p2: "فرنسية", p3: "فيزياء", p4: "إسلامية", p5: "فلسفة" },
        { day: "الخميس", p1: "إنجليزية", p2: "تاريخ", p3: "رياضيات", p4: "فرنسية", p5: "جغرافيا" }
    ] },
    11: { title: "السنة ثانية ثانوي - علوم تجريبية", schedule: [
        { day: "الأحد", p1: "رياضيات", p2: "فيزياء", p3: "علوم", p4: "عربية", p5: "إنجليزية" },
        { day: "الإثنين", p1: "فرنسية", p2: "رياضيات", p3: "فيزياء", p4: "علوم", p5: "فلسفة" },
        { day: "الثلاثاء", p1: "فيزياء", p2: "علوم", p3: "رياضيات", p4: "إنجليزية", p5: "تربية بدنية" },
        { day: "الأربعاء", p1: "رياضيات", p2: "فرنسية", p3: "علوم", p4: "فيزياء", p5: "عربية" },
        { day: "الخميس", p1: "إنجليزية", p2: "فلسفة", p3: "رياضيات", p4: "فيزياء", p5: "علوم" }
    ] },
    12: { title: "السنة ثالثة ثانوي - علوم تجريبية", schedule: [
        { day: "الأحد", p1: "رياضيات", p2: "فيزياء", p3: "علوم", p4: "عربية", p5: "إنجليزية" },
        { day: "الإثنين", p1: "فرنسية", p2: "رياضيات", p3: "فيزياء", p4: "علوم", p5: "فلسفة" },
        { day: "الثلاثاء", p1: "فيزياء", p2: "علوم", p3: "رياضيات", p4: "إنجليزية", p5: "تربية بدنية" },
        { day: "الأربعاء", p1: "رياضيات", p2: "فرنسية", p3: "علوم", p4: "فيزياء", p5: "عربية" },
        { day: "الخميس", p1: "إنجليزية", p2: "فلسفة", p3: "رياضيات", p4: "فيزياء", p5: "علوم" }
    ] }
};

function loadSchedule(grade) {
    const container = document.getElementById('scheduleContent');
    if (!container) return;
    
    const data = schedules[grade];
    if (!data) return;
    
    let html = `<h3 style="margin-bottom: 20px;">${data.title}</h3>`;
    html += `<table class="schedule-table">
                <thead>
                    <tr><th>اليوم</th><th>8:00-9:00</th><th>9:00-10:00</th><th>10:15-11:15</th><th>11:15-12:15</th><th>12:45-13:45</th></tr>
                </thead>
                <tbody>`;
    
    data.schedule.forEach(row => {
        html += `<tr>
                    <td>${row.day}</td>
                    <td>${row.p1}</td>
                    <td>${row.p2}</td>
                    <td>${row.p3}</td>
                    <td>${row.p4}</td>
                    <td>${row.p5}</td>
                 </tr>`;
    });
    
    html += `</tbody></td>`;
    container.innerHTML = html;
}

function initScheduleButtons() {
    const gradeBtns = document.querySelectorAll('.grade-btn');
    if (gradeBtns.length === 0) return;
    
    gradeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            gradeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            loadSchedule(btn.dataset.grade);
        });
    });
    
    // تحميل الجدول الافتراضي
    const activeBtn = document.querySelector('.grade-btn.active');
    if (activeBtn) {
        loadSchedule(activeBtn.dataset.grade);
    } else if (gradeBtns[0]) {
        loadSchedule(gradeBtns[0].dataset.grade);
    }
}

// ============================================
// نموذج الاتصال (Contact Form)
// ============================================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً');
            contactForm.reset();
        });
    }
}

// ============================================
// لوحات التحكم (Dashboards)
// ============================================
function initDashboard() {
    // تبديل الأقسام في لوحة التحكم
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a[data-section]');
    if (sidebarLinks.length > 0) {
        sidebarLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.dataset.section;
                const sections = ['dashboard', 'grades', 'schedule', 'exams', 'attendance', 'classes', 'announcements', 'students', 'teachers'];
                
                sections.forEach(s => {
                    const el = document.getElementById(`${s}Section`);
                    if (el) el.style.display = 'none';
                });
                
                const targetSection = document.getElementById(`${section}Section`);
                if (targetSection) targetSection.style.display = 'block';
                
                sidebarLinks.forEach(a => a.classList.remove('active'));
                link.classList.add('active');
            });
        });
    }
    
    // زر القائمة المتنقلة في لوحات التحكم
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }
    
    // زر تسجيل الخروج
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('userRole');
            window.location.href = 'login.html';
        });
    }
}

// ============================================
// تسجيل الدخول (Login)
// ============================================
function initLogin() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                document.querySelectorAll('.login-form').forEach(form => form.classList.remove('active'));
                const targetForm = document.getElementById(`${btn.dataset.tab}Tab`);
                if (targetForm) targetForm.classList.add('active');
            });
        });
    }
    
    // تسجيل دخول التلميذ
    const studentLoginBtn = document.getElementById('studentLoginBtn');
    if (studentLoginBtn) {
        studentLoginBtn.addEventListener('click', () => {
            localStorage.setItem('userRole', 'student');
            localStorage.setItem('userName', 'أحمد معمري');
            window.location.href = 'student-dashboard.html';
        });
    }
    
    // تسجيل دخول الأستاذ
    const teacherLoginBtn = document.getElementById('teacherLoginBtn');
    if (teacherLoginBtn) {
        teacherLoginBtn.addEventListener('click', () => {
            localStorage.setItem('userRole', 'teacher');
            localStorage.setItem('userName', 'أستاذ رشيد معمري');
            window.location.href = 'teacher-dashboard.html';
        });
    }
    
    // تسجيل دخول الإدارة
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    if (adminLoginBtn) {
        adminLoginBtn.addEventListener('click', () => {
            localStorage.setItem('userRole', 'admin');
            localStorage.setItem('userName', 'مدير الثانوية');
            window.location.href = 'admin-dashboard.html';
        });
    }
}

// ============================================
// تهيئة الصفحة (Initialization)
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // تحديث السنوات تلقائياً
    updateAllYears();
    
    // تحميل الإعلانات
    loadAnnouncements();
    
    // تحريك الأرقام الإحصائية
    setTimeout(animateStats, 500);
    
    // تفعيل القائمة المتنقلة
    initMobileMenu();
    
    // تفعيل تحريك العناصر عند التمرير
    initScrollAnimation();
    
    // تفعيل معرض الصور إذا وجد
    if (document.getElementById('galleryGrid')) {
        initGalleryFilters();
    }
    
    // تفعيل جداول الحصص إذا وجدت
    if (document.getElementById('scheduleContent')) {
        initScheduleButtons();
    }
    
    // تفعيل نموذج الاتصال إذا وجد
    initContactForm();
    
    // تفعيل لوحات التحكم إذا وجدت
    initDashboard();
    
    // تفعيل تسجيل الدخول إذا وجد
    initLogin();
});

// ============================================
// تصدير الدوال للاستخدام العالمي
// ============================================
window.getCurrentYear = getCurrentYear;
window.getCurrentSchoolYear = getCurrentSchoolYear;
window.updateAllYears = updateAllYears;
window.loadAnnouncements = loadAnnouncements;
window.loadGallery = loadGallery;
window.loadSchedule = loadSchedule;
