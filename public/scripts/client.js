var myApp = angular.module('myApp', []);

myApp.controller('AngularActivity', function() {
  var vm = this;
  console.log('ng');

  vm.employees = [];

  vm.addEmployee = function () {
    console.log('in addEmployee');
    //get user input
    //plave in new object
    var newEmployee = {
      firstName: vm.firstNameIn,
      lastName: vm.lastNameIn,
      idNumber: vm.idNumberIn,
      jobTitle: vm.jobTitleIn,
      salary: vm.salaryIn
    }
    console.log('newEmployee:', newEmployee);
    //push into an array
    vm.employees.push(newEmployee);
    console.log(vm.employees);
    vm.monthlyAverageNumber = monthlyAverage(vm.employees)
    console.log(vm.monthlyAverageNumber);


function monthlyAverage(arr){
    var totalSalary = 0;
    var numberEmployees =  arr.length;
    for (var i = 0; i < arr.length; i++) {
    totalSalary +=  arr[i].salary
      console.log(arr[i].salary, totalSalary);
    }//end loop
    var total = totalSalary / numberEmployees;
    console.log(total);
    var monthlyTotal = total / 12;
    console.log(monthlyTotal);
    return monthlyTotal;
  };//end monthlyAverage
  vm.firstNameIn = ("");
  vm.lastNameIn = ("");
  vm.idNumberIn = ("");
  vm.jobTitleIn = ("");
  vm.salaryIn = ("");
};//end addEmployee

vm.removeEmployee = function(index){
  console.log('in removeEmployee', index);
  vm.employees.splice( index, 1);
}//removeEmployee



});//end controller
