export type TaskStatus = "not-member" | "member";

export type Task = {
  id: string;
  status?: TaskStatus;
  name: string;
  isMember: boolean;
};

export type Column = {
  id: TaskStatus;
  title: string;
  isMember: boolean;
};
