export default async function hydrate (address, options, dbName) {

  // purpose: request data from a remote source, store it locally 

  try {
    if (!address) {
      throw new Error('Missing address parameter.')
    }

    if (!options) {
      throw new Error('Missing keys parrameter')
    }

    const { key, req } = options

    const response = await fetch (address, { method: req.method, headers: req.headers })
    const json = await response.json()
    console.log(json)

    return 0
  } catch (error) {
    console.error(error)
    return 1
  }
}