import 'dart:async';
// import 'dart:convert';
// import 'package:http/http.dart' as http;
import 'package:socket_io_client/socket_io_client.dart' as IO;

class ChatService {
  final String _baseUrl = 'http://192.168.217.1:3000'; // servidorAI
  late IO.Socket _socket;
  final _botMessagesController = StreamController<String>.broadcast();

  Stream<String> get botMessages => _botMessagesController.stream;

  ChatService() {
    _initSocket();
  }

  void _initSocket() {
    _socket = IO.io(_baseUrl, <String, dynamic>{
      'transports': ['websocket'],
      'autoConnect': false,
    });
    _socket.connect();
    _socket.on('botMessage', (data) => _botMessagesController.add(data));
  }

  // Future<String> getBotGreeting() async {
  //   final response = await http.get(Uri.parse('$_baseUrl/api/chat/greeting'));
  //   if (response.statusCode == 200) {
  //     return jsonDecode(response.body)['message'];
  //   } else {
  //     throw Exception('Failed to load bot greeting');
  //   }
  // }

  void sendMessage(String message) {
    _socket.emit('userMessage', message);
  }

  void dispose() {
    _botMessagesController.close();
    _socket.disconnect();
  }
}