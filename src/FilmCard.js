import {Link} from "react-router-dom";

function FilmCard({title, year, rating}) {
    return (
        <div className='film-card'>
            <h3><Link to={`/film/${title}`}>{title} </Link></h3>
            <p>Год: {year}</p>
            <p>Рейтинг: {rating}</p>
        </div>
    )
}
export default FilmCard;