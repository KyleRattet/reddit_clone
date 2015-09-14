var app = angular.module("reddit", ['ngAnimate', 'angularMoment']);

app.run(function(amMoment) {
    amMoment.changeLocale('de');
});

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

  $scope.sort = '-votes';
  //places array, seed two, add with form submit
  $scope.places = [ vailPlace, parkcityPlace];
  // $scope.showForm = true;
  $scope.hide = true;
  $scope.save =  function () {
    var place = {
                  'location' : $scope.location,
                  'author': $scope.author,
                  'image': $scope.image,
                  'description': $scope.description,
                  'posted': new Date (),
                  'comments': [],
                  'votes': 0,
                  };
    $scope.places.push(place);
    console.log(place);
    // console.log($scope.places);
    //hide submit form on submit
    $scope.hide = true;
    $scope.showForm = false;
  }

  $scope.newComment= function  (commentName, commentText, thisLocation) {
    console.log("test add comment button");

    var commentSubmit = {
                    name : commentName,
                    comment : commentText,
                  }

    console.log(commentSubmit);

    //need to push new comment into correct location comment section
    //need to find how to push to right index
    console.log($scope.places[0].location)

    for (var i = 0; i < $scope.places.length; i++) {
       if($scope.places[i].location === thisLocation) {
        index = i;
        console.log(index);
        $scope.places[i].comments.push(commentSubmit);
       }
        console.log($scope.places[i]);
    };


  }



})


