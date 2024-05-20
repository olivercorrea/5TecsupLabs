import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';
import 'package:welcome_page/app/view/welcomePage.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  bool showLottie = true;

  @override
  void initState() {
    super.initState();
    Future.delayed(const Duration(seconds: 3), () {
      setState(() {
        showLottie = false;
      });
      // Navegar a WelcomePage después del retraso
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => const WelcomePage()),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Center(
          child: showLottie
              ? Lottie.network(
                  'https://lottie.host/fc3ec5dd-62c6-4db7-8e64-f96018ab6207/3OWEqJhFs2.json')
              : const CircularProgressIndicator(), // loader widget
        ),
      ),
    );
  }
}