import 'package:flutter/material.dart';
import 'package:interactive_app/app/custom_button.dart';
import 'package:interactive_app/app/text_size_slider.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  Color _buttonColor = Colors.red;

  double _textSize = 20;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Interactive App'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            CustomButton(
              buttonColor: _buttonColor,
              onTap: () {
                setState(() {
                  _buttonColor =
                      _buttonColor == Colors.red ? Colors.blue : Colors.red;
                });
              },
            ),
            TextSizeSlider(
              textSize: _textSize,
              onChanged: (value) {
                setState(() {
                  _textSize = value;
                });
              },
            ),
            Text(
              'Este es un texto interactivo',
              style: TextStyle(fontSize: _textSize),
            ),
          ],
        ),
      ),
    );
  }
}