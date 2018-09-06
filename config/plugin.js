'use strict';

// had enabled by egg
// exports.static = true;
//

exports.ejs = {
	enable : true,
	package : 'egg-view-ejs',
};
exports.sessionRedis = {
  enable: true,
  package: "egg-session-redis"
};

exports.redis = {
  enable: true,
  package: "egg-redis"
};


