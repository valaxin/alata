import { Router } from 'express'
import { readFile, writeFile } from 'fs'

const router = Router()

const text = await readFile('./example.txt',
  { encoding: 'utf-8' }, (error, text) => {
    if (error) {
      console.error(error)
      return 1
    }
    return text.split('\n').filter(n => n)
  }
)



// Available at /api/help
await router.get('/help', async (req, res, next) => {
  const routes = [ '/help', '/status' ]
  res.json({
    routes,
    base: '/api',
    message: "Welcome to the help endpoint for this API, there isn't much here I can assure you." 
  })
})

// /api/status
await router.get('/status', async (req, res, next) => {
  res.json({ route: '/api/status' })
})


export default router