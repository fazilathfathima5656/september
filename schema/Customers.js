cube(`Customers`, {
  sql: `SELECT * FROM classicmodels.customers`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [customername, contactlastname, contactfirstname, city, country]
    },
    
    customernumber: {
      sql: `${CUBE}.\`customerNumber\``,
      type: `sum`
    },
    
    salesrepemployeenumber: {
      sql: `${CUBE}.\`salesRepEmployeeNumber\``,
      type: `sum`
    }
  },
  
  dimensions: {
    customername: {
      sql: `${CUBE}.\`customerName\``,
      type: `string`
    },
    
    contactlastname: {
      sql: `${CUBE}.\`contactLastName\``,
      type: `string`
    },
    
    contactfirstname: {
      sql: `${CUBE}.\`contactFirstName\``,
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
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    state: {
      sql: `state`,
      type: `string`
    },
    
    postalcode: {
      sql: `${CUBE}.\`postalCode\``,
      type: `string`
    },
    
    country: {
      sql: `country`,
      type: `string`
    }
  }
});
