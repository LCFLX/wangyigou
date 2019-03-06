/*定义一个service*/
app.service('BrandService',function ($http) {
    console.log(123)
      this.findAll = function () {
          // console.log($http.get("../brand/findAll.do"));
          /*查询用get请求,增删改用post请求,$http就是发送请求用的*/
          return $http.get("../brand/findAll.do");
          // return $http.get("../brand/findPage.do");

      };
    // console.log(123456)
       this.findPage = function (page,size) {
         console.log(1234);
          return $http.get("../brand/findPage.do?page="+ page +"&size="+size);
       }












});

