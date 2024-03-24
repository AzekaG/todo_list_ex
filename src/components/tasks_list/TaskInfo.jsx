import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';
import { nanoid } from 'nanoid';
import Goal from './Goal';
import filter from './goalFilter'
import GoalFilter from './goalFilter';


const TaskInfo = () => {

    const { id } = useParams();
    const { taskList, addTask, removeTask, updateTask, updateGoal } = useContext(TaskContext);
    const [sort, setSort] = useState(true);



    const [task, setTask] = useState({});
    const [title, setTitle] = useState('');
    const [titleGoal, setTitleGoal] = useState('');
    const [goals, setGoals] = useState([]);
    const [filter, setFilterTasks] = useState('All');
    const filterMap = {
        "All": () => true,
        "Done": (goal) => goal.done,
        "To Do": (goal) => !goal.done,
    }

    useEffect(() => {
        console.log("useEfffectTask");
        setTask(taskList.filter(x => x.id == id)[0]);
        if (task) {
            setTitle(task.title)
        }
        if (task?.goals) {
            setGoals(task.goals)
        }
        else setGoals([]);
    }, [task, id])


    const addNewGoal = () => {
        setGoals([...goals, {
            id: nanoid(),
            title: titleGoal,
            done: false,
            priority: 1,

        }]);

        updateGoal(id, [...goals, {
            id: nanoid(),
            title: titleGoal,
            done: false,
            priority: 1,
        }]
        );

        setTask({ ...task, goals: goals })
        setTitleGoal('');
    }

    const updgradeGoal = (goalTemp) => {

        setGoals(goals.map((goal) => goal.id === goalTemp.id ? goalTemp : goal));
        updateGoal(id, goals.map((goal) => goal.id === goalTemp.id ? goalTemp : goal));

    }
    const removeGoal = (idGoalTemp) => {
        setGoals(goals.filter((goal) => goal.id !== idGoalTemp));
        updateGoal(id, goals.filter((goal) => goal.id !== idGoalTemp));
    }




    return (
        <div>
            <div><label>План : </label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <button onClick={() => updateTask({ ...task, title: title })}>Обновить</button>
            </div>

            <GoalFilter setFilterTasks={setFilterTasks} filterMap={filterMap} activeFilter={filter} />
            <button onClick={() => setSort(!sort)}>Сортирвоать по приоритету</button>

            {goals.sort((a, b) => sort ? a.priority - b.priority : b.priority - a.priority)
                .filter(filterMap[filter]).map((goal) => <Goal key={goal.id} {...goal} updgradeGoal={updgradeGoal} removeGoal={removeGoal} />)}
            <input type='text' value={titleGoal} placeholder='Введите новую задачу' onChange={(e) => setTitleGoal(e.target.value)}></input>
            <button onClick={addNewGoal}>Добавить нвоую задачу</button>

        </div >
    );
}

export default TaskInfo;
