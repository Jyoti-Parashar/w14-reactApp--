import { Todo } from "../../src/types";

export const defaultTodos: Todo[] = [
  {
    id: 1,
    title: "Learn React",
    completed: true,
    lastUpdated: new Date()
  },
  {
    id: 2,
    title: "Build a project",
    completed: false,
    lastUpdated: new Date()
  },
  {
    id: 3,
    title: "Write documentation",
    completed: true,
    lastUpdated: new Date()
  },
  {
    id: 4,
    title: "Test functionality",
    completed: false,
    lastUpdated: new Date()
  },
  {
    id: 5,
    title: "Fix bugs",
    completed: true,
    lastUpdated: new Date()
  },
  {
    id: 6,
    title: "Deploy to production",
    completed: false,
    lastUpdated: new Date()
  },
];