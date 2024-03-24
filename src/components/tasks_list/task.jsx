import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';


const Task = ({ addTask }) => {

    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState(null);


    const clickHandler = () => {
        if (title.trim().length === 0) {
            setTitleError('Ошибка');
            return;
        }
        addTask(title);
        setTitle('');


    }

 

    return (
        <div>
            <div class="form__group field">
                <input
                    id='name'
                    className="form__field"
                    type="input"
                    placeholder='Name'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={(e) => { if (e.code === "Enter") clickHandler() }}
                />
                <label for="name" class="form__label">Новый план</label>
                <button onClick={clickHandler}>Добавить </button>
                {titleError && <div>{titleError}</div>}
            </div>

        </div>
    );
}

export default Task;
