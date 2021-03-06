import "../styles/DeletePopup.css";

const DeleteConfirmPopup = ({ Name, Delete, toggle }) => {
  return (
    <div className="delete--confirmation--popup">
      <p>
        Do you sure want to delete <b>{Name}</b>?
      </p>

      <section>
        <button onClick={Delete}>Delete</button>
        <button onClick={toggle}>Cancel</button>
      </section>
    </div>
  );
};

export default DeleteConfirmPopup;
