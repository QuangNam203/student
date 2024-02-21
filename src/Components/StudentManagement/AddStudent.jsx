import './AddStudent.css'
import { Formik, Field, Form, ErrorMessage, FastField } from 'formik';
import * as Yup from 'yup';
import CustomInputComponent from './CustomInputComponent';

function AddStudent() {
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
    }}    
    >
      {({resetForm})=>(
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
                <input type='submit' value={"them"} />
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default AddStudent;