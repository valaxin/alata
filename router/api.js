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


// lives at /api/welcome
await router.get('/welcome', async (req, res, next) => {
  res.json({ message: 'Hello World!' })
})

export default router