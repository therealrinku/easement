const sorter = (mainArray, sortingType) => {
  switch (sortingType) {
    case "name":
      return mainArray.sort((a, b) => a.name.localeCompare(b.name));
    case "class":
      return mainArray.sort((a, b) => a.class.localeCompare(b.class));
    case "rollNo":
      return mainArray.sort((a, b) => a.class.localeCompare(b.roll));
  }
};

export default sorter;
