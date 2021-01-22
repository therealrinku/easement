import db from "../firebase/db";
import firebase from "firebase/app";

const addPerson = (currentUser, personType, personData) => {
  return new Promise((resolve) => {
    db.collection(currentUser)
      .doc(personType)
      .update({
        [personType]: firebase.firestore.FieldValue.arrayUnion(personData),
      })
      .then(() => resolve("done"))
      .catch((err) => resolve(err.message));
  });
};

export default addPerson;
