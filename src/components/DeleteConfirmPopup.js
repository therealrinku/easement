const DeleteConfirmPopup = ({ name, Delete, toggle }) => {
  return (
    <div className="delete--confirmation--popup">
      <h4>Do you sure want to delete {name}?</h4>

      <section>
        <button onClick={Delete}>Delete</button>
        <button onClick={toggle}>Cancel</button>
      </section>
    </div>
  );
};

export default DeleteConfirmPopup;
