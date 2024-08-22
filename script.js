
/*alert("Hi");

var a =prompt("Enter the number")

switch (a){
    case 1 :
        console.log("This is One");
        case 2: 
          console.log("This is Two");
          case 3:
            console.log("This is Three");
            case 4:
                console.log("This is Four");
                case 5:
                    console.log("This is Five");

}

function add (a,b) {
  
    
    console.log(a+b);
}
console.log(add(36,38));





var a = (a,b) =>{
    console.log(a*b);
}

console.log(a(10,3));


var a = [10,20,30,40];

// Replace

a[1]=30;

console.log(a);

//Last Add

a.push(19);
console.log(a);

// Remove

a.pop();
console.log(a);

// First Add

a.unshift(47);
console.log(a);

//First Remove

a.shift()

console.log(a);








// Object


var b = {Name:"Shiyam",Age:"21",Gender:"Male",Nationality:"Indian"};


//Add
b.CGPA="8.1";

console.log(b);

//Delete

delete b.Name;

console.log(b);

//Update

b.Name="Ganapathy";


console.log(b);


var add = (a,b,c) =>{
    console.log(a+b+c);
}

var Sub = (a,b,c) =>{
    console.log(a-b-c);
}

var Mul = (a,b,c) =>{
    console.log(a*b*c);
}*/



/*


var name = prompt("Enter The Name");

var pin = prompt("Enter The Pin");

var pin1 = 1234;

var Balance = 0;

var Withdrawlamount = 0

var Addamount = 0;

if(pin == pin1){

    console.log("Welcome" + name);

    while(true){

        console.log("Press 1  Balance");

        console.log("Press 2  Addamount");

        console.log("Press 3  Withdrawlamount");

        console.log("Press 4  Print");

        console.log("Press 5  ThankYou");
    }

    var option = prompt("Enter The Option");

    switch(option){
        case 1:
            console.log(Balance);
            break;

            case 2:
                console.log(Balance + Addamount);
                break;

                case 3:

                console.log(Balance - Withdrawlamount);
                break;

                case 4:

                console.log(Balance,Addamount,Withdrawlamount);
                break;

                default:
                    console.log(print);
    }

    
    }*/
/* 
var form = document.getElementById("form");
var email = document.getElementById("inputEmail4");
var password = document.getElementById("inputPassword4");
var msg = document.getElementById("in3");

form.addEventListener({'submit e'})

if(email==""){
    document.getElementById("p41");
    email.focus();

}
*/

/*function validate(){
    if(document.myform.name.value==""){
        alert("Please Fill The Name");
        document.myform.name.focus() ;
        return false;
    }

    if(document.myform.email.value==""){
        alert("Please Fill The Email");
        document.myform.email.focus() ;
        return false;
    }

    if(document.myform.msg.value==""){
        alert("Please Fill The Email");
        document.myform.msg.focus() ;
        return false;
    }

    return(true);

}*/



function validate(){

    var name=document.myform.Name.value;  
    var password=document.myform.email.value;

    if (name==null || name==""){  
        alert("Name can't be blank");  
        return false;  
      }else if(email ==null || email ==""){  
        alert("Enter the Valid Email");  
        return false;  
        }  
      }  ;




