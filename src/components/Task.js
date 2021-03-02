import React from 'react';


const Task = (props) => {

    const style = {
        color: 'red'
    };

    const { taskText, taskDate, changeStatus, deleteTask, taskID, taskActive, taskImportant, finishDate } = props;

    if(taskActive) {
        return(
        <>
            <p style={taskImportant ? style : null}>{taskText}</p>
            <span> - do {taskDate} </span>
            <button onClick={() => changeStatus(taskID)}>Zrobione</button>
            <button onClick={() => deleteTask(taskID)}>Usuń</button>
        </>
    );
    } else {
        const finish = new Date(finishDate).toLocaleString();

        return(
        <>
            <p>{taskText}</p>
            <span> - zrobić do {taskDate}</span>
            <span> - potwierdzam wykonanie {finish}</span>
            <button onClick={() => deleteTask(taskID)}>Usuń</button>
        </>
        );
    }
}
 
export default Task;