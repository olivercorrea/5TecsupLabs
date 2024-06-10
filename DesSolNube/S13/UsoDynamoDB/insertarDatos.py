import boto3
import json
# Configurar el cliente de DynamoDB
dynamodb = boto3.resource('dynamodb')
# Especificar el nombre de tu tabla
table_name = 'Books'
table = dynamodb.Table(table_name)
# Leer los datos del archivo JSON
with open('insertarDatos.json') as f:
    data = json.load(f)
# Insertar cada item en la tabla de DynamoDB
for item in data:
    table.put_item(Item=item)
print("Datos insertados exitosamente.")
