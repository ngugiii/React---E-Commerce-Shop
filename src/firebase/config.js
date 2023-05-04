import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore , doc, collection, writeBatch, query,getDocs} from "firebase/firestore";
import {getStorage} from "firebase/storage";


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCMQpPOF7Ncqe1HJDjRFLgN2F6KIWGhscg",
  authDomain: "jeafs-shop.firebaseapp.com",
  projectId: "jeafs-shop",
  storageBucket: "jeafs-shop.appspot.com",
  messagingSenderId: "760574229649",
  appId: "1:760574229649:web:083b3454f4f0801ab0d330"
};

export const addCollectionAndDocuments = async(collectionKey, objectsToAdd)=>{
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object)=>{
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
};
export const getCategoriesAndDocuments = async ()=>{
  const collectionRef = collection(db,"categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const {title, items} = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app )
export const storage = getStorage(app)

export default app