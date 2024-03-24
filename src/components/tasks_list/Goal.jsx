import React, { useEffect, useState } from 'react';


const Goal = (goal) => {

    const [isEdit, setIsEdit] = useState(false);
    const [newTitle, setNewTitle] = useState(goal.title);
    const [toggleDone, setToggleDone] = useState(goal.done);
    const [mainGoal, setMainGoal] = useState({
        id: goal.id,
        priority: goal.priority,
        done: goal.done,
        title: goal.title
    });



    const saveTask = (e) => {
        if (newTitle.trim().length === 0) {
            setIsEdit(false);
            setNewTitle(goal.title);
            return;
        }
        if (e.code === "Enter") {
            setIsEdit(false);
            setMainGoal({ ...mainGoal, title: newTitle });
            goal.updgradeGoal({ ...mainGoal, title: newTitle });
        }
    }

    const normalTemplate = <span onClick={() => {
        setIsEdit(true)
    }}>{goal.title}</span>;


    const editTemplate = <input onKeyDown={saveTask} value={newTitle} onChange={(e) => {
        setNewTitle(e.target.value);
    }} />




    useEffect(() => {
        goal.updgradeGoal(mainGoal);
    }, [mainGoal])



    return (
        <div>
            <input type='checkbox' checked={toggleDone} onChange={() => { setToggleDone(!toggleDone); goal.updgradeGoal({ ...mainGoal, done: !toggleDone }) }} />
            {isEdit ? editTemplate : normalTemplate}
            <input type="range" id="Priority" name="Приоритет" min="1" max="3" value={mainGoal.priority} onChange={(e) => { setMainGoal({ ...mainGoal, priority: e.target.value }); }} />
            <button onClick={() => goal.removeGoal(mainGoal.id)}>Delete</button>
        </div>
    );
}

export default Goal;
