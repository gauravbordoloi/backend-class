/**
 * Timeouts
 * setTimeout - > Run the block after a given time
 * 
 */

console.log("Waiting for 2 seconds")

setTimeout(() => {
    console.log("2 second is over")
}, 2000);

console.log("Heyyyyyy")

function startStopWatch(i) {
    setTimeout(() => {
        console.log(i++)
        startStopWatch(i)
    }, 1000)
    //clearTimeout()
}

// var i = 1
// startStopWatch(i)

/**
 * interval
 * Runs the code block after every interval of given time
 */

var i = 1
var t1 = setInterval(() => {
    if (i === 10) {
        clearInterval(t1)
    }
    console.log("Second - " + i++)
}, 1000);

