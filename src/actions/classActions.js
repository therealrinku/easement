import db from "../firebase/db";

export const getClasses = async (username) => {
  const docsRef = db.collection("classes").where("linkedUsername", "==", username);
  const snap = await docsRef.get();
  const finalData = [];
  snap.docs.map((doc) => {
    return finalData.push({ ...doc.data(), id: doc.id });
  });
  return finalData;
};

export const deleteClass = async (classId) => {
  await db.collection("classes").doc(classId).delete();
};

export const addClass = async (data) => {
  const docRef = await db.collection("classes").add(data);
  return docRef.id;
};
