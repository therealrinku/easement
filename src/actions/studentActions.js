import db from "../firebase/db";

export const addStudent = (data) => {
  return new Promise((resolve) => {
    db.collection("students")
      .add({
        ...data,
      })
      .then(() => resolve("Successfully created a new student."))
      .catch((err) => resolve(err.message));
  });
};

export const getStudentDetails = (studentId) => {
  return new Promise((resolve) => {
    db.collection("students")
      .doc(studentId)
      .get()
      .then((doc) => {
        resolve(doc.data());
      })
      .catch((err) => resolve(err.message));
  });
};
