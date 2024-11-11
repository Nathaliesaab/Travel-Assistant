import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found"
            style={{
                textAlign: 'center',
                margin: 'auto',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                flexDirection: 'column'
            }}>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="text-blue-500 underline">
                Go back to Home
            </Link>
        </div >
    );
}

export default NotFound;
