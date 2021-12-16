http://localhost:3000/api/findall
https://ybrdghqi3b.execute-api.ap-south-1.amazonaws.com/dev/api/findall

sls config credentials --provider aws -o --key xxx --secret xxx

 serverless deploy

serverless deploy function --function helloWorld
--------
 Serverless: Stack update finished...
Service Information
service: serverless-mongo
stage: dev
region: ap-south-1
stack: serverless-mongo-dev
resources: 12
api keys:
  None
endpoints:
  ANY - https://ybrdghqi3b.execute-api.ap-south-1.amazonaws.com/dev/{proxy+}
  ANY - https://ybrdghqi3b.execute-api.ap-south-1.amazonaws.com/dev
functions:
  api: serverless-mongo-dev-api
layers:
  None
------------
Rest - API - New 
https://rahmanfadhil.com/express-rest-api/

Controller : 
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes

Build Secure GraphQL API and Deploy to AWS
https://rahmanfadhil.com/deploy-graphql-aws-lamda/

https://www.serverless.com/framework/docs/providers/aws/guide/credentials
-----
service: serverless-mongo

provider:
 name: aws
 runtime: nodejs14.x
 memorySize: 128
 timeout: 10
 stage: dev
 region: ap-south-1

functions:
 api:
   handler: lambda.universal
   events:
     - http: ANY {proxy+}
     - http: ANY /