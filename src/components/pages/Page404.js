import ErrorMessage from "../errorMessage/ErrorMessage";
import {NavLink} from 'react-router-dom';

const Page404 = () => {
    const activeColor = ({ isActive}) => ({color : isActive ? '#9f0013' : 'inherit'});
    return (
        <div>
            <ErrorMessage/>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
            <NavLink end style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px', activeColor}} to="/">Back to main page</NavLink>
        </div>
    )
}

export default Page404;