app.config(config);
function config($stateProvider,$urlRouterProvider){
	$stateProvider.state("page_one",{
		url: "/page_one/:id/:name/:age",
		templateUrl: "templates/page_one.html",
		controller:"page_one"
	})
	.state("page_two",{
		url: "/page_two/:id/:name/:age",
		templateUrl: "templates/page_two.html",
		controller:"page_two"
	});
	
	$urlRouterProvider.otherwise("/page_one");
}