import img from'./error.gif';
import './errorMessage.css'

const ErrorMessage = () => {
    return (
        <img className='errorMessage' src={img} alt="ImageError"/>
    )
}
export default ErrorMessage;