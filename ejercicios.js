
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