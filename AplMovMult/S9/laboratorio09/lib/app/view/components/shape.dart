import 'package:flutter/material.dart';

class Shape extends StatelessWidget {
  const Shape({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Image.asset(
        'assets/images/Vector.png',
        width: 141,
        height: 129,
      ),
    );
  }
}
