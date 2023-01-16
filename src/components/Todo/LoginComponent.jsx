import { ErrorMessage, Field, Formik, Form } from 'formik';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext';

function LoginComponent() {

    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    const [failedMessage, setFailedMessage] = useState(false)
    const navigate = useNavigate()
    const authContext = useAuth()

    // function handelUserName(state) {
    //     setUserName(state.target.value)
    // }

    // function handelPassword(state) {
    //     setPassword(state.target.value)
    // }

    async function handelSubmit(values) {
        if (await authContext.login(values.userName, values.password)) {
            setFailedMessage(false)
            navigate(`/welcome/${userName}`)
        } else {
            setFailedMessage(true)
        }
    }

    function validateInputs(values) {

        let errors = {}

        if (values.userName.length < 5 || values.description === '') {
            errors.userName = "User Name can not be less than 5 charecters."
        }

        if (values.password.length < 5 || values.password === '') {
            errors.password = "Password can not be less than 5 charecters."
        }

        return errors
    }

    return (
        <div className="container">
            <h1>Time to Login</h1>
            {failedMessage && <div>Authentication Failed.</div>}
            <div>
                <Formik
                    initialValues={{ userName, password }}
                    enableReinitialize={true}
                    onSubmit={handelSubmit}
                    validate={validateInputs}
                    validateOnBlur={false}
                    validateOnChange={false}
                >
                    {
                        (props) => (
                            <Form>
                                <fieldset>
                                    <ErrorMessage
                                        name="userName"
                                        className="alert alert-warning"
                                        component="div"
                                    />
                                    <label>User Name</label>
                                    <Field type="text" className="form-control" name="userName" />
                                    <ErrorMessage
                                        name="password"
                                        className="alert alert-warning"
                                        component="div"
                                    />
                                    <label>Password</label>
                                    <Field type="password" className="form-control" name="password" />
                                </fieldset>
                                <div>
                                    <button className="LoginButton"
                                        class="btn btn-success m-5"
                                        type="submit">Submit</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
                {/* <label>User Name</label>
                <input type="text" name="userName" onChange={handelUserName}></input> */}
            </div>
            {/* <div>
                <label>Password</label>
                <input type="password" name="password" onChange={handelPassword}></input>
            </div> 
            <button type="button" name="LoginButton" onClick={handelSubmit}>Submit</button>*/}
        </div>
    )
}

export default LoginComponent;
