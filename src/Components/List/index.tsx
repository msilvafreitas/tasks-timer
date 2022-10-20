import { ITask } from '../../types/task';
import { Item } from './Item';
import style from './List.module.scss';

interface Props {
  tasks: ITask[],
  selectTask: (selectedTask: ITask) => void
}

export function List({ tasks, selectTask }: Props) {
    return (
      <aside className={style.taskList}>
        <h2>Tasks List</h2>
        {tasks.map((item) => (
          <Item 
            selectTask={selectTask}
            key={item.id}
            {...item} 
          />
          
        ))}
      </aside>
    )
  }