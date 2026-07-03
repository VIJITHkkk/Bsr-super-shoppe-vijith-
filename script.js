
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

// Firebase Configuration

const firebaseConfig = {
  apiKey: "AIzaSyB1KKJiGC-x8tVf7eLn-mX3jXjjdoq58n0",
  authDomain: "bsr-fish-stall-2b1d4.firebaseapp.com",
  databaseURL: "https://bsr-fish-stall-2b1d4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bsr-fish-stall-2b1d4",
  storageBucket: "bsr-fish-stall-2b1d4.firebasestorage.app",
  messagingSenderId: "167357195775",
  appId: "1:167357195775:web:38c1e500d38743b240b3ca",
  measurementId: "G-T9WDYZSWVX"
};"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login Successful");
      window.location.href = "admin.html";
    })
    .catch((error) => {
      document.getElementById("message").innerText = error.message;
    });
});
