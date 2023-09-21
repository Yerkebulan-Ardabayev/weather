const addZero = (n) => n < 10 ? `0${n}` : n;


export const getCurrentDateTime = () => {
  const months = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
  ];

  const weekDays = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
  ];

  const date = new Date();
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const dayOfWeek = weekDays[date.getDay()];
  const hours = addZero(date.getHours());
  const minutes = addZero(date.getMinutes());
  
  return {dayOfMonth, month, year, hours, minutes, dayOfWeek};
};
