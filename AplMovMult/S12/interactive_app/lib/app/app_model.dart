import 'package:flutter/material.dart';

class AppModel with ChangeNotifier {
  double _textSize = 20;

  double get textSize => _textSize;

  void updateTextSize(double value) {
    _textSize = value;
    notifyListeners();
  }
}