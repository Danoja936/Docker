terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
}

provider "docker" {
  host = "unix:///var/run/docker.sock"
}

# Mongo container
resource "docker_container" "mongo" {
  name  = "mongo"
  image = "mongo:latest"

  ports {
    internal = 27017
    external = 27018
  }

  volumes {
    host_path      = "/mnt/c/Users/Danoja/Desktop/docker-project-main/terraform-docker/mongo_data"
    container_path = "/data/db"
  }
}

# Backend container
resource "docker_container" "backend" {
  name  = "backend"
  image = "danoja123/fruitshop-backend:latest"

  ports {
    internal = 3000
    external = 3000
  }

  depends_on = [docker_container.mongo]
}

# Frontend container
resource "docker_container" "frontend" {
  name  = "frontend"
  image = "danoja123/fruitshop-frontend:latest"

  ports {
    internal = 80
    external = 4000
  }

  depends_on = [docker_container.backend]
}

