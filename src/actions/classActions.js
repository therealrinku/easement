import db from "../firebase/db";

export const addClass = (data) => {
  return new Promise((resolve) => {
    db.collection("classes")
      .add({
        ...data,
      })
      .then(() => resolve("Successfully created a new student."))
      .catch((err) => resolve(err.message));
  });
};
