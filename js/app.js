function SellBoys(name, age, gender, lga) {
    this.name= name ;
    this.age= age;
    this.gender= gender ;
    this.lga= lga;
    this.clean= function clean() {
        alert("cleaning in progress")
        
    }

}

var sellBoy1 = new SellBoys( "edi" , 12, "male", "eket")
sellBoy1.clean()


// var sellBoy5 = new SellBoys( "nda" , 34, "male", ["enugu" , "eket" ])
// console.log(sellBoy5.lga)