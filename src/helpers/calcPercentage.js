export function calcPercentage(tasks) {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const completionPercentage =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  const progressStrokeDasharray = `${completionPercentage} 100`;

  return {
    progressStrokeDasharray,
    completionPercentage,
  };
}
