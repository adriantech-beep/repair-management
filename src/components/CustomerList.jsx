function CustomerList({ task }) {
  return (
    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-stone-800 text-start">
          {task.customer}
        </td>

        {task.completed ? (
          <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 text-start">
            Completed
          </td>
        ) : (
          <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500 text-start">
            Pending
          </td>
        )}

        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-start">
          {task.model}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
          {task.imei}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-start">
          {task.contact}
        </td>
      </tr>
    </tbody>
  );
}

export default CustomerList;
