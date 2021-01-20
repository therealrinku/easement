const AddStaffForm = () => {
  return (
    <form className="new--form">
      <label htmlFor="name">Staff Name</label>
      <input type="text" id="name" />

      <label htmlFor="role">Role</label>
      <input type="text" id="role" />

      <label htmlFor="salary">Salary</label>
      <input type="text" id="salary" />

      <button>Submit</button>
    </form>
  );
};

export default AddStaffForm;
