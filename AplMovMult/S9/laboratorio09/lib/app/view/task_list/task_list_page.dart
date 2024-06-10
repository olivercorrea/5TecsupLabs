import 'package:laboratorio09/app/model/task.dart';
import 'package:laboratorio09/app/view/components/h1.dart';
import 'package:laboratorio09/app/view/components/shape.dart';
import 'package:flutter/material.dart';

class TaskListPage extends StatefulWidget {
  const TaskListPage({super.key});

  @override
  State<TaskListPage> createState() => _TaskListPageState();
}

class _TaskListPageState extends State<TaskListPage> {
  final taskList = <Task>[];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Task List'),
        leading: GestureDetector(
          onTap: () {
            Navigator.of(context).pop();
          },
          child: const Center(child: Text('Atrás')),
        ),
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: double.infinity,
            color: Theme.of(context).colorScheme.primary,
            child: Column(
              children: [
                const Row(children: [Shape()]),
                Column(
                  children: [
                    Image.asset('assets/images/tasks-list-image.png',
                        width: 120, height: 120),
                    const SizedBox(height: 16),
                    const H1('Completa tus tareas', color: Colors.white),
                  ],
                )
              ],
            ),
          ),
          const Padding(
            padding: EdgeInsets.only(left: 30, right: 30, top: 35),
            child: H1('Tareas'),
          ),
          const SizedBox(
            height: 20,
          ),
          Expanded(
            child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 30),
                child: ListView.separated(
                  itemCount: taskList.length,
                  itemBuilder: (_, index) => _TaskItem(
                    taskList[index],
                    onTap: () {
                      taskList[index].done = !taskList[index].done;
                      setState(() {});
                    },
                  ),
                  separatorBuilder: (_, __) => const SizedBox(height: 16),
                )),
          )
        ],
      ),
      floatingActionButton: Builder(
        builder: (BuildContext context) {
          return FloatingActionButton(
            onPressed: () {
              _showNewTaskModal(context);
            },
            child: const Icon(Icons.add, size: 50),
          );
        },
      ),
    );
  }

  void _showNewTaskModal(BuildContext context) {
    showModalBottomSheet(
        context: context,
        isScrollControlled: true,
        builder: (_) => _NewTaskModal(
              onTaskCreated: (Task task) {
                setState(() {
                  taskList.add(task);
                });
              },
            ));
  }
}

class _NewTaskModal extends StatelessWidget {
  _NewTaskModal({required this.onTaskCreated});

  final _controller = TextEditingController();
  final void Function(Task task) onTaskCreated;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(
        horizontal: 33,
        vertical: 23,
      ),
      decoration: const BoxDecoration(
        borderRadius: BorderRadius.vertical(top: Radius.circular(21)),
        color: Colors.white,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          const H1('Nueva tarea'),
          const SizedBox(height: 26),
          TextField(
            controller: _controller,
            decoration: InputDecoration(
              filled: true,
              fillColor: Colors.white,
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(16),
                // borderSide: BorderSide(color: Colors.grey),
              ),
              hintText: 'Descripción de tarea',
            ),
          ),
          const SizedBox(height: 26),
          ElevatedButton(
            onPressed: () {
              if (_controller.text.isNotEmpty) {
                final task = Task(_controller.text);
                onTaskCreated(task);
                Navigator.of(context).pop();
              }
            },
            child: const Text('Guardar'),
          )
        ],
      ),
    );
  }
}

class _TaskItem extends StatelessWidget {
  const _TaskItem(this.task, {this.onTap});

  final Task task;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Card(
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(21),
        ),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 21, vertical: 18),
          child: Row(
            children: [
              Icon(
                  task.done
                      ? Icons.check_box_rounded
                      : Icons.check_box_outline_blank,
                  color: Theme.of(context).colorScheme.primary),
              const SizedBox(width: 10),
              Text(task.title),
            ],
          ),
        ),
      ),
    );
  }
}
