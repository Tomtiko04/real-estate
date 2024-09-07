import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAHTABgUi__rFsiprc0qlsSUE7BV6hyBv8",
	authDomain: "realestate-31b46.firebaseapp.com",
	projectId: "realestate-31b46",
	storageBucket: "realestate-31b46.appspot.com",
	messagingSenderId: "632263548523",
	appId: "1:632263548523:web:04a363f0a1aea6d23a5b2e",
	measurementId: "G-TPRH4TR3GD",
};

initializeApp(firebaseConfig);
const DB = getFirestore();
const AUTH = getAuth();
const STORAGE = getStorage();

export { DB, AUTH, STORAGE };
