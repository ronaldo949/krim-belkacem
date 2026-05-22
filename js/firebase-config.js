/* =========================================
   Firebase Configuration File
   ثانوية كريم بلقاسم
========================================= */

"use strict";

/* =========================================
   Firebase SDK Imports
========================================= */

import { initializeApp }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

    getAuth,

    GoogleAuthProvider,

    signInWithPopup,

    signOut,

    onAuthStateChanged,

    setPersistence,

    browserLocalPersistence

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {

    getFirestore,

    doc,

    getDoc,

    setDoc,

    updateDoc,

    collection,

    addDoc

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* =========================================
   Firebase Config
========================================= */

const firebaseConfig = {

    apiKey: "AIzaSyB19bYF7qipO4HgcA2TEvef3O-uPdnPxeM",

    authDomain: "krim-belkacem.firebaseapp.com",

    projectId: "krim-belkacem",

    storageBucket: "krim-belkacem.firebasestorage.app",

    messagingSenderId: "111065327008",

    appId: "1:111065327008:web:9a197b75663e8111af70c5",

    measurementId: "G-1DERS9315Y"

};

/* =========================================
   Initialize Firebase
========================================= */

const app = initializeApp(firebaseConfig);

/* =========================================
   Authentication
========================================= */

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

/* =========================================
   Keep User Logged In
========================================= */

setPersistence(

    auth,

    browserLocalPersistence

).catch(error => {

    console.error(

        "Persistence Error:",

        error

    );

});

/* =========================================
   Firestore Database
========================================= */

const db = getFirestore(app);

/* =========================================
   Exports
========================================= */

export {

    app,

    auth,

    provider,

    db,

    signInWithPopup,

    signOut,

    onAuthStateChanged,

    doc,

    getDoc,

    setDoc,

    updateDoc,

    collection,

    addDoc

};
