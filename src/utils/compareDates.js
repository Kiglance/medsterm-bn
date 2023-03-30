// const compareDates = (date1, date2) => {
//   const parts1 = date1.split('-');
//   const parts2 = date2.split('-');

//   const d1 = new Date(parts1[2], parts1[1] - 1, parts1[0]);
//   const d2 = new Date(parts2[2], parts2[1] - 1, parts2[0]);

//   if (d1 >= d2) {
//     return false;
//   } else {
//     return true;
//   }
// };

// export default compareDates;
export const checkEquality = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  if (d1.getTime() === d2.getTime()) {
    return true;
  } else {
    return false;
  }
};

export const compareDates = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  if (d1.getTime() > d2.getTime()) {
    return false;
  } else {
    return true;
  }
};
