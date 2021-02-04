import { Link } from "react-router-dom";
const AddButton = () => {
  return (
    <Link to="/books/newbook">
      <button type="button" class="btn btn-secondary">
        ADD
      </button>
    </Link>
  );
};
export default AddButton;
