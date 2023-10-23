import React from 'react';
import { AddTask } from '../AddTask';

export const Header = () => { 
    const x = 1;
    return <header className="header" data-testid="header">
        <nav>
            <div className="logo">
                <img src="/images/logo.png" alt="PetList" />
            </div>
            <div className="settings">
                <ul>
                    <li
                    data-testid="quick-add-task-action"
                    className="settings__add"
                    onClick={() => {
                        setShowQuickAddTask(true); 
                        setShouldShowMain(true);
                    }}
                    >+
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

    </header>; 
};

