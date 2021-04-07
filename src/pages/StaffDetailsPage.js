import { Fragment, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { deleteStaff } from "../actions/staffActions";
import DeleteConfirmPopup from "../components/DeleteConfirmPopup";
import Backdrop from "../components/Backdrop";
import overflowToggler from "../utils/OverflowToggler";
import Detail from "../components/Detail";
import db from "../firebase/db";
import Loader from "../components/Loader";

const StaffDetailsPage = () => {
  const [details, setDetails] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showEditButtons, setShowEditButtons] = useState(false);
  const [staffName, setStaffName] = useState("");
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    db.collection("staffs")
      .doc(params.staffId)
      .onSnapshot((doc) => {
        setStaffName(doc.data()?.Name);
        const data = doc.data() ? Object.entries(doc.data()) : [];
        const filteredData = [];
        for (let e in data) {
          //push every entries except linked username property
          if (data[e][0] !== "linkedUsername") {
            filteredData.push(data[e]);
          }
        }
        setDetails(filteredData);
        setLoading(false);
      });
  }, [params.studentId]);

  const toggleModal = (modalFunc) => {
    overflowToggler();
    modalFunc((prev) => !prev);
  };

  const deleteStaffConfirm = () => {
    deleteStaff(params.staffId).then((res) => {
      if (res === "done") {
        history.goBack();
      }
    });
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h4>{staffName} Details</h4>
          <img src="https://bit.ly/3m1Ny2x" className="avatar--image" />
          {/*dynamic data mapping*/}
          {details.map((detail, i) => {
            return (
              <Detail
                propertyName={detail[0]}
                propertyValue={detail[1]}
                key={i}
                showEditButtons={showEditButtons}
                personId={params.staffId}
                isStaff={true}
              />
            );
          })}
          <section className="control-buttons">
            <button onClick={() => setShowEditButtons((prev) => !prev)}>
              Edit
            </button>
            <button onClick={() => toggleModal(setShowDeletePopup)}>
              Delete
            </button>
          </section>

          {showDeletePopup ? (
            <Fragment>
              <DeleteConfirmPopup
                toggle={() => toggleModal(setShowDeletePopup)}
                Delete={deleteStaffConfirm}
                Name={staffName}
              />
              <Backdrop toggle={() => toggleModal(setShowDeletePopup)} />
            </Fragment>
          ) : null}
        </Fragment>
      )}
    </Fragment>
  );
};

export default StaffDetailsPage;
