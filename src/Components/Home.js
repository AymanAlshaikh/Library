import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Link to="/members">
        <button type="button" class="btn btn-info">
          Members
        </button>
      </Link>
      <Link to="/books">
        <button type="button" class="btn btn-info">
          Books
        </button>
      </Link>
    </div>
  );
};
export default Home;
