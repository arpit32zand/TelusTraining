import React from 'react';
import styles from './todoItem.module.css'

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { MdDelete } from "react-icons/md";

import { addCompleteTasks, addTasks, modifyCurrentTasks, removeCompleteTask, removeTask } from '../../redux/actions/actions';


const TodoItem = ({ selectedTask }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(removeTask(selectedTask.id));
    }

    const handleTaskClick = () => {
        dispatch(modifyCurrentTasks({ ...selectedTask }))
        navigate('/todo-task')
    }

    const handleTaskDone = () => {
        dispatch(addCompleteTasks(
            {
                ...selectedTask,
                completed: true
            }
        ))
        dispatch(removeTask(selectedTask.id));
    }

    const handleTaskUncheck = () => {
        dispatch(addTasks(
            {
                ...selectedTask,
                completed: false
            }
        ))
        dispatch(removeCompleteTask(selectedTask.id));
    }

    return (
        <Box
            onClick={handleTaskClick}
            className={!selectedTask.completed ? styles.container : styles.disableContainer}
        >
            <Box className={styles.dataContainer}>
                <Checkbox
                    className={styles.check}
                    color="secondary"
                    checked={selectedTask.completed}
                    onClick={e => e.stopPropagation()}
                    onChange={selectedTask.completed ? handleTaskUncheck : handleTaskDone}
                />
                <Box className={styles.fieldContainer}>
                    <Typography
                        className={!selectedTask.completed ? styles.itemText : styles.doneItemText}
                    >
                        {selectedTask.name}
                    </Typography>
                    <Typography
                        className={!selectedTask.completed ? styles.itemText : styles.doneItemText}
                    >
                        {selectedTask.email}
                    </Typography>
                    <Typography
                        className={!selectedTask.completed ? styles.itemText : styles.doneItemText}
                    >
                        {selectedTask.phNo}
                    </Typography>
                </Box>
            </Box>
            {!selectedTask.completed &&
                <Box
                    className={styles.iconContainer}
                    onClick={handleDelete}
                >
                    <MdDelete className={styles.icon} />
                </Box>
            }
        </Box>
    );
}

export default TodoItem;