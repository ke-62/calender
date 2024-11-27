import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: #2c3e50;
  text-align: center;
`;

const TodoForm = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #2980b9;
  }
`;

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  background-color: #f8f9fa;
  border-radius: 4px;

  &:hover {
    background-color: #e9ecef;
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 0 5px;
  &:hover {
    transform: scale(1.2);
  }
`;

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
  const deleteToDo = (index) => {
    setToDos((currentArray) =>
      currentArray.filter((_, itemIndex) => itemIndex !== index)
    );
  };

  return (
    <Container>
      <Title>My To Dos ({toDos.length})</Title>
      <TodoForm onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <Button>Add To Do</Button>
      </TodoForm>
      <hr />
      <TodoList>
        {toDos.map((item, index) => (
          <TodoItem key={index}>
            {item}
            <DeleteButton onClick={() => deleteToDo(index)}>❌</DeleteButton>
          </TodoItem>
        ))}
      </TodoList>
    </Container>
  );
}

export default App;
