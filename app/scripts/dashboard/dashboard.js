'use strict';

/**
 * @ngdoc function
 * @name inventoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the inventoryApp
 */
var barbod = angular.module('barbod');

barbod.controller('DashboardCtrl',['$scope','$http','$templateRequest',
  function ($scope,$http,$templateRequest) {
    $('.in-login-bg').removeClass('in-login-bg');
    $('.dropdown').dropdown({
      // you can use any ui transition
      transition: 'drop'
    });
    //table sorter global

    // $('table').tablesort();

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var content = [
      { title: 'Module1' },
      { title: 'Module2' },
      { title: 'Module3' },
      { title: 'Module4' }
    ];    
    console.log('DashbaordCtrl is ready');
    $('.ui.page.dimmer.global-spotlight .ui.search')
      .search({
        source: content
    });
    $scope.mainData = '';
    $scope.showColumn = {};
    $scope.limitation = 10;
    $scope.typeControl = {};
    // // $http.get('http://service.webbels.net/Service/BrandService.svc/TestGetAll')
    // $http.get('table.json')
    //   .then(function(response){
    //     $scope.mainData = response.data.GD;
    //     // $scope.limitation = $scope.mainData.rowsperpage;
    //     console.log(response);
    //   });
    $scope.dataTableRequester = function(requesterId){
      console.log("here");
      $('#'+requesterId).append( '<div class="ui active inverted dimmer">\
                                    <div class="ui medium text loader">Loading</div>\
                                  </div>');
  
      $http.get('table.json').then(function(response) {
        $scope.mainData = response.data.GD;
        $('#'+requesterId).children('.inverted.dimmer').remove();
        console.log($scope.mainData);
      });
    };
    $scope.brandAdd = function(){
      /* Add brand function
       1. Assume that validation is done
       2. Assume that this is the correct json
      */
      // Getting ready data
      var data = {
        brandCode : $scope.validation.brandCode,
        brandDescription: $scope.validation.brandDescription,
        brandActive: $scope.validation.brandActive
      }
      console.log(data);

      // if there was no error in saving data then:
      $scope.closeOverSlider()
    }


    $scope.branDelete = function(){

    }
      // $http.get('../table.json').then(function(response) {
      //   $scope.mainData = response.data.GD;
      //   $('#brandModule').children('.inverted.dimmer').remove();
      //   console.log($scope.mainData);
      // });

    $scope.templateRequester = function(name , location){
      $templateRequest('scripts/templates/'+name+'.tpl.html').then(function(html){
          // Convert the html to an actual DOM node
          var template = angular.element(html);
          // Append it to the directive element
          $('#'+location).html(template);
      });
    }
    $scope.closeOverSlider = function(){
        $('.over-slider').toggleClass('hide-over-slider');
        $('.page.dimmer').toggleClass('active');
        $('#over-slider').html('');
    };
    $scope.showItems = function(index){
        $('.items-list-'+index).toggleClass('hide');
    };
    $scope.spotlight = function(){
      // need to pass data to dimmer to show data after , dimmer should be a service
      // callDimmer()
      $('.global-spotlight').dimmer('show');

      };
    $scope.moduleSlider = function(mIndex){
      var mWidth = $('.module-container').outerWidth();//1000
          $('.slide-buttons li').removeClass('current');
          $('.slide-buttons li:eq('+mIndex+')').addClass('current');
          $('.scroller').animate({scrollLeft: mIndex*mWidth }, 1000);
    };
    $(document).bind('keyup', '$', function() {
        console.log('key up');
        if (event.which === 17) {
          $('.global-spotlight').dimmer('hide');
        }
    });
    $(document).bind('keydown', '$', function() {
        console.log('key down');
        if (event.which === 17) {
          $('.global-spotlight').dimmer('show');
        }
    });
    // testAjax("http://service.webbels.net/Service/BrandService.svc/TestGetAll");
    // function testAjax(myUrl){
    //   $.ajax({
    //       type : "Get",
    //       url :myUrl,
    //       dataType :"json",
    //       jsonp: false,
    //       jsonpCallback: "myJsonMethod",
    //       success : function(data){
    //           console.log(data);},
    //       error : function(httpReq,status,exception){
    //           console.log(status+" "+exception);
    //       }
    //   });
    // }
  }]);

  barbod.directive('genericTable', function() {
      return {
          restrict: 'AE',
          templateUrl: 'scripts/dashboard/tables.tpl.html'
      };
  });
  barbod.directive('genericOverSlider', function() {
      return {
          restrict: 'AE',
          templateUrl: 'scripts/dashboard/overslider.tpl.html'
      };
  });

 