import db from "../firebase/db";
import firebase from "firebase/app";

export const addPerson = (currentUser, personType, personData) => {
  db.collection(currentUser)
    .doc(personType)
    .update({
      [personType]: firebase.firestore.FieldValue.arrayUnion(personData),
    });
};
