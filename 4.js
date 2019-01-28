var a=10;
var b=20;
var c=a;
a=b;
b=c;
console.log(a,b);

var d=10;
var e=20;
d=d+e;
e=d-e;
d=d-e;
console.log(d,e);

var f=10;
var g=20;
[f,g]=[g,f];
console.log(f,g);
