import React, { useState } from 'react';
import { Projects } from '../Projects';
import { useSelectedProjectValue } from '../../context';
import { AddProject } from '../AddProject';


export const Sidebar = () => {
    const { setSelectedProject } = useSelectedProjectValue();
    const [active, setActive] = useState('inbox');
    const [showProjects, setShowProjects] = useState(true);

    return (
    <div className="sidebar" data-testid="sidebar">
        <ul className="sidebar__generic">
            <li 
                data-testid="inbox" 
                className={active === 'inbox' ? 'active' :undefined}>
                <div
                    datatestid="inbox-action"
                    tabIndex={0}
                    role="button"
                    onClick={() => {
                        setActive('inbox');
                        setSelectedProject('INBOX');                        
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            setActive('inbox');
                            setSelectedProject('INBOX');
                        }
                    }}
                    >
                <span>Inbox</span>
                </div>
            </li>
            <li data-testid="today" 
                className={active === 'today' ? 'active' : undefined}>
                <div data-testid="today-action"
                    tabIndex={0}
                    role="button"
                    onClick={() => {
                        setActive('today');
                        setSelectedProject('TODAY');
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            setActive('today');
                            setSelectedProject('TODAY');
                        }
                    }}>
                    <span>Today</span>
                </div>
            </li>
            <li 
                data-testid="upcoming" 
                className={active === 'upcoming' ? 'active' : undefined}>
                    <div data-testid="upcoming-action"
                        tabIndex={0}
                        role="button"
                        onClick={() => {
                            setActive('upcoming');
                            setSelectedProject('UPCOMING');
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                setActive('upcoming');
                                setSelectedProject('UPCOMING');
                            }
                        }}>
                        <span>Upcoming</span>
                    </div>
            </li>
        </ul>
        <div className="sidebar__middle" 
            onClick={() => setShowProjects(!showProjects)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') setShowProjects(!showProjects);
            }}
            role="button"
            tabIndex={0}
        >
            <span className={!showProjects ? 'hidden-projects' : undefined} />
            <h2>Projects</h2>
        </div>
        <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
            
        {showProjects && <AddProject />}
    </div>
    );
};