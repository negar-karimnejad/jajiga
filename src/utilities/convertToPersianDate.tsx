import moment from 'jalali-moment';

function convertToPersianDate(isoDate: string | number | Date) {
  const jalaliDate = moment(isoDate, 'YYYY-MM-DDTHH:mm:ss.SSSSZ').locale('fa');
  return jalaliDate.format('D MMMM YYYY');
}

export default convertToPersianDate;
