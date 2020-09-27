cube(`Offices`, {
  sql: `SELECT * FROM classicmodels.offices`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [city, country]
    }
  },
  
  dimensions: {
    officecode: {
      sql: `${CUBE}.\`officeCode\``,
      type: `string`
    },
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    phone: {
      sql: `phone`,
      type: `string`
    },
    
    addressline1: {
      sql: `${CUBE}.\`addressLine1\``,
      type: `string`
    },
    
    addressline2: {
      sql: `${CUBE}.\`addressLine2\``,
      type: `string`
    },
    
    state: {
      sql: `state`,
      type: `string`
    },
    
    country: {
      sql: `country`,
      type: `string`
    },
    
    postalcode: {
      sql: `${CUBE}.\`postalCode\``,
      type: `string`
    },
    
    territory: {
      sql: `territory`,
      type: `string`
    }
  }
});
