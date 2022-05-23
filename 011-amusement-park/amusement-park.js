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
  visitor['ticketId'] = null

  return visitor
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
function ticketStatus(tickets, ticketId) {
  if (tickets[ticketId] === null) {
    return 'not sold'
  } else if (tickets[ticketId] === undefined) {
    return 'unknown ticket id'
  } else {
    return `sold to ${tickets[ticketId]}`
  }
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
  if (tickets[ticketId] === null || tickets[ticketId] === undefined) {
    return 'invalid ticket !!!'
  } else {
    return `${tickets[ticketId]}`
  }
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
function gtcVersion(visitor) {
  return visitor.gtc?.version
}

// ==================
// console.log(createVisitor('Verena Nardi', 45, 'H32AZ123'))
// ==================
// const visitor = {
//   name: 'Verena Nardi',
//   age: 45,
//   ticketId: 'H32AZ123',
// }
// console.log(revokeTicket(visitor))
// ==================
// const tickets = {
//   '0H2AZ123': null,
//   '23LA9T41': 'Verena Nardi',
// }

// console.log(ticketStatus(tickets, 'RE90VAW7'))
// console.log(ticketStatus(tickets, '0H2AZ123'))
// console.log(ticketStatus(tickets, '23LA9T41'))
// ==================
// const tickets = {
//   '0H2AZ123': null,
//   '23LA9T41': 'Verena Nardi',
// }

// console.log(simpleTicketStatus(tickets, '23LA9T41'))
// console.log(simpleTicketStatus(tickets, '0H2AZ123'))
// console.log(simpleTicketStatus(tickets, 'RE90VAW7'))
// ==================
const visitorNew = {
  name: 'Verena Nardi',
  age: 45,
  ticketId: 'H32AZ123',
  gtc: {
    signed: true,
    version: '2.1',
  },
}

console.log(gtcVersion(visitorNew))

const visitorOld = {
  name: 'Verena Nardi',
  age: 45,
  ticketId: 'H32AZ123',
}

console.log(gtcVersion(visitorOld))
// ==================
