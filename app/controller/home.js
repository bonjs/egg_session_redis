'use strict';

const Controller = require('egg').Controller;
//const ms = require('ms');
class HomeController extends Controller {
	async login() {
		this.ctx.session.user = {
			username : 'sun',
			email : 'ske@163.com',
		};
		await this.ctx.render('login.ejs');
	}
	
	async index() {
		console.log(this.ctx.session);

		var user = this.ctx.session.user;
		var username = user && user.username;

		//this.ctx.session.maxAge = 10000;// ms('30d');
		//this.ctx.body = !username ? '<a href="./login">登录</a>' : username + ',欢迎';
		
		await this.ctx.render('index.ejs', {
			username: username
		});
	}

}

module.exports = HomeController;
