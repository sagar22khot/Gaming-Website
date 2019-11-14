import React from "react";
import { Route, Link } from "react-router-dom";
import wallpaperMain from "../../Assets/wallpaperMain.jpg";
import { Background } from "../../Component/Background";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

const User = ({ match }) => <p>{match.params.id}</p>;
class Users extends React.Component {
  render() {
    const { url } = this.props.match;
    return (
      <div>
        <Background imageBackground={wallpaperMain}></Background>
        <h1 style={{ margin: "0px" }}>Users</h1>
        <strong>select a user</strong>
        <ul>
          <li>
            <Link to="/users/1">User 1 </Link>
          </li>
          <li>
            <Link to="/users/2">User 2 </Link>
          </li>
          <li>
            <Link to="/users/3">User 3 </Link>
          </li>
        </ul>
        <Route path="/users/:id" component={User} />
      </div>
    );
  }
}
export default Users;
