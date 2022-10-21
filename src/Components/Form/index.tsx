import React, { useState } from 'react';
import { ITask } from '../../types/task';
import Button from '../Button';
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}


function Form({ setTasks }: Props) {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");
  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks(oldTaks =>
      [
        ...oldTaks,
        {
          task,
          time,
          selected: false,
          completed: false,
          id: uuidv4()
        }]);
    setTask("");
    setTime("00:00");
  }
  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">
          Add a new task
        </label>
        <input
          type="text"
          name="task"
          value={task}
          onChange={event => setTask(event.target.value)}
          id="task"
          placeholder="Task name"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">
          Time
        </label>
        <input
          type="time"
          step="1"
          name="time"
          value={time}
          onChange={event => setTime(event.target.value)}
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button
        type="submit"
        text='Add Task'
      />
    </form>
  )
}


export default Form;