import 'package:camera/camera.dart';
import 'package:flutter/material.dart';

import '../../main.dart';

class CameraScreen extends StatefulWidget {
  const CameraScreen({super.key});

  @override
  _CameraScreenState createState() => _CameraScreenState();
}

class _CameraScreenState extends State<CameraScreen>
    with WidgetsBindingObserver {
  CameraController? controller;
  bool _isCameraInitialized = false;

  void onNewCameraSelected(CameraDescription cameraDescription) async {
    final previousCameraController = controller;
    // Instancia el controlador de cámara
    final CameraController cameraController = CameraController(
      cameraDescription,
      ResolutionPreset.high,
      imageFormatGroup: ImageFormatGroup.jpeg,
    );

    // Liberando el controlador anterior
    await previousCameraController?.dispose();

    // Reemplazando con el nuevo controlador
    if (mounted) {
      setState(() {
        controller = cameraController;
      });
    }

    // Actualizando la interfaz de usuario si el controlador se actualiza
    cameraController.addListener(() {
      if (mounted) setState(() {});
    });

    // Inicializando el controlador
    try {
      await cameraController.initialize();
    } on CameraException catch (e) {
      print('Error al inicializar la cámara: $e');
    }

    // Actualizando el booleano
    if (mounted) {
      setState(() {
        _isCameraInitialized = controller!.value.isInitialized;
      });
    }
  }

  // El primer índice de la lista de cámaras suele ser la cámara trasera del dispositivo.
  @override
  void initState() {
    onNewCameraSelected(cameras[0]);
    super.initState();
  }

  // liberar la memoria cuando la cámara no está activa
  @override
  void dispose() {
    controller?.dispose();
    super.dispose();
  }

  // Gestionar la liberación de los recursos de memoria
  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    final CameraController? cameraController = controller;

    // El estado de la aplicación cambió antes de que tuviéramos la oportunidad de inicializarlo.
    if (cameraController == null || !cameraController.value.isInitialized) {
      return;
    }

    if (state == AppLifecycleState.inactive) {
      // Liberar memoria cuando la cámara no está activa
      cameraController.dispose();
    } else if (state == AppLifecycleState.resumed) {
      // Volver a inicializar la cámara con las mismas propiedades
      onNewCameraSelected(cameraController.description);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _isCameraInitialized
          ? AspectRatio(
              aspectRatio: 1 / controller!.value.aspectRatio,
              child: controller!.buildPreview(), // Para visualizar la salida de la cámara
            )
          : Container(),
    );
  }
}
