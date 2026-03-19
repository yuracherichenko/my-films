function FilmCard({title, year, rating}) {
    return (
        <div className='film-card'>
            <h3>{title}</h3>
            <p>Год: {year}</p>
            <p>Рейтинг: {rating}</p>
        </div>
    )
}
export default FilmCard;