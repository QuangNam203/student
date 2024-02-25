import {useState,useEffect} from 'react';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DeleteForever from '@mui/icons-material/DeleteForever';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import SnackbarComponent from './SnackbarComponent';
import { useContext } from 'react';
import {SnackbarContext, TableUpdateContext} from './ModalContext';
import studentAPI from '../../API/student/StudentAPI';
import { connect } from "react-redux";
import { setListStudents } from '../../Redux/reducers/studentSlice';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Formik, Field, Form, ErrorMessage, FastField } from 'formik';
import * as Yup from 'yup';
import CustomInputComponent from './CustomInputComponent';
import { selectPage } from '../../Redux/selectors/studentSelector';

function UpdateModal(props) {
    const [open, setOpen] = useState(false);
    const SnackContext = useContext(SnackbarContext);
    const [data,setData] = useState(()=> ({}));
    
    const RefrestTable = async ()=>{
        const result = await studentAPI.getAll(props.page);
        props.setListStudents(result.content);
    }

    // useEffect(()=>{
    //     const getStudent =async ()=>{
    //         const id = props.ID;
    //         const result = await studentAPI.getByID(id);
    //         setData(result)
    //     }
    //     getStudent();
    // },[props.ID])

    useEffect(()=>{
        const getStudent = ()=>{
            const id = props.ID;
            const promise = new Promise(
                (resolve)=>
                    resolve(props.getByID(id))
                ) 
                promise.then(
                    (result)=>{
                        console.log(result);
                        setData(result);
                    }
                )
        }
        getStudent();
    },[props.ID])

    return (
        <Formik
        enableReinitialize
            initialValues={
                {
                name:data && data.name ? data.name : '',
                dateOfBirth:data && data.dateOfBirth ? data.dateOfBirth : '',
                sex:data && data.sex ? data.sex : '',
                sdt:data && data.sdt ? data.sdt : '',
                email:data && data.email ? data.email : '',
                addres:data && data.addres ? data.addres : '',
                }
            }
            validationSchema={
            Yup.object({
                name: Yup.string()
                    .required('Required'),
                sdt: Yup.number()
                    .positive("Must the grean 0 And integer")
                    .integer()
                    .required('Required')
                    .test('checkSDT','This sdt is already registered.',async (sdt)=>{
                    const isExists = await studentAPI.existsBySDT(sdt);
                    return !isExists.data;
                    }),
                email:Yup.string()
                    .email('Invalid email address')
                    .required('Required')
                    .test('checkEmail','This sdt is already registered.',async (email)=>{
                    const isExists = await studentAPI.existsByEmail(email);
                    return !isExists.data;
                    })
                })}

            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={async (values)=>{
                await studentAPI.updateByID(
                data.id,
                values.name,
                values.dateOfBirth,
                values.sex,
                values.sdt,
                values.email,
                values.addres);
                setOpen(false);
                RefrestTable();
            }}    
            >
            <>
                <Button
                    variant="outlined"
                    color="warning"
                    endDecorator={<EditNoteIcon />}
                    onClick={()=> setOpen(true)}
                >
                    
                </Button>
                <Modal open={open} onClose={()=> setOpen(false)}>
                    <ModalDialog variant="outlined" role="alertdialog">
                        <DialogTitle>
                            <WarningRoundedIcon />
                            Confirmation
                        </DialogTitle>
                        <Divider />
                        <Form>
                            <DialogContent>
                            <div className='wrap-input' style={{'display':'flex'}}>
                                <FastField 
                                    name="name"
                                    type="text"
                                    placeholder="Họ Tên"
                                    label="Họ Tên"
                                    component={CustomInputComponent}
                                />
                                <FastField 
                                    name="dateOfBirth"
                                    type="text"
                                    placeholder="Ngày Sinh"
                                    label="Ngày Sinh"
                                    component={CustomInputComponent}
                                />
                            </div>
                            <div className='wrap-input' style={{'display':'flex'}}>
                                <div className='radio-Modal'
                                    style={{'width':'50%','line-height':'50px'}}
                                    >
                                    <span className='wrap-radio' style={{'padding':'10px'}}>
                                        <Field type="radio" name="sex" value="MALE" />
                                        MALE
                                    </span>
                                    <span className='wrap-radio' style={{'padding':'10px'}}>
                                        <Field type="radio" name="sex" value="FEMALE" />
                                        FEMALE
                                    </span>
                                </div>
                                <FastField 
                                    name="sdt"
                                    type="number"
                                    placeholder="Phone"
                                    label="Phone"
                                    component={CustomInputComponent}
                                />
                            </div>
                            <div className='wrap-input' style={{'display':'flex'}}>
                                <FastField 
                                    name="email"
                                    type="text"
                                    placeholder="Email"
                                    label="Email"
                                    component={CustomInputComponent}
                                />
                                <FastField 
                                    name="addres"
                                    type="text"
                                    placeholder="addres"
                                    label="addres"
                                    component={CustomInputComponent}
                                />
                            </div>
                            
                            
                            </DialogContent>
                            <DialogActions>
                                <Button type='submit' variant="solid" color="primary">
                                    Save
                                </Button>
                                <Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
                                Cancel
                                </Button>
                            </DialogActions>
                        </Form>
                    </ModalDialog>
                </Modal>
            </>
    </Formik> 
    );
}
const mapStateToProps = state =>{
    return{
        page : selectPage(state)
    }
}


export default connect(mapStateToProps,{setListStudents})(UpdateModal);