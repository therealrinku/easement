import db from "../firebase/db";

export const getStaffs = async (username) => {
  const docsRef = db
    .collection("students")
    .where("linkedUsername", "==", username);
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

export const deleteStaff = (staffId) => {
  return new Promise((resolve) => {
    db.collection("staffs")
      .doc(staffId)
      .delete()
      .then(resolve("done"))
      .catch((err) => resolve(err.message));
  });
};

export const addStaff = (data) => {
  return new Promise((resolve) => {
    db.collection("staffs")
      .add({
        ...data,
      })
      .then(() => resolve("Successfully created a new staff."))
      .catch((err) => resolve(err.message));
  });
};
