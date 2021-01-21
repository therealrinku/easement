const getData = async (username, dataType) => {
  await db
    .collection(username)
    .doc(dataType)
    .onSnapshot((doc) => {
      return doc.data().dataType;
    });
};

export default getData;
