const mysql = require("mysql2/promise");
const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Configuración de la conexión a MySQL
const dbConfig = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "123456",
  database: "oliverTareadb1",
};

// Función para obtener una conexión a la base de datos
async function getConnection() {
  return await mysql.createConnection(dbConfig);
}

// Middleware para manejar errores de validación
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("index", {
      errors: errors.array(),
      alumnos: req.alumnos,
      cursos: req.cursos,
    });
  }
  next();
};

// Ruta principal
app.get("/", async (req, res) => {
  try {
    const connection = await getConnection();
    const [alumnos] = await connection.execute(`
      SELECT a.id, a.nombre, a.edad, a.email, c.nombre AS curso
      FROM alumnos a
      LEFT JOIN inscripciones i ON a.id = i.alumno_id
      LEFT JOIN cursos c ON i.curso_id = c.id
    `);
    const [cursos] = await connection.execute("SELECT * FROM cursos");
    await connection.end();
    res.render("index", { alumnos, cursos });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error interno del servidor");
  }
});

// Validaciones para alumnos
const alumnoValidations = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 2, max: 50 })
    .withMessage("El nombre debe tener entre 2 y 50 caracteres")
    .matches(/^[A-Za-zÀ-ÿ\s]+$/)
    .withMessage("El nombre solo puede contener letras y espacios"),
  body("edad")
    .notEmpty()
    .withMessage("La edad es obligatoria")
    .isInt({ min: 10, max: 120 })
    .withMessage("La edad debe estar entre 5 y 120 años"),
  body("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("Debe ser un email válido")
    .normalizeEmail(),
];

// Crear alumno
app.post(
  "/alumnos",
  alumnoValidations,
  handleValidationErrors,
  async (req, res) => {
    const { nombre, edad, email } = req.body;
    try {
      const connection = await getConnection();
      await connection.execute(
        "INSERT INTO alumnos (nombre, edad, email) VALUES (?, ?, ?)",
        [nombre, edad, email]
      );
      await connection.end();
      res.redirect("/");
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Error al crear alumno");
    }
  }
);

// Actualizar alumno
app.post(
  "/alumnos/:id",
  alumnoValidations,
  handleValidationErrors,
  async (req, res) => {
    const { id } = req.params;
    const { nombre, edad, email } = req.body;
    try {
      const connection = await getConnection();
      await connection.execute(
        "UPDATE alumnos SET nombre = ?, edad = ?, email = ? WHERE id = ?",
        [nombre, edad, email, id]
      );
      await connection.end();
      res.redirect("/");
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Error al actualizar alumno");
    }
  }
);

// Eliminar alumno
app.post("/alumnos/:id/delete", async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await getConnection();
    await connection.execute("DELETE FROM alumnos WHERE id = ?", [id]);
    await connection.end();
    res.redirect("/");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error al eliminar alumno");
  }
});

// Validaciones para inscripciones
const inscripcionValidations = [
  body("alumno_id")
    .notEmpty()
    .withMessage("Debe seleccionar un alumno")
    .isInt()
    .withMessage("ID de alumno inválido"),
  body("curso_id")
    .notEmpty()
    .withMessage("Debe seleccionar un curso")
    .isInt()
    .withMessage("ID de curso inválido"),
];

// Inscribir alumno en curso
app.post(
  "/inscripciones",
  inscripcionValidations,
  handleValidationErrors,
  async (req, res) => {
    const { alumno_id, curso_id } = req.body;
    try {
      const connection = await getConnection();
      // Verificar si ya existe la inscripción
      const [existingInscripcion] = await connection.execute(
        "SELECT * FROM inscripciones WHERE alumno_id = ? AND curso_id = ?",
        [alumno_id, curso_id]
      );
      if (existingInscripcion.length > 0) {
        throw new Error("El alumno ya está inscrito en este curso");
      }
      await connection.execute(
        "INSERT INTO inscripciones (alumno_id, curso_id, fecha_inscripcion) VALUES (?, ?, CURDATE())",
        [alumno_id, curso_id]
      );
      await connection.end();
      res.redirect("/");
    } catch (error) {
      console.error("Error:", error);
      res.status(400).render("index", {
        errors: [{ msg: error.message }],
        alumnos: await getAlumnos(),
        cursos: await getCursos(),
      });
    }
  }
);

// Funciones auxiliares para obtener datos
async function getAlumnos() {
  const connection = await getConnection();
  const [alumnos] = await connection.execute(`
    SELECT a.id, a.nombre, a.edad, a.email, c.nombre AS curso
    FROM alumnos a
    LEFT JOIN inscripciones i ON a.id = i.alumno_id
    LEFT JOIN cursos c ON i.curso_id = c.id
  `);
  await connection.end();
  return alumnos;
}

async function getCursos() {
  const connection = await getConnection();
  const [cursos] = await connection.execute("SELECT * FROM cursos");
  await connection.end();
  return cursos;
}

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
