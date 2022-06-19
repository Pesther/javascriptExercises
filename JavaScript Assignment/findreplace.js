function findAndReplace("How are you?", "you?", "we?"){

    if ("How are you?".includes("you?")) {
        let replacedString = "How are you?".replace("you?", "we?");

console.log(replacedString);
    } else {
        return console.log("Test does not exist");
    }
}