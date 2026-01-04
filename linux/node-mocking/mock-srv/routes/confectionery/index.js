'use strict'

module.exports = async function (fastify , opts ) {
  fastify.get('/', async function (request, reply) {
    return [
      {id: 'B1', name: 'Шоколадный батончик', rrp: '22.40', info: 'Вкусный шоколад по завышенной цене.'}
    ]
  })
}