cube(`Productlines`, {
  sql: `SELECT * FROM classicmodels.productlines`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    productline: {
      sql: `${CUBE}.\`productLine\``,
      type: `string`
    },
    
    textdescription: {
      sql: `${CUBE}.\`textDescription\``,
      type: `string`
    },
    
    htmldescription: {
      sql: `${CUBE}.\`htmlDescription\``,
      type: `string`
    },
    
    image: {
      sql: `image`,
      type: `string`
    }
  }
});
