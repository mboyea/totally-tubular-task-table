import React, { FC, ReactElement } from 'react';
import { Task } from '../../types/Task';
import TaskList from '../TaskList/TaskList';
import './TaskForm.sass'

interface TaskFormProps {
  tasks?: Task[];
  title?: string;
}

const TaskForm: FC<TaskFormProps> = ({
  tasks = [],
  title = 'untitled',
}): ReactElement => {
  return (
    <div className='task-form'>
      <header>
        <h2>Form Title</h2>
      </header>
      <main>
        <TaskList tasks={tasks} />
      </main>
    </div>
  );
}

export default TaskForm;