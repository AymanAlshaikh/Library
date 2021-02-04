import { Link } from "react-router-dom";
const MemberButton = () => {
  return (
    <Link to="/members/newmember">
      <button type="button" class="btn btn-secondary">
        +
      </button>
    </Link>
  );
};
export default MemberButton;
