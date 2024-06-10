const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });

const dynamoDB = new AWS.DynamoDB();

const params = {
  TableName: "Tasks",
  KeySchema: [
    { AttributeName: "TaskId", KeyType: "HASH" }, // Partition key
    { AttributeName: "TaskName", KeyType: "RANGE" }, // Sort key
  ],
  AttributeDefinitions: [
    { AttributeName: "TaskId", AttributeType: "S" },
    { AttributeName: "TaskName", AttributeType: "S" },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  },
};

dynamoDB.createTable(params, (err, data) => {
  if (err) {
    console.error(
      "No fue posible crear la tabla. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log(
      "Tabla creada. Descripción de la tabla JSON:",
      JSON.stringify(data, null, 2)
    );
  }
});
