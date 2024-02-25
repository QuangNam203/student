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
import {selectStudents } from '../../Redux/selectors/studentSelector';

function UpdateModal(props) {
    const [open, setOpen] = useState(false);
    const SnackContext = useContext(SnackbarContext);
    const [data,setData] = useState(()=> ({}));
    
    useEffect(()=>{
        const getStudent =async ()=>{
            const id = props.ID;
            const result = await studentAPI.getByID(id);
            setData(result)
        }
        getStudent();
    },[props.ID])

    return (
        <Formik
    initialValues={
        {
           name:'',
           dateOfBirth:'',
           sex:'',
           sdt:'',
           email:'',
           addres:'',
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
      const body = {
        name:values.name,
        dateOfBirth:values.dateOfBirth,
        sex:values.sex,
        sdt:values.sdt,
        email:values.email,
        addres:values.addres
      }
      console.log(data)
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
                            setFieldValue={data.name}
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
                            Discard notes
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

export default connect(null,{setListStudents})(UpdateModal);