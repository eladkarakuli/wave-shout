angular.module('waveshout').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
	function($urlRouterProvider, $stateProvider, $locationProvider){
		$locationProvider.html5Mode(true);
		$stateProvider
		.state('spotsList', {
			url: '/',
			templateUrl: 'client/spot-list/spots-list.ng.html',
			controller: 'SpotsListCtrl'
		})
		.state('chooseSpot', {
			url: '/choosespot',
			templateUrl: 'client/report-spot/choose-spot.ng.html',
			controller: 'ChooseSpotCtrl'
		})
		.state('reportList', {
			url: '/reports/:spotId',
			templateUrl: 'client/reports/reports.ng.html',
			controller: 'ListReportsCtrl'
		})
		.state('insertReport', {
			url: '/:spotId',
			templateUrl: 'client/report-spot/report-spot.ng.html',
			controller: 'InsertReportCtrl as vm'
		});
		$urlRouterProvider.otherwise("/");
}]);