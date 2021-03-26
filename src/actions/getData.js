import db from "../firebase/db";

const getData = async (username, dataType, nextFunction) => {
  return db
    .collection(dataType)
    .where("linkedUsername", "==", username)
    .onSnapshot((snap) => {
      nextFunction(snap.docs.map((doc) => doc.data()));
    });
};

export default getData;
