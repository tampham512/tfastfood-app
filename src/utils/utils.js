export default class Util {
  static formatPrice = (priceInput, prefix = '', suffix = true) => {
    let price;
    if (suffix) {
      price = `${new Intl.NumberFormat('en', {})
        .format(priceInput)
        .replace(/, /g, ',')}`;
    } else {
      price = `${new Intl.NumberFormat('en', {})
        .format(priceInput)
        .replace(/, /g, ',')}`;
    }
    // return prefix + price;
    return price + prefix;
  };

  static format_date_time(date_time) {
    // const date_ = new Date()
    // console.log(date_) //2023-01-11T16:37:51.899Z
    const date = new Date(date_time);
    const dateOptions = {day: 'numeric', month: 'short', year: 'numeric'};
    const timeOptions = {hour: '2-digit', minute: '2-digit', hour12: false};
    const dateString = date.toLocaleDateString('en-US', dateOptions);
    const timeString = date.toLocaleTimeString('en-US', timeOptions);
    // console.log(`${dateString} ${timeString}`);
    // returns "1 Jan 2020 10:30 AM" for US English
    // const current_date = new Date();
    // console.log(current_date);
    // const other_date = new Date('2023-01-12 00:30');
    // console.log(other_date);
    // const differenceInMilliseconds = other_date - current_date;
    // const differenceInMinutes = differenceInMilliseconds / 60000;
    // console.log(differenceInMinutes);
    return `${dateString} ${timeString}`;
  }

  static difference_current_date_and_other_date(other_date) {
    const current_date = new Date();
    other_date = new Date(other_date);
    const differenceInMilliseconds = other_date - current_date;
    const differenceInMinutes = differenceInMilliseconds / 60000;
    return differenceInMinutes;
  }
}
//   "${new Intl.NumberFormat('en', {}).format(priceInput).replace(/, /g, ',')}";
//   "${new Intl.NumberFormat('en', {}).format(priceInput).replace(/, /g, ',')}";
