import boto3
from botocore.config import Config

s3 = boto3.client('s3', config=Config(signature_version='s3v4'))

def getObject(bucket, key):
    objectBody = s3.get_object(Bucket = bucket, Key = key)
    print(objectBody["Body"].read().decode("utf-8"))
    print("\n")

print('Original object from the S3 bucket:')
# Replace the two input parameters of getObject() below with 
# the S3 bucket name that you created in Step 1 and 
# the name of the file that you uploaded to the S3 bucket in Step 2
getObject("tutorial-bucket5", 
          "tutorial.txt")

print('Object transformed by S3 Object Lambda:')
# Replace the two input parameters of getObject() below with 
# the ARN of your S3 Object Lambda Access Point that you saved earlier and
# the name of the file with the transformed data (which in this case is
# the same as the name of the file that you uploaded to the S3 bucket 
# in Step 2)
getObject("arn:aws:s3-object-lambda:us-east-2:851725601707:accesspoint/tutorial-object-lambda-accesspoint",
          "tutorial.txt")              