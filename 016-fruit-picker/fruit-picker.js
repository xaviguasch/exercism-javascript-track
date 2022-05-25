/**
 * STORE STATUS API
 */

let storeStatus = 'OFFLINE'

/**
 * For testing purposes, set the store status
 * @param  {string} status
 */
function setStatus(status) {
  storeStatus = status
}

/**
 * For testing purposes, reset the store status
 */
function resetStatus() {
  storeStatus = 'OFFLINE'
}

/**
 * Invokes the callback with the store's status to simulate an API call
 * @param  {StatusCallback} callback
 */
function checkStatus(callback) {
  return callback(storeStatus)
}

/**
 * INVENTORY API
 */

let lastInventoryQuery = undefined
let inventoryResponse = undefined

/**
 * For testing purposes, set the response to return when queried
 * @param  {any} ...nextResponse
 */
function setResponse(...nextResponse) {
  inventoryResponse = nextResponse
}

/**
 * For testing purposes, get the last query
 * @return {string}
 */
function getLastQuery() {
  return lastInventoryQuery
}

/**
 * For testing purposes, reset the last query
 */
function resetQuery() {
  lastInventoryQuery = undefined
  inventoryResponse = ['undefined response']
}

/**
 * Checks the inventory (inventoryResponse) then invokes the callback with the result
 * @param  {GrocerQuery} query
 * @param  {InventoryCallback} callback
 * @return {AvailabilityAction} return the result of the callback
 */
function checkInventory(query, callback) {
  lastInventoryQuery = query
  return callback.apply(null, inventoryResponse)
}

// ========================================================================

/// <reference path="./global.d.ts" />
//
// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.

/**
 * Returns the service status as a boolean value
 * @return {boolean}
 */
function isServiceOnline() {
  throw new Error('Implement the isServiceOnline function')
}

/**
 * Pick a fruit using the checkInventory API
 *
 * @param {string} variety
 * @param {number} quantity
 * @param {InventoryCallback} callback
 * @return {AvailabilityAction} the result from checkInventory
 */
function pickFruit(variety, quantity, callback) {
  throw new Error('Implement the pickFruit function')
}

/**
 * This is a callback function to be passed to the checkInventory API
 * handles the next step once the inventory is known
 * @param {string | null} err
 * @param {boolean | undefined} isAvailable
 * @return {AvailabilityAction} whether the fruit was purchased 'PURCHASE' or 'NOOP'
 */
function purchaseInventoryIfAvailable(err, isAvailable) {
  throw new Error('Implement the purchaseInventoryIfAvailable function')
}

/**
 * Pick a fruit, and if it is available, purchase it
 *
 * @param {string} variety
 * @param {number} quantity
 * @return {AvailabilityAction} whether the fruit was purchased 'PURCHASE' or 'NOOP'
 */
function pickAndPurchaseFruit(variety, quantity) {
  throw new Error('Implement the pickAndPurchaseFruit function')
}
