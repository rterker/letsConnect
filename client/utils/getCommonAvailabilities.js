//elements in the availabilities arrays must be of the same type to ensure proper counting
//potetial dates is an array 
//potetial dates has at least 1 object 
//potential dates availabilities may be empty arrays
//returns an array

function getCommonAvailabilities(potentialDates, participants) {
  if (potentialDates.length < 2) return [];

  const arrayOfAvailabilityArrays = [];

  potentialDates.forEach(({ userName, availabilities }) => {
    arrayOfAvailabilityArrays.push(availabilities);
  });
  const numArrs = arrayOfAvailabilityArrays.length;
  const numParticipants = participants.length;
  const firstEl = arrayOfAvailabilityArrays[0];
  const rest = arrayOfAvailabilityArrays.slice(1);

  const countMap = new Map();
  for (const el of firstEl) {
    countMap.set(el, 1);
  }

  for (const arr of rest) {
    for (const el of arr) {
      if (countMap.has(el)) countMap.set(el, countMap.get(el) + 1);
    }
  }

  const common = [];

  // countMap.forEach((val, key) => {
  //   if (val === numArrs) common.push(key);
  // });
  countMap.forEach((val, key) => {
    if (val === numParticipants) common.push(key);
  });

  return common;

}

export default getCommonAvailabilities;

