import boto3
dynamodb = boto3.client('dynamodb', region_name='us-east-2')
resp = dynamodb.execute_statement(Statement='UPDATE Books REMOVE Formats.Audiobook WHERE Author = \'Antje Barth\' AND Title = \'Data Science on AWS\'')
print(resp['Items'])
