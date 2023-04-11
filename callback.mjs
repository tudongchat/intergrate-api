import http from 'node:http'
import crypto from 'node:crypto'

const chatboxToken = 'your-chatbox-token'
const hmac = (content) => crypto.createHmac('sha256', chatboxToken).update(content).digest('hex')

const compare = (a, b) => {
  if (!a || !b || a.length !== b.length) return false

  return crypto.timingSafeEqual(
    Buffer.from(a),
    Buffer.from(b)
  )
}

const server = http.createServer(async (req, res) => {
  const buffer = []

  for await (const chunk of req) {
    buffer.push(chunk)
  }

  const body = Buffer.concat(buffer).toString()

  const signature = req.headers['x-signature']
  const signed = hmac(body)

  if (compare(signature, signed)) {
    console.log('Verified')
  } else {
    console.table({ signature, signed, message: 'Not Verified' })
  }

  console.log(body)

  res.end(body)
})

server.listen(8000, () => {
  console.log('Server listening on port 8000')
})
