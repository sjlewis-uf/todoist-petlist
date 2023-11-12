import React, { useState } from 'react';
import { useProjectsValue, useSelectedProjectValue } from '../context';
import { firebase } from '../firebase';

export const IndividualProject = ({project}) => {
    const [showConfirm, setShowConfirm] = useState(false);
    const { projects, setProjects } = useProjectsValue();
    const {setSelectedProject } = useSelectedProjectValue();

    const deleteProject = docId => {
        firebase
            .firestore()
            .collection('projects')
            .doc(docId)
            .delete()
            .then(() => {
                setProjects([...projects]);
                setSelectedProject('INBOX');
            });
    };

    return (
        <>
            <span className="sidebar__project-name">{project.name}</span>
            <span className="sidebar__project-delete" data-testid="delete-project" 
             onClick={() => setShowConfirm(!showConfirm)}>
             {showConfirm && (
                <div className="project-delete-modal">
                    <div className="project-delete-modal__inner">
                        <p>Are you sure you want to delete this project?</p>
                        <button 
                            type="button"
                            onClick={()=> deleteProject(project.docId)}>Delete
                        </button>
                        <button>
                                <span onClick={() => setShowConfirm(!showConfirm)}>Cancel</span>
                        </button>
                    </div>
                </div>
             )}   
            </span>
        </>
    )
};
