import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import { Input } from "@ui5/webcomponents-react/lib/Input";
import { Button } from "@ui5/webcomponents-react/lib/Button";
import { FlexBox } from "@ui5/webcomponents-react/lib/FlexBox";
import { ButtonDesign } from "@ui5/webcomponents-react/lib/ButtonDesign";
import '../style.css';


class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    console.log(input);
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <FlexBox className="addTodoFlexBox">
        <Input
          onChange={e => this.updateInput(e.originalEvent.target.value)}
          value={this.state.input}
        />
        <Button
          onClick={this.handleAddTodo}
          design={ButtonDesign.Emphasized}
          className="addTodoButton" >
          Add Todo
        </Button>
      </FlexBox>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
// export default AddTodo;
