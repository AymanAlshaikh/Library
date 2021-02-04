import members from "../members";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const MemberDetail = () => {
  const members = useSelector((state) => state.members);
  const { memberSlug } = useParams();
  const member = members.find((member) => member.slug === memberSlug);
  return (
    <div class="card" style={{ width: "18rem;" }}>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          {member.firstName} {member.lastName}
        </li>

        <li class="list-group-item">{member.currentlyBorrowedBooks}</li>
        <li class="list-group-item">Membership: {member.membership}</li>
      </ul>
    </div>
  );
};
export default MemberDetail;
