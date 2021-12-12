import React, {FC, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "./store/Store";
import {getPlanets} from "./actions/PlanetActions";

const App: FC = () => {
  const planetState = useSelector((state: RootStore) => state.planet)
  const [planets, setPlanets] = useState<string>('')
  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => (
      setPlanets(e.target.value)
  )
  const handleSubmit = (e:  React.MouseEvent<HTMLButtonElement>) => dispatch(getPlanets(planets))

  console.log('planets are: ', planetState)

  return (
    <div className="App">
      <input type='text' onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default App;
