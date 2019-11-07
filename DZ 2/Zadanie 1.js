var letters = [];
var words = "Backend As A Service".split(" ");
for ( var c = 0; c < words.length; c++ ) {
    letters.push( words[c] [0] );
}
console.log ( letters );

var a = letters.join('');
console.log (a);