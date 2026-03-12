import express from 'express'
import { resolve } from 'path'
import { readFile, writeFile } from 'fs'
import http from 'http'

import api from './router/api.js'

const app = express()

// tell express to use the public directory as a staic directory
// so we can just serve files etc from there.
app.use('/public', express.static(resolve('/public')))

app.use('/api', api)

export default app