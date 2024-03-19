import React from 'react';
import styles from './todoList.module.css'

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import TodoItem from '../../components/todoItem/todoItem';

const TodoList = () => {

    const navigate = useNavigate()
    const taskList = useSelector(state => state.tasks)
    const completeTaskList = useSelector(state => state.completeTasks);

    return (
        <Box className={styles.container}>
            <Typography variant="h2" className={styles.heading}>
                TODO APP
            </Typography>
            <Box className={styles.listContainer}>
                {taskList.length ?
                    taskList.map(task =>
                        <TodoItem selectedTask={task} key={task.key} />
                    ) :
                    <Typography className={styles.heading}>
                        Chill!! You have no task for now
                    </Typography>
                }
                {completeTaskList.length ?
                    <>
                        <Typography
                            className={styles.heading}
                            style={{ textAlign: 'center' }}
                        >
                            Completed Task
                        </Typography>
                        {completeTaskList.map(task =>
                            <TodoItem selectedTask={task} key={task.key} />
                        )}
                    </> :
                    <></>
                }
            </Box>
            <Box className={styles.buttonContainer}>
                <Button
                    className={styles.button}
                    variant="contained"
                    onClick={() => navigate('/add-item')}
                >
                    Add Task
                </Button>
            </Box>
        </Box >
    );
};

export default TodoList;