import fs from 'fs/promises'; 
import path from "path";
export function initRepo(){
   const repoPath = path.resolve(process.cwd() ,".mygit")
   const commitsPath = path.join(repoPath,"commits");
    try{

        
    }catch(err){
        console.error("Error initializing repository:", err);
    }
}

