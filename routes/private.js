const router = require('express').Router();
const custmeter = require('../models/meterInfo');
 
router.get('/customer/meter/serialnumber', function(req, res){
    custmeter.getserialnumber(req.param("acct_id") 
  ).then(data=>{
    res.json(data);
  });
});
 
module.exports = router;