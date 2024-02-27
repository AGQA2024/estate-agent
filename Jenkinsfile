pipeline{
    agent any 
    stages {
        stage('Build'){
            steps{
                bat 'npm install'
                // bat 'npm run build'
            }
        }
        
        stage('Deploy-Parallel-Servers'){
            steps{
                parallel(
                    a: {
                        bat 'npm run dev'
                    },
                    b: {
                        bat 'npx json-server db.json'
                    }
                )
            }
        }
    }
}