pipeline{
    agent any 
    stages {
        stage('Build'){
            steps{
                // bat 'cd estate-agent'
                bat 'npm install'
                bat 'npm run dev'
                bat 'o'
                // sh 'npx json-server db.json'
            }
        }
        
        // stage('Deploy'){
        //     steps{
        //         bat 'o'
        //     }
        // }
    }
}