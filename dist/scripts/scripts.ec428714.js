"use strict";angular.module("barbod",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"scripts/login/login.tpl.html",controller:"LoginCtrl"}).when("/dashboard",{templateUrl:"scripts/dashboard/dashboard.tpl.html",controller:"DashboardCtrl"})}]);var barbod=angular.module("barbod");barbod.controller("DashboardCtrl",["$scope","$http",function(a,b){$(".in-login-bg").removeClass("in-login-bg"),$(".dropdown").dropdown({transition:"drop"}),a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"];var c=[{title:"Module1"},{title:"Module2"},{title:"Module3"},{title:"Module4"}];console.log("DashbaordCtrl is ready"),$(".ui.page.dimmer.global-spotlight .ui.search").search({source:c}),a.mainData="",a.showColumn={},a.limitation=10,a.typeControl={},b.get("http://service.webbels.net/Service/BrandService.svc/TestGetAll").then(function(b){a.mainData=b.data.GD,console.log(b)}),a.closeOverSlider=function(){$(".over-slider").toggleClass("hide-over-slider"),$(".page.dimmer").dimmer("show")},a.showItems=function(a){$(".items-list-"+a).toggleClass("hide")},a.spotlight=function(){$(".global-spotlight").dimmer("show")},a.moduleSlider=function(a){var b=$(".module-container").outerWidth();$(".slide-buttons li").removeClass("current"),$(".slide-buttons li:eq("+a+")").addClass("current"),$(".scroller").animate({scrollLeft:a*b},1e3)},$(document).bind("keyup","$",function(){console.log("key up"),17===event.which&&$(".global-spotlight").dimmer("hide")}),$(document).bind("keydown","$",function(){console.log("key down"),17===event.which&&$(".global-spotlight").dimmer("show")})}]);var barbod=angular.module("barbod");barbod.controller("LoginCtrl",["$scope","$location",function(a,b,c){$("body").addClass("in-login-bg"),a.go=function(a){b.path(a)}}]);