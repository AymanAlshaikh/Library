import { useState } from "react";
import { addMember } from "../store/action";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const AddMember = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [member, setMember] = useState({
    firstName: "",
    lastName: "",
    slug: "",
    currentlyBorrowedBooks: [],
    membership: "",
  });

  const handleChange = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };
  const resetForm = () => {
    setMember({
      firstName: "",
      lastName: "",
      slug: "",
      currentlyBorrowedBooks: [],
      membership: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMember(member));
    resetForm();
    history.push("/members");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>first name</label>
        <input
          type="text"
          className="form-control"
          name="firstName"
          value={member.firstName}
          onChange={handleChange}
        />
        <small className="form-text text-muted"> first name </small>
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          className="form-control"
          name="lastName"
          value={member.lastName}
          onChange={handleChange}
        />
        <small className="form-text text-muted"> Last Name </small>
      </div>
      <div className="form-group">
        <label>currently Borrowed Books</label>
        <input
          type="array"
          className="form-control"
          name="currentlyBorrowedBooks"
          value={member.currentlyBorrowedBooks}
          onChange={handleChange}
        />
        <small className="form-text text-muted">
          {" "}
          currently Borrowed Books{" "}
        </small>
      </div>
      <div className="form-group">
        <label>membership</label>
        <input
          type="text"
          className="form-control"
          name="membership"
          value={member.membership}
          onChange={handleChange}
        />
        <small className="form-text text-muted"> membership </small>
      </div>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default AddMember;
