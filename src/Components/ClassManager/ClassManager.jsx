import { selectClass } from "../../Redux/selectors/classSelector";
import './ClassManage.css'
import { Formik, Field, Form, ErrorMessage, FastField } from 'formik';
import * as Yup from 'yup';
import CustomInputComponent from "../Modal/CustomInputComponent";
import classAPI from '../../API/class/ClassAPI'
import { connect } from "react-redux";
import { setListClass } from '../../Redux/reducers/classSlice';
import { useContext } from 'react';
import OptionContext from "../Option/OptionContext";

const ClassManager = (props) => {
  
    const setClass = props.setListClass;

    const RefrestTable = async ()=>{
      const result = await classAPI.getAll();
      setClass(result.content);
    }
  
    const handleContext = useContext(OptionContext);
  
    return (
      <Formik
      initialValues={
          {
             className:'',
             subject:'',
             Major:''
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
                const isExists = await classAPI.existsBySDT(sdt);
                return !isExists.data;
              }),
          email:Yup.string()
              .email('Invalid email address')
              .required('Required')
              .test('checkEmail','This sdt is already registered.',async (email)=>{
                const isExists = await classAPI.existsByEmail(email);
                return !isExists.data;
              })
          })}
  
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={async (values)=>{
        const body = {
          className:values.className,
          subject:values.subject,
          major:values.Major,
        }
        console.log(body);
        await classAPI.createStudent(body);
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
                    name="className"
                    type="text"
                    placeholder="ma lop"
                    label="tên lớp"
                    component={CustomInputComponent}
                  />
                  <FastField 
                    name="sujbect"
                    type="text"
                    placeholder="mon"
                    label="môn học"
                    component={CustomInputComponent}
                  />
                  <FastField 
                    name="Major"
                    type="text"
                    placeholder="Nganh"
                    label="tên Ngành"
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
        class : selectClass(state)
    }
  }
  
  
  export default connect(mapStateToProps,{setListClass})(ClassManager);

