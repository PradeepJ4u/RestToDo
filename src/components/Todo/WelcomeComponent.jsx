import { Link } from 'react-router-dom';
import { useAuth } from './security/AuthContext';

function WelcomeComponent() {

    const authContext = useAuth()

    const userName = authContext.name
    
    return (
        <div className="Welcome">
            <div >
                Welcome {userName}
                <div>
                    <Link to="/list-todos">Manage your ToDos</Link>
                </div>
            </div>
        </div>
    )
}
export default WelcomeComponent;