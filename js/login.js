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
