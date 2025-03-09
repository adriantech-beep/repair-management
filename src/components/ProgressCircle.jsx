import { useTasks } from "../context/TaskContext";
import { calcPercentage } from "../helpers/calcPercentage";

function ProgressCircle() {
  const { tasks } = useTasks();
  const { completionPercentage, progressStrokeDasharray } =
    calcPercentage(tasks);

  return (
    <div className="relative size-40">
      <svg
        className="rotate-[135deg] size-full"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-gray-200 dark:text-neutral-700"
          strokeWidth="1.5"
          strokeDasharray="100 100"
          strokeLinecap="round"
        ></circle>
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-blue-600 dark:text-blue-500"
          strokeWidth="1.5"
          strokeDasharray={progressStrokeDasharray}
          strokeLinecap="round"
        ></circle>
      </svg>

      <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <span className="text-4xl font-bold text-blue-600 dark:text-blue-500">
          {completionPercentage}
        </span>
        <span className="text-blue-600 dark:text-blue-500 block">
          {completionPercentage === 100 ? "Complete" : "Progress"}
        </span>
      </div>
    </div>
  );
}

export default ProgressCircle;
