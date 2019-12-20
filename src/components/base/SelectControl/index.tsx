import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import './index.scss';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { ISelectOption } from '../../../types';

interface ISelectControlProps {
    options: ISelectOption[];
}

const useStyles = makeStyles(() =>
    createStyles({
        formControl: {
            minWidth: 210,
            boxShadow: '0px 2px 2px 0px rgba(189, 195, 201, 0.37)'
        }
    })
);

const SelectControl = ({ options }: ISelectControlProps) => {
    const classes = useStyles();
    return (
        <FormControl
            variant="outlined"
            className={`${classes.formControl} customSelect`}
        >
            <InputLabel htmlFor="outlined-data-native-simple">
                Select data
            </InputLabel>
            <Select
                native
                inputProps={{
                    name: 'data',
                    id: 'outlined-data-native-simple'
                }}
            >
                {options.map(({ value, label }, i) => (
                    <option value={`${value}`} key={i}>
                        {label}
                    </option>
                ))}
            </Select>
        </FormControl>
    );
};

export default SelectControl;
