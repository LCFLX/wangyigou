/*app.controller('BrandController',function ($scope,BrandService) {
    $scope.findAll = function () {
        /!*调用service成功的函数*!/
        BrandService.findAll().success(function (result) {
            /!*result结果集*!/
            $scope.list = result;
        })
    }


  



});*/
app.controller('BrandController',function ($scope,$controller,BrandService) {
  console.log(1234567)
    $scope.findAll = function () {
        /!*调用service成功的函数*!/
        BrandService.findAll().success(function (result) {
            /!*result结果集*!/
            $scope.list = result;
        })
    }

    // console.log(123)
    $controller('BaseController',{$scope: $scope})
    //
    $scope.findPage = function(page,size){
        BrandService.findPage(page,size).success(function (data) {
            $scope.list = data.rows;
            $scope.paginationConf.totalItems = data.total;
            // alert(result)
        })
    }

/*//分页控件属性配置
    $scope.paginationConf = {
        //当前页
        currentPage: 1,
        //总记录数
        totalItems: 10,
        //每页查询的记录数
        itemsPerPage: 10,
        //分页选项，用于选择每页显示多少条记录
        perPageOptions: [10, 20, 30, 40, 50],
//当页码变更后触发的函数
        onChange: function () {
            $scope.reloadList();//重新加载
        }
    };
    //重新加载数据
    $scope.reloadList = function () {
        $scope.findPage($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
    }
    $scope.findPage = function(){
        BrandService.findPage($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage).success(function (data) {
            $scope.list = data.rows;
            alert(data.total)
            $scope.paginationConf.totalItems = data.total;
        })
    }*/

});
