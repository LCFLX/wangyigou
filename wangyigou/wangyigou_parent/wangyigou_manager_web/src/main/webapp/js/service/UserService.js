/*定义一个service*/
app.service('BrandService',function ($http) {
    this.findPage = function () {

        /*查询用get请求,增删改用post请求,$http就是发送请求用的*/
        return $http.get("../brand/findPage.do");
    }

    /*其他请求*/
  /*  this.findPage = function () {

        /!*查询用get请求,增删改用post请求,$http就是发送请求用的*!/
        return $http.get("../brand/findPage.do");
    }
 */





});