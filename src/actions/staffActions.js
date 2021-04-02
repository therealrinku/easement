import db from "../firebase/db";

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
