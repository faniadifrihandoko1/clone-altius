export interface UserSelect {
  UserAccountId: number;
  EmployeeFullName: string;
}

export type ColumnType = "members" | "nonMembers";

export interface DragItem {
  UserAccountId: number;
  index: number;
  sourceType: ColumnType;
}

export interface SelectMembersProps {
  members: UserSelect[];
  nonMembers: UserSelect[];
  setMembers: (members: UserSelect[]) => void;
  setNonMembers: (members: UserSelect[]) => void;
}
