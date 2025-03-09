export function calcDate(receivedDate) {
  const currentDate = new Date(receivedDate);

  return {
    date: currentDate.getDate(),
    month: currentDate.getMonth() + 1,
    year: currentDate.getFullYear(),
  };
}
