import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';

// La clase HomePage es un widget de estado que se utiliza como página de inicio
class HomePage extends StatefulWidget {
  // Constructor de la clase HomePage que recibe una clave opcional
  const HomePage({super.key});

  // Método que se llama cuando se necesita crear el estado de la página de inicio
  @override
  _HomePageState createState() => _HomePageState();
}

// Estado de la página de inicio que se utiliza para construir la interfaz de usuario
class _HomePageState extends State<HomePage> {
  // Método que se llama cuando se necesita construir la interfaz de usuario de la página de inicio
  @override
  Widget build(BuildContext context) {
    // Se devuelve un Scaffold que es un widget básico de Flutter que proporciona una estructura básica para una pantalla
    return Scaffold(
      // El cuerpo del Scaffold se centra horizontal y verticalmente
      body: Center(
        // Se utiliza Lottie para mostrar una animación desde una URL de red
        child: Lottie.network(
            'https://lottie.host/fc3ec5dd-62c6-4db7-8e64-f96018ab6207/3OWEqJhFs2.json'),
      ),
    );
  }
}
