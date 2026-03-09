// stringParser.js
function stringPermutations(str) {
    if (str.length === 1) return [str];
    
    const result = [];
    
    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        const remainingChars = str.slice(0, i) + str.slice(i + 1);
        const remainingPerms = stringPermutations(remainingChars);
        
        for (const perm of remainingPerms) {
            result.push(currentChar + perm);
        }
    }

    return [...new Set(result)].sort();
}
console.log(stringPermutations("abc"));