import React, { useState } from 'react';
import { AddTask } from '../AddTask';

export const Header = () => { 
    const [shouldShowMain, setShouldShowMain] = useState(false);
    const [showQuickAddTask, setShowQuickAddTask] = useState(false);

    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" alt="PetList" />
                </div>
                <div className="settings">
                    <ul>
                        <li className="settings__add">
                            <button
                                data-testid="quick-add-task-action"
                                type="button"
                                onClick={() => {
                                    setShowQuickAddTask(true); 
                                    setShouldShowMain(true);
                             }}
                            >+</button>
                        </li>
                    </ul>
                </div>
            </nav>
        
            <AddTask
                showAddTaskMain={false}
                shouldShowMain={shouldShowMain}
                showQuickAddTask={showQuickAddTask}
                setShowQuickAddTask={setShowQuickAddTask}
            />
        </header>
    ); 
};

