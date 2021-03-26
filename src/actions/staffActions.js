import db from "../firebase/db";

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
