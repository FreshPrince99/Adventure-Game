const prompt = require("prompt-sync")()
const name = prompt("What is your name? ")
console.log("Hello",name, "welcome to our game!")

const shouldWePlay = prompt("Do you want to play? ")

if (shouldWePlay.toLowerCase() === "yes") {
    // Game Logic
    const leftOrRight = prompt("You enter a maze. Do you turn left or right? ")
    if (leftOrRight == "left") {
        console.log("You go left and see a bridge...")
        const cross = prompt("Do you want to cross it? ")
        if (cross == "yes"){
            console.log("You cross the bridge and see an old hut with broken window panes.")
            const inside = prompt("Do you go inside? ")
            if (inside == "yes"){
                console.log("You go inside and see a magic potion")
                const drink = prompt("Do you drink it? ")
                if (drink == "yes") {
                    console.log("You drink it and die RIP")
                } else {
                    console.log("You dont drink the potion and spot a pile of treasuer behind. You win!")
                }
            } else {
                console.log("You wait on the bridge until it snaps and you die")
            }
        }
        else {
            console.log("You wait in the dark and spot a wild bear")
            const attack = prompt("Do you attack it? ")
            console.log("The bear kills you and you die")
        }
    } else {
        console.log("You go right and fall off a cliff...")
    }


} else if (shouldWePlay.toLowerCase() === "no") {
    console.log("Aww that's sad to hear :(")
} else {
    console.log("Invalid Input...")
}