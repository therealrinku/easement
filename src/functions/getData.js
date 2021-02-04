import db from "../firebase/db";

const getData = async (username, dataType, nextFunction) => {
  return db
    .collection(username)
    .doc(dataType)
    .onSnapshot((doc) => {
      nextFunction(doc.data()?.[dataType] || []);
    });
};

export default getData;
