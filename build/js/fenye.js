/**
 * Created by lenovo on 2017/5/21.
 */
var app = angular.module('myApp', ['ui.router']);
var num=9;
app.service('alldata', function () {
    return {
        fstdata: [
            {
                id: 1,
                name: '个人中心',
                nickname: '账户管理'
            },
            {
                id: 2,
                name: '系统设置',
                nickname: '权限管理'
            }
        ],
        secdata: [
            {
                id: 11,
                parentid: 1,
                name: '个人信息',
                page: 'grxx.html'
            },
            {
                id: 12,
                parentid: 1,
                name: '修改密码',
                page: 'xgmm.html'
            },
            {
                id: 21,
                parentid: 2,
                name: '功能配置',
                page: 'gnpz.html'
            },
            {
                id: 22,
                parentid: 2,
                name: '角色管理',
                page: 'jsgl.html'
            },
            {
                id: 23,
                parentid: 2,
                name: '用户管理',
                page: 'yhgl.html'
            }
        ],
        thirdata: [
            {
                ID: 1,
                parentid: 23,
                loginname: 'zhangsan',
                name: '张三',
                role: '13管理员aaa',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '启用',
                creattime: '2014-07-27 16:56',
                change: '修改',
                delete: '删除'
            },
            {
                ID: 2,
                parentid: 23,
                loginname: 'lisi',
                name: '李四',
                role: '13管理员aaa',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '禁用',
                creattime: '2014-07-27 16:56',
                change: '修改',
                delete: '删除'
            },
            {
                ID: 3,
                parentid: 23,
                loginname: 'wangwu',
                name: '王五',
                role: '13管理员aaa',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '启用',
                creattime: '2014-07-27 16:56',
                change: '修改',
                delete: '删除'
            },
            {
                ID: 4,
                parentid: 23,
                loginname: 'zhangchen',
                name: '张晨',
                role: '13管理员aaa',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '启用',
                creattime: '2014-07-27 16:56',
                change: '修改',
                delete: '删除'
            },
            {
                ID: 5,
                parentid: 23,
                loginname: 'liucheng',
                name: '刘成',
                role: '管理员',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '禁用',
                creattime: '2014-07-27 16:56',
                change: '修改',
                delete: '删除'
            },
            {
                ID: 6,
                parentid: 23,
                loginname: 'liji',
                name: '李继',
                role: '13管理员aaa',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '禁用',
                creattime: '2014-07-27 16:56',
                change: '修改',
                delete: '删除'
            },
            {
                ID: 7,
                parentid: 23,
                loginname: 'yuantao',
                name: '袁涛',
                role: '13管理',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '启用',
                creattime: '2014-07-27 16:56',
                change: '修改',
                delete: '删除'
            },
            {
                ID: 8,
                parentid: 23,
                loginname: 'wangjian',
                name: '王建',
                role: '管理员',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '禁用',
                creattime: '2014-07-27 16:56',
                change: '修改',
                delete: '删除'
            }
        ],
        fourdata: [
            {
                ID: 1,
                role: "管理员",
                state: "启用",
                orders: 0,
                creattime: '2014-07-27 16:35'
            },
            {
                ID: 2,
                role: "管理员2",
                state: "禁用",
                orders: 2,
                creattime: '2014-07-27 16:35'
            },
            {
                ID: 3,
                role: "管理员",
                state: "禁用",
                orders: 5,
                creattime: '2014-07-27 16:35'
            },
            {
                ID: 4,
                role: "管理员2",
                state: "启用",
                orders: 0,
                creattime: '2014-07-27 16:35'
            },
            {
                ID: 5,
                role: "管理员0",
                state: "启用",
                orders: 2,
                creattime: '2014-07-27 16:35'
            },
            {
                ID: 6,
                role: "管理员1",
                state: "禁用",
                orders: 0,
                creattime: '2014-07-27 16:35'
            },
            {
                ID: 7,
                role: "管理员是",
                state: "启用",
                orders: 0,
                creattime: '2014-07-27 16:35'
            },
            {
                ID: 8,
                role: "管理员0",
                state: "启用",
                orders: 1,
                creattime: '2014-07-27 16:35'
            },
            {
                ID: 9,
                role: "管理员2",
                state: "启用",
                orders: 0,
                creattime: '2014-07-27 16:35'
            },
            {
                ID: 10,
                role: "管理2",
                state: "启用",
                orders: 0,
                creattime: '2014-07-27 16:35'
            },
            {
                ID: 11,
                role: "管理员2",
                state: "禁用",
                orders: 0,
                creattime: '2014-07-27 16:35'
            }

        ]
    }
})
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/user')
    $stateProvider
        .state('user',{
            url:'/user',
            templateUrl:'views/user.html',
            controller:function($scope){
                $scope.filt={};
                $(document).on('keyup',function(e){
                    if(e.keyCode==13){
                        $scope.$apply(function(){
                            $scope.filt=$scope.check;
                        });
                    }
                })
                $scope.che=function(){
                    $scope.filt=$scope.check;
                }
            }
        })
        .state('add',{
            url:'/add',
            templateUrl:'views/add.html',
            controller:function($scope){
                $scope.add={}
                $scope.add.state='启用'
                $scope.add.role='管理员1'
                $scope.add.change="修改"
                $scope.add.delete="删除"
                $scope.addFn=function(){
                    $scope.add.ID=num++;
                    $scope.add.creattime=new Date();
                    $scope.$emit('addData',{
                        data:$scope.add
                    })
                }
            }
        })
})
app.controller("ft", function ($scope,alldata) {
//数据源
    $scope.data = alldata.thirdata;
    $scope.alldata=$scope.data;
    pageData()


    function pageData(){
//分页总数,每页显示2条数据
        $scope.pageSize = 2;
        $scope.num = 0;
// 分页数，8条数据一共可以显示4页
        $scope.pages = Math.ceil($scope.alldata.length / $scope.pageSize);
//遍历分页数，渲染出页码按钮
        $scope.arr = [];
        for (var i = 0; i < $scope.pages; i++) {
            $scope.arr.push(i)
        }
//初始页面渲染前两条数据
        $scope.message = $scope.alldata.slice(0, $scope.pageSize)
//点击页码渲染对应的数据
        $scope.num=1;
        $scope.numPage = function (i) {
            $scope.num = i + 1;
            $scope.message = $scope.alldata.slice(($scope.num - 1) * $scope.pageSize, $scope.num * $scope.pageSize)
        }
//点击上一页渲染数据
        $scope.prev = function () {
            $scope.prevPage=--$scope.num;
            if($scope.prevPage>0){
                $scope.message=$scope.alldata.slice(($scope.prevPage-1)*$scope.pageSize,$scope.prevPage*$scope.pageSize)
            }
        }
//点击下一页渲染数据
        $scope.next = function () {
            $scope.nextPage=++$scope.num;
            console.log($scope.nextPage)
            if($scope.nextPage>0){
                $scope.message=$scope.alldata.slice(($scope.nextPage-1)*$scope.pageSize,$scope.nextPage*$scope.pageSize)
            }
        }

//点击修改
        $scope.show=false;
        $scope.edit=function(ID){
            $scope.show=true;
            $scope.message.forEach(function (item, index) {
                if (item.ID == ID) {
                    $scope.tar = {};
                    for (var k in item) {
                        $scope.tar[k] = item[k];
                    }
                }
            })
        }
//点击删除
        $scope.del = function (ID) {
            $scope.message.forEach(function (item, index) {
                if (item.ID == ID) {
                    $scope.message.splice(index, 1);
                }
            });
        };
//点击确认、取消
        $scope.ok = function () {
            $scope.message.forEach(function (item, index) {
                if (item.ID == $scope.tar.ID) {
                    $scope.show = false;
                    $scope.message[index] = $scope.tar;
                }
            });
        };
        $scope.no = function () {
            $scope.show = false;
            $scope.message = $scope.message;
        }
    }

//接收添加的数据
    $scope.$on('addData',function(e,d){
        alldata.thirdata.push(d.data);
        $scope.alldata=$scope.data;
        pageData()
    })
})





