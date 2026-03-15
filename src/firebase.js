import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut 
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHWV3aRa8BWd2i6JGIPGSkw0V3phkiHgo",
  authDomain: "portfolio-e731c.firebaseapp.com",
  projectId: "portfolio-e731c",
  storageBucket: "portfolio-e731c.firebasestorage.app",
  messagingSenderId: "991951530586",
  appId: "1:991951530586:web:631ed64e60bc07e3e98663",
  measurementId: "G-X9QY3QWNND"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

// services
export const auth = getAuth(app);
export const db = getFirestore(app);

// google provider
const provider = new GoogleAuthProvider();

// login
export const loginWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

// logout
export const logout = () => {
  return signOut(auth);
};