// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "firebase/auth";
import { getFirestore, collection, addDoc, onSnapshot, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwiC-udkA0cxSXnG-4HsCOkG0ND8Wh8Gs",
  authDomain: "labsconnect-af7fc.firebaseapp.com",
  projectId: "labsconnect-af7fc",
  storageBucket: "labsconnect-af7fc.appspot.com",
  messagingSenderId: "15071454950",
  appId: "1:15071454950:web:bfba5781d2daee928b7d27",
  measurementId: "G-D78E3JTRSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const registrarUsuario = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const loginUsuario = (email, password) => signInWithEmailAndPassword(auth, email, password);

//Inicia Firestore
const firestore = getFirestore(app);

export function crearPublicacion(actividad, descripcion) {
  const direccionColeccion = collection(firestore, 'post');

  const publicacion = {
    actividad,
    publicacion: descripcion,
  };
  return addDoc(direccionColeccion, publicacion);
}
const db = getFirestore();

export function juntarPublis() {
  const lugarDeColeccion = collection(db, 'post');

  return getDocs(lugarDeColeccion);
}
