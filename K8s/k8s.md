Prerequisite:
  You need to know little bit code.

Install K8S Process:
  https://www.fosstechnix.com/how-to-install-minikube-on-ubuntu-20-04-lts/


Important Terminology:

1. Kubernetes Cluster --> A collections of nodes + a master to manage them.

2. Node --> A virtual machine that will run our containers

3. Pod --> More or less a running container. Technically, a pod can run multiple containers(we won't do this)

4. Deployment --> Monitors a set of pods, make sure they are running and restarts them if they crash

5. service --> provides an easy-to-remember URL to access a running container.


**Kubernetes config files**
1. Tells kubernetes about the different deployments, pods and services (referred to as objects ) that we want to create

2. written in yaml syntax

3. Always store these files with our project source code - they are documentation!

4. We can create objects without config files - do not do this config files provide a precise definition of what your cluster is running





