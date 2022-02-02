// // let string = "word";
// // let number = 1;
// // let  bool = false


// let myarray = ["one", "two","three", "four"];
// console.log(myarray)
// myarray.push("5")
// for(let i =0; i < myarray.length; i++){
// console.log(myarray[i]);
// }

// let balance = 100;

// const myFunc =(num) =>{
//     return balance 
//     console.log(num.balance)
// }


// let rosie = {
//     _name: "Rosie",
//     _thirst: 50,
//     _isWiggling: false,
//     _isHopping: false,
//     get name() {
//         return this._name;
//     },
//     get drink() {
//         this._thirst -= 10;
//         return this._thirst; 
//     }
// }

// console.log(rosie.name);
// console.log(rosie.drink);


// class Car{
//     constructor(reg){
//     this._reg = reg; 
//     this._hours = 0; 
//     this._charge = 0.00;
//     }
//     get regnum(){
//     return this._regnum; 
//     }
//     get hours(){
//     return this._hours;
//     }
//     get charge(){
//     return this._charge; 
//     }
//     increaseHours(){ 
//     this._hours++;
//     this._charge += 1.50;
//     }
//     membersOfStaff() {
//     this._hours++;
//     this._charge += 0.0;
    
       
// }
// }
// const pay = (reg, hr) =>{
//     const car = new Car (reg);
//     for (i = 0; i <hr; i ++){
//         car.increaseHours();

//     }
//     return `You need to pay £${car.charge} for ${car.hours} hours.`; 
// }
// console.log(pay("", 5)); 




// class Enemy{
// constructor(name,health){
//     this._name =name;
//     this._health = health;
//     this._weapons= weapons["sword","bow"];
// }
//  get name(){
//      return this._name;
//     }
//     get health(){
//         return this._health;
//     }
//     get weapons(){
//         return this._weapons;
//     }
//     reducHealth(amount){
//         return this._weapons -= amount;

//     }
// }

// const ememy1 = new Enemy("badguy",1000);
// console.log(ememy1.health)



// class Cars {
//     constructor(reg, arrival, hourlyCost) {
//         this._reg = reg;
//         this._arrival = arrival;
//         this._hourlyCost = hourlyCost;
//         this._hasPaid = false;
//     }
//     get hasPaid() {
//         return this._hasPaid;
//     }
//     getDeparture(departure) {
//         this._departureTime = departure;
//     }
//     calculateCost() {
//         return (this._departureTime - this._arrival) * this._hourlyCost;
//     }
//     membersOfStaff(){
//     this._hasPaid == membersOfStaff;
     
     
//     }
//       makePayment(amountPaid) {
//         if (amountPaid >= this.calculateCost()) {
//             this._hasPaid = true;
//             return `Parking has been paid`;
//         } else {
//             return `Parking has not been paid`;
       
            
//         }
//     }
// }

// const AA11A1 = new Cars("AA11A1", 2, 1.50);
// // enters tickets, departure time is captured
// AA11A1.getDeparture(11);
// // read cost out to user
//  console.log(AA11A1.calculateCost());
// console.log(AA11A1.hasPaid);
// console.log(AA11A1.makePayment(13.5));
// console.log(AA11A1.hasPaid);

// console.log(AA11A1);
 
// let array = ["_reg", "_arrival", "_hourlyCost", "_hasPaid", "_departureTime"];

// for (let i = 0; i < array.length; i++) {
//     console.log(AA11A1[array[i]]);
// }





class Car{
    constructor(regnum){
    this._regnum = regnum; 
    this._hours = 0; 
    this._charge = 0.00;
    }
    get regnum(){
    return this._regnum; 
    }
    get hours(){
    return this._hours;
    }
    get charge(){
    return this._charge; 
    }
    increaseHours(){ 
    this._hours++;
    this._charge += 1.50; 
    }
    staffMember(){
    this._hours ++;
    this._charge =" 0.00 staff discount"
    
    

    
     
    }
   }
   const pay = (reg, hr) => {
    const car = new Car(reg);
    for (i = 0; i < hr; i++){
    car.staffMember(); 
    }
    return `You need to pay £${car.charge} for ${car.hours} hours.`; 
   }
   console.log(pay("M7 CAR", 5)); 





// class Animal{
//     constructor(name){
//         this._name= name;
//         this._hunger =100;
//         this._thirst =100;
//     }
//     get name(){
//         return this.name;
//     }
//     get hunger(){
//      return this._hunger;
//     }
//     get thirst(){
//         return this.hunger;
//     }
//     eat(){
//         this._hunger;
//     }
//     drink(){
//         this._thirst;
//     }
// }
// class Bunny extends Animal {
//     constructor(name, lovesCarrot){
//     super(name);
//     this._lovesCarrot = lovesCarrot;
//     }
//     get lovesCarrots(){
//     return this._lovesCarrot;
//     }
//    }
//    const rosie = new Bunny("Rosie", true);


//    console.log(rosie)
   