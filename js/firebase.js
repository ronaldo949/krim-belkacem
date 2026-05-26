// ===============================
// Firebase Config & Initialization
// ===============================

import {
    initializeApp
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    getFirestore,
    doc,
    getDoc,
    updateDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// ===============================
// Firebase Config
// ===============================

const firebaseConfig = {

    apiKey: "AIzaSyB19bYF7qipO4HgcA2TEvef3O-uPdnPxeM",

    authDomain: "krim-belkacem.firebaseapp.com",

    projectId: "krim-belkacem",

    storageBucket: "krim-belkacem.firebasestorage.app",

    messagingSenderId: "111065327008",

    appId: "1:111065327008:web:9a197b75663e8111af70c5",

    measurementId: "G-1DERS9315Y"
};


// ===============================
// Initialize Firebase
// ===============================

const app =
initializeApp(firebaseConfig);

const auth =
getAuth(app);

const db =
getFirestore(app);

const provider =
new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});


// ===============================
// Login Function
// ===============================

async function loginStudent(
    studentCode
){

    try{

        if(!studentCode){

            alert(
                "يرجى إدخال رمز التلميذ"
            );

            return;
        }

        // Google Login

        const result =
        await signInWithPopup(
            auth,
            provider
        );

        const user =
        result.user;

        const email =
        user.email;

        // Student Document

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

        // Check Student Exists

        if(!studentSnap.exists()){

            alert(
                "رمز التلميذ غير موجود"
            );

            await signOut(auth);

            return;
        }

        const studentData =
        studentSnap.data();

        // First Login

        if(!studentData.email){

            await updateDoc(
                studentRef,
                {
                    email: email
                }
            );

            localStorage.setItem(
                "studentCode",
                studentCode
            );

            alert(
                "تم ربط البريد الإلكتروني بنجاح ✅"
            );

            window.location.href =
            "student-dashboard.html";

            return;
        }

        // Existing Account

        if(
            studentData.email !== email
        ){

            alert(
                "هذا البريد الإلكتروني غير مرتبط بهذا الحساب"
            );

            await signOut(auth);

            return;
        }

        // Success Login

        localStorage.setItem(
            "studentCode",
            studentCode
        );

        alert(
            "تم تسجيل الدخول بنجاح ✅"
        );

        window.location.href =
        "student-dashboard.html";
    }

    catch(error){

        console.error(error);

        alert(
            "حدث خطأ أثناء تسجيل الدخول"
        );
    }
}


// ===============================
// Logout Function
// ===============================

async function logoutStudent(){

    try{

        await signOut(auth);

        localStorage.removeItem(
            "studentCode"
        );

        window.location.href =
        "login.html";
    }

    catch(error){

        console.error(error);

        alert(
            "حدث خطأ أثناء تسجيل الخروج"
        );
    }
}


// ===============================
// Check Login
// ===============================

function checkAuth(){

    onAuthStateChanged(
        auth,
        (user)=>{

            if(!user){

                window.location.href =
                "login.html";
            }
        }
    );
}


// ===============================
// Change Gmail
// ===============================

async function changeStudentEmail(
    studentCode
) {

    try {

        const result =
        await signInWithPopup(
            auth,
            provider
        );

        const user =
        result.user;

        const newEmail =
        user.email;

        const studentRef =
        doc(
            db,
            "students",
            studentCode
        );

        await updateDoc(
            studentRef,
            {
                email: newEmail
            }
        );

        // Logout All Devices

        await signOut(auth);

        localStorage.clear();

        alert(
            "تم تغيير البريد الإلكتروني بنجاح ✅"
        );

        window.location.href =
        "login.html";

    }

    catch(error){

        console.error(error);

        alert(
            "فشل تغيير البريد الإلكتروني"
        );
    }
}


// ===============================
// Export
// ===============================

export {

    auth,

    db,

    loginStudent,

    logoutStudent,

    checkAuth,

    changeStudentEmail
};
