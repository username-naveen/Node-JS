const addorSub = (a, b, c = true) => {
    c ? a.setDate(a.getDate() + b) : a.setDate(a.getDate() - b)
    console.log(a.getDate());
    return a;
}

const select = (date) => {
    let newdate = date + 1;
    if (newdate <= 9) {
        newdate = `0${newdate}`
    }
    return newdate;
}

const newe = addorSub(new Date(), 34, false);

console.log(newe.getDate());

console.log(new Date());

console.log(select(newe.getDate()))