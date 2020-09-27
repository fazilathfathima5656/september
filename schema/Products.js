cube(`Products`, {
  sql: `SELECT * FROM classicmodels.products`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [productname]
    },
    
    buyprice: {
      sql: `${CUBE}.\`buyPrice\``,
      type: `sum`
    }
  },
  
  dimensions: {
    productcode: {
      sql: `${CUBE}.\`productCode\``,
      type: `string`
    },
    
    productname: {
      sql: `${CUBE}.\`productName\``,
      type: `string`
    },
    
    productline: {
      sql: `${CUBE}.\`productLine\``,
      type: `string`
    },
    
    productscale: {
      sql: `${CUBE}.\`productScale\``,
      type: `string`
    },
    
    productvendor: {
      sql: `${CUBE}.\`productVendor\``,
      type: `string`
    },
    
    productdescription: {
      sql: `${CUBE}.\`productDescription\``,
      type: `string`
    }
  }
});
