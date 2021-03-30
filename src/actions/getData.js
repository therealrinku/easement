import db from "../firebase/db";

const getData = async (username, dataType, nextFunction) => {
  return db
    .collection(dataType)
    .where("linkedUsername", "==", username)
    .onSnapshot((snap) => {
      const data = [];
      snap.docs.map((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      nextFunction(data);
    });
};

export default getData;
