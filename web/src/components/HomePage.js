import React from "react";
import Form from "muicss/lib/react/form";
import Textarea from "muicss/lib/react/textarea";
import "./HomePage.css";
const HomePage = ({hint="What have you\nfound interesting?"}) => {
  return (
    <Form>
      <div className="input-container">
        <Textarea hint={hint} />
        <i className="fa fa-search fa-3x" />
      </div>
    </Form>
  );
};
export default HomePage;
