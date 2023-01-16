import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteUserById, retriveAllTodoForUser } from '../api/TodoService';
import { useAuth } from './security/AuthContext';
import './TodoApp.css'

function ListTodoComponent() {

    const [todos, setToDo] = useState([])

    const [deleteMessage, setDeleteMessage] = useState(null)

    const authContext = useAuth()
    const userName = authContext.name

    const authToken = authContext.authToken

    const navigate = useNavigate()

    useEffect(
        () => retriveTodos(), []
    )

    function retriveTodos() {
        retriveAllTodoForUser(userName, authToken)
            .then(
                (response) => setToDo(response.data))
            .catch((error) => console.log(error))
    }

    function deleteTodobyId(id) {
        deleteUserById(userName, id, authToken)
            .then(
                () => {
                    setDeleteMessage(`Todo with id ${id} deleted.`)
                    retriveTodos()
                })
            .catch((error) => console.log(error))
    }

    function updateTodobyId(id) {
        setDeleteMessage(null)
        navigate(`/updatetodo/${id}`)
    }

    function handelAddTodoButton() {
        navigate(`/updatetodo/-1`)
    }

    return (
        <div className="container ">
            {deleteMessage && <div className="alert alert-warning">{deleteMessage}</div>}
            <h1>Your To Do's are:</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Due Date</th>
                            <th>Is Done?</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td><button className="btn btn-success"
                                            onClick={() => updateTodobyId(todo.id)}>Update</button></td>
                                        <td><button className="btn btn-warning"
                                            onClick={() => deleteTodobyId(todo.id)}>Delete</button></td>

                                    </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={handelAddTodoButton}>Add new ToDo</button>
            </div>
        </div>
    )
}

export default ListTodoComponent;