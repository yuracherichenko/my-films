import { useLocation, useNavigate } from 'react-router-dom';

function FilmPage() {
    const { state } = useLocation();
    const navigate = useNavigate();

    return (
        <div style={{padding:'20px'}}>
            <button onClick={() => navigate('/')}>← Назад</button>
            <h1>{state.title}</h1>
            <p>Год выхода: {state.year}</p>
            <p>Рейтинг: {state.rating}</p>
        </div>
    );
}

export default FilmPage;