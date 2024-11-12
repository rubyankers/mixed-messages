//message components

const timeSpent = [2, 5, 10, 15, 20, 30, 60];
const learningType = ["reading", "watching a video", "Googling information", "learning silly facts about"];
const topic = ["sharks", "tigers", "snails", "frogs", "otters", "tea pots", "forks", "clocks", "washing machines", "electric cars", "Hawaii", "Japan", "Finland", "Zimbabwe", "New Zealand", "running", "swimming", "trains", "coffee"];

//randomly selecting the elements 

const randomSentence = (arr1, arr2, arr3) => {
    let i = [Math.floor(Math.random()*arr1.length)];
    let j = [Math.floor(Math.random()*arr2.length)];
    let b = [Math.floor(Math.random()*arr3.length)];

    return `You should spend ${arr1[i]} minutes ${arr2[j]} about ${arr3[b]}.`;
}
console.log(randomSentence(timeSpent, learningType, topic));

