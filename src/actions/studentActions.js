import db from "../firebase/db";

export const getStudents = (username) => {
  return new Promise((resolve) => {
    db.collection("students")
      .where("linkedUsername", "==", username)
      .get()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => new Error(err.message));
  });
};

export const updateStudent = (studentId, updatedData) => {
  return new Promise((resolve) => {
    db.collection("students")
      .doc(studentId)
      .update(updatedData)
      .then(resolve("done"))
      .catch((err) => resolve(err.message));
  });
};

export const deleteStudent = (studentId) => {
  return new Promise((resolve) => {
    db.collection("students")
      .doc(studentId)
      .delete()
      .then(resolve("done"))
      .catch((err) => resolve(err.message));
  });
};

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
