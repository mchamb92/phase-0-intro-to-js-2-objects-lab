// Write your solution in this file!
const employee = {
    name: "Chambers",
    streetAddress: "1124 Glacier Blvd"
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    return Object.assign({},obj, {[key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    return Object.assign(obj, {[key]:value});
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee.[key]
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.[key];
    return employee;
}