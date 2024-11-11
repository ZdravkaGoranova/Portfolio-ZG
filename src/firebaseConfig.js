import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAkfALT7I9p1HNqgJRKoSosYrIFOpUtRFA',
  authDomain: 'portfolio-zg.firebaseapp.com',
  projectId: 'portfolio-zg',
  storageBucket: 'portfolio-zg.firebasestorage.app',
  messagingSenderId: '751230714720',
  appId: '1:751230714720:web:9c110327bff8e9c2845405',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
