var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.use('/topologicalSort', require('./topologicalSort'))
router.use('/paretoFrontier', require('./paretoFrontier'))
module.exports = router
