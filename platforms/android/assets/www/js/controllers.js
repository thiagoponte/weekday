angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) {

	$scope.dayOfWeek = function (weekDay){
		if (weekDay) {
			var date = new Date(weekDay.date);
	    	var weekday = date.getDay();
	    	console.log(weekday);
			switch (weekday) {
				case 0:
				 	weekDay.week = 'Monday';
				break;
				case 1:
				 	weekDay.week = 'Tuesday';
				break;
				case 2:
					weekDay.week = 'Wednesday';
				break;
				case 3:
					weekDay.week = 'Thursday';
				break;
				case 4:
					weekDay.week = 'Friday';
				break;
				case 5:
					weekDay.week = 'Saturday';
				break;
				case 6:
				 	weekDay.week = 'Sunday';
				break;
			}
		}
    };
})

.controller('AccountCtrl', function($scope) {
});
