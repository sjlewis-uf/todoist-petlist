import React, { useState } from 'react';
import { Projects } from '../Projects';
import { useSelectedProjectValue } from '../../context';


export const Sidebar = () => {
    const { setSelectedProject } = useSelectedProjectValue;
    const [active, seActive] = useState('inbox');
    const [showProjects, setShowProjects] = useState(true);

    return (
    <div className="sidebar" data-testid="sidebar">
        <ul className="sidebar__generic">
            <li data-testId="inbox" className="inbox">
                <span>Inbox</span>
            </li>
            <li data-testId="today" className="today">
                <span>Today</span>
            </li>
            <li data-testId="upcoming" className="upcoming">
                <span>Upcoming</span>
            </li>
        </ul>
        <div className="sidebar__middle">
            <h2>Projects</h2>
        </div>
        <ul className="sidebar__projects">{showProjects && <Projects/>}</ul>
            
        {showProjects && <AddProject/>}
    </div>
    );
};