/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} dateToCheck
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(dateToCheck: Date | string): number {
  const isLeapYear = (year: number): boolean =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  const convertDate = (date: Date | string): Date => {
    if (typeof date === 'string') {
      const [day, month, year] = date.split('.');
      const formattedDate = `${year}-${month}-${day}`;

      return new Date(formattedDate);
    }
    // 2023-11-21T22:00:00.000Z default js date format
    return date;
  };

  let targetYear: number = convertDate(dateToCheck).getFullYear();

  while (!isLeapYear(targetYear)) {
    targetYear += 1;
  }

  const timeDifference =
    new Date(`${targetYear}-01-01`).getTime() - convertDate(dateToCheck).getTime();

  return Math.floor(timeDifference / (1000 * 3600 * 24));
};
