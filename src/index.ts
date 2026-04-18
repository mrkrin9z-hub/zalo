import { Hono } from 'hono'

const app = new Hono()

app.get('/health', (c) => c.json({ status: 'ok' }))

app.post('/zalo', async (c) => {
  const body = await c.req.json()
  console.log('ZALO WEBHOOK:', body)

  return c.json({ success: true })
})

const port = Number(process.env.PORT) || 8080

export default {
  port,
  fetch: app.fetch
}
