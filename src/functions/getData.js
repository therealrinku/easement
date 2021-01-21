import db from "../firebase/db";

const getData = async (username, dataType) => {
  return db
    .collection(username)
    .doc(dataType)
    .onSnapshot((doc) => {
      return doc.data().dataType;
    });
};

export default getData;
