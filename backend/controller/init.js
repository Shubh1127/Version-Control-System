import fs from 'fs/promises'; 
import path from "path";
export async function initRepo(){
   const repoPath = path.resolve(process.cwd() ,".mygit")
   const commitsPath = path.join(repoPath,"commits");
    try{

        await fs.mkdir(repoPath,{ recursive: true })
        await fs.mkdir(commitsPath,{ recursive: true })
        await fs.writeFile(
            path.join(repoPath,"config.json"),
            JSON.stringify({ bucket:process.env.S3_BUCKET})
        );
        console.log("Initialized empty MyGit repository in", repoPath);
    }catch(err){
        console.error("Error initializing repository:", err);
    }
}

