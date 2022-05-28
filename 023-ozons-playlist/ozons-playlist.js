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
  const playlistSet = new Set(playlist)

  return playlistSet.has(track)
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
function addTrack(playlist, track) {
  const playlistSet = new Set(playlist)

  playlistSet.add(track)

  return Array.from(playlistSet)
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
function deleteTrack(playlist, track) {
  const playlistSet = new Set(playlist)

  playlistSet.delete(track)

  return Array.from(playlistSet)
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

// const playlist = [
//   'Court and Spark - Joni Mitchell',
//   'Big Yellow Taxi - Joni Mitchell',
//   'Court and Spark - Joni Mitchell',
// ]
// console.log(removeDuplicates(playlist))

// ==================
// 2 -

// const playlist = ['The Fashion Show - Grace Jones', 'Dr. Funkenstein - Parliament']

// console.log(hasTrack(playlist, 'Dr. Funkenstein - Parliament'))
// console.log(hasTrack(playlist, 'Walking in the Rain - Grace Jones'))

// ==================
// 3 -

// const playlist = ['Selma - Bijelo Dugme']

// console.log(addTrack(playlist, 'Atomic Dog - George Clinton'))
// console.log(addTrack(playlist, 'Selma - Bijelo Dugme'))

// ==================
// 4 -

const playlist = ['The Treasure - Fra Lippo Lippi', 'After the Fall - Klaus Nomi']

console.log(deleteTrack(playlist, 'The Treasure - Fra Lippo Lippi'))
console.log(deleteTrack(playlist, 'I Feel the Magic - Belinda Carlisle'))

// ==================
// 5 -

// ==================
