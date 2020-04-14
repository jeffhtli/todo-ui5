import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import { ThemeProvider } from "@ui5/webcomponents-react/lib/ThemeProvider";
import { FlexBox } from "@ui5/webcomponents-react/lib/FlexBox";
import { FlexBoxDirection } from "@ui5/webcomponents-react/lib/FlexBoxDirection";
import { FlexBoxJustifyContent } from "@ui5/webcomponents-react/lib/FlexBoxJustifyContent";
import "./style.css";

export default function TodoApp() {
  return (
    <ThemeProvider withToastContainer>
      <FlexBox
          className="mainFlex"
          direction={FlexBoxDirection.Row}
          justifyContent={FlexBoxJustifyContent.Center} >
          <div className="appContainer">
            <AddTodo />
            <VisibilityFilters />
            <TodoList />
          </div>
        </FlexBox>
    </ThemeProvider>
  );
}
