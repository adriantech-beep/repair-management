import { useTasks } from "../context/TaskContext";
import { useAuth } from "../context/FakeAuthContext";

import TaskItem from "../components/TaskItem";
import TaskForm from "../components/TaskForm";
import ProgressCircle from "../components/ProgressCircle";

function Tasks() {
  const { tasks } = useTasks();
  const { user } = useAuth();

  const userTasks =
    user.role === "admin"
      ? tasks
      : tasks.filter((task) => task.assignee === user.name);

  return (
    <div className="grid grid-cols-12 grid-rows-8 gap-4 p-1 h-full">
      <ul
        className="dark:bg-gray-800 col-span-6 row-span-8 flex p-2 flex-col gap-2 overflow-x-hidden 
                   overflow-y-auto
                   [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-track]:rounded-full
                   [&::-webkit-scrollbar-track]:bg-gray-100
                    [&::-webkit-scrollbar-thumb]:rounded-full
                   [&::-webkit-scrollbar-thumb]:bg-gray-300
                     dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                           dark:[&::-webkit-scrollbar-thumb]:bg-blue-700"
      >
        {userTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
      <div className="col-span-6 row-span-5 col-start-7">
        <TaskForm />
      </div>
      <div className="col-span-3 row-span-3 col-start-7 row-start-6 flex items-center justify-center bg-amber-300">
        <ProgressCircle />
      </div>
    </div>
  );
}

export default Tasks;
