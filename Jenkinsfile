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
    // Run tests using docker-compose
    stage('Running Tests') {
      steps {
        script {
          sh 'make test'
        }
      }
    }
    // If successful, build an image
    stage('Building Image') {
      steps {
        script {
          dockerImage = docker.build(registry + ":$BUILD_NUMBER", "-f docker/Development/Dockerfile .")
        }
      }
    }
    // Push development image to repository
    stage('Push Development Image') {
      when {
        branch 'development'
      }
      steps {
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push();
          }
        }
      }
    }
    // Update 'staging' with merged image
    stage('Push Staging Image') {
      when {
        branch 'master'
      }
      steps {
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push('staging');
          }
        }
      }
    }
    // Update 'latest' only when production updates
    stage('Push latest Image') {
      when {
        branch 'production'
      }
      steps {
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push('latest');
          }
        }
      }
    }
    // Remove local image build 
    stage('Remove Development Image') {
      steps {
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
    /**
    * CD
    **/

    // Deploy build to staging environment, automatically updating as needed
    stage('Deploy Staging Build') {
      when {
        branch 'master'
      }
      steps {
        sh 'make staging'
      }
    }
    // Deploy production build, automatically updating as needed
    stage('Deploy Production Build') {
      when {
        branch 'production'
      }
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