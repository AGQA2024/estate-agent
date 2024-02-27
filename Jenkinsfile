pipeline{
    agent any 
    stages {
        stage('Build'){
            steps{
                bat 'npm install'
                bat 'npm run build'
            }
        }
        
        stage('Deploy-Parallel-Servers'){
            steps{
                parallel(
                    a: {
                        bat 'npm run preview'
                    },
                    b: {
                        bat 'npx json-server db.json'
                    }
                )
            }
        }
    }
}