import FavFilm from './Components/FavFilm'
import Time from './Components/Time'
import PersonalPage from './Components/PersonalPage'

const FavFilmArr={
  name:"День радио",
  rezh:"Дмитрий Дьяченко",
  year:" 2008 года"
}
const PersonalPageArr={
  name:"Одинцов Сергей",
  tel:"093 *** ** **",
  year:" 1982",
  town:"Mukachevo",
  email:'e-mail'

}

function App() {
  return (
    <div className="App"><Time/>
      <FavFilm arr={FavFilmArr}/>,
      <PersonalPage arr={PersonalPageArr}/>
    </div>
    
  );
}

export default App;
