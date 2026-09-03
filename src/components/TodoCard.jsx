const TodoCard = (props) => {
  return (
    <article>
      <h2>{props.todo.title}</h2>

      <p>
        {props.todo.completed ? 'Completed' : 'Not completed'}
      </p>
    </article>
  );
};

export default TodoCard;