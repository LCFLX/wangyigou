app.controller("specificationController",function ($scope,$http) {
$scope.entity = {specificationOptionList:[]};
$scope.addTableRow = function(){
$scope.entity.specificationOptionList.push({})
}

}