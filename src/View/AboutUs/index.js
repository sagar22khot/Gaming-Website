import React from "react";
import { Redirect } from "react-router-dom";
import wallpaperMain from "../../Assets/wallpaperMain.jpg";
import { Background } from "../../Component/Background";

class Contact extends React.Component {
  onSubmit = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <Background imageBackground={wallpaperMain}></Background>
        <form>
          <input placeholder="name" type="name" />
          <input placeholder="email" type="email" />
          <button onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
export default Contact;
