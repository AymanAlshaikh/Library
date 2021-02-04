import { Link } from "react-router-dom";
const MemberItem = (props) => {
  return (
    <div className="col-sm-12">
      <div class="card" style={({ width: "18rem;" }, { background: "blue" })}>
        <div class="card-body">
          <h5 class="card-title">
            {props.member.firstName} {props.member.lastName}
          </h5>
          <h6 class="card-subtitle mb-2 text-muted">
            {props.member.membership}
          </h6>

          <Link to={`/members/${props.member.slug}`} class="btn btn-primary">
            More
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MemberItem;
