import { useParams, useNavigate } from 'react-router-dom';

function FilmPage() {
    const { title } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/')}>← Назад</button>
            <h1>{title}</h1>
            <p>Страница фильма</p>
        </div>
    );
}

export default FilmPage;