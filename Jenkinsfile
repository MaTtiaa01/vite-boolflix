pipeline {
  agent any
  stages {
    stage('Check') {
      steps {
        git(url: 'https://github.com/MaTtiaa01/vite-boolflix.git', branch: 'main')
      }
    }

    stage('') {
      steps {
        sh '''npm I
npm run build'''
      }
    }

  }
}