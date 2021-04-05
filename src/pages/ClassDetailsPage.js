import { Fragment, useEffect, useState, useContext } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { deleteStudent } from "../actions/studentActions";
import DeleteConfirmPopup from "../components/DeleteConfirmPopup";
import Backdrop from "../components/Backdrop";
import overflowToggler from "../utils/OverflowToggler";
import db from "../firebase/db";
import Loader from "../components/Loader";
import Filters from "../components/Filters";
import { deleteClass } from "../actions/classActions";
import Context from "../context/Context";

const ClassDetailsPage = () => {
  const [students, setStudents] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const history = useHistory();
  const { setMessage } = useContext(Context);

  const filteredStudents = students.filter((student) => {
    return student.Name.toLowerCase().includes(
      searchQuery.trim().toLowerCase()
    );
  });

  const toggleModal = (modalFunc) => {
    overflowToggler();
    modalFunc((prev) => !prev);
  };

  const classDeleteConfirm = () => {
    deleteClass(params.className).then((res) => {
      setMessage(res);
      if (res.includes("deleted")) {
        overflowToggler();
        history.goBack();
      }
    });

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  useEffect(() => {
    db.collection("students")
      .where("Class", "==", params.className)
      .onSnapshot((snap) => {
        const data = [];
        snap.docs.map((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setStudents(data);
        setLoading(false);
      });
  }, [params.className]);

  return (
    <Fragment>
      {loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "400px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <Fragment>
          <h4>Students of {params.className}</h4>
          <Filters searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <table className="table">
            <thead>
              <tr>
                <th>S.N~{filteredStudents.length}</th>
                <th>Name</th>
                <th>Class</th>
                <th>RollNo</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td
                      style={{
                        display: "flex",
                        alignItems: "center",
                        border: "none",
                      }}
                    >
                      <Link
                        to={`/student/details/${student.id}`}
                        className="link"
                      >
                        {student.Name}
                      </Link>
                    </td>
                    <td>{student.Class}</td>
                    <td>{student.RollNo}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <section className="control-buttons">
            <button onClick={() => toggleModal(setShowDeletePopup)}>
              Delete
            </button>
          </section>

          <p style={{ fontSize: "12px", color: "red" }}>
            Deleting a class will also delete all it's students.
          </p>

          {showDeletePopup ? (
            <Fragment>
              <DeleteConfirmPopup
                toggle={() => toggleModal(setShowDeletePopup)}
                Delete={classDeleteConfirm}
                Name={params.className}
              />
              <Backdrop toggle={() => toggleModal(setShowDeletePopup)} />
            </Fragment>
          ) : null}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ClassDetailsPage;
