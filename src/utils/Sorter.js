const sorter = (mainArray, sortingType) => {
  switch (sortingType) {
    case "Name":
      return mainArray.sort((a, b) => a.Name.localeCompare(b.Name));
    case "Class":
      return mainArray.sort((a, b) => a.Class.localeCompare(b.Class));
    case "RollNo":
      return mainArray.sort((a, b) => a.RollNo.localeCompare(b.RollNo));
    case "Salary":
      return mainArray.sort((a, b) => b.Salary.localeCompare(a.Salary));
    case "Role":
      return mainArray.sort((a, b) => a.Role.localeCompare(b.Role));
    default:
      return mainArray;
  }
};

export default sorter;
