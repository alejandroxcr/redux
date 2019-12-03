const remoteEndPoint = "https://swapi.co/api/";
export const environment = {
  production: true,
  getPeople: `${remoteEndPoint}people/?format=json`,
  getStarships: `${remoteEndPoint}starships/`
};

/**
 * Get starshipsUrl
 * @param starshipId
 */
export function starshipUrl(starshipId: number): string {
  return `${environment.getStarships}${starshipId}/?format=json`;
}
