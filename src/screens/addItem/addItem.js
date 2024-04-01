import React, { useState } from 'react';
import styles from './addItem.module.css'

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import LongTextArea from '../../components/longTextArea/longTextArea';
import InputField from '../../components/inputField/inputField';
import { addTasks } from '../../redux/actions/actions';

const AddItem = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [email, setEmail] = useState({ value: '', error: false })
    const [phNo, setPhNo] = useState({ value: '', error: false })
    const [note, setNote] = useState({ value: '', error: false })
    const [name, setName] = useState({ value: '', error: false })

    const validate = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;
        const nameRegex = /^[a-zA-Z\s'-]*$/;
        if (note.value.length < 264 && note.value.length > 5) {
            setNote({ value: '', error: false })
        } else {
            setNote({ value: note.value, error: true })
        }
        if (nameRegex.test(name.value)) {
            setName({ value: '', error: false })
        } else {
            setName({ value: name.value, error: true })
        }
        if (emailRegex.test(email.value)) {
            setEmail({ value: '', error: false });
        } else {
            setEmail({ value: email.value, error: true })
        }
        if (phoneRegex.test(phNo.value)) {
            setPhNo({ value: '', error: false })
        } else {
            setPhNo({ value: phNo.value, error: true })
        }
    }

    const handleAddItem = () => {
        validate()
        if (name.error && note.error && email.error && phNo.error) {
            const newTask = {
                id: Date.now(),
                name: name.value,
                note: note.value,
                email: email.value,
                phNo: phNo.value,
                completed: false
            };
            dispatch(addTasks(newTask));
            navigate('/')
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
                    error={note.error}
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
                    type={"number"}
                    helper={'Invalid Phone Number'}
                />
            </Box>
            <Box className={styles.buttonContainer}>
                <Button
                    className={styles.cancelButton}
                    variant="contained"
                    onClick={() => navigate('/')}
                >
                    Cancel
                </Button>
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