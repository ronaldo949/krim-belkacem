// ===============================
// Import Firebase Functions
// ===============================

import {

    loginStudent

} from "./firebase.js";

import {

    getFirestore,
    doc,
    updateDoc

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {

    getAuth,
    GoogleAuthProvider,
    signInWithPopup

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {

    initializeApp

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


// ===============================
// Firebase Config
// ===============================

const firebaseConfig = {

    apiKey: "AIzaSyB19bYF7qipO4HgcA2TEvef3O-uPdnPxeM",

    authDomain: "krim-belkacem.firebaseapp.com",

    projectId: "krim-belkacem",

    storageBucket: "krim-belkacem.firebasestorage.app",

    messagingSenderId: "111065327008",

    appId: "1:111065327008:web:9a197b75663e8111af70c5"
};


// ===============================
// Init Firebase
// ===============================

const app =
initializeApp(firebaseConfig);

const db =
getFirestore(app);

const auth =
getAuth(app);

const provider =
new GoogleAuthProvider();


// ===============================
// Elements
// ===============================

const loginForm =
document.getElementById(
    "loginForm"
);

const studentCodeInput =
document.getElementById(
    "studentCode"
);

const loginBtn =
document.getElementById(
    "loginBtn"
);


// ===============================
// Login Submit
// ===============================

loginForm?.addEventListener(
    "submit",
    async (e) => {

        e.preventDefault();

        const studentCode =
        studentCodeInput.value
        .trim()
        .toUpperCase();

        if (!studentCode) {

            alert(
                "يرجى إدخال رمز التلميذ"
            );

            return;
        }

        // Disable Button

        loginBtn.disabled = true;

        loginBtn.innerHTML = `
            <i class="fas fa-spinner fa-spin"></i>
            جاري تسجيل الدخول...
        `;

        try {

            // ===============================
            // Check Change Email Mode
            // ===============================

            const params =
            new URLSearchParams(
                window.location.search
            );

            const changingEmail =
            params.get(
                "changeEmail"
            );

            // ===============================
            // Change Email
            // ===============================

            if(changingEmail === "true"){

                localStorage.setItem(
                    "studentCode",
                    studentCode
                );

                const result =
                await signInWithPopup(
                    auth,
                    provider
                );

                const user =
                result.user;

                const studentRef =
                doc(
                    db,
                    "students",
                    studentCode
                );

                await updateDoc(
                    studentRef,
                    {
                        email: user.email
                    }
                );

                alert(
                    "تم تغيير البريد الإلكتروني بنجاح ✅"
                );

                await auth.signOut();

                localStorage.clear();

                window.location.href =
                "login.html";

                return;
            }

            // ===============================
            // Normal Login
            // ===============================

            await loginStudent(
                studentCode
            );
        }

        catch (error) {

            console.error(error);

            alert(
                "حدث خطأ أثناء تسجيل الدخول"
            );
        }

        finally {

            loginBtn.disabled = false;

            loginBtn.innerHTML = `
                <i class="fab fa-google"></i>
                تسجيل الدخول عبر Google
            `;
        }
    }
);


// ===============================
// Auto Uppercase
// ===============================

studentCodeInput?.addEventListener(
    "input",
    () => {

        studentCodeInput.value =
        studentCodeInput.value.toUpperCase();
    }
);


// ===============================
// Enter Animation
// ===============================

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );
    }
);


// ===============================
// Secret Teacher Access
// ===============================

const secretBtn =
document.getElementById(
    "secretBtn"
);

const teacherPanel =
document.getElementById(
    "teacherPanel"
);

const teacherLoginBtn =
document.getElementById(
    "teacherLoginBtn"
);

const teacherPassword =
document.getElementById(
    "teacherPassword"
);

secretBtn?.addEventListener(
    "click",
    () => {

        teacherPanel.classList.toggle(
            "active"
        );
    }
);

teacherLoginBtn?.addEventListener(
    "click",
    () => {

        const password =
        teacherPassword.value.trim();

        if (
            password === "ADMIN2026"
        ) {

            window.location.href =
            "teacher-dashboard.html";

        } else {

            alert(
                "الرمز السري غير صحيح"
            );
        }
    }
);
