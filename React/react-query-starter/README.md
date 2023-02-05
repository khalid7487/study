## benefit of react-query 
1. Persisted in your app memory and accessing or updating it is synchronous 
2. Persisted remotely and requires asynchronous APIs for fetching or updating 
3. Has shared ownership
4. Data can be updated by someone else without your knowledge
5. UI data may not be in sync with the remote data
6. Challenging when you gave to deal with caching, deduping multiple requests for the same 
   data, updating stale data in the background, performance optimizations etc.
  
  `It is also refetch api many time until it get response `
 
## you fetch data with dependent query For example:

` 1st you need to fetch user then using user id you need fetch another api during that time 
you can use enable fetchers in useQuery `