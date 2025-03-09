import React from "react";
import { useTasks } from "../context/TaskContext";
import CustomerList from "../components/CustomerList";
import { useAuth } from "../context/FakeAuthContext";

function Customers() {
  const { tasks } = useTasks();
  const { user } = useAuth();

  const userTasks =
    user.role === "admin"
      ? tasks
      : tasks.filter((task) => task.assignee === user.name);
  return (
    <>
      <div className="p-4">
        <div className="flex flex-col">
          <div className="-mx-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Phone Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Phone Model
                      </th>
                      <th
                        scope="col"
                        className="px-8 py-2 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        IMEI
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Contact no.
                      </th>
                    </tr>
                  </thead>
                  {userTasks.map((task) => (
                    <CustomerList task={task} key={task.id} />
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customers;
