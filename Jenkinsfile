pipeline{
    agent any 
    stages {
        stage('Build'){
            steps{
                sh 'npm install'
            }
        }
        
        stage('Deploy'){
            steps{
                sh 'npm run dev'
                sh 'npx json-server db.json'
            }
        }
    }
}