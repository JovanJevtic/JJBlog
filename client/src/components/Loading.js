import ReactLoading from 'react-loading';
import '../styling/style.css';

const Loading = () => {
    return (
        <div className="loading">
            <ReactLoading className="spinner" type={'bubbles'} color={'#333'} height={140} width={140} />
        </div>
    );
};

export default Loading;