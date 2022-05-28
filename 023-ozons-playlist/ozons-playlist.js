// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
function removeDuplicates(playlist) {
  const playlistSet = new Set(playlist)

  return Array.from(playlistSet)
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
function hasTrack(playlist, track) {
  throw new Error('Please implement the hasTrack function')
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
function addTrack(playlist, track) {
  throw new Error('Please implement the addTrack function')
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
function deleteTrack(playlist, track) {
  throw new Error('Please implement the deleteTrack function')
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
function listArtists(playlist) {
  throw new Error('Please implement the listArtists function')
}

// ==================
// 1 -
const playlist = [
  'Court and Spark - Joni Mitchell',
  'Big Yellow Taxi - Joni Mitchell',
  'Court and Spark - Joni Mitchell',
]
console.log(removeDuplicates(playlist))

// ==================
// 2 -

// ==================
// 3 -

// ==================
