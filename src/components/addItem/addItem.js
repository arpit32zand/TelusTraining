import React, { useState } from 'react';
import styles from './addItem.module.css'

import { useDispatch } from 'react-redux';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import LongTextArea from '../longTextArea/longTextArea';
import InputField from '../inputField/inputField';
import { addTasks } from '../../redux/actions/actions';

const AddItem = () => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState({ value: '', error: false })
    const [phNo, setPhNo] = useState({ value: null, error: false })
    const [note, setNote] = useState({ value: '', error: false })
    const [name, setName] = useState({ value: '', error: false })

    const handleAddItem = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;
        const nameRegex = /^[a-zA-Z\s'-]*$/;
        if (note.value.length < 264 && note.value.length > 5) {
            if (nameRegex.test(name.value)) {
                if (emailRegex.test(email.value)) {
                    if (phoneRegex.test(phNo.value)) {
                        const newTask = {
                            id: Date.now(),
                            name: name.value,
                            note: note.value,
                            email: email.value,
                            phNo: phNo.value,
                            completed: false
                        };
                        dispatch(addTasks(newTask));
                        setEmail({ value: '', error: false });
                        setPhNo({ value: null, error: false })
                        setName({ value: '', error: false })
                        setNote({ value: '', error: false })
                    } else {
                        setPhNo({ value: phNo.value, error: true })
                    }
                } else {
                    setEmail({ value: email.value, error: true })
                }
            } else {
                setName({ value: name.value, error: true })
            }
        } else {
            setNote({ value: note.value, error: true })
        }
    }

    return (
        <Box className={styles.container}>
            <Typography variant="h6" className={styles.heading}>
                You can add Task here
            </Typography>
            <Box className={styles.inputContainer}>
                <LongTextArea
                    label={"Note"}
                    miRows={4}
                    value={note.value}
                    setValue={value => setNote({ value: value, error: false })}
                    error={name.error}
                    helper={'Note limit is 5-264 characters'}
                />
                <InputField
                    label={"Name"}
                    value={name.value}
                    setValue={(value) => setName({ value: value, error: false })}
                    error={name.error}
                    helper={'Invalid name format'}
                />
                <InputField
                    label={"Email"}
                    value={email.value}
                    setValue={(value) => setEmail({ value: value, error: false })}
                    error={email.error}
                    helper={'Invalid email format'}
                />
                <InputField
                    label={"Phone No."}
                    value={phNo.value}
                    setValue={value => setPhNo({ value: value, error: false })}
                    error={phNo.error}
                    helper={'Invalid Phone Number'}
                />
            </Box>
            <Box className={styles.buttonContainer}>
                <Button
                    className={styles.button}
                    variant="contained"
                    onClick={handleAddItem}
                >
                    Add +
                </Button>
            </Box>
        </Box >
    );
};

export default AddItem;