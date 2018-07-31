//lesson 50
var person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {

        return this.firstName + ' ' + this.lastName;
    }
};
var person2 = {
    firstName: 'Jane',
    lastName: 'Doe',
    getFullName: function() {

        return this.lastName + ' ' + this.firstName;
    }
};
var logName = function(lang1, lang2) {

    console.log('logged: '+ this.getFullName());
    console.log(lang1 + ' ' + lang2);
    console.log('-----------------------');
};

logName.call(person2,'ita', 'snake');
logName.apply(person, ['janek', 'radial']);

var logSecName = logName.bind(person, 2);

logSecName('cow');

//lesson 51

var arr1 = [1,2,3];
console.log(arr1);

var arr2 = [];