pipeline {
    // The agent section configures on which nodes or machine the pipeline can be run. 
    // Specifying  - agent any - means that Jenkins will run the job on any of the 
    // available nodes 
    agent any

    // Create NodeJS tool from Global tool configuration
    // Word 'NodeJS' should match to name of NodeJS configuration
    tools { nodejs 'NodeJS' }

    // Docker credentials on Jenkins

    environment {
        DOCKERHUB_CREDENTIALS = credentials('DOCKER_TOKEN')
    }

    stages {
       // this is not needed since this is done in Jenkins while
       // creating pipeline from SCM
       // but in case, this file need to be shared with someone else
       // then making checkout is required

        stage('checkout') {
            steps {
                git branch: 'main' ,credentialsId: 'GIT_TOKEN' ,url: 'https://github.com/Yogesh071/jenkins_learning.git'
            }
        }

        stage('Pre-cleanup') {
            steps {
                    sh 'rm -rf package-lock.json; rm -rf ./node_modules; rm -rf package-lock.json;'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install;'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test;'
            }
        }

        stage('BuildDockerImage') {
            steps {
                sh 'docker build -t yogesh071/cont-i-img:v4 .'
            }
        }

        stage('DockerLogin') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }

        stage('PushDockerImage') {
            steps {
                sh 'docker push yogesh071/cont-i-img:v4'
            }
        }
    }

    post {
        always {
            sh 'docker logout'
        }
    }
}
