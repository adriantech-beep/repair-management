import { calcDate } from "../helpers/calcDate";
import { calcOverdue } from "../helpers/calcOverdue";

function OverdueTask({ task }) {
  const dateInfo = calcDate(task.receivedDate);

  return (
    <li className="flex justify-between bg-violet-400 p-4 rounded-b-sm">
      <p className="font-medium">Technician : {task.assignee}</p>
      <p>{task.model}</p>
      <p>{task.problem}</p>
      <p className="bg-violet-600 p-2 rounded text-stone-100">
        {calcOverdue(dateInfo)}
      </p>
    </li>
  );
}

export default OverdueTask;
