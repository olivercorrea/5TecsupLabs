import 'package:flutter/material.dart';
import 'package:welcome_page/app/view/imageDetailScreen.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage>
    with SingleTickerProviderStateMixin {
  late TabController _tabController;

  // Lista de imágenes, descripciones y detalles
  final List<Map<String, dynamic>> imageData = [
    {
      'image': 'assets/images.jpeg',
      'description': 'Trituradora de quijada',
      'details':
          'Descripción: Reduce el tamaño inicial del mineral en trozos más pequeños. Funciona mediante la compresión y liberación del mineral entre dos mandíbulas. \nDetalles: Tamaño de alimentación, capacidad, tipo de quijada (simple o doble), potencia del motor.'
    },
    {
      'image': 'assets/planta2.jpg',
      'description': 'Clasificador en trommel',
      'details': 
          'Descripción: Separa el mineral en función del tamaño utilizando un cilindro rotatorio con orificios perforados. \nDetalles: Diámetro del trommel, tamaño de los orificios, velocidad de rotación, caudal de agua.'
    },
    {
      'image': 'assets/planta3.jpg',
      'description': 'Clasificador en espiral',
      'details': 'Detalles de la planta 3...'
    },
    {
      'image': 'assets/planta4.jpg',
      'description': ' Clasificador ciclónico',
      'details': 'Detalles de la planta 4...'
    },
    {
      'image': 'assets/planta5.jpg',
      'description': 'Molino de bolas',
      'details': 'Detalles de la planta 5...'
    },
    {
      'image': 'assets/planta6.png',
      'description': 'Celda de flotación',
      'details': 'Detalles de la planta 6...'
    },
    {
      'image': 'assets/planta7.jpg',
      'description': 'Filtro prensa',
      'details': 'Detalles de la planta 7...'
    },
    {
      'image': 'assets/planta8.jpg',
      'description': 'Secador rotatorio',
      'details': 'Detalles de la planta 8...'
    },
  ];

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 3, vsync: this);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('InfoPilot'),
        actions: [
          IconButton(
            icon: const Icon(Icons.exit_to_app),
            onPressed: () {},
          ),
        ],
      ),
      body: TabBarView(
        controller: _tabController,
        children: [
          Container(color: Colors.red),
          GridView.count(
            crossAxisCount: 2,
            children: List.generate(imageData.length, (index) {
              return InkWell(
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => ImageDetailScreen(
                        image: imageData[index]['image'],
                        description: imageData[index]['description'],
                        details: imageData[index]['details'],
                      ),
                    ),
                  );
                },
                splashColor: Colors.amber, // Color del efecto de splash
                child: Container(
                  margin: const EdgeInsets.all(10),
                  decoration: BoxDecoration(
                    color: Colors.grey[200],
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Image.asset(
                        imageData[index]['image'],
                        width: 100,
                        height: 100,
                      ),
                      const SizedBox(height: 10),
                      Text(imageData[index]['description']),
                    ],
                  ),
                ),
              );
            }),
          ),
          Container(color: Colors.blue),
        ],
      ),
      bottomNavigationBar: Container(
        color: Colors.grey[300],
        child: TabBar(
          controller: _tabController,
          indicatorColor: Colors.deepPurple,
          labelColor: Colors.deepPurple,
          unselectedLabelColor: Colors.black54,
          tabs: const [
            Tab(
              icon: Icon(Icons.chat),
            ),
            Tab(
              icon: Icon(Icons.home),
            ),
            Tab(
              icon: Icon(Icons.person),
            ),
          ],
        ),
      ),
    );
  }
}
