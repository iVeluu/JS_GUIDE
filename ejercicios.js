
/**
 * Function to find the maximum value in an array of numbers.
 * 
 * @param { number[] }  arr - Array of numbers 
 * @returns { number } - The maximun value in the array 
 */
export  function maxValue( arr ) {

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

export function gruopByCurrency( arr ) {
    
    // Check if the array is empty 
    if( arr.length === 0) {
        return 0;
    }
    
    
    

} 



export function maxProfitAmazon( command, numbers, k ) {

    let result = 0;
    let i = 0;
    let n = numbers.length;

    while( i < n ) {
        let currentChar = command[i];
        let j = i;

        let profits = [];

        while( j < n && command[j] === currentChar) {
            profits.push(numbers[j])
            j++;
        }

        profits.sort((a, b) => b - a);

        for(let x = 0; x < Math.min(k, profits.length); x++) {
            result += profits[x];
        }

        i = j;
    }
    return result;

}


let cmd = "abbbaaabbz"
const pro = [1,4,2,10,3,5,6,7,8,9]
const k = 2

// 1 + 14 + 11 + 7 + 8 + 9 

console.log(maxProfitAmazon(cmd, pro, k))