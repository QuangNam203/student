import './AddStudent.css'
import { Formik, Field, Form, ErrorMessage, FastField } from 'formik';
import * as Yup from 'yup';
import CustomInputComponent from './CustomInputComponent';
import studentAPI from '../../API/student/StudentAPI'
import { connect } from "react-redux";
import { setListStudents } from '../../Redux/reducers/studentSlice';
import { selectStudents } from '../../Redux/selectors/studentSelector';
import { useContext } from 'react';
import OptionContext from '../Option/OptionContext';

function AddStudent(props) {

  const setStudent = props.setListStudents;

  const RefrestTable = async ()=>{
    const result = await studentAPI.getAll();
    setStudent(result.content);
  }

  const handleContext = useContext(OptionContext);

  return (
    <Formik
    initialValues={
        {
           name:'',
           dateOfBirth:'',
           sex:'',
           sdt:'',
           email:'',
           addres:''
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
      console.log(body);
      await studentAPI.createStudent(body);
      RefrestTable();
    }}    
    >
      {({resetForm,isSubmitting,handleSubmit})=>(
        <div className='Body_add' >
          <div className='container_add'>
            <div className='title'></div>
            <Form >
              <div className='user-details'>
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
                  placeholder="Ngày sinh"
                  label="Ngày sinh"
                  component={CustomInputComponent}
                />
                <label>
                  <Field type="radio" name="sex" value="MALE" />
                  MALE
                  <>-</>
                  <Field type="radio" name="sex" value="FEMALE" />
                  FEMALE
                </label>
                <FastField 
                  name="sdt"
                  type="number"
                  placeholder="Phone"
                  label="Phone"
                  component={CustomInputComponent}
                />
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
              <div className='button'>
                <input type='submit' value={"them"} disabled={isSubmitting}/>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}

const mapStateToProps = state => {
  return {
      student : selectStudents(state)
  }
}


export default connect(mapStateToProps,{setListStudents})(AddStudent);