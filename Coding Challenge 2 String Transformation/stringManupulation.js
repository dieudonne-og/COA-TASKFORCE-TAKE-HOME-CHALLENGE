function transformString(input) {
    const length = input.length;
    const reverseString = (str) => str.split('').reverse().join('');
    const replaceWithASCII = (str) => {
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    };
    if (length % 15 === 0) {
        return replaceWithASCII(reverseString(input));
    } else if (length % 3 === 0) {
        return reverseString(input);
    } else if (length % 5 === 0) {
        return replaceWithASCII(input);
    }
    return input;
}

console.log(transformString("Hamburger"));
console.log(transformString("Pizza")); 
console.log(transformString("Chocolate Chip Cookie")); 


