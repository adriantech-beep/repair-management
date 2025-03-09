import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useMemo,
} from "react";
import { generateTicketNumber } from "../helpers/generateID";
import { useLocalStorage } from "../helpers/useLocalStorage";
import { calcFinalValue } from "../helpers/calcFinalValue";

const initialTasks = [
  {
    customer: "Juan dela Cruz",
    contact: "09152525122",
    model: "SM-S908E",
    imei: 353695556852236,
    condition: "broken lcd",
    problem: "blinking display",
    cost: 16600,
    remarks: "with scratches and dents",
    completed: false,
    assignee: "Juan",
    id: 1001165465416,
    receivedDate: new Date("2025-03-06T00:00:00Z"),
    status: null,
    successValue: null,
  },
  {
    customer: "Jennefer Lorence",
    contact: "09152584522",
    model: "SM-A155",
    imei: 353695223625411,
    condition: "broken lcd",
    problem: "blinking display",
    cost: 5350,
    remarks: "with scratches and dents",
    completed: false,
    assignee: "Juan",
    id: 1001165468426,
    receivedDate: new Date("2025-03-01T00:00:00Z"),
    status: null,
    successValue: null,
  },
  {
    customer: "Adam Tyler",
    contact: "09186432656",
    model: "SM-N985",
    imei: 3536955456858885,
    condition: "no power",
    problem: "no charge",
    cost: 1500,
    remarks: "with scratches and dents",
    completed: false,
    assignee: "John",
    id: 100254546548,
    receivedDate: Date.now(),
    status: null,
    successValue: null,
  },
  {
    customer: "French Lopez",
    contact: "09152525152",
    model: "SM-G990",
    imei: 3536955456852224,
    condition: "no power",
    problem: "no charge",
    cost: 1500,
    remarks: "with scratches and dents",
    completed: false,
    assignee: "John",
    id: 100254546551,
    receivedDate: Date.now(),
    status: null,
    successValue: null,
  },
];

const TaskContext = createContext();

const initialState = {
  tasks: [],
  showConfirm: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "task/loaded":
      return { ...state, tasks: action.payload };
    case "task/added":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            ...action.payload,
            id: generateTicketNumber(),
            receivedDate: Date.now(),
            status: null,
            successValue: null,
          },
        ],
      };
    case "task/updated":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? {
                ...task,
                completed: !task.completed,
              }
            : task
        ),
      };
    case "task/deleted":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "show/confirm":
      return {
        ...state,
        showConfirm: action.payload,
      };
    case "task/set-success":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? {
                ...task,
                status: "success",
                successValue: action.payload.value,
              }
            : task
        ),
      };
    case "task/set-failed":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? {
                ...task,
                status: "failed",
                successValue: 100,
              }
            : task
        ),
      };
    case "task/reset-status":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? {
                ...task,
                status: null,
                successValue: null,
              }
            : task
        ),
      };
    default:
      throw new Error("unknown action type");
  }
}

function TaskProvider({ children }) {
  const [savedTasks, setSavedTasks] = useLocalStorage("tasks", initialTasks);

  const [{ tasks, showConfirm }, dispatch] = useReducer(reducer, {
    ...initialState,
    tasks: savedTasks,
  });

  useEffect(() => {
    setSavedTasks(tasks);
  }, [tasks, setSavedTasks]);

  function handleDeleteTask(id) {
    dispatch({ type: "task/deleted", payload: id });
  }

  function handleToggleItem(id) {
    dispatch({ type: "task/updated", payload: id });
  }

  function handleShowModal() {
    dispatch({ type: "show/confirm", payload: true });
  }

  function handleCloseModal() {
    dispatch({ type: "show/confirm", payload: false });
  }

  function handleSetTaskSuccess(id, value) {
    const task = tasks.find((task) => task.id === id);

    if (task.status === "success") {
      dispatch({ type: "task/reset-status", payload: id });
    } else {
      dispatch({
        type: "task/set-success",
        payload: { id, value },
      });
    }
  }

  function handleSetTaskFailed(id) {
    const task = tasks.find((task) => task.id === id);

    if (task.status === "failed") {
      dispatch({ type: "task/reset-status", payload: id });
    } else {
      dispatch({ type: "task/set-failed", payload: id });
    }
  }

  const taskCalcValues = useMemo(() => calcFinalValue(tasks), [tasks]);
  const {
    finalAccValue,
    finalSuccessValue,
    finalFailedValue,
    ongoing,
    unClaimed,
    successTasks,
    failedTasks,
  } = taskCalcValues;

  return (
    <TaskContext.Provider
      value={{
        tasks,
        dispatch,
        handleDeleteTask,
        handleToggleItem,
        showConfirm,
        handleShowModal,
        handleCloseModal,
        handleSetTaskSuccess,
        handleSetTaskFailed,
        ongoing,
        unClaimed,
        successTasks,
        failedTasks,
        finalAccValue,
        finalSuccessValue,
        finalFailedValue,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

function useTasks() {
  const context = useContext(TaskContext);
  if (context === undefined)
    throw new Error("useTasks was used outside the TaskProvider");
  return context;
}

export { TaskProvider, useTasks };
