pipeline{
    agent any 
    stages {
        stage('Build'){
            steps{
                bat 'npm install'
                bat 'npm run dev'
                // sh 'npx json-server db.json'
            }
        }
        
        stage('Deploy'){
            steps{
                bat 'o'
            }
        }
    }
}