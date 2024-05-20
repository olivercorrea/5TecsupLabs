import 'package:flutter/material.dart';

// Clase que representa la página de splash, que se muestra al inicio de la aplicación
class SplashPage extends StatelessWidget {
  // Constructor de la clase, que recibe una clave opcional
  const SplashPage({super.key});

  // Método que se encarga de construir la interfaz de usuario de la página
  @override
  Widget build(BuildContext context) {
    // Se devuelve un Scaffold que contiene un cuerpo seguro (SafeArea) para evitar problemas de diseño en diferentes dispositivos
    return Scaffold(
      // Cuerpo del Scaffold, que contiene un área segura para evitar problemas de diseño
      body: Column(
        // Se utiliza un Column para mostrar los elementos en una fila vertical
        children: [
          Row(
            // Fila que contiene la imagen del logotipo
            children: [
              Image.asset(
                'assets/images/Vector.png',
                width: 141,
                height: 129,
              ),
            ],
          ),
          const SizedBox(height: 79), // Espacio entre los widgets
          Image.asset(
            'assets/images/onboarding-image.png',
            width: 180,
            height: 168,
          ),
          const SizedBox(height: 99),
          Text(
            'Lista de tareas',
            style: Theme.of(context)
                .textTheme
                .bodyMedium!
                .copyWith(fontSize: 18, fontWeight: FontWeight.w600),
          ),
          const SizedBox(height: 21),
          const Padding(
            // Relleno para agregar espacio alrededor del Texto
            padding: EdgeInsets.symmetric(horizontal: 32),
          ),
          const Text(
            'La mejor forma para que no se te olvide nada es anotarlo. Guarda tus tareas y ve completando poco a poco para aumentar tu productividad',
            textAlign: TextAlign.center,
          ),
        ],
        // mainAxisAlignment: MainAxisAlignment
        //     .center, // Alineación principal en el centro de la pantalla
        // crossAxisAlignment:
        //     CrossAxisAlignment.center, // Alineación cruzada centrada
        // // Los hijos del Column son una lista de Text que muestran el mismo texto "Hola mundo"
        // children: [
        //   const Text('Lista de tareas'),
        //   // Espacio de relleno para separar elementos
        //   const Padding(
        //     // Espacio de relleno en todas las direcciones de 8.0 unidades
        //     padding: EdgeInsets.symmetric(vertical: 30),
        //     child: Row(
        //       // Alineación principal para distribuir elementos de manera uniforme
        //       mainAxisAlignment: MainAxisAlignment.spaceAround,
        //       children: [
        //         Text('ASSETS'),
        //         Text('IMÁGENES'),
        //       ],
        //     ),
        //   ),
        //   // Imagen cargada desde el archivo 'assets/image1.png'
        //   const Image(
        //       image: AssetImage('assets/images/flutter.png'),
        //       width: 300,
        //       height: 300,
        //       // Modo de ajuste de la imagen para que se adapte al tamaño
        //       fit: BoxFit.cover),
        //   ElevatedButton(onPressed: () {}, child: const Text('Entrar'))

        //   // Text("Hola mundo"),
        //   // // Fila que contiene dos textos, alineados en los extremos
        //   // Row(
        //   //   // Alineación principal entre los elementos, para que estén en los extremos
        //   //   mainAxisAlignment: MainAxisAlignment.spaceBetween,
        //   //   children: [
        //   //     Text("Hola mundo"),
        //   //     Text("Hola mundo"),
        //   //   ],
        //   // ),
        // ],
      ),
    );
  }
}
