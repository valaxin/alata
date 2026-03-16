
import hydrate from './modules/hydrate.js'

const baseAddress = 'https://api.open-meteo.com/v1/forecast'

// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m


const serializeQuery Parameters = async (base, obj) => {
  // todo: make into prettiter strings
}



hydrate(
  'no-address-boss',
  {
    key: 'weather',
    req: {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }
  }
)