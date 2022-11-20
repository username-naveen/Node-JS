// const triple = (x) => x+5 //short hand function that can be used for simple returns

// console.log(triple(6))

// const trip = (y) => { //long hand funtion for complex returns
//     return y+6
// }

// console.log(trip(6))

const triple = {
    name: "Naveen",
    ages: [20,30,40],
    printMyName: function () {
        console.log("this is your name: " + this.name)

        this.ages.forEach( (age) => {
            console.log(this.name + ' is ' + age)            
        });
    }
    // printMyName() {
    //     console.log("this is your name: " + this.name)

    //     this.ages.forEach( (age) => {
    //         console.log(this.name + ' is ' + age)            
    //     });
    // }
}

triple.printMyName()