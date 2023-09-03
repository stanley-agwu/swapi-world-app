import moment from 'moment';

export const formatUTCDate = (date: string | undefined) =>
  date ? moment.utc(date).format('DD/MM/YYYY') : date;
