// import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:welcome_page/app/view/imageDetailScreen.dart';
import 'package:welcome_page/chat/chat_bot.dart';
import 'package:flutter/services.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage>
    with SingleTickerProviderStateMixin {
  late TabController _tabController;

  final List<Map<String, dynamic>> imageData = [
    {
      'image': 'assets/chancado1.png',
      'description': 'Área chancado',
      'details':
          'Descripción: Es la primera etapa para el beneficio de minerales; y consiste en la aplicación de fuerza mecánica para romper los trozos grandes de mineral hasta reducirlos a un tamaño menor (fragmentos ) utilizando fuerzas de comprensión y en menor proporción fuerzas de fricción, flexión, cizallamiento u otras se realiza en máquinas que se mueven a velocidad media o baja en una trayectoria fija y que ejercen presiones inmensas a bajas velocidades, que se caracterizan porque sus elementos trituradores no se tocan y las condiciones principales de esta operación son la oscilación y la velocidad de oscilación, y el factor que influye esta condición de operación son las características del mineral (humedad, tamaño y dureza). \nSeguridad: Para la planta piloto es necesario la seguridad por lo tanto se hará uso de los epps necesarios (casco, lentes de seguridad, mameluco, respirador anti polvo, tapones de oído, zapatos de seguridad). Tambien en la zaranda es necesario poner una guarda de protección para evitar posibles daños al operador y/o trabajadores.'
    },
    {
      'image': 'assets/molienda1.png',
      'description': 'Área Molienda',
      'details':
          'Descripción: La liberación de un mineral se inicia con el chancado y termina con la molienda; esta es muy importante porque de él depende el tonelaje y la liberación del mineral valioso que después debe concentrarse. en esta etapa debe liberarse completamente las partes valiosas del mineral (sulfuros y/o óxidos) de la ganga, antes de proceder a la concentración la operación de molienda normalmente se efectúa en etapa primaria en los molinos de barras y secundaria en los de bolas. esta operación se logra con alta eficiencia cuando los molinos son operados en condiciones normales en cuanto a uniformidad del tamaño de alimentación, dilución, velocidad crítica de operación, nivel de bolas y de potencia de motor aceptables. cuanto más fino se muele el mineral, mayor es el costo de molienda y hasta cierto grado, una molienda más fina conlleva a una mejora en la recuperación de valores. de acuerdo a esto la molienda óptima es aquella malla de molienda en el cual los beneficios son máximos, cuando se considera tanto el costo de energía. \nCarga de Mineral: La cantidad de carga que se alimenta al molino debe ser controlada, procurando que la carga sea lo máximo posible. si se alimenta poca carga se pierde capacidad de molienda y se gasta inútilmente bolas y chaquetas. si se alimenta demasiada carga se sobrecarga el molino y al descargarlo se pierde tiempo y capacidad de molienda. Si la densidad de la descarga del molino es elevada se debe a un exceso de carga o poca agua. si la densidad está por debajo de lo normal, se debe a la deficiencia de carga o exceso de agua.'
    },
    {
      'image': 'assets/flotacion1.png',
      'description': 'Área Flotación',
      'details':
          'Descripción: La flotación por espumas es un proceso físico - químico de la concentración de minerales finamente molidos. el proceso comprende el tratamiento químico de una pulpa de mineral a fin de crear condiciones favorables para la adhesión de ciertas partículas de minerales a las burbujas de aire. tiene por objeto la separación de especies minerales, divididos a partir de una pulpa acuosa, aprovechando sus propiedades de afinidad (hidrofílico) o repulsión (hidrofóbico) por el agua. las especies valiosas o útiles constituyen una fracción menor del mineral, mientras que las especies no valiosas o estériles constituyen la mayor parte el carácter hidrofílico o de afinidad hace que estas partículas se mojen, permanezcan en suspensión en la pulpa, para finalmente hundirse. el carácter hidrofóbico o de repulsión evita el mojado de las partículas minerales que pueden adherirse a las burbujas y ascender estas propiedades de algunos minerales tienen en forma natural, pero pueden darse o asentarse mediante los reactivos de flotación. \nProceso: Los minerales hidrofílicos e hidrofóbicos de una pulpa acuosa se pueden separar entre sí, después de ser finamente molidos y acondicionado con los reactivos químicos que hacen más pronunciadas las propiedades hidrofílicas e hidrofóbicas, haciendo pasar burbujas de aire a través de la pulpa. las partículas hidrofílicas se van a mojar y caer al fondo de la celda de flotación. de esta forma se puede separar un mineral que contiene en los casos más simples dos componentes, un útil y otra estéril, en dos productos: un concentrado de la parte valiosa y un relave que contiene la parte estéril.'
    },
    {
      'image': 'assets/espesamiento1.png',
      'description': ' Área Espesamiento',
      'details':
          'En esta área se realiza el acto de asentamiento de partículas sólidas en un medio fluido, bajo la fuerza de la gravedad, centrífuga, magnética o eléctrica. Es la operación consistente en separar de una suspensión un fluido claro que sobrenada y un lodo bastante denso que contenga una elevada concentración de materias sólidas. En la industria, la sedimentación de las suspensiones acuosas es un proceso continuo que se realiza en los espesadores, que son grandes depósitos cilíndricos, recipientes de cono invertido equipados con rastrillos de movimiento lento para el arrastre de los lodos espesados hacia un orificio central de descarga. El producto de la flotación llega por un canal de alimentación a un recipiente alimentador situado en la parte superior central del tanque. La suspensión precipitada forma un lodo espeso que se descarga por el fondo. El fluido claro fluye hacia los bordes del depósito, es descargado por el rebose sobre el borde periférico. \nProceso: Esta área se basa en los espesadores, los cuales son tanques o aparatos que sirven para espesar los concentrados y relaves de la flotación, por el procedimiento de quitarles parte del agua que contienen. Es decir, el trabajo de los espesadores es mantener en movimiento las pulpas de concentrado y relave, haciéndolos más densos y espesos por la eliminación de cierto porcentaje de agua. El agua clara rebalsa por la parte superior por canales. El espesador es un aparato que trabaja en forma continua, tiene un rastrillo que sirve para empujar lentamente, hacia el centro, las partículas sólidas que se van asentando en el fondo en forma de barro espeso, a fin de sacarlos por la descarga (cono). Al mismo tiempo, los rastrillos evitan que el lodo se endurezca demasiado en el fondo; y si no existieran estos no habría forma de sacarlos o descargarlos.'
    }
  ];

  late List<Map<String, dynamic>> developersData;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 3, vsync: this);

    developersData = [
    {
      'image': 'assets/developer1.jpeg',
      'name': 'Oliver Correa',
    },
    {
      'image': 'assets/developer1.jpeg',
      'name': 'Jorge Firata',
    },
    {
      'image': 'assets/developer1.jpeg',
      'name': 'Miguel Flores',
    },
    {
      'image': 'assets/developer1.jpeg',
      'name': 'Fabian Hilares',
    },
    {
      'image': 'assets/developer1.jpeg',
      'name': 'David Huayhua',
    },
  ];

  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  void _exitApp() {
    // Cierra la aplicación y elimina todas las rutas del Navigator
    // Navigator.popUntil(context, (route) => route.isFirst);
    SystemNavigator.pop(); // Cierra la aplicación
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('InfoPilot'),
        actions: [
          IconButton(
            icon: const Icon(Icons.exit_to_app),
            onPressed: _exitApp,
          ),
        ],
      ),
      body: TabBarView(
        controller: _tabController,
        children: [
          // Chatbot view
          const ChatBot(), // ! Chatbot
          // Grid view
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
                splashColor: Colors.amber,
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
          // Developers view
          ListView.builder(
            itemCount: developersData.length,
            itemBuilder: (context, index) {
              return ListTile(
                leading: CircleAvatar(
                  backgroundImage: AssetImage(developersData[index]['image']),
                ),
                title: Text(developersData[index]['name']),
              );
            },
          ),
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
