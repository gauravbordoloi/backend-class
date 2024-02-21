// Reverse words in a given string


var s = "i.like.this.program.very.much"

var s2 = s.split(".")

var s1 = ""
for (let i = s2.length-1; i >= 0; i--) {
    s1 += s2[i]  
    s1 += "."
}

console.log(s1)