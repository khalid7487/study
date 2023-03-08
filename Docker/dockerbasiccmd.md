## Docker basic command cli

**docker build -t khalid7487/posts .**

``Build an image based on the dockerfile in the current directory. Tag it as 'khalid7487/posts' ``

**docker run [image id or image tag]**

``Create and start based on the provided image id on tag ``

**docker run -it [image id or image tag] [cmd]**

``create and start container but also override the default command ``

**sudo docker run -p 8080:8080 [image id or image tag]**

``this will expose port 8080 for docker``

**docker ps**

``print out information about all of the running container``


**docker exec -it [container id] [cmd]**

``Execute the given command in a running container``

**docker logs [container id]**


``print out logs from the given container``

**Note: about docker ignore file**

``this file used to ignore file which on should not copy . works like .gitignore file``



**Geting started**

``Suppose you want to make a directory support docker go this directory and Make a docker file``

## Docker file syntax:

# syntax=docker/dockerfile:1
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
EXPOSE 3000

**Build the container image command:**
   docker build -t getting-started .

**Docker run**
   docker run -dp 3000:3000 getting-started

``You use the -d flag to run the new container in “detached” mode (in the background). You also use the -p flag to create a mapping between the host’s port 3000 to the container’s port 3000. Without the port mapping, you wouldn’t be able to access the application.``


## Update the application

If you want to update your application  you need to docker build again :
     ``docker build -t getting-started .``

**Remove old container**
    ``docker ps``
   ``docker stop <the-container-id>``
   ``docker rm <the-container-id>``
**Docker run again**
   docker run -dp 3000:3000 getting-started

## share applications Link: https://docs.docker.com/get-started/04_sharing_app/


## Persist the DB:
     data persist is terminology which is give you ability to store database. If your container is remove  or destroy still you get data from your persist volume.

**!important, For Persist DB you need to make volume**

**Create volume cmd:**  ``docker volume create todo-db``
**See crate volume:** ``docker volume ls``

``Start the todo app container, but add the --mount option to specify a volume mount. We will give the volume a name, and mount it to /etc/todos in the container, which will capture all files created at the path.``
**Start with mount point command:** `` docker run -dp 3000:3000 --mount type=volume,src=todo-db,target=/etc/todos getting-started``


## Use bind mounts 
     It is almost same things like persistance db only different is the you can specify 
**See docs:** https://docs.docker.com/get-started/06_bind_mounts/



