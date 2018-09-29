var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/',function(req,res,next){
  var formidable = require('formidable');
  var fs = require('fs');
  var form = new formidable.IncomingForm();  
  form.parse(req,function(err,fields,files){
    var oldpath = files.filetoupload.path;
    var newpath = 'C:/ProjetosNodeJS/arquvos/' + files.filetoupload.name;
    fs.rename(oldpath,newpath,function(err){
      if(err) throw err;
      res.write('Arquivo recebido e gravado com sucesso');
      res.end();
    })
  });
});

module.exports = router;
