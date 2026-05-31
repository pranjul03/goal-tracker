function GoalCard(props) {
  return (
    <div className="goal-card">
      {props.title} {props.description} {props.targetDate}
    </div>
  );
}

export default GoalCard;
