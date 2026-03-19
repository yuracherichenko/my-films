import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import FilmCard from "./FilmCard";

function App() {
    const films = [
        { title: 'звездные войны', year: 1977, rating: 9 },
        { title: 'повелитель', year: 2014, rating: 7 },
        { title: 'стальной алхимик - братство', year: 2006, rating: 10 },
        { title: 'берсерк', year: 1992, rating: 8 },
        { title: 'ассасин крид', year: 2014, rating: 5 },
    ];
    const  [showAll, setShowAll] = useState(true);
    const [sortByRating, setSortByRating] = useState(false);


    let filmRating = showAll ? films : films.filter(film => film.rating > 7);
    let filmsToRender = sortByRating
    ? [...filmRating].sort((a, b) => b.rating - a.rating)
        : filmRating;
    let filmsToYear = [...films].sort((a, b) => a.year - b.year);

  return (
      <div className='app'>

        <h1>Мои любимые фильмы</h1>
          <div className="buttons">
              <button onClick={() => setShowAll(!showAll)}>
                  {showAll ? 'Показать лучшие' : 'Показать все'}

              </button >
              <button onClick={() => setSortByRating(!sortByRating)}>
                  {sortByRating ? 'Без сортировки' : 'По рейтингу'}
              </button>

          </div>

          {filmsToRender.map(film => (
              <FilmCard title={film.title}  year={film.year}  rating={film.rating} />
          ))}
      </div>
  );
}

export default App;
