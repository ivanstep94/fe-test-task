import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Game from "./components/Game/Game";
import ViewSelector from "./components/ViewSelector/ViewSelector";
import ScoreTable from "./components/ScoreTable/ScoreTable";

function App() {
  const { view } = useSelector(state => state.game);

  const renderView = () => {
    switch (view) {
        case 'score': return <ScoreTable/>;
        case 'game':
        default: return <Game />;
    }
  };

  return (
    <div className="App">
        <h1>Tic-Tac-Toe</h1>
        <ViewSelector />
        {renderView()}
    </div>
  );
}

export default App;
