import { ErrorMessage, Field, Form, Formik } from "formik"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { addTodoById, retriveTodoById, updateTodoById } from "../api/TodoService"
import { useAuth } from "./security/AuthContext"
import validator from "validator"

export default function TodoComponent() {

    const { id } = useParams()

    const authContext = useAuth()
    const userName = authContext.name

    const [description, setDescription] = useState('')

    const [targetDate, setTargetDate] = useState('')

    const navigate = useNavigate()

    useEffect(
        () => retriveTodoForIdFunction(), [id]
    )

    function retriveTodoForIdFunction() {
        console.log(id != -1)
        if (id != -1) {
            retriveTodoById(userName, id)
                .then(
                    (response) => {
                        console.log(response)
                        setDescription(response.data.description)
                        setTargetDate(response.data.targetDate)
                    })
                .catch((error) => console.log(error))
        }
    }

    function handelSubmitButton(values) {
        const todo = {
            id: id,
            userName: userName,
            description: values.description,
            targetDate: values.targetDate,
            done: false
        }

        console.log(todo)
        console.log(id == -1)

        if (id == -1) {

            addTodoById (userName, todo)
                .then(
                    () => {
                        navigate('/list-todos')
                    })
                .catch((error) => console.log(error))

        } else {

            updateTodoById(userName, id, todo)
                .then(
                    () => {
                        navigate('/list-todos')
                    })
                .catch((error) => console.log(error))

        }



    }

    function validateInputs(values) {

        let errors = {}

        console.log(values)
        if (values.description.length < 5 || values.description === '') {
            errors.description = "Enter a valid description."
        }
        
        if (values.targetDate == null || !validator.isDate(values.targetDate)) {
            errors.targetDate = "Enter a valid date."
        }

        return errors
    }

    return (
        <div className="container">
            <h1>Update Your Todo # {id}</h1>
            <div>
                <Formik initialValues={{ description, targetDate }}
                    enableReinitialize={true}
                    onSubmit={handelSubmitButton}
                    validate={validateInputs}
                    validateOnBlur={false}
                    validateOnChange={false}
                >
                    {
                        (props) => (
                            <Form>
                                <fieldset>
                                    <ErrorMessage
                                        name="description"
                                        className="alert alert-warning"
                                        component="div"
                                    />
                                    <label>Description</label>
                                    <Field type="text" className="form-control" name="description" />
                                    <ErrorMessage
                                        name="targetDate"
                                        className="alert alert-warning"
                                        component="div"
                                    />
                                    <label>Target Date</label>
                                    <Field type="date" className="form-control" name="targetDate" />
                                </fieldset>
                                <div>
                                    <button className="submitButton"
                                        class="btn btn-success m-5"
                                        type="submit">Submit</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}

