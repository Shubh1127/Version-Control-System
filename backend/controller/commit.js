import fs from 'fs/promises';
import path from "path";
import { v4 as uuidv4 } from 'uuid'
export async function commit(message){
    const repoPath = path.resolve(process.cwd(),".mygit")
    const stagingPath=path.join(repoPath,"staging")
    const commitsPath = path.join(repoPath,"commits")
    try{
       
        const commitID = uuidv4();
        const commitDir = path.join(commitsPath,commitID)
        await fs.mkdir(commitDir,{ recursive: true })

        const files = await fs.readdir(stagingPath)
        for(const file of files){
            await fs.copyFile(
                path.join(stagingPath,file),
                path.join(commitDir,file)
            )
        }
        await fs.writeFile(path.join(commitDir,"commit.json"),JSON.stringify({message,date:new Date().toISOString()}))
        console.log(`Committed changes as ${commitID} with message: "${message}"`);
    }catch(err){
        console.error("Error during commit:", err);
    }

}