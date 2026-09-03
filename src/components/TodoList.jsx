import TodoCard from './TodoCard';

const TodoList = (props) => {
  return (
    <section>
      {props.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </section>
  );
};

export default TodoList;