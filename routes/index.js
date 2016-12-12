/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
exports.login = function(req, res){
  res.render('login', { title: '用户登陆'});
};
exports.doLogin = function(req, res){
  var user={
    username:'admin',
    password:'admin'
  }
  if(req.body.username===user.username && req.body.password===user.password){
    req.session.user = user;
    res.redirect('/home');
  }else {
    req.session.error='用户名或密码不正确';
    res.redirect('/login');
  }
};
exports.logout = function(req, res){
  req.session.user = null;
  res.redirect('/');
};
exports.home = function(req, res){
  res.render('home', { title: 'Home'});
};