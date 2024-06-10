import 'package:flutter/material.dart';

class TextSizeSlider extends StatelessWidget {
  final double textSize;
  final ValueChanged<double> onChanged;

  const TextSizeSlider({super.key, required this.textSize, required this.onChanged});

  @override
  Widget build(BuildContext context) {
    return Slider(
      value: textSize,
      min: 10,
      max: 50,
      divisions: 10,
      label: 'Tamaño del texto',
      onChanged: onChanged,
    );
  }
}