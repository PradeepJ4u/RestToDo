import { useContext } from 'react';
import { AuthContext } from './security/AuthContext';
import './TodoApp.css'

function FooterComponent() {

    return (
        <footer className="footer">
            <div className="container">
                Footer Component
            </div>
        </footer>
    )
}

export default FooterComponent;