import React, {useState} from 'react';
import { useSelectedProjectValue, useProjectsValue } from '../context';
import { IndividualProject } from './IndividualProject';

export const Projects = ({ activeValue = null }) => {
    const [active, seActive] = useState(activeValue);
    const { setSelectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();

    return (
        projects && 
        projects.map(project => (
            <li
                key={project.projectId}
                data-doc-id={project.docId}
                data-testid="project-action"
                className={
                    active === project.projectId
                    ? 'active sidebar__project'
                    : 'sidebar__project'
                }
                onKeyDown={() => {
                    seActive(project.projectId);
                    setSelectedProject(project.projectId);
                }}
                onClick={() => {
                    seActive(project.projectId)
                    setSelectedProject(project.projectId);
                }}
                >
                    <IndividualProject project={project}/>

                </li>
        ))
    );
};
