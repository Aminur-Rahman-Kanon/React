import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [todos, setTodos] = useState([]);

  const [changeUserId, setChangeUserId] = useState(null);

  const [displayFilteredUser, setDisplayFilteredUser] = useState(null);

  //Fetching data as side effect on ComponentMount
  useEffect(() => {
    const controller = new AbortController;
    const signal = controller.signal;

    fetch('https://jsonplaceholder.typicode.com/todos', {
      signal
    }).then(res => res.json()).then(data => setTodos(data)).catch(err => console.log(err));

    //declaring a cleanup function
    return () => {
      console.log('cleaning onMount ...');
      controller.abort();
    }
  }, [])
  
  // Running side effect on changing the changeUserId state variable
  useEffect(() => {
    const test = todos.filter(item => item.userId === changeUserId);
    setDisplayFilteredUser(test);

    //declaring a cleanup function
    return () => {
      console.log('cleaning changeUserId ...')
    }
  }, [changeUserId])

  
  const changeUser = (id) => {
    setChangeUserId(id);
  }

  let btns = []
  for (let x=0; x<6; x++){
    btns.push(<button key={x} onClick={() => changeUser(x+1)} className="btn">{`User ${x+1}`}</button>)
  }

  let display = [];
  if (displayFilteredUser) {
    displayFilteredUser.map(item => {
      return display.push(<div key={item.id} className="card">
        <h3>{`userId: ${item.userId}`}</h3>
        <p>{`Id: ${item.id}`}</p>
        <p>{`Title: ${item.title}`}</p>
        <p>{`Completed: ${item.completed}`}</p>
      </div>)
    })
  } 
  
  return (
    <div className="App">
      <p>Chesk the todos of a specific user</p>
      <div>
        {btns}
        <div className="cardsContainer">
          {display}
        </div>
      </div>
      
    </div>
  );
}

export default App;
