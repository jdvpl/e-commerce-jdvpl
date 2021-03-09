import { firebase } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCXUlRxPA-96PJ9_jo9kMzlHBLbMpUhEC8",
  authDomain: "ecommerce-22a84.firebaseapp.com",
  projectId: "ecommerce-22a84",
  storageBucket: "ecommerce-22a84.appspot.com",
  messagingSenderId: "504174880961",
  appId: "1:504174880961:web:e55b07b9d2b69466078c40",
};
// Initialize Firebase
export const firebaseapp = firebase.initializeApp(firebaseConfig);
