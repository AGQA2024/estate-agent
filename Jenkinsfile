pipeline{
    agent any 
    stages {
        stage('Build'){
            steps{
                bat 'npm install'
            }
        }
        
        stage('Deploy'){
            steps{
                bat 'npm run dev'
                // sh 'npx json-server db.json'
                bat 'o'
            }
        }
    }
}