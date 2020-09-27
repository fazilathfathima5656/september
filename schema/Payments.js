cube(`Payments`, {
  sql: `SELECT * FROM classicmodels.payments`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [paymentdate]
    },
    
    customernumber: {
      sql: `${CUBE}.\`customerNumber\``,
      type: `sum`
    },
    
    amount: {
      sql: `amount`,
      type: `sum`
    }
  },
  
  dimensions: {
    checknumber: {
      sql: `${CUBE}.\`checkNumber\``,
      type: `string`
    },
    
    paymentdate: {
      sql: `${CUBE}.\`paymentDate\``,
      type: `time`
    }
  }
});
