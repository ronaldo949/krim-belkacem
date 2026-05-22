/* =========================================
   Login System
   ثانوية كريم بلقاسم
========================================= */

"use strict";

/* =========================================
   Firebase Imports
========================================= */

import {

    auth,

    provider,

    db,

    signInWithPopup,

    signOut,

    onAuthStateChanged,

    doc,

    getDoc

} from "./firebase-config.js";

/* =========================================
   Elements
========================================= */

const loginBtn =
    document.getElementById(
        "googleLoginBtn"
    );

const logoutBtn =
    document.getElementById(
        "logoutBtn"
    );

const studentCodeInput =
    document.getElementById(
        "studentCode"
    );

const loginStatus =
    document.getElementById(
        "loginStatus"
    );

/* =========================================
   Google Login
========================================= */

if (loginBtn) {

    loginBtn.addEventListener(
        "click",
        async () => {

            const studentCode =
                studentCodeInput.value.trim();

            /* =========================================
               Validate Code
            ========================================= */

            if (studentCode === "") {

                alert(
                    "يرجى إدخال رمز التلميذ"
                );

                return;

            }

            try {

                /* =========================================
                   Google Sign In
                ========================================= */

                const result =
                    await signInWithPopup(
                        auth,
                        provider
                    );

                const user =
                    result.user;

                /* =========================================
                   Check Student In Database
                ========================================= */

                const studentRef =
                    doc(
                        db,
                        "students",
                        studentCode
                    );

                const studentSnap =
                    await getDoc(
                        studentRef
                    );

                /* =========================================
                   Invalid Student
                ========================================= */

                if (
                    !studentSnap.exists()
                ) {

                    alert(
                        "رمز التلميذ غير موجود"
                    );

                    await signOut(auth);

                    return;

                }

                /* =========================================
                   Student Data
                ========================================= */

                const studentData =
                    studentSnap.data();

                /* =========================================
                   Save Session
                ========================================= */

                localStorage.setItem(
                    "studentLoggedIn",
                    "true"
                );

                localStorage.setItem(
                    "studentName",
                    studentData.name || ""
                );

                localStorage.setItem(
                    "studentLastname",
                    studentData.lastname || ""
                );

                localStorage.setItem(
                    "studentCode",
                    studentCode
                );

                localStorage.setItem(
                    "studentEmail",
                    user.email
                );

                localStorage.setItem(
                    "studentPhoto",
                    user.photoURL || ""
                );

                /* =========================================
                   Success Message
                ========================================= */

                if (loginStatus) {

                    loginStatus.innerHTML = `

                        مرحباً ${studentData.name}

                    `;

                }

                /* =========================================
                   Redirect
                ========================================= */

                setTimeout(() => {

                    window.location.href =
                        "student-dashboard.html";

                }, 1500);

            } catch (error) {

                console.error(
                    "Login Error:",
                    error
                );

                alert(
                    "حدث خطأ أثناء تسجيل الدخول"
                );

            }

        }
    );

}

/* =========================================
   Logout
========================================= */

if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        async () => {

            try {

                await signOut(auth);

                localStorage.clear();

                window.location.href =
                    "login.html";

            } catch (error) {

                console.error(
                    "Logout Error:",
                    error
                );

            }

        }
    );

}

/* =========================================
   Auto Login Check
========================================= */

onAuthStateChanged(
    auth,
    user => {

        if (user) {

            console.log(
                "User Logged In:",
                user.email
            );

        } else {

            console.log(
                "No User Logged In"
            );

        }

    }
);

/* =========================================
   Protect Dashboard
========================================= */

const protectedPage =
    window.location.pathname.includes(
        "student-dashboard.html"
    );

if (protectedPage) {

    const loggedIn =
        localStorage.getItem(
            "studentLoggedIn"
        );

    if (!loggedIn) {

        window.location.href =
            "login.html";

    }

}