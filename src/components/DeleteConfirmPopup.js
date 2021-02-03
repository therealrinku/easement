const DeleteConfirmPopup = ({ name }) => {
  return (
    <div className="delete--confirmation--popup">
      <h4>Do you sure want to delete {name}?</h4>

      <section>
        <button>Delete</button>
        <button>Cancel</button>
      </section>
    </div>
  );
};

export default DeleteConfirmPopup;
