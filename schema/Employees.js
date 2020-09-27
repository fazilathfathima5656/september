cube(`Employees`, {
  sql: `SELECT * FROM classicmodels.employees`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [lastname, firstname, jobtitle]
    },
    
    employeenumber: {
      sql: `${CUBE}.\`employeeNumber\``,
      type: `sum`
    }
  },
  
  dimensions: {
    lastname: {
      sql: `${CUBE}.\`lastName\``,
      type: `string`
    },
    
    firstname: {
      sql: `${CUBE}.\`firstName\``,
      type: `string`
    },
    
    extension: {
      sql: `extension`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    officecode: {
      sql: `${CUBE}.\`officeCode\``,
      type: `string`
    },
    
    jobtitle: {
      sql: `${CUBE}.\`jobTitle\``,
      type: `string`
    }
  }
});
