import React, {FC, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store";
import {planetActions} from "./store";

const App: FC = () => {
  const { loading, error, planet } = useSelector((state: RootState) => state.planet)
  const [planets, setPlanets] = useState<string>('')
  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => (
      setPlanets(e.target.value)
  )
  const handleSubmit = (e:  React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      dispatch(planetActions.getPlanets(planets))
      setPlanets('')
  }

  console.log(loading, error, planet)

  return (
    <div className="App">
      <input type='text' value={planets} onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default App;
