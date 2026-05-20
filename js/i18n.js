// i18n.js - نظام ترجمة متكامل لثانوية كريم بلقاسم

const translations = {
    ar: {
        "school.name": "ثانوية كريم بلقاسم",
        "school.location": "تيزي وزو، ذراع بن خدة، ميرابو",
        "nav.home": "الرئيسية",
        "nav.about": "عن الثانوية",
        "nav.guidance": "الإرشاد الدراسي",
        "nav.tips": "نصائح وتخصصات",
        "nav.gallery": "المعرض",
        "nav.files": "الملفات والجداول",
        "nav.contact": "اتصل بنا",
        "nav.login": "تسجيل الدخول",
        "hero.title": "ثانوية كريم بلقاسم",
        "hero.subtitle": "مؤسسة تربوية رائدة في تيزي وزو - جيل يبني المستقبل",
        "hero.btn": "اكتشف المزيد",
        "announcements.title": "الإعلانات والأخبار",
        "announcements.more": "المزيد",
        "quick.title": "خدماتنا",
        "quick.guidance": "الإرشاد الدراسي",
        "quick.guidance.desc": "مرافقتك لاختيار المسار المناسب",
        "quick.tips": "نصائح دراسية",
        "quick.tips.desc": "طرق مذاكرة فعالة للنجاح",
        "quick.schedules": "الجداول الدراسية",
        "quick.schedules.desc": "جدول الحصص والامتحانات",
        "quick.gallery": "معرض الصور",
        "quick.gallery.desc": "أجمل لحظاتنا في الثانوية",
        "stats.students": "طالب",
        "stats.teachers": "أستاذ",
        "stats.classrooms": "قسم",
        "stats.graduates": "خريج",
        "footer.contact": "اتصل بنا",
        "footer.follow": "تابعونا",
        "footer.address": "المقر",
        "about.title": "ثانوية كريم بلقاسم",
        "about.subtitle": "صرح تربوي شامخ في قلب تيزي وزو",
        "about.mission": "رسالتنا",
        "about.mission.text": "تخريج جيل متعلم قادر على مواجهة تحديات المستقبل، من خلال تعليم ذي جودة عالية يواكب المعايير الوطنية والدولية.",
        "about.vision": "رؤيتنا",
        "about.vision.text": "الريادة في التعليم الثانوي بالجزائر، وإعداد قادة المستقبل علمياً وأخلاقياً.",
        "about.values": "قيمنا",
        "about.history": "نبذة عن الثانوية",
        "about.history.text": "تأسست ثانوية كريم بلقاسم في منطقة ميرابو بذراع بن خدة، تيزي وزو، لتكون منارة للعلم والمعرفة في المنطقة. سميت تخليداً لذكرى البطل كريم بلقاسم، رمز الثورة الجزائرية.",
        "guidance.title": "مركز الإرشاد والتوجيه",
        "guidance.subtitle": "نساعدك على اختيار مستقبلك الدراسي والمهني",
        "guidance.step1": "تقييم الذات",
        "guidance.step1.desc": "اكتشف مهاراتك واهتماماتك",
        "guidance.step2": "استكشاف الخيارات",
        "guidance.step2.desc": "تعرّف على التخصصات المتاحة",
        "guidance.step3": "لقاء المرشد",
        "guidance.step3.desc": "استشر مرشدك الأكاديمي",
        "guidance.step4": "اتخاذ القرار",
        "guidance.step4.desc": "اختر المسار الأنسب لك",
        "guidance.paths": "المسارات الجامعية المتاحة",
        "guidance.scientific": "شعبة العلوم التجريبية",
        "guidance.scientific.desc": "طب، صيدلة، هندسة، علوم",
        "guidance.math": "شعبة الرياضيات",
        "guidance.math.desc": "هندسة مدنية، عمارة، رياضيات",
        "guidance.tech": "شعبة التقني رياضي",
        "guidance.tech.desc": "هندسة ميكانيكية، كهرباء",
        "guidance.literary": "شعبة الآداب والفلسفة",
        "guidance.literary.desc": "قانون، إعلام، لغات، تاريخ",
        "guidance.hours": "أوقات الاستقبال",
        "tips.title": "نصائح للنجاح والتفوق",
        "tips.organize": "تنظيم الوقت",
        "tips.organize.desc": "استخدم تقنية البومودورو 25/5",
        "tips.mindmap": "الخرائط الذهنية",
        "tips.mindmap.desc": "نظم معلوماتك بخرائط ذهنية",
        "tips.sleep": "النوم الكافي",
        "tips.sleep.desc": "7-8 ساعات لتركيز أفضل",
        "tips.review": "مراجعة يومية",
        "tips.review.desc": "راجع دروسك يومياً ولا تتراكم",
        "contact.title": "تواصل معنا",
        "contact.subtitle": "نرحب باستفساراتكم واقتراحاتكم",
        "contact.info": "معلومات الاتصال",
        "contact.name": "الاسم الكامل",
        "contact.email": "البريد الإلكتروني",
        "contact.phone": "رقم الهاتف",
        "contact.message": "رسالتك",
        "contact.send": "إرسال",
        "files.title": "الملفات والوثائق",
        "files.subtitle": "جميع الملفات الدراسية في مكان واحد",
        "files.exams": "جداول الامتحانات",
        "files.schedules": "جدول الحصص",
        "files.materials": "دروس وملخصات",
        "gallery.title": "معرض الصور",
        "gallery.subtitle": "أجمل ذكرياتنا في الثانوية",
        "gallery.all": "الكل",
        "gallery.activities": "الأنشطة",
        "gallery.events": "الاحتفالات",
        "gallery.sports": "الرياضة",
        "gallery.classes": "الفصول",
        "login.title": "منصة التلميذ",
        "login.subtitle": "فضاء خاص للتلاميذ وأولياء الأمور",
        "login.student": "تلميذ",
        "login.teacher": "أستاذ",
        "login.admin": "إدارة",
        "login.email": "البريد الإلكتروني",
        "login.password": "كلمة المرور",
        "login.google": "دخول بحساب Google",
        "login.button": "دخول",
        "student.welcome": "مرحباً بك في فضاء التلميذ",
        "student.dashboard": "الرئيسية",
        "student.grades": "معدلاتي",
        "student.schedule": "جدول الحصص",
        "student.exams": "الاختبارات",
        "student.attendance": "نسبة الحضور"
    },
    en: {
        "school.name": "Karim Belkacem High School",
        "school.location": "Tizi Ouzou, Draa Ben Khedda, Mirabeau",
        "nav.home": "Home",
        "nav.about": "About",
        "nav.guidance": "Guidance",
        "nav.tips": "Tips & Specialties",
        "nav.gallery": "Gallery",
        "nav.files": "Files & Schedules",
        "nav.contact": "Contact",
        "nav.login": "Login",
        "hero.title": "Karim Belkacem High School",
        "hero.subtitle": "A leading educational institution in Tizi Ouzou - A generation building the future",
        "hero.btn": "Learn More",
        "announcements.title": "Announcements & News",
        "announcements.more": "More",
        "quick.title": "Our Services",
        "quick.guidance": "Academic Guidance",
        "quick.guidance.desc": "Help you choose the right path",
        "quick.tips": "Study Tips",
        "quick.tips.desc": "Effective study methods for success",
        "quick.schedules": "Schedules",
        "quick.schedules.desc": "Class and exam schedules",
        "quick.gallery": "Gallery",
        "quick.gallery.desc": "Our best moments at school",
        "stats.students": "Students",
        "stats.teachers": "Teachers",
        "stats.classrooms": "Classrooms",
        "stats.graduates": "Graduates",
        "footer.contact": "Contact Us",
        "footer.follow": "Follow Us",
        "footer.address": "Address",
        "about.title": "Karim Belkacem High School",
        "about.subtitle": "A proud educational landmark in Tizi Ouzou",
        "about.mission": "Our Mission",
        "about.mission.text": "To graduate educated generations capable of facing future challenges through high-quality education that meets national and international standards.",
        "about.vision": "Our Vision",
        "about.vision.text": "Leadership in secondary education in Algeria, preparing future leaders academically and morally.",
        "about.values": "Our Values",
        "about.history": "About Our School",
        "about.history.text": "Karim Belkacem High School was established in Mirabeau, Draa Ben Khedda, Tizi Ouzou, as a beacon of knowledge in the region. Named in memory of the hero Karim Belkacem, a symbol of the Algerian revolution.",
        "guidance.title": "Guidance Center",
        "guidance.subtitle": "We help you choose your academic and professional future",
        "guidance.step1": "Self Assessment",
        "guidance.step1.desc": "Discover your skills and interests",
        "guidance.step2": "Explore Options",
        "guidance.step2.desc": "Learn about available specialties",
        "guidance.step3": "Counselor Meeting",
        "guidance.step3.desc": "Meet your academic advisor",
        "guidance.step4": "Decision Making",
        "guidance.step4.desc": "Choose the right path for you",
        "guidance.paths": "Available University Paths",
        "guidance.scientific": "Experimental Sciences",
        "guidance.scientific.desc": "Medicine, Pharmacy, Engineering",
        "guidance.math": "Mathematics",
        "guidance.math.desc": "Civil Engineering, Architecture",
        "guidance.tech": "Technical Math",
        "guidance.tech.desc": "Mechanical Engineering, Electrical",
        "guidance.literary": "Literature & Philosophy",
        "guidance.literary.desc": "Law, Media, Languages, History",
        "tips.title": "Tips for Success",
        "tips.organize": "Time Management",
        "tips.organize.desc": "Use Pomodoro technique 25/5",
        "tips.mindmap": "Mind Maps",
        "tips.mindmap.desc": "Organize information with mind maps",
        "tips.sleep": "Adequate Sleep",
        "tips.sleep.desc": "7-8 hours for better focus",
        "tips.review": "Daily Review",
        "tips.review.desc": "Review lessons daily, don't accumulate",
        "contact.title": "Contact Us",
        "contact.subtitle": "We welcome your inquiries",
        "contact.info": "Contact Information",
        "contact.name": "Full Name",
        "contact.email": "Email",
        "contact.phone": "Phone Number",
        "contact.message": "Your Message",
        "contact.send": "Send",
        "files.title": "Files & Documents",
        "files.subtitle": "All study documents in one place",
        "files.exams": "Exam Schedules",
        "files.schedules": "Class Schedule",
        "files.materials": "Lessons & Summaries",
        "gallery.title": "Photo Gallery",
        "gallery.subtitle": "Our best memories at school",
        "gallery.all": "All",
        "gallery.activities": "Activities",
        "gallery.events": "Events",
        "gallery.sports": "Sports",
        "gallery.classes": "Classes",
        "login.title": "Student Portal",
        "login.subtitle": "Private space for students and parents",
        "login.student": "Student",
        "login.teacher": "Teacher",
        "login.admin": "Admin",
        "login.email": "Email",
        "login.password": "Password",
        "login.google": "Sign in with Google",
        "login.button": "Login",
        "student.welcome": "Welcome to Student Portal",
        "student.dashboard": "Dashboard",
        "student.grades": "My Grades",
        "student.schedule": "Schedule",
        "student.exams": "Exams",
        "student.attendance": "Attendance"
    },
    fr: {
        "school.name": "Lycée Karim Belkacem",
        "school.location": "Tizi Ouzou, Draa Ben Khedda, Mirabeau",
        "nav.home": "Accueil",
        "nav.about": "À propos",
        "nav.guidance": "Orientation",
        "nav.tips": "Conseils & Spécialités",
        "nav.gallery": "Galerie",
        "nav.files": "Fichiers & Horaires",
        "nav.contact": "Contact",
        "nav.login": "Connexion",
        "hero.title": "Lycée Karim Belkacem",
        "hero.subtitle": "Une institution éducative leader à Tizi Ouzou - Une génération construit l'avenir",
        "hero.btn": "En savoir plus",
        "announcements.title": "Annonces & Actualités",
        "announcements.more": "Plus",
        "quick.title": "Nos Services",
        "quick.guidance": "Orientation scolaire",
        "quick.guidance.desc": "Vous aider à choisir la bonne voie",
        "quick.tips": "Conseils d'étude",
        "quick.tips.desc": "Méthodes efficaces pour réussir",
        "quick.schedules": "Horaires",
        "quick.schedules.desc": "Horaires des cours et examens",
        "quick.gallery": "Galerie",
        "quick.gallery.desc": "Nos meilleurs moments au lycée",
        "stats.students": "Élèves",
        "stats.teachers": "Professeurs",
        "stats.classrooms": "Classes",
        "stats.graduates": "Diplômés",
        "footer.contact": "Contactez-nous",
        "footer.follow": "Suivez-nous",
        "footer.address": "Adresse",
        "about.title": "Lycée Karim Belkacem",
        "about.subtitle": "Un établissement éducatif fier à Tizi Ouzou",
        "about.mission": "Notre Mission",
        "about.mission.text": "Former des générations éduquées capables de relever les défis futurs grâce à une éducation de qualité répondant aux normes nationales et internationales.",
        "about.vision": "Notre Vision",
        "about.vision.text": "Leadership dans l'enseignement secondaire en Algérie, préparant les futurs leaders académiquement et moralement.",
        "about.values": "Nos Valeurs",
        "about.history": "À propos de notre lycée",
        "about.history.text": "Le Lycée Karim Belkacem a été établi à Mirabeau, Draa Ben Khedda, Tizi Ouzou, comme un phare de la connaissance dans la région. Nommé en mémoire du héros Karim Belkacem, symbole de la révolution algérienne.",
        "guidance.title": "Centre d'Orientation",
        "guidance.subtitle": "Nous vous aidons à choisir votre avenir académique et professionnel",
        "guidance.step1": "Auto-évaluation",
        "guidance.step1.desc": "Découvrez vos compétences et intérêts",
        "guidance.step2": "Explorer les options",
        "guidance.step2.desc": "Découvrez les spécialités disponibles",
        "guidance.step3": "Rencontre conseiller",
        "guidance.step3.desc": "Rencontrez votre conseiller académique",
        "guidance.step4": "Prise de décision",
        "guidance.step4.desc": "Choisissez la voie qui vous convient",
        "guidance.paths": "Filières universitaires disponibles",
        "guidance.scientific": "Sciences expérimentales",
        "guidance.scientific.desc": "Médecine, Pharmacie, Ingénierie",
        "guidance.math": "Mathématiques",
        "guidance.math.desc": "Génie civil, Architecture",
        "guidance.tech": "Math techniques",
        "guidance.tech.desc": "Génie mécanique, Électrique",
        "guidance.literary": "Lettres & Philosophie",
        "guidance.literary.desc": "Droit, Médias, Langues, Histoire",
        "tips.title": "Conseils de réussite",
        "tips.organize": "Gestion du temps",
        "tips.organize.desc": "Utilisez la technique Pomodoro 25/5",
        "tips.mindmap": "Cartes mentales",
        "tips.mindmap.desc": "Organisez l'information avec des cartes",
        "tips.sleep": "Sommeil adéquat",
        "tips.sleep.desc": "7-8 heures pour mieux se concentrer",
        "tips.review": "Révision quotidienne",
        "tips.review.desc": "Révisez les leçons quotidiennement",
        "contact.title": "Contactez-nous",
        "contact.subtitle": "Nous accueillons vos questions",
        "contact.info": "Coordonnées",
        "contact.name": "Nom complet",
        "contact.email": "Email",
        "contact.phone": "Téléphone",
        "contact.message": "Votre message",
        "contact.send": "Envoyer",
        "files.title": "Fichiers et documents",
        "files.subtitle": "Tous les documents d'étude au même endroit",
        "files.exams": "Calendriers d'examens",
        "files.schedules": "Emploi du temps",
        "files.materials": "Cours et résumés",
        "gallery.title": "Galerie photo",
        "gallery.subtitle": "Nos meilleurs souvenirs au lycée",
        "gallery.all": "Tous",
        "gallery.activities": "Activités",
        "gallery.events": "Événements",
        "gallery.sports": "Sports",
        "gallery.classes": "Classes",
        "login.title": "Portail étudiant",
        "login.subtitle": "Espace privé pour les élèves et parents",
        "login.student": "Élève",
        "login.teacher": "Professeur",
        "login.admin": "Admin",
        "login.email": "Email",
        "login.password": "Mot de passe",
        "login.google": "Connexion avec Google",
        "login.button": "Connexion",
        "student.welcome": "Bienvenue au Portail Étudiant",
        "student.dashboard": "Tableau de bord",
        "student.grades": "Mes notes",
        "student.schedule": "Emploi du temps",
        "student.exams": "Examens",
        "student.attendance": "Présence"
    }
};

let currentLang = 'ar';
let langMenuVisible = false;

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('schoolLang', lang);
    
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang === 'ar' ? 'ar' : (lang === 'en' ? 'en' : 'fr');
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
                el.placeholder = translations[lang][key];
            } else if (el.tagName === 'TEXTAREA' && el.hasAttribute('placeholder')) {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    
    hideLanguageMenu();
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));
}

function toggleLanguageMenu() {
    const menu = document.getElementById('languageMenu');
    if (langMenuVisible) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
    langMenuVisible = !langMenuVisible;
}

function hideLanguageMenu() {
    const menu = document.getElementById('languageMenu');
    if (menu) menu.classList.remove('show');
    langMenuVisible = false;
}

function t(key) {
    return translations[currentLang]?.[key] || translations['ar'][key] || key;
}

document.addEventListener('DOMContentLoaded', () => {
    if (!document.querySelector('.lang-toggle-btn')) {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'lang-toggle-btn';
        toggleBtn.innerHTML = '🌐';
        toggleBtn.onclick = (e) => {
            e.stopPropagation();
            toggleLanguageMenu();
        };
        document.body.appendChild(toggleBtn);
        
        const langMenu = document.createElement('div');
        langMenu.id = 'languageMenu';
        langMenu.className = 'language-switcher';
        langMenu.innerHTML = `
            <button class="lang-btn" data-lang="ar">🇩🇪 العربية</button>
            <button class="lang-btn" data-lang="en">🇬🇧 English</button>
            <button class="lang-btn" data-lang="fr">🇫🇷 Français</button>
        `;
        document.body.appendChild(langMenu);
        
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                setLanguage(btn.getAttribute('data-lang'));
            });
        });
    }
    
    const savedLang = localStorage.getItem('schoolLang') || 'ar';
    setLanguage(savedLang);
    
    document.addEventListener('click', (e) => {
        if (langMenuVisible && !e.target.closest('.language-switcher') && !e.target.closest('.lang-toggle-btn')) {
            hideLanguageMenu();
        }
    });
});

window.t = t;
window.setLanguage = setLanguage;