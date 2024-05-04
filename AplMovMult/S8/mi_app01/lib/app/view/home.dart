import 'package:flutter/material.dart';

// Clase MyHomePage que hereda de StatefulWidget
class MyHomePage extends StatefulWidget {
  // Constructor de la clase MyHomePage
  const MyHomePage({super.key, required this.title});

  // Propiedad title de tipo String
  final String title;

  // Método createState que devuelve un objeto de tipo _MyHomePageState
  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

// Clase _MyHomePageState que hereda de State<MyHomePage>
class _MyHomePageState extends State<MyHomePage> {
  // Propiedad _counter de tipo int inicializada en 0
  int _counter = 0;

  // Método _incrementCounter que incrementa el valor de _counter en 1
  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  // Método build que devuelve un Widget
  @override
  Widget build(BuildContext context) {
    // Widget Scaffold que proporciona una estructura básica para una aplicación de Material Design
    return Scaffold(
      // Propiedad appBar que contiene un Widget AppBar
      appBar: AppBar(
        // Propiedad backgroundColor que establece el color de fondo del AppBar
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,

        // Propiedad title que contiene un Widget Text
        title: Text(widget.title),
      ),
      // Propiedad body que contiene un Widget Center
      body: Center(
        // Propiedad child que contiene un Widget Column
        child: Column(
          // Propiedad mainAxisAlignment que centra los elementos verticalmente
          mainAxisAlignment: MainAxisAlignment.center,
          // Propiedad children que contiene una lista de Widgets
          children: <Widget>[
            // Widget Text que muestra un mensaje
            const Text(
              'You have pushed the button this many times:',
            ),
            // Widget Text que muestra el valor de _counter
            Text(
              '$_counter',
              // Propiedad style que establece el estilo del texto
              style: Theme.of(context).textTheme.headlineMedium,
            ),
          ],
        ),
      ),
      // Propiedad floatingActionButton que contiene un Widget FloatingActionButton
      floatingActionButton: FloatingActionButton(
        // Propiedad onPressed que establece la función que se ejecutará al presionar el botón
        onPressed: _incrementCounter,
        // Propiedad tooltip que establece el mensaje que se mostrará al mantener presionado el botón
        tooltip: 'Increment',
        // Propiedad child que contiene un Widget Icon
        child: const Icon(Icons.add),
      ),
    );
  }
}
