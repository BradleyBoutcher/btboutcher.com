pipeline {
  agent any
  stages {
    /**
    * CI
    **/
    stage('Cloning Git') {
      steps {
        git 'https://github.com/bradleyboutcher/btboutcher.com'
      }
    }
    // If successful, build development image
    stage('Building Development Image') {
      steps {
        script {
          dockerImage = docker.build(registry + ":$BUILD_NUMBER", "-f docker/Development/Dockerfile .")
        }
      }
    }
    // Run tests using docker-compose
    stage('Running Tests') {
      steps {
        script {
          sh 'make tests'
        }

      }
    }
    // Save development image in repository
    stage('Push Development Image') {
      steps {
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push();
            dockerImage.push("latest")
          }
        }

      }
    }
    // Remove local development image
    stage('Remove Development Image') {
      steps {
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
    /**
    * CI
    **/

    // Deploy production build to server, automatically updating as needed
    stage('Deploy Production Build') {
      steps {
        sh 'make production'
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