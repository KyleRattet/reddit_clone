var app = angular.module("reddit", []);

app.controller("Locations", function ($scope){

  //create a few places to populate page
  var vailPlace = {
      'location': 'Vail, CO',
      'author': 'Peyton Manning',
      'posted': 'Sat Sep 12 2015 09:18:28 GMT-0600 (MDT)',
      'image': 'images/vail.jpg',
      'votes': 6,
      'description': 'Vice fixie iPhone occupy. Ennui kitsch slow-carb tousled tilde before they sold out Pinterest. Gentrify Odd Future fap crucifix, tofu ethical Tumblr readymade master cleanse food truck scenester meggings selvage.',
      'comments': [
              { 'name': 'Steve',
                'comment': 'Best place ever!'
              },
              { 'name': 'Sally',
                'comment': 'Worst place ever!'
              }
            ],
    }

    var parkcityPlace = {
      'location': 'Park City, UT',
      'author': 'Tom Petty',
      'posted': 'Sat Sep 12 2015 09:30:28 GMT-0600 (MDT)',
      'image': 'images/parkcity.jpeg',
      'votes': 10,
      'description': 'Tattooed photo booth ethical distillery semiotics YOLO. Thundercats Echo Park bespoke, bicycle rights McSweeney\'s\ photo booth tousled health goth organic Schlitz keffiyeh fingerstache. Hella small batch lomo quinoa. ',
      'comments': [
              { 'name': 'Jimmy',
                'comment': 'Best snow on earth!'
              },
              { 'name': 'Lauren',
                'comment': 'Worst snow on earth!'
              }
            ],
    }


  //scope out places to render
  $scope.places = [ vailPlace, parkcityPlace];

  $scope.showForm = false;

  $scope.submitNew = function () {
    console.log('test submit')
    $scope.showForm = true;
  }

})


