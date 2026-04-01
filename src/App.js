import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import FilmCard from "./FilmCard";
import {useEffect} from "react";


function App() {
    const [films, setFilms] = useState([
        { title: 'звездные войны', year: 1977, rating: 9 },
        { title: 'повелитель', year: 2014, rating: 7 },
        { title: 'стальной алхимик - братство', year: 2006, rating: 10 },
        { title: 'берсерк', year: 1992, rating: 8 },
        { title: 'ассасин крид', year: 2014, rating: 5 },
    ]);
    const  [showAll, setShowAll] = useState(true);
    const [sortByRating, setSortByRating] = useState(false);
    const [users, setUsers] = useState([]);
    const [newFilm, setNewFilm] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, [])


    let filmRating = showAll ? films : films.filter(film => film.rating > 7);
    let filmsToRender = sortByRating
    ? [...filmRating].sort((a, b) => b.rating - a.rating)
        : filmRating;


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

              <input
              value={newFilm}
              onChange={e => setNewFilm(e.target.value)}
              placeholder='Введите название фильма'
              />
              <button onClick={() => {
                  setFilms([...films, {title: newFilm, year: 2024, rating: 5}]);
                  setNewFilm('')
              }}>Добавить</button>

          </div>

          {filmsToRender.map(film => (
              <FilmCard key={film.title} title={film.title}  year={film.year}  rating={film.rating} />
          ))}

          <h2>Пользователи из API </h2>
            <div>
                {users.map((user) => (
                    <p key={user.id}> {user.name} - {user.email} </p>
                ))}
            </div>



      </div>
  );
}

export default App;
