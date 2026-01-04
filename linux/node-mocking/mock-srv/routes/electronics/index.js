'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return [
      {id: 'A1', name: 'Пылесос', rrp: '99.99', info: 'Худший пылесос в мире.'},
      {id: 'A2', name: 'Воздуходувка', rrp: '303.33', info: 'Этот продукт вас поразит.'}
    ]
  })
}