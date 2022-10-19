import React from 'react';
import style from './List.module.scss';

export function List() {
    const tasks = [{ task: 'React', time: '02:00:00' }, { task: 'Javascript', time: '01:00:00'  }]
    return (
      <aside className={style.taskList}>
        {tasks.map((item, index) => (
          <li key={index} className={style.item}>
            <h3> {item.task} </h3>
            <p> {item.time} </p>
          </li>
        ))}
      </aside>
    )
  }