const db = require("../database"); 
const model = {
      
    getserialnumber: function(acctid,transtype) {
    return new Promise((resolve, reject) => {
      let query = db.select("SERIAL_NBR")
       .from("VW_CUSTOMER_METERS"); 
        query = query.where("ACCT_ID", acctid);   
      
      query
        .then(data => {
          resolve(data[0]);
        })
        .catch(error => {
          resolve([]);
         console.log(error.toString()) 
        });
    });
  },

};

module.exports = model;
