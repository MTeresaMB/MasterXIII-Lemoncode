console.log("****** EXCERCISE 14 - Values ******");

// Basic
const serieTv = {
  name: 'X-files',
  year: 1994,
  seasons: 11
};

const showValues = (serieTv) => Object.values(serieTv);

console.log(showValues(serieTv));