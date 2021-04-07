import db from "../firebase/db";

export const getStudents = async (username) => {
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
