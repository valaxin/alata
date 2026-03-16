export default async function hydrate (address, keys, dbName) {
  try {
    if (!address) {
      throw new Error('Missing address parameter.')
    }

    if (!keys) {
      throw new Error('Missing keys parrameter')
    }

    return 0
  } catch (error) {
    console.error(error)
    return 1
  }
}