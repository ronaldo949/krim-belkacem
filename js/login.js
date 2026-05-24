// ===============================
// Import Firebase Functions
// ===============================

import {

    loginStudent

} from "./firebase.js";


// ===============================
// Elements
// ===============================

const loginForm =
    document.getElementById("loginForm");

const studentCodeInput =
    document.getElementById("studentCode");

const loginBtn =
    document.getElementById("loginBtn");


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
