import db from "../firebase/db";

export const updateStudent = (studentId, updatedData) => {
  console.log("e");
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
