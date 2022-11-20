const sum = (number1, number2, callback) => { //this sum variable is a function that takes three arguments
                                              //the last argument here is going to be used as callback function
                                              //where it calls the add variable that has the expression of adding the 
                                              //numbers
    setTimeout(() => {
        const add = number1 + number2;

        callback(add)
    },2000)
}

sum(3,2, (sum) => {
    console.log(sum)
})