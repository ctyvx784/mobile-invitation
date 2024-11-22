import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
  apiKey: "AIzaSyAsTS3t30mo49Xfoll6B89EVQnyzeE7qXM",
  authDomain: "heily-invitation.firebaseapp.com",
  databaseURL: "https://heily-invitation-default-rtdb.firebaseio.com",
  projectId: "heily-invitation",
  storageBucket: "heily-invitation.firebasestorage.app",
  messagingSenderId: "1032105547352",
  appId: "1:1032105547352:web:ba3b81b5bd81fc43c55c2d",
  measurementId: "G-PZ2WYDXECV"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
