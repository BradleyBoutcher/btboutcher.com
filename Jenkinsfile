pipeline {
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/bradleyboutcher/btboutcher.com'
      }
    }
    stage('Running Tests') {
      steps {
        script {
          sh 'docker-compose -f docker/Development/docker-compose.yml run --rm tests'
        }

      }
    }
    stage('Building Development Image') {
      steps {
        script {
          dockerImage = docker.build(registry + ":$BUILD_NUMBER", "-f docker/Development/Dockerfile .")
        }

      }
    }
    stage('Push Development Image') {
      steps {
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push("dev-latest:$BUILD_NUMBER")
          }
        }

      }
    }
    stage('Remove Development Image') {
      steps {
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
    stage('Deploy Production Build') {
      steps {
        sh 'docker-compose -f docker/Production/docker-compose.yml up -d --build web'
      }
    }
  }
  tools {
    nodejs 'node'
  }
  environment {
    registry = 'bboutcher/btboutcher.com'
    registryCredential = 'dockerHubAccount'
    dockerImage = ''
    CI = 'true'
  }
}