import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import { resolve } from 'path'
import { readFile, writeFile } from 'fs'
import http from 'http'

import api from './router/api.js'

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// tell express to use the public directory as a staic directory
// so we can just serve files etc from there.
app.use('/', express.static(resolve('public')))

app.use('/api', api)

export default app