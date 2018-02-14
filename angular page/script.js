var app = angular.module("myApp", []);
app.controller("myCtrl", function() {
    var vm = this;
    vm.header = [
    	{header: "header1"},
    	{header: "header2"},
    	{header: "header3"}
    ];

    vm.column = [
    	{column: "column1"},
    	{column: "column2"},
    	{column: "column3"}
    ]
    

vm.f1 = function (){
	vm.h = vm.header[0];
	vm.col = vm.column[0]
}
vm.f2 = function (){
	vm.h = vm.header[1];
	vm.col = vm.column[1]
}
vm.f3 = function (){
	vm.h = vm.header[2];;
	vm.col = vm.column[2]
}
vm.f1();
  
});