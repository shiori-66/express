var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // 'hello'という名前のテンプレートを使って画面を描画する指示
  res.render('hello', { title: 'Hello Express' });
});

module.exports = router;