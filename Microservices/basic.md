what is microservices ?

Answer: In a microservice, each software application feature is separated from the other, in most cases with their respective servers and databases. Applications built with this kind of architecture are loosely coupled, also referred to as distributed applications. In one word
microservices are divied every service into part by part.

Datamangement Issues:

Datamanagement is most hard job in microservices. There are two type of things for database management 
1. Sync 
2. Async

Note: This is not similer with javascript sync and async it is totally different.

Note on Sync Communication:

Pros:

1. Conceptually easy to understand
 

cons:

1. Introduces a dependency between services
2. If ant inter-service request fails, the overall request fails
3. The entire request is only as fast ast the slowest request















