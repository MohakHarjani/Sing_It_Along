export const validate = function(input){
    if (input){
    let words = input.split(' ');
    let validated = "";
    for (let word of words){
        validated = validated + word[0].toUpperCase() + word.substring(1) + " ";
    }
    return validated;
}}