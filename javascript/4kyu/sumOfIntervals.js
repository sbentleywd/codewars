// Sum of intervals - 4Kyu

// Initial working version - all tests passed
/*
function sumIntervals(intervals){
  // sort intervals array by lower number
  function sortArray(array){
    return array.sort((a,b)=> {
      return a[0] < b[0] ? -1 : 1;
    })
  }
  const sortedIntervals = sortArray(intervals);

  let accumulator = 0;
  let upperBound = 0;
  // iterate over sorted array
  for (let i = 0; i < sortedIntervals.length; i++ ) {
    const current = sortedIntervals[i];
    // for first iteration add interval to accumulator
    if(i===0) {
      accumulator += current[1] - current[0];
      upperBound = current[1];
      continue;
    }

    
    if(current[0] < upperBound) {
      if(current[1] < upperBound) {
        continue
      } else {
        accumulator += current[1] - upperBound;
        upperBound = current[1];
      }
      
    } else {
      accumulator += current[1] - current[0];
      upperBound = current[1];
    }

    
    
  }

  return accumulator;

}
*/
// Refactored version

function sumIntervals(intervals) {
	// sort intervals array by lower number
	function sortArray(array) {
		return array.sort((a, b) => {
			return a[0] < b[0] ? -1 : 1;
		});
	}
	const sortedIntervals = sortArray(intervals);
	// initialise accumulator to interval of first array
	let accumulator = sortedIntervals[0][1] - sortedIntervals[0][0];
	let upperBound = sortedIntervals[0][1];

	// iterate over remaining arrays
	for (let i = 1; i < sortedIntervals.length; i++) {
		const current = sortedIntervals[i];
		// if highest value in array less than upper bound then ignore
		if (current[1] < upperBound) {
			continue;
		}

		accumulator += current[1] - Math.max(upperBound, current[0]);
		upperBound = current[1];
	}
	return accumulator;
}

console.log(
	sumIntervals([
		[1, 2],
		[6, 10],
		[11, 15],
	])
); // > 9
console.log(
	sumIntervals([
		[1, 5],
		[10, 20],
		[1, 6],
		[16, 19],
		[5, 11],
	])
); // > 19
