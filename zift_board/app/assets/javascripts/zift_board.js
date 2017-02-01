angular.module('ziftBoard', ['ui.router']).config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: '/home.html',
					controller: 'MainCtrl'
				})

				.state('posts', {
					url: '/posts/{id}',
					templateUrl: '/posts.html',
					controller: 'PostsCtrl'
				});

			$urlRouterProvider.otherwise('home');
		}

	.factory('posts' [function(){
		var o = {
			posts: [
			  {title: 'Show And Tell', upvotes: 4},
			  {title: 'Another Post', upvotes: 7},
			  {title: 'CSS Guide', upvotes: 2},
			  {title: 'Zift Manuak', upvotes: 3},
			  {title: 'Listen to my cool joke', upvotes: 1}
			]
		};

		return o;
	}])

	.controller('MainCtrl', [
		'$scope',
		'posts',
		function($scope, posts){
			$scope.test = 'Hello world!';

			$scope.posts = posts.posts[$stateParams.id];

			$scope.addPost = function() {
				if (!$scope.title || $scope.title === '') { return; }

				$scope.posts.push({
					title: $scope.title,
					link: $scope.link, 
					upvotes: 0,
					comments : [
						{author: 'Leon', body: 'test comment!', upvotes: 0},
    					{author: 'Ipsum', body: 'another test comment', upvotes: 0}
					]
				});
				$scope.title = '';
				$scope.link = '';
			};

			$scope.incrementUpvotes = function(post) {
				post.upvotes += 1;
			};
		  
		}
		])

	.controller('PostsCtrl', [		
  	 '$scope',		
  	 '$stateParams',		
  	 'posts',		
  	 function($scope, $stateParams, posts){		
  	 	$scope.post = posts.posts[$stateParams.id];		
  	 	$scope.addComment = function(){		
  	   if($scope.body === '') { return; }		
  	  $scope.post.comments.push({		
  	     body: $scope.body,		
  	     author: 'user',		
  	     upvotes: 0		
  	   });		
  	   $scope.body = '';		
  	 };
	 }])
]);