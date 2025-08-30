// Node types for the organizational structure
export type NodeType = 'division' | 'department' | 'subDepartment' | 'subDepartment2';

export interface Node {
  id: string;
  type: NodeType;
  name: string;
  unitLeader?: string;
  children?: Node[];
}

// Form types
export interface FormValues {
  name: string;
  unitLeader: string;
}
