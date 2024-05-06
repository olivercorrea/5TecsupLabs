import 'package:flutter/material.dart';

// Clase que representa la página de splash, que se muestra al inicio de la aplicación
class SplashPage extends StatelessWidget {
  // Constructor de la clase, que recibe una clave opcional
  const SplashPage({super.key});

  // Método que se encarga de construir la interfaz de usuario de la página
  @override
  Widget build(BuildContext context) {
    // Se devuelve un Scaffold que contiene un cuerpo seguro (SafeArea) para evitar problemas de diseño en diferentes dispositivos
    return const Scaffold(
      // Cuerpo del Scaffold, que contiene un área segura para evitar problemas de diseño
      body: SafeArea(
        // Se utiliza un Column para mostrar los elementos en una fila vertical
        child: Column(
          mainAxisAlignment: MainAxisAlignment
              .center, // Alineación principal en el centro de la pantalla
          crossAxisAlignment:
              CrossAxisAlignment.center, // Alineación cruzada centrada
          // Los hijos del Column son una lista de Text que muestran el mismo texto "Hola mundo"
          children: [
            Text("Hola mundo"),
            // Espacio de relleno para separar elementos
            Padding(
              // Espacio de relleno en todas las direcciones de 8.0 unidades
              padding: EdgeInsets.all(8.0),
              child: Row(
                // Alineación principal para distribuir elementos de manera uniforme
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  Text('ASSETS'),
                  Text('IMÁGENES'),
                ],
              ),
            ),
            // Imagen cargada desde el archivo 'assets/image1.png'
            Image(
              image: AssetImage('assets/image1.png'),
              width: 300,
              height: 300,
              // Modo de ajuste de la imagen para que se adapte al tamaño
              fit: BoxFit.cover,
            )

            // Text("Hola mundo"),
            // // Fila que contiene dos textos, alineados en los extremos
            // Row(
            //   // Alineación principal entre los elementos, para que estén en los extremos
            //   mainAxisAlignment: MainAxisAlignment.spaceBetween,
            //   children: [
            //     Text("Hola mundo"),
            //     Text("Hola mundo"),
            //   ],
            // ),
          ],
        ),
      ),
    );
  }
}
