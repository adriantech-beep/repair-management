import { useRef } from "react";
import { useTasks } from "../context/TaskContext";
import Input from "../reusable-component/Input";
import confetti from "canvas-confetti";

function TaskForm() {
  const { dispatch } = useTasks();

  const formData = useRef({
    customer: "",
    contact: "",
    model: "",
    imei: "",
    condition: "",
    problem: "",
    assignee: "",
    cost: "",
    date: "",
    remarks: "",
    completed: false,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    formData.current[id] = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "task/added", payload: formData.current });

    // Run confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: {
        y: 0.6,
      },
    });
  };

  return (
    <form className="h-full flex flex-col gap-2 p-1.5" onSubmit={handleSubmit}>
      <div className="flex justify-between gap-2">
        <label htmlFor="customer"></label>
        <Input
          type="text primary"
          id={"customer"}
          defaultValue={formData.current.customer}
          onChange={handleChange}
          placeholder="Customer name"
        />

        <label htmlFor="contact"></label>
        <Input
          type="text primary"
          id={"contact"}
          defaultValue={formData.current.contact}
          onChange={handleChange}
          placeholder="Contact number"
        />
      </div>

      <div className="flex gap-2 justify-between">
        <label htmlFor="model"></label>
        <Input
          type="text"
          id="model"
          placeholder="Phone model"
          defaultValue={formData.current.model}
          onChange={handleChange}
        />

        <label htmlFor="imei"></label>
        <Input
          type="text"
          id="imei"
          placeholder="IMEI"
          defaultValue={formData.current.imei}
          onChange={handleChange}
        />
      </div>

      <div className="flex gap-2">
        <label htmlFor="condition"></label>
        <Input
          type="text"
          id="condition"
          placeholder="Phone Condition"
          defaultValue={formData.current.condition}
          onChange={handleChange}
        />

        <label htmlFor="problem"></label>
        <Input
          type="text"
          id="problem"
          placeholder="Phone problem"
          defaultValue={formData.current.problem}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-between gap-3">
        <select
          id="assignee"
          defaultValue={formData.current.assignee}
          onChange={handleChange}
        >
          <option value="">Assign repair to:</option>
          <option value="Juan">Juan</option>
          <option value="John">John</option>
        </select>
        <label htmlFor="cost"></label>
        <Input
          type="text"
          id="cost"
          placeholder="Cost"
          defaultValue={formData.current.cost}
          onChange={handleChange}
        />

        <label htmlFor="date"></label>
        <Input
          type="date"
          id="date"
          defaultValue={formData.current.date}
          onChange={handleChange}
        />
      </div>

      <label htmlFor="remarks"></label>
      <textarea
        id="remarks"
        className="block w-full h-40 px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none resize-none leading-relaxed"
        placeholder="Enter a description..."
        defaultValue={formData.current.remarks}
        onChange={handleChange}
      ></textarea>
      <button
        type="submit"
        id="hs-run-on-click-run-confetti"
        className="py-3 px-4 flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
