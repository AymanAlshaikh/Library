//style
import "./App.css";
//Components
import MemberList from "./Components/MemberList";
import BookList from "./Components/BookList";
import Home from "./Components/Home";
import BookDetail from "./Components/BookDetail";
import MemberDetail from "./Components/MemberDetail";
import AddBook from "./Components/AddBook";
import AddMember from "./Components/AddMember";

import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
        crossorigin="anonymous"
      ></link>
      <header className="App-header">
        <Switch>
          <Route path="/members/newmember">
            <AddMember />
          </Route>
          <Route path={["/books/newbook", "/books/:bookSlug/update"]}>
            <AddBook />
          </Route>
          <Route path="/books/:bookSlug">
            <BookDetail />
          </Route>
          <Route path="/members/:memberSlug">
            <MemberDetail />
          </Route>
          <Route path="/members">
            <MemberList />
          </Route>
          <Route path="/books">
            <BookList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </header>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default App;
