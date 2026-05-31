import "./App.css";
import GoalCard from "./components/GoalCard.jsx";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [goals, setGoals] = useState(["Learn React", "Fitness"]);
  const addGoal = () => {
    setGoals([...goals, "New Goal"]);
  };
  return (
    <div className="app">
      <h1 className="heading">Goal Tracker</h1>

      <button className="add-goal-btn" onClick={addGoal}>
        + New Goal
      </button>

      <div className="goal-list">
        {goals.map((goal) => (
          <GoalCard key={goal} title={goal} />
        ))}
      </div>
    </div>
  );
}

export default App;
