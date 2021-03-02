import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);

    if(done.length >= 2) {
        done.sort((a, b) => {
            if(a.finishDate > b.finishDate) {
                return -1;
            };
            if(a.finishDate < b.finishDate) {
                return 1;
            };
            return 0;
        });
    };

    if(active.length >= 2) {
        active.sort((a, b) => {
            a = a.text.toLowerCase();
            b = b.text.toLowerCase();

            if(a.text > b.text) {
                return 1;
            };
            if(a.text < b.text) {
                return -1;
            };
            return 0;
        });
    }
        
    const activeTasks = active.map(task => <Task key={task.id} taskText={task.text} taskDate={task.date} deleteTask={props.delete} changeStatus={props.change} taskID={task.id} taskActive={task.active} taskImportant={task.important} finishDate={task.finishDate}/>);
    const doneTasks = done.map(task => <Task key={task.id} taskText={task.text} taskDate={task.date} deleteTask={props.delete} changeStatus={props.change} taskID={task.id} taskActive={task.active} taskImportant={task.important} finishDate={task.finishDate}/>);

    return ( 
        <>
        <div>
            <h1>Zadania do zrobienia:</h1>
            {activeTasks.length > 0 ? activeTasks : <p>Nie masz nic do zrobienia</p>}
        </div>
        <div>
            <h3>Zadania zrobione <em>({doneTasks.length})</em></h3>
            {doneTasks}

        </div>
        </>
     );
}
 
export default TaskList;