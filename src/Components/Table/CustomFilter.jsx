import { useState } from "react";
import { Formik, Field, Form, ErrorMessage, FastField } from 'formik';
import * as Yup from 'yup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function CustomFilter(props){

    const [min,setMin] = useState();
    const [max,setMax] = useState();
    const [filter,setFilter] = useState('');
    
    const handleChange = (event)=>{
        setFilter(event.target.value);
    }
    return(
        <Formik
        initialValues={
            {
               minFilter:'',
               maxFilter:'',
            }
        }
        validationSchema={
        Yup.object({
            minFilter: Yup.number()
                .positive("Must the grean 0 And integer")
                .integer(),
            maxFilter: Yup.number()
                .positive("Must the grean 0 And integer")
                .integer(),
            })}

        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values)=>{
           console.log(values);
           console.log(filter);
        }}    
        >
            {({resetForm})=>(
                <>
                    <label for="export-file" className="export__file-btn" title="Export File"></label>
                        <input type="checkbox" id="export-file"></input>
                    <div className="export__file-options">
                        <label>Filter</label>  
                        <Form>
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-standard-label">Filter</InputLabel>
                                <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={filter}
                                onChange={handleChange}
                                >
                                <MenuItem value="id">
                                    <em>None</em>
                                </MenuItem>
                                    <MenuItem value={`Ten`}>Ten</MenuItem>
                                    <MenuItem value={`Twenty`}>Twenty</MenuItem>
                                    <MenuItem value={`Thirty`}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                <FastField

                                    name="minFilter"
                                    type="number"
                                    placeholder="Min"
                                    // onChange={handleEventEnter}
                                    />
                            </FormControl>
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                <FastField
                                    name="maxFilter"
                                    type="number"
                                    placeholder="Max"
                                    // onChange={handleEventEnter}
                                    />
                            </FormControl>
                            <button type="submit">Filter</button>
                        </Form>
                    </div>
                </>
            )}
        </Formik>
    );
}

export default CustomFilter;