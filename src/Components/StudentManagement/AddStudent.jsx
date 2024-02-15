import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import './AddStudent.css'

function AddStudent() {
  return (
      <Form className='form_add' >
      
        <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>sdt</Form.Label>
          <Form.Control placeholder='only number' />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>tên lớp</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
            <option>72dctm22</option>
          </Form.Select>
        </Form.Group>

      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>mã sinh viên</Form.Label>
        <Form.Control placeholder="nhập mã sinh viên" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>tên sinh vien</Form.Label>
        <Form.Control placeholder="HỌ , tên đệm , tên" />
      </Form.Group>


<Row className="mb-3">
      <Form.Label>ngay sinh</Form.Label> 
      <input type='date' />
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Nam" />
      </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Nu" />
      </Form.Group>


      

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    
  );
}

export default AddStudent;