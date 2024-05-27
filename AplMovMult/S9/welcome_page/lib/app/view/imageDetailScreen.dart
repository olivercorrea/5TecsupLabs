import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class ImageDetailScreen extends StatefulWidget {
  final String image;
  final String description;
  final String details;

  const ImageDetailScreen({
    super.key,
    required this.image,
    required this.description,
    required this.details,
  });

  @override
  State<ImageDetailScreen> createState() => _ImageDetailScreenState();
}

class _ImageDetailScreenState extends State<ImageDetailScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.description),
      ),
      body: Column(
        children: [
          Center(
            child: Image.asset(
              widget.image,
              width: 200,
              height: 200,
            ),
          ),
          const SizedBox(height: 10),
          Text(
            widget.details,
            textAlign: TextAlign.justify,
            style: GoogleFonts.oregano(
              textStyle: const TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.normal,
                color: Colors.black,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
