// Q1-------------------------------
// ---------solution-----------------
var grandTotal=0;
var itemsArray=[
    {
        name:"juice",
        price:50,
        quantity:3,
        totalPrice:function () {
           return this.price*this.quantity
        }
    },
    {
        name:"cookie",
        price:30,
        quantity:9,
        totalPrice:function () {
            return this.price*this.quantity
         }
    },
    {
        name:"shirt",
        price:880,
        quantity:1,
        totalPrice:function () {
            return this.price*this.quantity
         }
    }
    ,{
        name:"pen",
        price:100,
        quantity:2,
        totalPrice:function () {
            return this.price*this.quantity
         }
    }
    
]

for(var i=0;i<itemsArray.length;i++)
{
    console.log("total price of ",itemsArray[i].name," is ",itemsArray[i].totalPrice());
    grandTotal+=itemsArray[i].totalPrice();
}
console.log("total of all items",grandTotal)
//Q2 --------------------------------
// solution---------------------
var personInfo={
    name:"Usama",
    age:21,
    email:"muhammadusama798i@gmai..com",
    password:"123abc",
    gender:"male",
    city:"karachi",
    country:"Pakistan",
}
console.log("age:","age" in personInfo)
console.log("country:","country" in personInfo)
console.log("firstName:","firstName" in personInfo)
console.log("lastName:","lastName" in personInfo)
// Q3----------------------------------
// soltion-------------
function personInfo(name,email,age,city,country) {
 this.Name= name;
 this.Email=email;
 this.Age=age;
 this.City=city;
 this.Country=country;
 }
 var person1=new personInfo("ali",
 "muhammadali78i@gmail.com",22,"lahore","pakistan");
 var person2=new personInfo("usman",
 "muhammadusman98i@gmail.com",41,"karachi","pakistan");
 var person3=new personInfo("adnan",
 "muhammadadnan798i@gmail.com",60,"peshwar","pakistan");
 var person4=new personInfo("kamran",
 "muhammadkamran798i@gmail.com",21,"quetta","pakistan");
 console.log(person1)
 console.log(person2)
 console.log(person3)
 console.log(person4)
// Q4----------------------------------------
// solution--------------------------------
function personDetails(name,gender,address,education,profession)
{

    this.Name=name;
    this.Gender=gender;
    this.Address=address;
    this.Education=education;
    this.Profession=profession;

}
function get()
{
    var name=prompt("enter your name");
    var gen;
    if(document.getElementById("g1").checked)
    {
         gen=document.getElementById("g1").value
    }
    else {
        gen=document.getElementById("g2").value

    }
    var education=document.getElementById("edu").value;
    var address=prompt("enter your address");
    var profession=prompt("enter your profession")
    var person=new personDetails(name,gen,address,education,profession);
    window.localStorage.setItem('person1', JSON.stringify(person));
    console.log(person)

}

document.write(window.localStorage.getItem('person1'));
