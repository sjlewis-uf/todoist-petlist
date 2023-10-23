import React, { useState } from 'react';
import { Projects } from '../Projects';
import { useSelectedProjectValue } from '../../context';


export const Sidebar = () => {
    const { setSelectedProject } = useSelectedProjectValue();
    const [active, setActive] = useState('inbox');
    const [showProjects, setShowProjects] = useState(true);

    return (
    <div className="sidebar" data-testid="sidebar">
        <ul className="sidebar__generic">
            <li 
                data-testId="inbox" 
                className={active === 'inbox' ? 'active' :undefined}
                onClick={() => {
                    setActive('inbox');
                    setSelectedProject('INBOX');
                }}>
                <span>Inbox</span>
            </li>
            <li data-testId="today" 
                className={active === 'today' ? 'active' : undefined}
                onClick={() => {
                    setActive('today');
                    setSelectedProject('TODAY');
                }}>
                <span>Today</span>
            </li>
            <li 
                data-testId="upcoming" 
                className={active === 'upcoming' ? 'active' : undefined}
                onClick={() => {
                    setActive('upcoming');
                    setSelectedProject('Upcoming');
                }}>
                <span>Upcoming</span>
            </li>
        </ul>
        <div className="sidebar__middle" onClick={() => setShowProjects(!showProjects)}>
            <span className={!showProjects ? 'hidden-projects' : undefined} />
            <h2>Projects</h2>
        </div>
        <ul className="sidebar__projects">{showProjects && <Projects/>}</ul>
            
        {showProjects && <AddProject/>}
    </div>
    );
};