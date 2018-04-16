'use strict';

describe('Registration page', function() {
var httpMock;
  beforeEach(module('registrationApp'));

describe('Testing controller',function(){
  var regctrl,scope;
  beforeEach( inject(function($controller,$rootScope, $httpBackend){
    scope = $rootScope.$new();
    regctrl = $controller('regController',{$scope:scope});

    httpMock = $httpBackend;
    httpMock.when("POST", "http://localhost:3000/emp").respond("pig");
  }));

    it('Testing Application Title',function(){
      expect(scope.title).toBeDefined();
      expect(scope.title).toBe("HCL Assessment");
    });

    it('Controller should defined',function(){
      expect(regctrl).toBeDefined();
    });

 
    it('Should return true if all the user info in not null',function(){
      scope.userInfo = {
        first_name: 'vaibhav',
        last_name:'Singh',
        email: 'vaibhav@gmail.com',
        password:'vaibhav1234',
        dob:'2018-04-11',
        sex:'male'
      };
     expect(scope.validateData(scope.userInfo)).toBeTruthy();
     
    });

    it('Should return true if email is valid',function(){
      scope.userInfo = {
        first_name: '',
        last_name:'',
        email: 'vaibhav@gmil.com',
        password:'',
        dob:'',
        sex:''
      };
     expect(scope.validateData(scope.userInfo)).toBeTruthy();
     
    });

    it('Should return false if email is invalid',function(){
      scope.userInfo = {
        first_name: '',
        last_name:'',
        email: 'vaibhav@gmil@.com',
        password:'',
        dob:'',
        sex:''
      };
     expect(scope.validateData(scope.userInfo)).toBeFalsy();
     
    });

    it('Should return true if password  is greater than 6 chrecters and less than 10 charecters',function(){
      scope.userInfo = {
        first_name: '',
        last_name:'',
        email: '',
        password:'vaibhav12',
        dob:'',
        sex:''
      };
     expect(scope.validateData(scope.userInfo)).toBeTruthy();
     
    });
   
    it('Should return false if password  is not greater than 6 chrecters and less than 10 charecters',function(){
      scope.userInfo = {
        first_name: '',
        last_name:'',
        email: '',
        password:'vaibhav12eee',
        dob:'',
        sex:''
      };
     expect(scope.validateData(scope.userInfo)).toBeFalsy();
     
    });
    it('Should return false if all the user info are null',function(){
      scope.userInfo = {
        first_name: '',
        last_name:'',
        email: '',
        password:'',
        dob:'',
        sex:''
      };

     expect(scope.validateData(scope.userInfo)).toBeFalsy();

    });


    it('Should return false if all the user info are null',function(){
      scope.userInfo = {
        first_name: 'vaibhav',
        last_name:'Singh',
        email: 'vaibhav@gmail.com',
        password:'vaibhav1234',
        dob:'2018-04-11',
        sex:'male'
      };
      spyOn(scope, 'validateData').and.returnValue(true);

     scope.savenUserInformation();

    });

    it('Should return false if all the user info are null',function(){
      scope.userInfo = {
        first_name: '',
        last_name:'',
        email: '',
        password:'',
        dob:'',
        sex:''
      };

     scope.savenUserInformation();

    });
    
  });
});