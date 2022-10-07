const express = require('express'); // 선언
const app = express(); // app라는 이름으로 express instance 만듬
const router = express.Router();

app.listen(3000);

// 애플리케이션 레벨 미들웨어
app.use(function(req, res, next) {
  console.log('Time1 : ', Date.now());
  next();
  // res.send('Express server !!');
});
app.get('/user/:id', function(req, res, next) {
  console.log('Request URL : ', req.originalUrl);
  next();
}, function(req, res, next) {
  res.send('USER : ' + req.params.id);
})
app.post('/user', function(req, res) {
  res.send('hi post');
})

// 라우터레벨 미들웨어
router.use(function(req, res, next) {
  console.log('Time2 : ', Date.now());
  next();
  // res.send('Express server !!');
});
router.get('/users/:id', function(req, res, next) {
  console.log('Request URL : ', req.originalUrl);
  next();
}, function(req, res, next) {
  res.send('USER : ' + req.params.id);
})
app.use('/', router);

// 오류 처리 미들웨어
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// 기본 제공 미들웨어 -> 정적 모듈을 처리하는 static 미들웨어 http://localhost:3000/image.png
app.use(express.static(__dirname+'/public'))

// 써드 파티 미들웨어
// npm i cookie-parser
