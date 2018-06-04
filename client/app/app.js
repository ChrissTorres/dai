const router = new Router( );
const loginController = new LoginController( router );
const homeController = new HomeController( router );
const loginView = new LoginView( );
const homeView = new HomeView( );

const pages =  {
	"login": {
		template: "../app/templates/login.html",
		controller: loginController
	},
	"home": {
		template: "../app/templates/home.html",
		controller: homeController
	}
}

router.init( pages );
router.defaultPage( pages ["login"] );