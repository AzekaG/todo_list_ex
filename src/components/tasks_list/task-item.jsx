import { ClassNames } from '@emotion/react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';



const TaskItem = ({ title, removeTask, id }) => {
    return (
        <div>
            <span >{title}</span>
            <button><NavLink to={`${id}`}>Открыть</NavLink></button>
            <button onClick={() => removeTask(id)}>Удалить план </button>
        </div>
    );
}

export default TaskItem;
