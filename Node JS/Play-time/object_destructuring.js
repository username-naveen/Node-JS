/**
 * Object destructuring is using the properties of a JSON like value as 
 * a variable, and so we can assign it to a different name or do other such things 
 */

let object = {
    names: 'Naveen',
    age: 21,
    origin: 'India',
};

let {age, names} = object; //the {} ensure that are the properties of the assigned value, 
                            //IT SHOULD BE THE SAME NAME AS MENTIONED BEFORE ELSE IT RETURN UNDEFINED
console.log(age);
console.log(names);
console.log(object.origin);

let {origin:country} = object; //the text after the : now acts as that property, also we cannot 
                               //now use the origin as it is assigned to country
console.log(country);