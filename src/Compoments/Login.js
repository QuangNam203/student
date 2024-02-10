
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';

import './Login.css'


function Login(){




    return(
        <div className={"overLayLogin"}>
             <Form className='parent-mb-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="email" placeholder="Enter Username" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" />
      </Form.Group>
      <Button variant="primary login" type="submit">
        Submit
      </Button>
      <Button variant="primary register" type="submit">
      Register
      </Button>
    </Form>
        </div>
    )
}
export default Login