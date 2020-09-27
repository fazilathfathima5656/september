cube(`Orders`, {
  sql: `SELECT * FROM classicmodels.orders`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [orderdate, requireddate, shippeddate]
    },
    
    ordernumber: {
      sql: `${CUBE}.\`orderNumber\``,
      type: `sum`
    },
    
    customernumber: {
      sql: `${CUBE}.\`customerNumber\``,
      type: `sum`
    }
  },
  
  dimensions: {
    status: {
      sql: `status`,
      type: `string`
    },
    
    comments: {
      sql: `comments`,
      type: `string`
    },
    
    orderdate: {
      sql: `${CUBE}.\`orderDate\``,
      type: `time`
    },
    
    requireddate: {
      sql: `${CUBE}.\`requiredDate\``,
      type: `time`
    },
    
    shippeddate: {
      sql: `${CUBE}.\`shippedDate\``,
      type: `time`
    }
  }
});
