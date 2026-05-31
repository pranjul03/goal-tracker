import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function AddGoalDialog({ open, onClose, onAddGoal }) {
  const [goalName, setGoalName] = useState("");
  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState(null);

  const handleSubmit = () => {
    if (!goalName.trim()) return;

    onAddGoal({
      id: Date.now(),
      goalName,
      description,
      targetDate: targetDate ? targetDate.format("YYYY-MM-DD") : "",
      createdAt: new Date().toISOString(),
      subGoals: [],
    });

    setGoalName("");
    setDescription("");
    setTargetDate(null);

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create Goal</DialogTitle>

      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          margin="normal"
          label="Goal Name"
          value={goalName}
          onChange={(e) => setGoalName(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Description"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <DatePicker
          label="Target Date"
          value={targetDate}
          onChange={(newValue) => setTargetDate(newValue)}
          sx={{
            width: "100%",
            mt: 2,
          }}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button variant="contained" onClick={handleSubmit}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddGoalDialog;
