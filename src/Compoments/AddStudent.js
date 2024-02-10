import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import './AddStudent.css'

function AddStudent() {
  return (
    <div className='addstudent-div'>
<Form className='addstudent-form'>
      <Row className="mb-3">
        <Form.Group as={Col} className='' controlId="formGridEmail">
          <Form.Label>Họ tên</Form.Label>
          <Form.Control type="text" placeholder="nhập họ và tên" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Mã sinh viên</Form.Label>
          <Form.Control type="text" placeholder="nhập mã sinh viên" />
        </Form.Group>
      </Row>

      <Form.Group as={Col} className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Liên hệ </Form.Label>
        <Form.Control placeholder="Số điện thoại" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Địa chỉ</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Ngành</Form.Label>
          <Form.Select defaultValue="Công nghệ thông tin">
            <option>Công nghệ thông tin</option>
            <option>Kinh tế</option>
            <option>Vận tải</option>
            <option>Cơ điện tử</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Lớp</Form.Label>
          <Form.Select defaultValue="TM">
            <option>TM</option>
            <option>KT</option>
            <option>VT</option>
            <option>CĐT</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Checked" />
      </Form.Group>

      <Button className='mb-3' variant="primary" type="submit">
        Thêm Sinh Viên
      </Button>
    </Form>
    </div>
    
  );
}

export default AddStudent;