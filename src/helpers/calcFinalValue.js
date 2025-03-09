export function calcFinalValue(tasks) {
  const accValue = tasks.reduce((total, task) => {
    return total + (Number(task.successValue) || 0);
  }, 0);

  const successValue = tasks
    .filter((task) => task.status === "success")
    .reduce((total, task) => {
      return total + (Number(task.successValue) || 0);
    }, 0);

  const failedValue = tasks
    .filter((task) => task.status === "failed")
    .reduce((total, task) => {
      return total + (Number(task.successValue) || 0);
    }, 0);

  const ongoingCount = tasks.filter((task) => task.completed === false).length;
  const unClaimedCount = tasks.filter((task) => task.completed === true).length;
  const successCount = tasks.filter((task) => task.status === "success").length;
  const failedCount = tasks.filter((task) => task.status === "failed").length;

  return {
    finalAccValue: accValue,
    finalSuccessValue: successValue,
    finalFailedValue: failedValue,
    ongoing: ongoingCount,
    unClaimed: unClaimedCount,
    successTasks: successCount,
    failedTasks: failedCount,
  };
}
