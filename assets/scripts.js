var topics = ["HTML", "CSS", "Git", "JavaScript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
function listTopiocs() {
for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
 }
}

function selectTopic() {
if (randomTopic === 'HTML') {
    console.log ("Let's study HTML!");
 }  else if (randomTopic === 'CSS') {
    console.log ("Let's study CSS!");
 }  else if (randomTopic === 'Git') {
    console.log ("Let's study Git!" );
 } else if (randomTopic === 'JavaScript'){
    console.log ("Let's syudy JavaScript!");
 }else{
    console.log ("please Try Again!");
 }
}
console.log('Here are the topics we learned throught Prework');
listTopiocs()
console.log('Which topic should we stuidy first?');
selectTopic()