import { Guid } from 'guid-typescript';

export interface IPerson {
  id: Guid;
  name: string;
  height: string;
  mass: string;
  gender: string;
}
