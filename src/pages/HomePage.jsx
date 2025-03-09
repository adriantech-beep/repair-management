import { useTasks } from "../context/TaskContext";
import OverdueTask from "../components/OverdueTask";

function HomePage() {
  const { ongoing, unClaimed, tasks } = useTasks();

  return (
    <div className="bg-stone-300  w-full h-full grid grid-cols-6 grid-rows-6 gap-6 p-4">
      <div className="col-span-3 row-span-3 bg-fuchsia-300 flex flex-col items-center p-5 gap-15 rounded-2xl">
        <div className="flex items-center justify-between w-full px-10">
          <h1 className="text-2xl text-stone-50">Total ongoing repair</h1>
          <i className="fa-solid fa-mobile text-2xl text-stone-50"></i>
        </div>
        <div>
          <h3 className="text-7xl text-stone-50">{ongoing}</h3>
        </div>
      </div>
      <div className="col-span-3 row-span-3 col-start-4 bg-amber-300  flex flex-col items-center p-5 gap-15 rounded-2xl">
        <div>
          <h1 className="text-2xl text-stone-50">Completed Units</h1>
        </div>
        <div>
          <h3 className="text-7xl text-stone-50">{unClaimed}</h3>
        </div>
      </div>
      <ul
        className="col-span-6 row-span-3 row-start-4 bg-sky-200 flex flex-col gap-2 p-4 overflow-x-hidden 
                   overflow-y-auto
                   [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-track]:rounded-full
                   [&::-webkit-scrollbar-track]:bg-gray-100
                    [&::-webkit-scrollbar-thumb]:rounded-full
                   [&::-webkit-scrollbar-thumb]:bg-gray-300
                     dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                           dark:[&::-webkit-scrollbar-thumb]:bg-blue-700"
      >
        {tasks.map((task) => (
          <OverdueTask task={task} key={task.id} />
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
