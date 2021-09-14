import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from 'antd';
import Input from '@iso/components/uielements/input';
import todoAction from '@iso/redux/todos/actions';
import TodoList from './TodoList';
import { TodoWrapper } from './Todo.styles';

const {
  addTodo,
  edittodo,
  deleteTodo,
  allCompleted,
  deleteCompleted,
} = todoAction;
const { Header, Content } = Layout;

export default function ToDo() {
  const [newTodo, setNewTodo] = React.useState('');
  const { todos, colors } = useSelector(state => state.Todos);
  const dispatch = useDispatch();

  const saveNotesToLocalStorage = (array) => {
    localStorage.setItem('todos', JSON.stringify(array))
  }


  return (
    <Layout style={{ background: 'none' }}>
      <TodoWrapper className="isomorphicTodoComponent">
        <Header className="isoTodoHeader">
          <Input
            placeholder={'Type here to add a new trading rule'}
            value={newTodo}
            className="isoTodoInput"
            onChange={event => setNewTodo(event.target.value)}
            onPressEnter={event => {
              setNewTodo('');
              dispatch(addTodo(event.target.value));
              const newTodo = {
                id: new Date(),
                todo: event.target.value,
                createTime: new Date(),
                color: 0,
                completed: false,
              };  
              saveNotesToLocalStorage([...todos, newTodo]);

            }}
          />
        </Header>
        <Content className="isoTodoContentBody">
          <TodoList
            todos={todos}
            deleteTodo={id => {
              dispatch(deleteTodo(id))
              saveNotesToLocalStorage(todos.filter(e => e.id != id))
            }}
            edittodo={todo => {
              dispatch(edittodo(todo))
              saveNotesToLocalStorage(todos)
            }}
            colors={colors}
            allCompleted={() => dispatch(allCompleted())}
            deleteCompleted={() => {
              dispatch(deleteCompleted())
              saveNotesToLocalStorage(todos)
            }}
          />
        </Content>
      </TodoWrapper>
    </Layout>
  );
}
