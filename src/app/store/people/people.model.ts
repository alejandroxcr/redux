import { Guid } from "guid-typescript";

export interface IPerson {
  id: Guid;
  name: string;
  height: string;
  mass: string;
  gender: string;
  starships: string[];
}

export interface IStarShip {
  name: string;
  model: string;
  manufacturer: string;
  starshipClass: string;
}
