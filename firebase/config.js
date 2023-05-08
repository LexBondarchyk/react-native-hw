import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7vKyfr5KcfnlXyWcaJbtf_mCa9bNHn2Y",
  authDomain: "native-greed.firebaseapp.com",
  projectId: "native-greed",
  storageBucket: "native-greed.appspot.com",
  messagingSenderId: "89972788640",
  appId: "1:89972788640:web:33dca94589fb3d9c4568c5",
  measurementId: "G-07NSNYR6BJ"
};

const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
