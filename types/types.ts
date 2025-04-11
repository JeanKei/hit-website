export interface Interaction {
  type: string;
  relation: string;
  triplets: string;
}

export interface Data {
  dataSource: string;
  nodes: string;
  triplets: string;
  dataRelease: string;
  interactions: Interaction[];
}
