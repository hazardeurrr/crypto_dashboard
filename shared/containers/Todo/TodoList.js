import React from 'react';
import Button from '@iso/components/uielements/button';
import Checkbox from '@iso/components/uielements/checkbox';
import { RadioButton, RadioGroup } from '@iso/components/uielements/radio';
import { timeDifference } from '@iso/lib/helpers/utility';
import { notification, ColorChoser, EditableComponent } from '@iso/components/';
import { TodoListWrapper } from './Todo.styles';
import { CloseOutlined } from '@ant-design/icons';
function filterTodos(todos, search) {
  const selectedTodos =
    search === 'All'
      ? todos
      : todos.filter((todo) => todo.completed === (search === 'Completed'));
  let completed = 0;
  selectedTodos.forEach((todo) => {
    if (todo.completed) {
      completed += 1;
    }
  });
  return { selectedTodos, completed };
}
export default function TodoList(props) {
  const [search, setSearch] = React.useState('All');

  function singleTodo(todo) {
    const { deleteTodo, colors } = props;
    const onDelete = () => deleteTodo(todo.id);
    const updateTodo = (key, value) => {
      todo[key] = value;
      props.edittodo(todo);
    };
    return (
      <div className="isoTodoList" key={todo.id}>
        <ColorChoser
          colors={colors}
          changeColor={(value) => updateTodo('color', value)}
          seectedColor={todo.color}
        />
        {/* <Checkbox
          className="isoTodoCheck"
          checked={todo.completed}
          onChange={() => updateTodo('completed', !todo.completed)}
        /> */}
        <div style ={{paddingLeft : 25}}></div>
        <div className="isoTodoContentWrapper">
          {/* <span className="isoTodoDate">{timeDifference(todo.createTime)}</span> */}
          <EditableComponent
            value={todo.todo}
            itemKey="todo"
            onChange={updateTodo}
          />
        </div>
        <Button
          className="isoTodoDelete"
          icon={<CloseOutlined />}
          type="default"
          onClick={onDelete}
        />
      </div>
    );
  }
  function onChange(event) {
    setSearch(event.target.value);
  }
  const { selectedTodos, completed } = filterTodos(props.todos, search);
  return (
    <TodoListWrapper className="isoTodoContent">
      {/* <div className="isoTodoStatusTab">
        <RadioGroup
          value={search}
          onChange={onChange}
          className="isoTodoStatus"
        >
          <RadioButton value="All">All</RadioButton>
          <RadioButton value="Uncompleted">Uncompleted</RadioButton>
          <RadioButton value="Completed">Completed</RadioButton>
        </RadioGroup>
      </div> */}

      <div className="isoTodoListWrapper">
        {selectedTodos.length > 0 ? (
          selectedTodos.map((note) => singleTodo(note))
        ) : (
          <h3 className="isoNoTodoFound">No trading rule found</h3>
        )}
      </div>

      <div className="isoTodoFooter">
        <Checkbox
          className="isoTodoCheckAll"
          checked={completed === selectedTodos.length}
          disabled={completed === selectedTodos.length}
          onChange={() => {
            notification('success', 'All Rules Selected', '');
            props.allCompleted();
          }}
        >
          Select all
        </Checkbox>

        {selectedTodos.length > 0 && completed === selectedTodos.length ? (
          <Button
            type="button"
            className="isoDeleteAll"
            onClick={() => {
              notification('success', 'All Rules Selected are Deleted', '');
              props.deleteCompleted();
            }}
          >
            {`Delete Selected (${completed})`}
          </Button>
        ) : (
          ''
        )}
      </div>
    </TodoListWrapper>
  );
}
