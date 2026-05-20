// firebase-config.js - إعدادات Firebase للمصادقة وتخزين البيانات
// ملاحظة: يجب استبدال هذه القيم بقيم مشروعك الفعلية من Firebase Console

// ============================================
// 🔥 إعدادات Firebase - استبدلي هذه القيم بقيم مشروعك
// ============================================

// للبدء:
// 1. اذهبي إلى https://console.firebase.google.com/
// 2. أنشئ مشروعاً جديداً (مثال: school-website)
// 3. أضف تطبيق ويب (Web App)
// 4. انسخ الإعدادات أدناه والصقيها هنا

const firebaseConfig = {
    // 🔑 استبدلي هذه القيم بقيم مشروعك من Firebase Console
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "YOUR_AUTH_DOMAIN_HERE.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID_HERE",
    storageBucket: "YOUR_STORAGE_BUCKET_HERE.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID_HERE",
    appId: "YOUR_APP_ID_HERE",
    measurementId: "YOUR_MEASUREMENT_ID_HERE" // اختياري
};

// ============================================
// تهيئة Firebase
// ============================================

// التحقق من تحميل Firebase SDK
if (typeof firebase === 'undefined') {
    console.warn('Firebase SDK not loaded. Please add Firebase scripts to your HTML.');
}

let app = null;
let auth = null;
let db = null;
let storage = null;

// تهيئة Firebase إذا كانت الإعدادات صالحة
if (firebaseConfig.apiKey !== "YOUR_API_KEY_HERE") {
    try {
        // تهيئة التطبيق
        app = firebase.initializeApp(firebaseConfig);
        
        // تهيئة المصادقة
        auth = firebase.auth(app);
        
        // تهيئة Firestore (قاعدة البيانات) - اختياري
        if (firebase.firestore) {
            db = firebase.firestore(app);
        }
        
        // تهيئة التخزين - اختياري
        if (firebase.storage) {
            storage = firebase.storage(app);
        }
        
        console.log('Firebase initialized successfully ✅');
    } catch (error) {
        console.error('Firebase initialization error ❌:', error);
    }
} else {
    console.warn('⚠️ Please configure Firebase with your actual project credentials');
    console.warn('Go to: https://console.firebase.google.com/ to create a project');
}

// ============================================
// 🔐 دوال المصادقة (Authentication)
// ============================================

// تسجيل الدخول بحساب Google
function signInWithGoogle(redirectUrl = '/student-dashboard.html') {
    if (!auth) {
        console.error('Firebase auth not initialized');
        alert('Firebase not configured. Please set up Firebase first.');
        return Promise.reject('Firebase not configured');
    }
    
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('email');
    provider.addScope('profile');
    
    return auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            console.log('User signed in:', user);
            
            // حفظ معلومات المستخدم
            localStorage.setItem('user', JSON.stringify({
                uid: user.uid,
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL
            }));
            
            // تحديد نوع المستخدم بناءً على البريد الإلكتروني
            let userRole = 'student';
            if (user.email.includes('admin') || user.email.includes('manager')) {
                userRole = 'admin';
            } else if (user.email.includes('teacher') || user.email.includes('prof')) {
                userRole = 'teacher';
            }
            
            localStorage.setItem('userRole', userRole);
            localStorage.setItem('userName', user.displayName);
            
            // التوجيه للصفحة المناسبة
            window.location.href = redirectUrl;
            return { user, role: userRole };
        })
        .catch((error) => {
            console.error('Google Sign-In Error:', error);
            let errorMessage = 'حدث خطأ في تسجيل الدخول';
            
            switch (error.code) {
                case 'auth/popup-blocked':
                    errorMessage = 'تم حظر النافذة المنبثقة. يرجى السماح بالنوافذ المنبثقة للموقع.';
                    break;
                case 'auth/cancelled-popup-request':
                    errorMessage = 'تم إلغاء طلب تسجيل الدخول.';
                    break;
                default:
                    errorMessage = error.message;
            }
            
            alert(errorMessage);
            throw error;
        });
}

// تسجيل الدخول بالبريد الإلكتروني وكلمة المرور
function signInWithEmail(email, password, redirectUrl = '/student-dashboard.html') {
    if (!auth) {
        console.error('Firebase auth not initialized');
        return Promise.reject('Firebase not configured');
    }
    
    return auth.signInWithEmailAndPassword(email, password)
        .then((result) => {
            const user = result.user;
            console.log('Email sign in successful:', user.email);
            
            localStorage.setItem('user', JSON.stringify({
                uid: user.uid,
                email: user.email,
                name: user.email.split('@')[0]
            }));
            
            window.location.href = redirectUrl;
            return user;
        })
        .catch((error) => {
            console.error('Email Sign-In Error:', error);
            let errorMessage = 'فشل تسجيل الدخول';
            
            switch (error.code) {
                case 'auth/user-not-found':
                    errorMessage = 'لا يوجد حساب بهذا البريد الإلكتروني.';
                    break;
                case 'auth/wrong-password':
                    errorMessage = 'كلمة المرور غير صحيحة.';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'البريد الإلكتروني غير صالح.';
                    break;
                default:
                    errorMessage = error.message;
            }
            
            alert(errorMessage);
            throw error;
        });
}

// تسجيل حساب جديد
function signUpWithEmail(email, password, userData = {}) {
    if (!auth) {
        console.error('Firebase auth not initialized');
        return Promise.reject('Firebase not configured');
    }
    
    return auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
            const user = result.user;
            console.log('User created:', user.email);
            
            // تحديث الملف الشخصي
            if (userData.displayName) {
                return user.updateProfile({
                    displayName: userData.displayName
                }).then(() => {
                    return user;
                });
            }
            
            return user;
        })
        .catch((error) => {
            console.error('Sign Up Error:', error);
            let errorMessage = 'فشل إنشاء الحساب';
            
            switch (error.code) {
                case 'auth/email-already-in-use':
                    errorMessage = 'البريد الإلكتروني مستخدم بالفعل.';
                    break;
                case 'auth/weak-password':
                    errorMessage = 'كلمة المرور ضعيفة. يجب أن تكون 6 أحرف على الأقل.';
                    break;
                default:
                    errorMessage = error.message;
            }
            
            alert(errorMessage);
            throw error;
        });
}

// تسجيل الخروج
function signOut() {
    if (!auth) {
        console.error('Firebase auth not initialized');
        return Promise.reject('Firebase not configured');
    }
    
    return auth.signOut()
        .then(() => {
            localStorage.removeItem('user');
            localStorage.removeItem('userRole');
            localStorage.removeItem('userName');
            console.log('User signed out');
            window.location.href = 'login.html';
        })
        .catch((error) => {
            console.error('Sign Out Error:', error);
            alert('حدث خطأ في تسجيل الخروج');
        });
}

// مراقبة حالة تسجيل الدخول
function onAuthStateChanged(callback) {
    if (!auth) {
        console.warn('Firebase auth not initialized');
        return () => {};
    }
    
    return auth.onAuthStateChanged((user) => {
        if (user) {
            console.log('User is signed in:', user.email);
            localStorage.setItem('user', JSON.stringify({
                uid: user.uid,
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL
            }));
        } else {
            console.log('User is signed out');
            localStorage.removeItem('user');
        }
        callback(user);
    });
}

// التحقق من أن المستخدم مسجل الدخول
function requireAuth(redirectToLogin = true) {
    const user = localStorage.getItem('user');
    if (!user && redirectToLogin) {
        window.location.href = 'login.html';
        return false;
    }
    return !!user;
}

// الحصول على معلومات المستخدم الحالي
function getCurrentUser() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
}

// ============================================
// 💾 دوال قاعدة البيانات (Firestore)
// ============================================

// إضافة وثيقة إلى مجموعة
async function addDocument(collectionName, data) {
    if (!db) {
        console.error('Firestore not initialized');
        return null;
    }
    
    try {
        const docRef = await db.collection(collectionName).add({
            ...data,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log(`Document added to ${collectionName} with ID:`, docRef.id);
        return docRef;
    } catch (error) {
        console.error('Error adding document:', error);
        return null;
    }
}

// الحصول على وثائق من مجموعة
async function getDocuments(collectionName, constraints = []) {
    if (!db) {
        console.error('Firestore not initialized');
        return [];
    }
    
    try {
        let query = db.collection(collectionName);
        constraints.forEach(constraint => {
            query = query.where(constraint.field, constraint.operator, constraint.value);
        });
        
        const snapshot = await query.get();
        const documents = [];
        snapshot.forEach(doc => {
            documents.push({ id: doc.id, ...doc.data() });
        });
        return documents;
    } catch (error) {
        console.error('Error getting documents:', error);
        return [];
    }
}

// ============================================
// 📁 دوال التخزين (Storage)
// ============================================

// رفع ملف
async function uploadFile(filePath, file) {
    if (!storage) {
        console.error('Storage not initialized');
        return null;
    }
    
    try {
        const storageRef = storage.ref(filePath);
        const snapshot = await storageRef.put(file);
        const url = await snapshot.ref.getDownloadURL();
        console.log('File uploaded successfully:', url);
        return url;
    } catch (error) {
        console.error('Upload error:', error);
        return null;
    }
}

// حذف ملف
async function deleteFile(filePath) {
    if (!storage) {
        console.error('Storage not initialized');
        return false;
    }
    
    try {
        const storageRef = storage.ref(filePath);
        await storageRef.delete();
        console.log('File deleted successfully');
        return true;
    } catch (error) {
        console.error('Delete error:', error);
        return false;
    }
}

// ============================================
// 📢 دوال مخصصة للمدرسة
// ============================================

// إضافة إعلان جديد
async function addAnnouncement(title, description, date, author) {
    return addDocument('announcements', {
        title: title,
        description: description,
        date: date,
        author: author,
        published: true
    });
}

// الحصول على الإعلانات
async function getAnnouncements(limit = 10) {
    return getDocuments('announcements', []);
}

// إضافة طالب جديد
async function addStudent(studentData) {
    return addDocument('students', studentData);
}

// تسجيل حضور طالب
async function markAttendance(studentId, date, status) {
    return addDocument('attendance', {
        studentId: studentId,
        date: date,
        status: status, // 'present', 'absent', 'late'
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
}

// ============================================
// تصدير الدوال للاستخدام العالمي
// ============================================

window.firebaseAPI = {
    // المصادقة
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    signOut,
    onAuthStateChanged,
    requireAuth,
    getCurrentUser,
    
    // قاعدة البيانات
    addDocument,
    getDocuments,
    addAnnouncement,
    getAnnouncements,
    addStudent,
    markAttendance,
    
    // التخزين
    uploadFile,
    deleteFile,
    
    // الحالة
    isInitialized: () => auth !== null
};

// ============================================
// إعدادات تجريبية للعرض (للتطوير فقط)
// ============================================

// إذا لم يتم تكوين Firebase، استخدم localStorage كحل بديل
if (firebaseConfig.apiKey === "YOUR_API_KEY_HERE") {
    console.warn('⚠️ Using local storage fallback. Configure Firebase for production.');
    
    // حل بديل بسيط لمواصلة العمل بدون Firebase
    window.fallbackAuth = {
        signIn: (email, password, role) => {
            localStorage.setItem('userRole', role);
            localStorage.setItem('userEmail', email);
            return Promise.resolve({ email, role });
        },
        signOut: () => {
            localStorage.removeItem('userRole');
            localStorage.removeItem('userEmail');
            return Promise.resolve();
        }
    };
}

console.log('Firebase Config Loaded ✅');