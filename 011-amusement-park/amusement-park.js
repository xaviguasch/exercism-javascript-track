/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
function createVisitor(name, age, ticketId) {
  const visitor = {
    name,
    age,
    ticketId,
  }

  return visitor
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
function revokeTicket(visitor) {
  throw new Error('Please implement the revokeTicket function.')
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
function ticketStatus(tickets, ticketId) {
  throw new Error('Please implement the ticketStatus function.')
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
function simpleTicketStatus(tickets, ticketId) {
  throw new Error('Please implement the simpleTicketStatus function.')
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
function gtcVersion(visitor) {
  throw new Error('Please implement the gtcVersion function.')
}

// ==================
console.log(createVisitor('Verena Nardi', 45, 'H32AZ123'))
// ==================

// ==================
