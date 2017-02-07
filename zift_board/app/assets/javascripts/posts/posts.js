angular.module('ziftBoard')
    .factory('posts', [function(){
       var p = {
         posts: [  
     	    {title: 'Test Post', upvotes: 5, comments: []},
     	  	{title: 'Style Guide', upvotes: 2},
     	  	{title: 'Lorem', upvotes: 3},
     	  	{title: 'Dolor Title Io', upvotes: 9},
     	  	{title: 'Post 4', upvotes: 4}
         ]
       };
       return p;
 }]);