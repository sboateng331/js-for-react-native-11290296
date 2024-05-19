function processArray(numbers){
    let newArray = []
    for (let i = 0; i<numbers.length; i++){
        if(numbers[i] % 2 ===0){
           newArray.push(numbers[i]**2)
        }
        else{
            newArray.push(numbers[i]*3)
        }
    }
    return newArray
}


function formatArrayStrings(words,processedNumbers){
    let newArray = []
    for(let word = 0; word < words.length; word++){
        if(processedNumbers[word] % 2 === 0){
            newArray.push(words[word].toUpperCase())
        }
        else{
            newArray.push(words[word].toLowerCase())
        }
    }
    return newArray
}


module.exports = {
    processArray,
    formatArrayStrings

}