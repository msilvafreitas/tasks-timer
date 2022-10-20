import { useState } from 'react';
import Form from '../Components/Form';
import { List } from '../Components/List';
import { Timer } from '../Components/Timer';
import { ITask } from '../types/task';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List 
        tasks={tasks} 
        selectTask={selectTask}
      />
      <Timer />
    </div>
  );
}

export default App;
