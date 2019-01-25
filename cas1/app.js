// Definisanje `angularjsKurs` modula https://api.myjson.com/bins/y0p5s
var angularjsKurs = angular.module('angularjsKurs', []);

// Definisanje `AngularJSKursController` kontrolera u `angularjsKurs` modulu
angularjsKurs.controller(
    'AngularJSKursController',
    function AngularJSKursController($scope) {
        $scope.phones = [
            {
                name: 'Nexus S',
                snippet: 'Fast just got faster with Nexus S.'
            },
            {
                name: 'Motorola XOOM™ with Wi-Fi',
                snippet: 'The Next, Next Generation tablet.'
            },
            {
                name: 'MOTOROLA XOOM™',
                snippet: 'The Next, Next Generation tablet.'
            }
        ];
        $scope.name = 'world';
        $scope.count = 10;

        $scope.increment = () => {
            $scope.count++;
        }

        $scope.firstName = 'Pera';
        $scope.lastName = 'Peric';
        $scope.age = 20;
        $scope.email = 'pera.peric@email.com';
        
        $scope.submit = () => {
            const userObj = {
                name: $scope.firstName,
                lastName: $scope.lastName,
                age: $scope.age,
                email: $scope.email
            }

            console.log(`userObj`);
            console.log(userObj);
            
        }
    }
);
