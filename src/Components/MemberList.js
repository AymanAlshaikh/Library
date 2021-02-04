import members from "../members";
import MemberItem from "./MemberItem";
import MemberButton from "./Buttons/MemberButton";
import { useSelector } from "react-redux";

const MemberList = () => {
  const members = useSelector((state) => state.members);
  console.log(members);
  const membership = members.map((member) => (
    <MemberItem key={member.id} member={member} />
  ));
  return (
    <div>
      <MemberButton />
      {membership}
    </div>
  );
};
export default MemberList;
