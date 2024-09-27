import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
  apiKey: "AIzaSyD3dH6MHXy_vqCVn1IAIkgt0gAzcjDLpfw",
  authDomain: "issac-kang.firebaseapp.com",
  databaseURL: "https://issac-kang-default-rtdb.firebaseio.com",
  projectId: "issac-kang",
  storageBucket: "issac-kang.appspot.com",
  messagingSenderId: "682836274910",
  appId: "1:682836274910:web:461b304964377903429c4f",
  measurementId: "G-R2GKDDW5TZ"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
