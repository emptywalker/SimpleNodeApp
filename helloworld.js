console.log("hello World");


function say(value) {
    console.log(value);
}
function execute(someFuncation, value) {
    someFuncation(value);
}
// execute(say, "SB");
execute(function (word) {
    console.log(word);
}, "are you sb?");