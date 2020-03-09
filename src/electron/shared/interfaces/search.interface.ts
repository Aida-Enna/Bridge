/**
 * Represents a user's song search query.
 */
export interface SongSearch {
  query: string
  type: SearchType
}

/**
 * The list of possible search categories.
 */
export enum SearchType {
  'Any', 'Name', 'Artist', 'Album', 'Genre', 'Year', 'Charter'
}

/**
 * Represents a single song search result.
 */
export interface SongResult {
  id: number
  name: string
  artist: string
  album: string
  genre: string
  year: string
}