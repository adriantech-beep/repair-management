export function calcOverdue(item) {
  const originalDate = new Date(item.date);
  const dueDate = new Date(item.dueDate);

  // Added 3 days to the original date
  //this is the count of days to tag the task if its overdue or not
  const newDate = new Date(originalDate);
  newDate.setDate(newDate.getDate() + 3);

  if (newDate.getTime() === dueDate.getTime()) {
    return "Task is overdue!";
  } else {
    return "Task is not yet overdue.";
  }
}
