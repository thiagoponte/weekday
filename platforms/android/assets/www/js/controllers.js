angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

	$scope.dayOfWeek = function(weekDay){
    	var week = new Date(parseInt(weekDay.year), parseInt(weekDay.month)-1, parseInt(weekDay.day));
    	var weekday = week.getDay();

    	console.log(weekDay.year);
    	console.log(weekDay.month);
    	console.log(weekDay.day);

		switch (weekday) {
			case 0:
			  weekDay.week = 'Sunday';
			break;
			case 1:
			  weekDay.week = 'Monday';
			break;
			case 2:
			  weekDay.week = 'Tuesday';
			break;
			case 3:
			  weekDay.week = 'Wednesday';
			break;
			case 4:
			  weekDay.week = 'Thursday';
			break;
			case 5:
			  weekDay.week = 'Friday';
			break;
			case 6:
			  weekDay.week = 'Saturday';
			break;
		}

    };
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
