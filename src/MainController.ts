export default class MainController {
	constructor($scope: any) {
		$scope.x = 0;
		$scope.y = 0;
		$scope.z = 0;

		$scope.sum = function () {
			$scope.z = $scope.x + $scope.y;
		};
	}
}
