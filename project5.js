const prompt = require("prompt-sync")()
const fs = require("fs") // helps to load files
const { get } = require("http")

function loadQuestions() {
    try{
        const data = fs.readFileSync("questions.json", "utf8")
        const questions = JSON.parse(data).questions // converts JSON to JavaScript object
        return questions
    }
    catch (e) {
        console.log("Error occured in loading file")
        return []
    }
}

function getRandomQuestions(questions, numQuestions) {
    if (numQuestions > questions.length) {
        numQuestions = questions.length
    }

    const shuffle = questions.sort((a, b) => { // if we return a +ve number then that means a > b and -ve means the other way around
        return 0.5 - Math.random() // this randomly sorts the value
    })

    return shuffle.slice(0, numQuestions) // Slices the questions array 
}

function askQuestion(question){
    console.log(question.question)
    for (let i = 0; i < question.options.length; i++) {
        const option = question.options[i]
        console.log(`${i + 1}. ${option}`)
    }
    const choice = parseInt(prompt("Enter option: "))
    if (isNaN(choice) || choice < 1 || choice > question.options.length) {
        console.log("Invalid Option")
        return false
    }
    const choiceValue = question.options[choice-1]
    return choiceValue == question.answer
}

const numQuestions = parseInt(prompt("Enter the number of questions: "))
const questions = loadQuestions()
const randomQuestions = getRandomQuestions(questions, numQuestions)

let correct = 0;
const startTime = Date.now()

for(let question of randomQuestions) {
    const isCorrect = askQuestion(question)
    console.log()
    if (isCorrect) correct++
}

const totalTime = Date.now() - startTime
console.log("Correct:",correct)
console.log("Time:",Math.round(totalTime/1000), "s")
console.log("Score:", Math.round((correct/ numQuestions) * 100)+" %") // round the percentage