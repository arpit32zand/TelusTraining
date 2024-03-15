import React, { useState } from 'react';
import styles from './todoList.module.css'

import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { useTodoList } from '../../context/todoContext/todoContext';

import TodoItem from '../todoItem/todoItem';

const TodoList = () => {
    const { task, completeTask } = useTodoList();
    const navigate = useNavigate()

    return (
        <Box className={styles.container}>
            <Typography variant="h2" className={styles.heading}>
                TODO APP
            </Typography>
            <Box className={styles.listContainer}>
                {task.length ?
                    task.map(task =>
                        <TodoItem selectedTask={task} key={task.key} />
                    ) :
                    <Typography className={styles.heading}>
                        Chill!! You have no task for now
                    </Typography>
                }
                {completeTask.length ?
                    <>
                        <Typography
                            className={styles.heading}
                            style={{ textAlign: 'center' }}
                        >
                            Completed Task
                        </Typography>
                        {completeTask.map(task =>
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