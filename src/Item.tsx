

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ListGroup } from "react-bootstrap";
import { FC } from "react";
import { Form } from "react-bootstrap";



let toDo = [
  {
    "id": "1",  
    "todo": "Wash the dishes"
  },
  {
    "id": "2",    
    "todo": "Wash the dog"
  },
  {
    "id": "3",    
    "todo": "Wash the car"
  }
]


interface itemProps {
  id: (id: number) => void; 
  todo: (todo: string) => void;
}


const Item2: FC<itemProps> = (toDo) => {
  return (
    <div className='container'>
      {toDo.id.toString()}
     
      {toDo.todo.toString()}
      <Form.Control
        type="text"
        placeholder="Enter a task"
      />
      <Button className="mt-2 mb-2">
        Add Todo
      </Button>

    </div>
  )
};

function Item1() {
  return (
    <>
      <h2>Todo App Example</h2>
      <Form.Control
        type="text"
        placeholder="Enter a task"
      />
      <Button className="mt-2 mb-2">
        Add Todo
      </Button>
      <ListGroup>

        {toDo.map((n) => {
          return (
            <ListGroup.Item>{n.id}- {n.todo} <Button>Complete</Button> <Button className='btn-danger'>Delete</Button></ListGroup.Item>
          )
        })}

      </ListGroup>

    </>
  )
}
function Item() {
  return (
    <>
      <h2>Todo App Example</h2>
      <Form.Control
        type="text"
        placeholder="Enter a task"
      />
      <Button className="mt-2 mb-2">
        Add Todo
      </Button>
      <ListGroup>

        {toDo.map((n) => {
          return (
            <ListGroup.Item>{n.id} - {n.todo} <Button>Complete</Button> <Button className='btn-danger'>Delete</Button></ListGroup.Item>
          )
        })}

      </ListGroup>

    </>
  )
}


export default Item
/** 
 * import { ListGroup } from "react-bootstrap"
export default function Item() {
  return (

    
    <div className="d-flex-flex-column border border-danger vh-100">

      <ListGroup>
        {number.map((n) => (
          <ListGroup.Item key={n.toString()} >
           
          </ListGroup.Item>
        ))}

      </ListGroup>






    </div>
  )

}
  */