import "../styles/DeletePopup.css";

const DeleteConfirmPopup = ({ Delete, toggle }) => {
  return (
    <div className="delete--confirmation--popup">
      <p>Do you sure want to delete?</p>

      <section>
        <button onClick={Delete}>Delete</button>
        <button onClick={toggle}>Cancel</button>
      </section>
    </div>
  );
};

export default DeleteConfirmPopup;
