//controller for registration app
registrationApp.controller('regController',['$scope','$http',function($scope,$http){
    $scope.userInfo = {
      first_name: '',
      last_name:'',
      email: '',
      password:'',
      dob:'',
      sex:'male' 
    };
    $scope.title="HCL Assessment";

    //Export Methods 
    $scope.savenUserInformation = savenUserInformation;
    $scope.validateData= validateData;
    //validation

    //for email validate
    var validEmail = function(str) {
      return typeof str==='string' && /^[\w+\d+._]+\@[\w+\d+_+]+\.[\w+\d+._]{2,8}$/.test(str);
    }

    function validateData(userInfo){
      if(userInfo.first_name && userInfo.last_name && userInfo.email && userInfo.password && userInfo.dob && userInfo.sex){
        return true;
      }
      if(validEmail(userInfo.email)){
        return true;
      }
      if(userInfo.password.length>6 && userInfo.password.length<10){
        return true;
      }
      return false;
    }

    //post api to save information
    function savenUserInformation() {
      
      if (validateData($scope.userInfo)) { 
            $http({
                    url: 'http://localhost:3000/emp',
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    data: $scope.userInfo
                })
                .then(function(response) {
                  //response
                }, 
                function(response) { 
                      //error
                });
            }else{
              return false;
            }
      }
  }]);