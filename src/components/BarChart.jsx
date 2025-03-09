import { useTasks } from "../context/TaskContext";
import { formatWithCommas } from "../helpers/formatWithCommas";

function BarChart() {
  const { finalAccValue, finalSuccessValue, finalFailedValue } = useTasks();
  console.log(finalAccValue);
  return (
    <div class="max-w-sm w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4 md:p-6">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Current accumulated total amount
      </p>
      <div class="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3">
        <dl>
          <dt class="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">
            Profit
          </dt>
          <dd class="leading-none text-3xl font-bold text-gray-900 dark:text-white">
            Php{formatWithCommas(finalAccValue)}
          </dd>
        </dl>
        <div>
          <span class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
            <svg
              class="w-2.5 h-2.5 me-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13V1m0 0L1 5m4-4 4 4"
              />
            </svg>
          </span>
        </div>
      </div>

      <div class="grid grid-cols-2 py-3">
        <dl>
          <dt class="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">
            Successfull Total
          </dt>
          <dd class="leading-none text-xl font-bold text-green-500 dark:text-green-400">
            Php{formatWithCommas(finalSuccessValue)}
          </dd>
        </dl>
        <dl>
          <dt class="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">
            Pull-out Total
          </dt>
          <dd class="leading-none text-xl font-bold text-red-600 dark:text-red-500">
            Php{formatWithCommas(finalFailedValue)}
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default BarChart;
