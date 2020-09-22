/**
 * @param {string[]} words
 * @return {number}
 */
const morseMap = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

const toMorse = (str) => str.split('').map(c => morseMap[c.charCodeAt() - 97]).join('');

const uniqueMorseRepresentations = (words) => new Set(words.map(w => toMorse(w))).size;    
