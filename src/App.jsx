import "./App.css";
import GoalCard from "./components/GoalCard.jsx";
import DialogBox from "./components/DialogBox.jsx";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [goals, setGoals] = useState(() => {
    const savedGoals = localStorage.getItem("goals");

    if (savedGoals) {
      return JSON.parse(savedGoals);
    }

    return [];
  });
  const [openDialog, setOpenDialog] = useState(0);
  const onAddGoal = (newGoal) => {
    setGoals([...goals, newGoal]);
    setCount(goals.length);
  };
  const onButtonClick = () => {
    setOpenDialog(1);
  };
  const onClose = () => {
    setOpenDialog(0);
  };

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  return (
    <div className="app">
      <h1 className="heading">Goal Tracker</h1>

      <button className="add-goal-btn" onClick={onButtonClick}>
        + New Goal
      </button>
      <DialogBox open={openDialog} onClose={onClose} onAddGoal={onAddGoal} />
      {goals.length > 0 && (
        <div className="goal-list">
          {goals.map((goal) => (
            <GoalCard
              key={goal}
              title={goal.goalName}
              description={goal.description}
              targetDate={goal.targetDate}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
