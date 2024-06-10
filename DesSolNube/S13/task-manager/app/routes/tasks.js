const express = require("express");
const router = express.Router();
const AWS = require("aws-sdk");

AWS.config.update({ region: "us-east-2" });

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "Tasks";

// Vista principal con la lista de tareas
router.get("/", (req, res) => {
  const params = {
    TableName: TABLE_NAME,
  };

  dynamoDB.scan(params, (err, data) => {
    if (err) {
      res.status(500).json({ error: "No se pudieron obtener las tareas" });
    } else {
      res.render("index", { tasks: data.Items });
    }
  });
});

// Formulario para crear una nueva tarea
router.get("/tasks/new", (req, res) => {
  res.render("new");
});

// Crear una nueva tarea
router.post("/tasks", (req, res) => {
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
      res.status(500).json({ error: "No se pudo crear la tarea" });
    } else {
      res.redirect("/");
    }
  });
});

// Formulario para editar una tarea
router.get("/tasks/edit/:TaskId/:TaskName", (req, res) => {
  const { TaskId, TaskName } = req.params;

  const params = {
    TableName: TABLE_NAME,
    Key: { TaskId, TaskName },
  };

  dynamoDB.get(params, (err, data) => {
    if (err) {
      res.status(500).json({ error: "No se pudo obtener la tarea" });
    } else {
      res.render("edit", { task: data.Item });
    }
  });
});

// Actualizar una tarea
router.post("/tasks/update/:TaskId/:TaskName", (req, res) => {
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
      res.status(500).json({ error: "No se pudo actualizar la tarea" });
    } else {
      res.redirect("/");
    }
  });
});

// Eliminar una tarea
router.get("/tasks/delete/:TaskId/:TaskName", (req, res) => {
  const { TaskId, TaskName } = req.params;

  const params = {
    TableName: TABLE_NAME,
    Key: { TaskId, TaskName },
  };

  dynamoDB.delete(params, (err) => {
    if (err) {
      res.status(500).json({ error: "No se pudo eliminar la tarea" });
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;
