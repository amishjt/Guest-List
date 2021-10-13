var Name_Of_The_guest_array=[];

function Submit(){
var Guest_name= document.getElementById("enter_name").value;
Name_Of_The_guest_array.push(Guest_name);
document.getElementById("Display_names").innerHTML= Name_Of_The_guest_array;
var lenght_of_the_array= Name_Of_The_guest_array.length;
console.log(lenght_of_the_array);
}

function Show_list(){
var i= Name_Of_The_guest_array.join(" <br> ");
console.log(Name_Of_The_guest_array);
document.getElementById("Show_name").innerHTML= i.toString();
} 

function sorting(){
Name_Of_The_guest_array.sort();
var i= Name_Of_The_guest_array.join(" <br> ");
console.log (Name_Of_The_guest_array);
document.getElementById("Show_name").innerHTML= i.toString(); 
}

function Search(){
var s= document.getElementById("search_name").value;
console.log(s)
var found= 0;
var j;
for(j=0; j<Name_Of_The_guest_array.length; j++){
    console.log(Name_Of_The_guest_array[j])
if(s==Name_Of_The_guest_array[j]) { 
found=found+1   
}
}
document.getElementById("Search_names").innerHTML= "Name Found "+found+" Time/s";
console.log("Name Found "+found+" Time/s");
}