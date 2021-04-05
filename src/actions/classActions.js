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

export const deleteClass = (className) => {
  return new Promise((resolve) => {
    //deleteing class
    db.collection("classes")
      .where("className", "==", className)
      .get()
      .then((snap) => {
        snap.forEach((doc) => doc.ref.delete());
      })
      .catch((err) => {
        resolve(err.message);
      })
      .then(() => {
        //deteling students of that class
        db.collection("students")
          .where("Class", "==", className)
          .get()
          .then((snap) => {
            snap.forEach((doc) => doc.ref.delete());
          })
          .then(() => {
            resolve(`Successfully deleted the ${className}`);
          })
          .catch((err) => {
            resolve(err.message);
          });
      });
  });
};
