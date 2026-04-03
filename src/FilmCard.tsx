import {Link} from "react-router-dom";

interface filmCardProps {
    title: string;
    year: number;
    rating: number;
}

function FilmCard({title, year, rating}: filmCardProps) {
    return (
        <div className='film-card'>
            <h3><Link to={`/film/${title}`}>{title} </Link></h3>
            <p>Год: {year}</p>
            <p>Рейтинг: {rating}</p>
        </div>
    )
}
export default FilmCard;