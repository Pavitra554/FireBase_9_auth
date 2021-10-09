import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  //use your own
};

  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);