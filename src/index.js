import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './reducer/indexStore';
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBpLtjZydZeB7VkKKXYmvuf1ZYnSV_q_78",
  authDomain: "armed-78595.firebaseapp.com",
  projectId: "armed-78595",
  storageBucket: "armed-78595.appspot.com",
  messagingSenderId: "487776414985",
  appId: "1:487776414985:web:5a82ea52c4eaa7c87ab7d8",
  measurementId: "G-TQ01E39B7L"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
