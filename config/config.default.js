

module.exports = appInfo => {
	const config = exports = {};
	config.keys = appInfo.name + '_1536134061187_5780';
	
	config.view = {
		defaultViewEngine: 'ejs',
		mapping: {
			'.ejs': 'ejs'
		}
	};

	config.redis = {
		client: {
			port : 6379, // Redis port
			host : '127.0.0.1', // Redis host
			password : "123456",
			db : 0
		},
		agent:true
	};
	config.sessionRedis = {
		name : 'session',
	};

	config.session = {
		key : 'SESSION_ID',
		maxAge: 10 * 1000
	};

	return config;
};
