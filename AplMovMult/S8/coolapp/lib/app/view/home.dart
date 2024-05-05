import 'package:flutter/material.dart';
import 'dart:math';

// Clase que representa la página principal de la aplicación
class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  // Método que crea el estado de la página principal
  _MyHomePageState createState() => _MyHomePageState();
}

// Clase que representa el estado de la página principal
class _MyHomePageState extends State<MyHomePage> {
  // Variable que indica si se debe mostrar el emoji
  bool _showEmoji = false;

  @override
  // Método que construye la interfaz de usuario de la página principal
  Widget build(BuildContext context) {
    return ScaffoldWidget(
      // Barra de título de la aplicación
      appBar: AppBar(
        backgroundColor: Colors.green,
        title: const Text('Flutter is fun!'),
      ),
      // Botón flotante que muestra un emoji cuando se presiona
      floatingActionButton: FloatingActionButton(
        child: const Icon(Icons.emoji_emotions),
        onPressed: () {
          // Se muestra el emoji cuando se presiona el botón
          _showEmoji = true;
          _showSnackBar(context);
        },
      ),
      // Barra de navegación inferior
      bottomNavigationBar: BottomNavigationBar(
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.search),
            label: 'Search',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.account_circle),
            label: 'Profile',
          ),
        ],
      ),
      // Cuerpo de la página principal que contiene una lista de contenedores con colores aleatorios
      body: GestureDetector(
        onTap: () {
          // Se muestra el emoji cuando se toca la pantalla
          _showEmoji = true;
          _showSnackBar(context);
        },
        child: ListView.builder(
          itemBuilder: (_, index) {
            return Container(
              color: randomColor(),
              width: 500,
              height: 500,
            );
          },
        ),
      ),
    );
  }

  // Método que muestra un SnackBar con un emoji
  void _showSnackBar(BuildContext context) {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('😊'),
        duration: Duration(milliseconds: 500),
      ),
    );
  }
}

// Función que devuelve un color aleatorio
Color randomColor() {
  final random = Random();

  return Color.fromRGBO(
    random.nextInt(256),
    random.nextInt(256),
    random.nextInt(256),
    1.0,
  );
}

// Clase que representa un widget personalizado de Scaffold
class ScaffoldWidget extends StatelessWidget {
  final AppBar appBar;
  final FloatingActionButton floatingActionButton;
  final BottomNavigationBar bottomNavigationBar;
  final Widget body;

  const ScaffoldWidget({super.key, 
    required this.appBar,
    required this.floatingActionButton,
    required this.bottomNavigationBar,
    required this.body,
  });

  @override
  // Método que construye la interfaz de usuario del widget personalizado de Scaffold
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: appBar,
      floatingActionButton: floatingActionButton,
      bottomNavigationBar: bottomNavigationBar,
      body: body,
    );
  }
}
