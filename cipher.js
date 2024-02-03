function rot13(str) {

    var result = ""; //This serves as a collector for the loop
for (var i=0; i<str.length; i++) //Then a loop that iterates through each letter
{
var ascii = str[i].charCodeAt(); //Gets and stores the ASCII character code of the letter

if(ascii >= 65 && ascii <= 77)
 {
result += String.fromCharCode(ascii + 13)
}  //A conditional stating that if the code is between A=65 and M=77, it should shift the value 13 times to the right

else if (ascii >= 78 && ascii <= 90)
 {
result += String.fromCharCode(ascii - 13)
} //A conditional stating that if the code is between N=78 and Z=90, it should shift the value 13 times to the right

else {result += str[i]} //Then every other character[mostly non-numeric] as it is back to the result
}
return result;
}