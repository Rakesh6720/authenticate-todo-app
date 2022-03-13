export default function Todo({ todo }) {
  return (
    <div>
      <p>{todo.fields.description}</p>
    </div>
  );
}
