import { FC } from "react";
import { ListGroup } from "react-bootstrap";

import Todo from "./Todo";
import { Todo as TodoType } from "../../types";

interface TodoListProps {
  todos: TodoType[];
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <div>
      <ListGroup>
        
        {todos.map((todo) => (
          <ListGroup.Item key={todo.id}>
            <Todo
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

const TodoList1: FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <div>
      <table className="table table-striped" >
       
        
          {todos.map((todo,index) => (
            <tr key={index}>
             
              
            <td>
              <Todo
                todo={todo}
              
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            </td>
            </tr>

          ))}


       


      </table>

    </div>
  );
};

export default TodoList;