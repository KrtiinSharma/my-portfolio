import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAkixdh3_g_FCVjwmsyRK_n4ej4ZWaX6WM",
  authDomain: "portfolio-6445d.firebaseapp.com",
  projectId: "portfolio-6445d",
  storageBucket: "portfolio-6445d.appspot.com",
  messagingSenderId: "344861407399",
  appId: "1:344861407399:web:c917fa14469255f1960382",
  measurementId: "G-GCVXMNN65Q",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
