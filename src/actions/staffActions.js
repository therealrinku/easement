import db from "../firebase/db";

export const getStaffs = async (username) => {
  const docsRef = db.collection("staffs").where("linkedUsername", "==", username);
  const snap = await docsRef.get();
  const finalData = [];
  snap.docs.map((doc) => {
    return finalData.push({ ...doc.data(), id: doc.id });
  });
  return finalData;
};

export const updateStaff = (staffId, updatedData) => {
  return new Promise((resolve) => {
    db.collection("staffs")
      .doc(staffId)
      .update(updatedData)
      .then(resolve("done"))
      .catch((err) => resolve(err.message));
  });
};

export const deleteStaff = async (staffId) => {
  await db.collection("staffs").doc(staffId).delete();
};

export const addStaff = async (data) => {
  const docRef = await db.collection("staffs").add(data);
  return docRef.id;
};
