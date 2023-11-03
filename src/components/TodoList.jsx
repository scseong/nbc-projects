import React from 'react';

export default function TodoList() {
  return (
    <div className="todo-box">
      <h3>🔥 진행중</h3>
      <ul className="todo-list">
        {doingTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toogleTodoState={toogleTodoState}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}
