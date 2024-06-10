import 'package:flutter/material.dart';
import 'package:interactive_app/app/home_screen.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: 'Interactive App',
      home: HomeScreen(),
    );
  }
}
