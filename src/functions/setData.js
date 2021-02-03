import db from "../firebase/db";

const setData = async (username, dataType, updatedData) => {
  return db
    .collection(username)
    .doc(dataType)
    .set({
      [dataType]: updatedData,
    });
};

export default setData;
