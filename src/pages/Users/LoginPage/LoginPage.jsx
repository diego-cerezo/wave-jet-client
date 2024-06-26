import './LoginPage.css'
import UserLoginForm from "../../../components/Users/UserLoginForm/UserLoginForm"
import { Container, Col } from 'react-bootstrap'

const LoginPage = () => {
    return (
        <>
            <div className='LoginPage full-height font-family'>
                <Container className='pt-5'>
                    <Col>
                        <UserLoginForm />
                    </Col>
                </Container>
            </div>

        </>

    )
}

export default LoginPage