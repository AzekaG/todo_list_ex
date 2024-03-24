import React from 'react';
import classNames from 'classnames';

const GoalFilter = ({ setFilterTasks, filterMap, activeFilter }) => {
    const filterKeys = Object.keys(filterMap);



    return (
        <div>
            {
                filterKeys.map(filter =>
                    <button
                        onClick={(e) => { setFilterTasks(filter); }}
                        className={classNames({ active: filter === activeFilter })}
                        key={filter}
                    >{filter}</button>
                )}
        </div>
    );
}

export default GoalFilter;
