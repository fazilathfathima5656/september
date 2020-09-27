cube(`Orderdetails`, {
  sql: `SELECT * FROM classicmodels.orderdetails`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    },
    
    ordernumber: {
      sql: `${CUBE}.\`orderNumber\``,
      type: `sum`
    },
    
    orderlinenumber: {
      sql: `${CUBE}.\`orderLineNumber\``,
      type: `sum`
    }
  },
  
  dimensions: {
    productcode: {
      sql: `${CUBE}.\`productCode\``,
      type: `string`
    }
  }
});
