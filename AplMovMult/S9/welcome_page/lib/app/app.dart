import 'package:flutter/material.dart';
import 'package:welcome_page/app/view/splashScreen.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Bienvenida',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
            seedColor: const Color.fromARGB(255, 183, 58, 169)),
        useMaterial3: true,
      ),
      home: const SplashScreen(),
    );
  }
}
