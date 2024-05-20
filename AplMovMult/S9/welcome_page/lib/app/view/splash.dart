// Importaciones necesarias para el funcionamiento de la página de splash
import 'package:flutter/material.dart'; // Importación del paquete de Flutter para crear la interfaz de usuario
import 'package:lottie/lottie.dart'; // Importación del paquete Lottie para mostrar animaciones
import 'package:google_fonts/google_fonts.dart'; // Importación del paquete Google Fonts para utilizar fuentes personalizadas

// Clase que representa la página de splash, que se muestra al inicio de la aplicación
class SplashPage extends StatefulWidget {
  const SplashPage({super.key}); // Constructor de la clase

  @override
  State<SplashPage> createState() =>
      _SplashPageState(); // Método que crea el estado de la página
}

class _SplashPageState extends State<SplashPage> {
  bool showLottie =
      true; // Variable para controlar la visibilidad de la animación de Lottie

  @override
  void initState() {
    super.initState();
    // Después de 3 segundos, cambiar el valor de showLottie a false para mostrar el contenido de bienvenida
    Future.delayed(const Duration(seconds: 3), () {
      setState(() {
        showLottie = false;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // Estructura base de la página
      body: SafeArea(
        // Área segura para evitar problemas de diseño en diferentes dispositivos
        child: Center(
          // Centra el contenido en la pantalla
          child: showLottie // Condicional para mostrar la animación o el contenido de bienvenida
              ? Lottie.network(
                  // Muestra la animación de Lottie desde una URL
                  'https://lottie.host/fc3ec5dd-62c6-4db7-8e64-f96018ab6207/3OWEqJhFs2.json')
              : Column(
                  // Columna que contiene el contenido de bienvenida
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    // Título de bienvenida con estilo personalizado utilizando Google Fonts
                    Text(
                      "Bienvenido a tu app sobre seguridad",
                      style: GoogleFonts.oregano(
                        textStyle: const TextStyle(
                          fontSize: 24, // Tamaño de fuente
                          fontWeight: FontWeight.bold, // Peso de la fuente
                          color: Colors.deepPurple, // Color del texto
                        ),
                      ),
                    ),
                    const SizedBox(height: 16), // Espacio entre elementos
                    Padding(
                      // Padding para el párrafo de texto
                      padding: const EdgeInsets.symmetric(horizontal: 24),
                      child: Text(
                        // Párrafo de texto con estilo personalizado utilizando Google Fonts
                        "Aquí encontrarás información valiosa sobre cómo mantenerte seguro en el área de planta piloto de Tecsup.",
                        textAlign:
                            TextAlign.center, // Alineación del texto al centro
                        style: GoogleFonts.oxygen(
                          textStyle: const TextStyle(
                            fontSize: 16, // Tamaño de fuente
                            color: Colors.grey, // Color del texto
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(height: 32), // Espacio entre elementos
                    ElevatedButton(
                      // Botón "Empezar" con estilo personalizado
                      onPressed: () {
                        // Acción al presionar el botón "Empezar"
                      },
                      style: ElevatedButton.styleFrom(
                        // Estilo del botón
                        backgroundColor: const Color.fromARGB(
                            255, 154, 1, 242), // Color de fondo del botón
                        shape: RoundedRectangleBorder(
                          // Forma del botón (bordes redondeados)
                          borderRadius: BorderRadius.circular(16),
                        ),
                        padding: const EdgeInsets.symmetric(
                            horizontal: 32, vertical: 16), // Padding del botón
                      ),
                      child: const Text(
                        // Texto del botón
                        "Empezar",
                        style: TextStyle(
                          fontSize: 18, // Tamaño de fuente del texto
                          fontWeight:
                              FontWeight.bold, // Peso de la fuente del texto
                          color: Colors.white, // Color del texto
                        ),
                      ),
                    ),
                  ],
                ),
        ),
      ),
    );
  }
}
