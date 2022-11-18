## Docker basic command cli

**docker build -t khalid7487/posts .**

``Build an image based on the dockerfile in the current directory. Tag it as 'khalid7487/posts' ``

**docker run [image id or image tag]**

``Create and start based on the provided image id on tag ``

**docker run -it [image id or image tag] [cmd]**

``create and start container but also override the default command ``

**docker ps**

``print out information about all of the running container``


**docker exec -it [container id] [cmd]**

``Execute the given command in a running container``

**docker logs [container id]**


``print out logs from the given container``

**Note: about docker ignore file**

``this file used to ignore file which on should not copy . works like .gitignore file``



