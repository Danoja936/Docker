pipeline {
    agent any

    environment {
        IMAGE_FRONTEND = "danoja123/fruitshop-frontend:latest"
        IMAGE_BACKEND = "danoja123/fruitshop-backend:latest"
    }

    stages {

        stage('Checkout') {
            steps {
                echo "Cloning repository..."
                git branch: 'main', url: 'https://github.com/Danoja936/Docker.git'
            }
        }

        stage('Check Docker') {
            steps {
                sh 'docker --version'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                // Wrap in withCredentials so Jenkins injects username/password
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', 
                                                  passwordVariable: 'DOCKERHUB_PASSWORD', 
                                                  usernameVariable: 'DOCKERHUB_USERNAME')]) {
                    sh 'echo $DOCKERHUB_PASSWORD | docker login -u $DOCKERHUB_USERNAME --password-stdin'
                }
            }
        }

        stage('Build Frontend Image') {
            steps {
                dir('frontend') {
                    sh "docker build -t $IMAGE_FRONTEND ."
                }
            }
        }

        stage('Build Backend Image') {
            steps {
                dir('backend') {
                    sh "docker build -t $IMAGE_BACKEND ."
                }
            }
        }

        stage('Push Images') {
            steps {
                sh "docker push $IMAGE_FRONTEND"
                sh "docker push $IMAGE_BACKEND"
            }
        }

        stage('Deploy (optional)') {
            steps {
                echo "You can add docker-compose up commands here to run the containers."
            }
        }
    }

    post {
        always {
            echo "Cleaning up dangling images..."
            sh 'docker image prune -f'
        }
        success {
            echo "Pipeline completed successfully! Docker images pushed."
        }
        failure {
            echo "Pipeline failed!"
        }
    }
}
