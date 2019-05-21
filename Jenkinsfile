pipeline {
  environment {
    registry = "bboutcher/btboutcher.com"
    registryCredential = 'dockerHubAccount'
    dockerImage = ''
    CI = 'true'
  }
  agent any
  tools {nodejs "node" }
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/bradleyboutcher/btboutcher.com'
      }
    }
    stage('Build') {
       steps {
         sh 'npm install'
       }
    }
    stage('Test') {
      steps {
        sh 'npm test --no-watch'
      }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build("bboutcher/btboutcher.com", "-f dockerfile .")
        }
      }
    }
    stage('Deploy Image') {
      steps{
         script {
            withDockerRegistry( registry, registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
  }
}