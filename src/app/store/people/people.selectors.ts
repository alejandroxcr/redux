import { PeopleState } from "./people.reducers";
import { IPerson } from "./people.model";
import { createSelector } from "@ngrx/store";

const selectPeople = (state: PeopleState) => state.people;
const men = (people: IPerson[]) => people.filter(p => p.gender === "male");
const selectHeights = (people: IPerson[]) => people.map(p => +p.height);
const selectMass = (people: IPerson[]) => people.map(p => +p.mass);
const sum = (people: number[]) =>
  people.reduce((prev: number, current: number) => (prev += current));

const round = (x: number) => +x.toFixed(2);

const countMen = (s: PeopleState) => men(selectPeople(s)).length;
const avg = (s: PeopleState) =>
  round(sum(selectHeights(men(selectPeople(s)))) / countMen(s));

const avgMass = (s: PeopleState) =>
  round(sum(selectMass(men(selectPeople(s)))) / countMen(s));

// Select men
export const selectMen = createSelector(selectPeople, (people: IPerson[]) =>
  people.filter(p => p.gender === "male")
);

// Heights average
export const menHeightsAvg = createSelector(avg, (s: number) => s);

// Mass average
export const menMassAvg = createSelector(avgMass, (s: number) => s);
