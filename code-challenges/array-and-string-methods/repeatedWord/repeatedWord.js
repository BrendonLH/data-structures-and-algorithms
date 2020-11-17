'use strict';

const story = 'it was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

// const story = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";


const repeatedWords = string => {
    const splitWords = string.split(/[\s,]+/);
    const repeated = [];
    console.log(splitWords);
    for(let i = 0; i <= splitWords.length; i++) {
        repeated.push(splitWords[i]);
        if(repeated.indexOf(repeated[i]) !== splitWords.lastIndexOf(splitWords[i])) {
            return repeated[i];
        }
    }

}

console.log(repeatedWords(story));
// did not modify original array
console.log(story);


 