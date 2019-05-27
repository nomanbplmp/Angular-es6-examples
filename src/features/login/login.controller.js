import LoginService from './login.service';

export default class HomeController{
	
	constructor(loginService){
		this.loginService=loginService;

	}

	doLogin(){
		console.log("attempting login with " + this.user + " " + this.password);
		this.loginService.attempLogin(this.user,this.password);
	}

}