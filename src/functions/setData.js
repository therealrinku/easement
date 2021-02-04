import db from "../firebase/db";

const setData = async (username, dataType, updatedData) => {
  return new Promise((resolve) => {
    db.collection(username)
      .doc(dataType)
      .set({
        [dataType]: updatedData,
      })
      .then((res) => resolve("done"))
      .catch((err) => resolve(err.message));
  });
};

export default setData;
