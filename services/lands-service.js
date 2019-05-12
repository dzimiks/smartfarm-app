import axios from 'axios'
// import apiUrl from './api-url'

const landsService = {
  getReportsForLand,
  getAllLands,
  getLandDetails,
  getReportDetails,
  getWeather,
  kure
}

const POLYGON_ID = '5cd6eff7d86170001b090bce'
const APP_ID = 'c11c89ad50e72bd2654f0b7207ec6404'

const lands = [
  {
    id: 1,
    image: 'http://www.ekapija.com/thumbs/njiva_traktor_131216_tw630.jpg',
    name: 'Njiva 1'
  },
  {
    id: 2,
    image: 'http://www.politika.rs/upload/Article/Image/2017_08/njive.jpg',
    name: 'Njiva 2 prejaka bre'
  },
  {
    id: 3,
    image:
      'http://seebiz.eu:8080/upload/seebiz_eu/upload/sc_autogenerated_PART_3/article/ar_188163/poljoprivreda_soja_1468_0_0_468X10000.jpg',
    name: 'Najjaca njiva ikada'
  }
]

const reports = [
  { id: 1, name: 'report 1', status: 'pending', date: '11.5.2019' },
  { id: 2, name: 'report 2', status: 'healthy', date: '8.5.2019' },
  { id: 3, name: 'report 3', status: 'diseased', date: '4.5.2019' }
]

const land_reports = [
  { landID: 1, reports: [1, 2] },
  { landID: 2, reports: [2, 3] },
  { landID: 3, reports: [3] }
]

function getReportsForLand (landID) {
  const reports = []
  land_reports
    .find(list => list.landID === landID)
    .reports.map(report => reports.push(getReportDetails(report)))
  return reports
  return axios.post(`${apiUrl}/users/register`, user)
}

function getAllLands (id) {
  return lands
  return axios.post(`${apiUrl}/users/register`, user)
}

function getLandDetails (landID) {
  const land = lands.find(land => land.id === landID)
  land.reports = getReportsForLand(landID)
  return land
  return axios.post(`${apiUrl}/users/register`, user)
}

function getReportDetails (reportID) {
  return reports.find(report => report.id === reportID)
  return axios.post(`${apiUrl}/users/register`, user)
}

function getWeather () {
  return axios.get(
    'https://samples.openweathermap.org/agro/1.0/weather/forecast?polyid=' +
      POLYGON_ID +
      '&appid=' +
      APP_ID
  )
}

async function kure () {
  // TODO
  // Thursday, April 11, 2019 4:19:31 PM GMT+02:00 DST
  const START_TIME = '1554992371'
  // Saturday, May 11, 2019 4:19:31 PM GMT+02:00 DST
  const END_TIME = '1557584371'
  const THRESHOLD = '184'
  console.log('EVCO kure')

  // TODO
  // Current weather data by polygon
  // The Weather data update depends on a type of your account
  const WEATHER_URL =
    'https://samples.openweathermap.org/agro/1.0/weather?polyid=' +
    POLYGON_ID +
    '&appid=' +
    APP_ID
  console.log('WEATHER_URL', WEATHER_URL)
  let res = await axios.get(WEATHER_URL)
  console.log('WEATHER_URL', JSON.stringify(res.data))
  // Forecast weather data by polygon
  // 5-day forecast includes weather data every 3 hours
  const WEATHER_FORECAST_URL =
    'https://samples.openweathermap.org/agro/1.0/weather/forecast?polyid=' +
    POLYGON_ID +
    '&appid=' +
    APP_ID
  res = await axios.get(WEATHER_FORECAST_URL)
  console.log('WEATHER_FORECAST_URL', JSON.stringify(res.data))
  // Historical weather data by polygon
  // Historical weather data archive has a 1-hour step
  const WEATHER_HISTORICAL_URL =
    'https://samples.openweathermap.org/agro/1.0/weather/history?polyid=' +
    POLYGON_ID +
    '&start=' +
    START_TIME +
    '&end=' +
    END_TIME +
    '&&appid=' +
    APP_ID
  res = await axios.get(WEATHER_HISTORICAL_URL)
  console.log('WEATHER_HISTORICAL_URL', JSON.stringify(res.data))

  // Detailed historical data for analysis and comparison vegetation of one season to another
  // NDVI is calculated based on a combination of imageries from Landsat, Sentinel and MODIS with daily updating
  // NDVI (Normalized Difference Vegetation Index), EVI (Enhanced Vegetation Index)
  // are the most common indicators for assessing vegetation progress over time
  const NDVI_HISTORY_URL =
    'https://samples.agromonitoring.com/agro/1.0/ndvi/history?polyid=' +
    POLYGON_ID +
    '&start=' +
    START_TIME +
    '&end=' +
    END_TIME +
    '&appid=' +
    APP_ID
  res = await axios.get(NDVI_HISTORY_URL)
  console.log('NDVI_HISTORY_URL', JSON.stringify(res.data))
  // Accumulated temperature by polygon
  const ACCUMULATED_TEMPERATURE_URL =
    'https://samples.openweathermap.org/agro/1.0/weather/history/accumulated_temperature?polyid=' +
    POLYGON_ID +
    '&threshold=' +
    THRESHOLD +
    '&start=' +
    START_TIME +
    '&end=' +
    END_TIME +
    '&appid=' +
    APP_ID
  res = await axios.get(ACCUMULATED_TEMPERATURE_URL)
  console.log('ACCUMULATED_TEMPERATURE_URL', JSON.stringify(res.data))
  // Accumulated precipitation by polygon
  const ACCUMULATED_PRECIPITATION_URL =
    'https://samples.openweathermap.org/agro/1.0/weather/history/accumulated_precipitation?polyid=' +
    POLYGON_ID +
    '&start=' +
    START_TIME +
    '&end=' +
    END_TIME +
    '&appid=' +
    APP_ID
  res = await axios.get(ACCUMULATED_PRECIPITATION_URL)
  console.log('ACCUMULATED_PRECIPITATION_URL', JSON.stringify(res.data))
  // Current soil data by polygon
  // Current soil data is updated 2 times a day. The soil temperature is provided only in Kelvins
  const SOIL_DATA_URL =
    'https://samples.openweathermap.org/agro/1.0/soil?polyid=' +
    POLYGON_ID +
    '&appid=' +
    APP_ID
  res = await axios.get(SOIL_DATA_URL)
  console.log('SOIL_DATA_URL', JSON.stringify(res.data))
  // Historical soil data by polygon
  // Soil data collection is two times a day with a 12-hour period. Soil historical data available from February 2018
  const SOIL_HISTORY_URL =
    'https://samples.openweathermap.org/agro/1.0/soil/history?polyid=' +
    POLYGON_ID +
    '&start=' +
    START_TIME +
    '&end=' +
    END_TIME +
    '&appid=' +
    APP_ID
  res = await axios.get(SOIL_HISTORY_URL)
  console.log('SOIL_HISTORY_URL', JSON.stringify(res.data))
  // Current UVI data by polygon
  const UVI_DATA_URL =
    'https://samples.openweathermap.org/agro/1.0/uvi?polyid=' +
    POLYGON_ID +
    '&appid=' +
    APP_ID
  res = await axios.get(UVI_DATA_URL)
  console.log('UVI_DATA_URL', JSON.stringify(res.data))
  // Forecast UVI data by polygon
  const UVI_FORECAST_URL =
    'https://samples.openweathermap.org/agro/1.0/uvi/forecast?polyid=' +
    POLYGON_ID +
    '&appid=' +
    APP_ID
  res = await axios.get(UVI_FORECAST_URL)
  console.log('UVI_FORECAST_URL', JSON.stringify(res.data))
  // Historical UVI data by polygon
  const UVI_HISTORICAL_URL =
    'https://samples.openweathermap.org/agro/1.0/uvi/history?polyid=' +
    POLYGON_ID +
    '&start=' +
    START_TIME +
    '&end=' +
    END_TIME +
    '&appid=' +
    APP_ID
  res = await axios.get(UVI_HISTORICAL_URL)
  console.log('UVI_HISTORICAL_URL', JSON.stringify(res.data))
  // Get info for one polygon
  const POLYGON_INFO_URL =
    'https://samples.openweathermap.org/agro/1.0/polygons/' +
    POLYGON_ID +
    '?appid=' +
    APP_ID
  res = await axios.get(POLYGON_INFO_URL)
  console.log('POLYGON_INFO_URL', JSON.stringify(res.data))
}

export default landsService