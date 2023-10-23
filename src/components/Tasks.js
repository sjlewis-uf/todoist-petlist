import React, { useState, useEffect } from 'react';
import { Checkbox } from './Checkbox';
import { AddTask } from './AddTask';
import { useTasks } from '../hooks';
import { collatedTasks } from '../constants';
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers';
import { useSelectedProjectValue, useProjectsValue } from '../context';


export const Tasks = () => {
    const { selectedProject } = useSelectedProjectValue();
    const { projects } = useProjectValue();
    const { tasks } = useTasks('selectedProject');

    let projectName = '';
    
    if (projects.length > 0 
        && selectProject 
        && !collatedTasksExist(selectedProject)
        ) {
        projectName = getTitle(projects, selectedProject).name;
    }

    if (collatedTasksExist(selectedProject) && selectedProject) {
        projectName = getCollatedTitle(collatedTasks, selectedProject).name;
    }

    useEffect(() => {
        document.title = '${projectName}: PetList';
    });

    return (
        <div className="tasks" data-testid="tasks">
            <h2 data-testid="project-name">{projectName} </h2>

            <ul className="tasks__list">
                {tasks.map(task=>(
                    <li key={'${task.id}'}>
                    <Checkbox id={task.id} />
                    <span>{task.task}</span>
                    </li>
                ))}
            </ul>

            <AddTask />
        </div>
    );
};