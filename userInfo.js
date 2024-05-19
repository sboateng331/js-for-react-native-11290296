const {processArray, formatArrayStrings} = require('./arrayManipulation')

function createUserProfiles(originalName, modifiedName){
    let userProfiles = []
    for(let i = 0; i < originalName.length; i++){
        userProfiles.push({
             originalName: originalName[i],
             modifiedName: modifiedName[i],
             id: i + 1
        })  
    }  
    return userProfiles
}

const originalNames = ["Josh","Bob","James"]
const numbers = [1,2,3]
const processedNumbers = processArray(numbers)
const modifiedName = formatArrayStrings(originalNames,processedNumbers)

const userProfiles = createUserProfiles(originalNames,modifiedName)
console.log(userProfiles)



