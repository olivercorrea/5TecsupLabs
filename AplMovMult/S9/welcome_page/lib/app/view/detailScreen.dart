import 'package:flutter/material.dart';

class DetailScreen extends StatelessWidget {
  final Map<String, dynamic> imageData;

  const DetailScreen({super.key, required this.imageData});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(imageData['description']),
      ),
      body: Center(
        child: Image.asset(
          imageData['image'],
          width: 300,
          height: 300,
        ),
      ),
    );
  }
}