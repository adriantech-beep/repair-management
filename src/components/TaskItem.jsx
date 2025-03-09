"use client";

import { useTasks } from "../context/TaskContext";
import { calcDate } from "../helpers/calcDate";
import Button from "../reusable-component/Button";
import Example from "./Modal";

function TaskItem({ task }) {
  const {
    handleToggleItem,
    handleShowModal,
    handleSetTaskSuccess,
    handleSetTaskFailed,
  } = useTasks();

  const dateInfo = calcDate(task.receivedDate);

  return (
    <li className="rounded-md bg-indigo-500/30 shadow-lg flex justify-between px-2 py-2 gap-2">
      <div>
        <div>
          <div className="flex gap-4">
            <h1 className="text-gray-900 dark:text-white text-base font-medium tracking-tight">
              {task.model}
            </h1>
            <p className="text-fuchsia-500 text-base font-medium tracking-tight">{`${dateInfo.month}-${dateInfo.date}-${dateInfo.year}`}</p>
          </div>
          <div className="flex gap-6">
            <p className="text-yellow-500 text-base font-medium tracking-tight">
              ticket no: {task.id}
            </p>
            <div>
              <label
                className="text-green-500 font-medium"
                htmlFor={`success-${task.id}`}
              >
                success
              </label>
              <input
                type="checkbox"
                id={`success-${task.id}`}
                checked={task.status === "success"}
                onChange={() => handleSetTaskSuccess(task.id, task.cost)}
              />
            </div>
            <div>
              <label
                className="text-red-500 font-medium"
                htmlFor={`failed-${task.id}`}
              >
                failed
              </label>
              <input
                type="checkbox"
                id={`failed-${task.id}`}
                checked={task.status === "failed"}
                onChange={() => handleSetTaskFailed(task.id)}
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-gray-500 dark:text-gray-300 text-md">
            imei: {task.imei}
          </p>
        </div>
        <div className="flex gap-6">
          <p className="text-gray-100 bg-indigo-500/50 p-1 text-md">
            condition: {task.condition}
          </p>
          <p className="text-gray-100 bg-indigo-500/50 p-1 text-md">
            problem: {task.problem}
          </p>
        </div>
        {task.status === "success" && (
          <p className="text-green-500 font-medium">
            Amount: Php{task.successValue}
          </p>
        )}
        {task.status === "failed" && (
          <p className="text-red-500 font-medium">Amount: Php100</p>
        )}
      </div>
      <div>
        <p className="bg-cyan-800 text-stone-200 p-1">
          assigned to: {task.assignee}
        </p>

        <div className="flex flex-col gap-1.5">
          <Button type="primary" onClick={() => handleToggleItem(task.id)}>
            Done
          </Button>

          {task.completed && (
            <Button type="secondary" onClick={() => handleShowModal()}>
              Delete
            </Button>
          )}
          <Example taskid={task.id} />
        </div>
      </div>
    </li>
  );
}

export default TaskItem;
