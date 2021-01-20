const AddStudentForm = () => {
  return (
    <form className="new--form">
      <label htmlFor="name">Student Name</label>
      <input type="text" id="name" />

      <label htmlFor="class">Class</label>
      <input type="text" id="class" />

      <label htmlFor="rollno">Rollno</label>
      <input type="text" id="rollno" />

      <button>Submit</button>
    </form>
  );
};

export default AddStudentForm;
