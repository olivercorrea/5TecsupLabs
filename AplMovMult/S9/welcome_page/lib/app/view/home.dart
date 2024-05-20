import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage>
    with SingleTickerProviderStateMixin {
  late TabController _tabController;

  // Lista de imágenes y descripciones
  final List<Map<String, dynamic>> imageData = [
    {'image': 'assets/images.jpeg', 'description': 'Planta 1'},
    {'image': 'assets/planta2.jpg', 'description': 'Planta 2'},
    {'image': 'assets/planta3.jpg', 'description': 'Planta 3'},
    {'image': 'assets/planta4.jpg', 'description': 'Planta 4'},
    {'image': 'assets/planta5.jpg', 'description': 'Planta 5'},
    {'image': 'assets/planta6.png', 'description': 'Planta 6'},
    {'image': 'assets/planta7.jpg', 'description': 'Planta 7'},
    {'image': 'assets/planta8.jpg', 'description': 'Planta 8'},
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
              return Container(
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
