import React from 'react';
//import { firebase } from "firebase/compat/app";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);

export const Checkbox = ({ id }) => {
    const archiveTask = () => {
        firebase
            .firestore()
            .collection('tasks')
            .doc(id)
            .update({
                archived: true, 
            });
    };

    return (
        <div className="checkbox-holder" data-testid="checkbox-action"
        onClick={()=> archiveTask()}>
            <span className="checkbox" />
        </div> 
    );
};