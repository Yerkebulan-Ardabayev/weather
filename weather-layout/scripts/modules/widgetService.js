import { fetchWeather, fetchWeatherForecast, getCity } from './ApiService.js';
import {
  renderWidgetToday,
  renderWidgetOther,
  renderWidgetForecast,
  showError,
} from './render.js';

export const startWidget = async (city, widget) => {
  if (!city) {
    const dataCity = await getCity();
    if (dataCity.success) {
      city = dataCity.city;
    } else {
      showError(widget, dataCity.error);
    }
  }

  if (!widget) {
    widget = document.createElement('div');
    widget.classList.add('widget');
  }

  const dataWeather = await fetchWeather(city);

  if (dataWeather.success) {
    renderWidgetToday(widget, dataWeather.data);
    renderWidgetOther(widget, dataWeather.data);
  } else {
    showError(widget, dataWeather.error);
  }

  const dataForecast = await fetchWeatherForecast(city);

  if (dataForecast.success) {
    renderWidgetForecast(widget, dataForecast.data);
  } else {
    showError(widget, dataForecast.error);
  }

  return widget;
};
