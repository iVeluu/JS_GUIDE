
/**
 * Function to find the maximum value in an array of numbers.
 * 
 * @param { number[] }  arr - Array of numbers 
 * @returns { number } - The maximun value in the array 
 */
export default function maxValue( arr ) {

    // Check if the array is empty 
    if( arr.length === 0) {
        return 0;
    }

    let max = Number.NEGATIVE_INFINITY; // Initialize max to the smallest possible number

    // Iterate through the array to find de maximun value 
    for ( let number of arr ) {
        // Check if the current number is greater than max
        if( number > max ) {
            max = number; // Update max if the current number is greater than max
        }
    }
    
    return max; // Return the maximum value found in the array 
}

export function gruopByCurrency(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return 0;
  }

  // Create an object to group the items by currency
  const grouped = arr.reduce((acc, item) => {
    // Check if the currency already exist in the accumulator object
    if (!acc[item.currency]) {
      acc[item.currency] = []; // If not, create an empty object for that currency
    }
    acc[item.currency].push(item); // Add the item to the corresponding currency group

    return acc; // Return the acculator object
  }, {}); // Inialize the accumulator as an empty object

  return grouped;
}