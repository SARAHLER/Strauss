import React from 'react';
import { TextField } from '@mui/material';

const CustomTextField = ({ arrFields, func }) => {

    return (
        <>
            {arrFields?.map((field, index) => (
                <TextField
                    key={field.label}
                    margin="normal"
                    required
                    fullWidth
                    name={field.name}
                    label={field.label}
                    type={field.name}
                    id={field.name}
                    autoComplete={field.autoComplete}
                    value={field.value}
                    onChange={(e) => func(index, e.target.value)}
                />
            ))}
        </>

    )
}
export default CustomTextField