pipeline {
  agent any
  stages {
    stage('Check') {
      steps {
        git(url: 'https://github.com/MaTtiaa01/vite-boolflix.git', branch: 'main')
      }
    }

    stage('Build') {
      steps {
        sh 'npm install && npm run build'
      }
    }

  }
}