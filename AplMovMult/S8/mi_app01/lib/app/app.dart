import 'package:flutter/material.dart'; // Importa el paquete de Flutter para trabajar con Material Design
import 'package:mi_app01/app/view/home.dart'; // Importa la página de inicio de la aplicación

class MyApp extends StatelessWidget {
  // Clase MyApp que hereda de StatelessWidget
  const MyApp({super.key}); // Constructor de la clase

  @override
  Widget build(BuildContext context) {
    // Método build que devuelve un Widget
    return MaterialApp(
      // Widget MaterialApp que proporciona una aplicación de Material Design
      title: 'Flutter Demo', // Título de la aplicación
      theme: ThemeData(
        // Tema de la aplicación
        colorScheme: ColorScheme.fromSeed(
          // Esquema de colores a partir de una semilla
          seedColor: Colors
              .deepOrange, // Color semilla para generar el esquema de colores
        ),
        useMaterial3: true, // Utiliza Material 3
      ),
      home: const MyHomePage(
          title: 'Flutter Demo Home Page'), // Página de inicio de la aplicación
    );
  }
}
