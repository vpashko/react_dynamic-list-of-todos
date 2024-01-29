import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoCard } from '../TodoCard/TodoCard';

interface Props {
  todosFromServer: Todo[];
}

export const TodoList: React.FC<Props> = ({ todosFromServer }) => {
  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
          </th>
          <th>Title</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {todosFromServer.map(todo => (
          <TodoCard
            key={todo.id}
            todo={todo}
          />
        ))}
      </tbody>
    </table>
  );
};
