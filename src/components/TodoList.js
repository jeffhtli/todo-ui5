import React from "react";
import { connect } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selectors";
import { toggleTodo } from "../redux/actions";
import { List } from "@ui5/webcomponents-react/lib/List";
import { CustomListItem } from "@ui5/webcomponents-react/lib/CustomListItem";

const TodoList = ({ todos, toggleTodo }) => (
  <List noDataText="No todos, yay"
    onItemClick={e => {
      const todoId = e.originalEvent.detail.item.id;
      toggleTodo(todoId);
    }}
  >
    {todos && todos.length
      ? todos.map((todo) => {
          return <CustomListItem key={`todo-${todo.id}`} id={todo.id}>
            <div className={todo.completed ? "todoCompleted" : "todo"}>
              {(todo && todo.completed ? "👌" : "👋") + " " + todo.content}
            </div>
          </CustomListItem>;
        })
      : null}
  </List>
);

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};
// export default TodoList;
export default connect(mapStateToProps, { toggleTodo })(TodoList);
