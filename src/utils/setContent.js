import Spinner from '../components/spinner/Spinner';
import ErrorMessage from '../components/errorMessage/ErrorMessage';
import Skeleton from '../components/skeleton/Skeleton';

//Компонент, который отвечает за рендеринг Skeletona, если данные на сервер еще не запрошенны.
//Spinner - если данные запрошены на сервер и ожидается ответ от сервера
// Component - это переданный любой компонент с данными для рендеринга на страницу, если данные получены
// ErrorMessage - если была ошибка при получении данных
const setContent = (process, Component, data) => {
    switch (process) {
        case 'waiting':
            return <Skeleton/>;
            break;
        case 'loading':
            return <Spinner/>;
            break;
        case 'confirmed':
            return <Component data={data}/>;
            break;
        case 'error':
            return <ErrorMessage/>
            break;
        default:
            throw new Error('Unexpected process state');
    }
}

export default setContent;