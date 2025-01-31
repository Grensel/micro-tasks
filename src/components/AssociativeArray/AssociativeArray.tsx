import { useState } from "react";
import { v1 } from "uuid";
import { TaskType, Todolist } from "./Todolist";

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistsType = {
  id: string;
  title: string;
  filter: FilterValuesType;
};
export type TasksState = {
  [todolistId: string]: TaskType[];
};

export const AssociativeArray = () => {
  // let [tasks, setTasks] = useState([
  //     {id: v1(), title: "HTML&CSS", isDone: true},
  //     {id: v1(), title: "JS", isDone: true},
  //     {id: v1(), title: "ReactJS", isDone: false},
  //     {id: v1(), title: "Rest API", isDone: false},
  //     {id: v1(), title: "GraphQL", isDone: false},
  // ]);
  // let [filter, setFilter] = useState<FilterValuesType>("all");

  const todolistID1 = v1();
  const todolistID2 = v1();
  const [todolists, setTodolists] = useState<Array<TodolistsType>>([
    { id: todolistID1, title: "What to learn", filter: "all" },
    { id: todolistID2, title: "What to buy", filter: "all" },
  ]);
  const [tasks, setTasks] = useState({
    [todolistID1]: [
      { id: v1(), title: "HTML&CSS", isDone: true },
      { id: v1(), title: "JS", isDone: true },
      { id: v1(), title: "ReactJS", isDone: false },
      { id: v1(), title: "Rest API", isDone: false },
      { id: v1(), title: "GraphQL", isDone: false },
    ],
    [todolistID2]: [
      { id: v1(), title: "HTML&CSS2", isDone: true },
      { id: v1(), title: "JS2", isDone: true },
      { id: v1(), title: "ReactJS2", isDone: false },
      { id: v1(), title: "Rest API2", isDone: false },
      { id: v1(), title: "GraphQL2", isDone: false },
    ],
  });

  const removeTask = (todolistId: string, id: string) => {
    setTasks({
      ...tasks,
      [todolistId]: tasks[todolistId].filter((t) => t.id != id),
    });
  };

  const addTask = (todolistId: string, title: string) => {
    const newTask: TaskType = { id: v1(), title: title, isDone: false };
    const newState: TasksState = {
      ...tasks,
      [todolistId]: [newTask, ...tasks[todolistId]],
    };
    setTasks(newState);
  };

  const changeStatus = (
    todolistId: string,
    taskId: string,
    isDone: boolean
  ) => {
    const newState: TasksState = {
      ...tasks,
      [todolistId]: tasks[todolistId].map((t) =>
        t.id === taskId ? { ...t, isDone } : t
      ),
    };
    setTasks(newState);
  };

  const changeFilter = (todolistId: string, value: FilterValuesType) => {
    const nextState: TodolistsType[] = todolists.map((tl) =>
      tl.id === todolistId ? { ...tl, filter: value } : tl
    );
    setTodolists(nextState);
  };

  const todolistItem = todolists.map((tl) => {
    let tasksForTodolist = tasks[tl.id];

    if (tl.filter === "active") {
      tasksForTodolist = tasksForTodolist.filter((t) => t.isDone === false);
    }
    if (tl.filter === "completed") {
      tasksForTodolist = tasksForTodolist.filter((t) => t.isDone === true);
    }

    return (
      <Todolist
        key={tl.id}
        title={tl.title}
        tasks={tasksForTodolist}
        todolistId={tl.id}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        changeTaskStatus={changeStatus}
        filter={tl.filter}
      />
    );
  });

  return <div className="AssociativeArray">{todolistItem}</div>;
};
