import db from "../firebase/db";

export const addClass = (data) => {
  return new Promise((resolve) => {
    db.collection("classes")
      .add({
        ...data,
      })
      .then(() => resolve("Successfully created a new class."))
      .catch((err) => resolve(err.message));
  });
};
