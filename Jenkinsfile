pipeline {
  agent {
    docker {
      image 'node'
      args '-u root'
    }

  }
  stages {
    stage('Build') {
      steps {
        echo 'Building...'
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        echo 'Testing...'
        sh 'npm test'
      }
    }
    stage('Deliver') {
      steps {
        sh 'npm start'
        input ' Finished using the web site? (Click "Proceed" to continue'
        sh 'npm eject'
      }
    }
  }
  environment {
    CI = 'true'
  }
}