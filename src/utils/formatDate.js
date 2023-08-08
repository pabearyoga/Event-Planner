import { format } from 'date-fns';

const formatDate = date => {
  const day = format(date, 'EEE');
  const month = date.getMonth() + 1;

  const formattedDay = day < 10 ? '0' + day : day;
  const formattedMonth = month < 10 ? '0' + month : month;

  return `${formattedDay}.${formattedMonth}`;
};

export default formatDate;
