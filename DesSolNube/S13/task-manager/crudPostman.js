const express = require("express");
const bodyParser = require("body-parser");
const AWS = require("aws-sdk");

AWS.config.update({ region: "us-east-2" });

const app = express();
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "Tasks";

app.use(bodyParser.json());

app.post("/tasks", (req, res) => {
  const { TaskId, TaskName, TaskOwner, StartDate, EndDate, TaskStatus } =
    req.body;

  const params = {
    TableName: TABLE_NAME,
    Item: {
      TaskId,
      TaskName,
      TaskOwner,
      StartDate,
      EndDate,
      TaskStatus,
    },
  };

  dynamoDB.put(params, (err) => {
    if (err) {
      console.error("Error al crear la tarea:", JSON.stringify(err, null, 2));
      res.status(500).json({ error: "No se pudo crear la tarea" });
    } else {
      res.json({ success: "Tarea creada con éxito" });
    }
  });
});

app.get("/tasks/:TaskId/:TaskName", (req, res) => {
  const { TaskId, TaskName } = req.params;

  const params = {
    TableName: TABLE_NAME,
    Key: { TaskId, TaskName },
  };

  dynamoDB.get(params, (err, data) => {
    if (err) {
      console.error("Error al obtener la tarea:", JSON.stringify(err, null, 2));
      res.status(500).json({ error: "No se pudo recuperar la tarea" });
    } else {
      res.json(data.Item);
    }
  });
});

app.put("/tasks/:TaskId/:TaskName", (req, res) => {
  const { TaskId, TaskName } = req.params;
  const { TaskOwner, StartDate, EndDate, TaskStatus } = req.body;

  const params = {
    TableName: TABLE_NAME,
    Key: { TaskId, TaskName },
    UpdateExpression:
      "set TaskOwner = :o, StartDate = :s, EndDate = :e, TaskStatus = :t",
    ExpressionAttributeValues: {
      ":o": TaskOwner,
      ":s": StartDate,
      ":e": EndDate,
      ":t": TaskStatus,
    },
    ReturnValues: "UPDATED_NEW",
  };

  dynamoDB.update(params, (err, data) => {
    if (err) {
      console.error(
        "Error al actualizar la tarea:",
        JSON.stringify(err, null, 2)
      );
      res.status(500).json({ error: "No se pudo actualizar la tarea" });
    } else {
      res.json(data.Attributes);
    }
  });
});

app.delete("/tasks/:TaskId/:TaskName", (req, res) => {
  const { TaskId, TaskName } = req.params;

  const params = {
    TableName: TABLE_NAME,
    Key: { TaskId, TaskName },
  };

  dynamoDB.delete(params, (err) => {
    if (err) {
      console.error(
        "Error al eliminar la tarea:",
        JSON.stringify(err, null, 2)
      );
      res.status(500).json({ error: "No se pudo eliminar la tarea" });
    } else {
      res.json({ success: "Tarea eliminada con éxito" });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
