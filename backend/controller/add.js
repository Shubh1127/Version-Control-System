import fs from 'fs/promises';
import path from "path";
export async function add(filePath){
    const repoPath = path.resolve(process.cwd(),".mygit")
    const stagingPath=path.join(repoPath,"staging")
    try{

        await fs.mkdir(stagingPath,{ recursive: true });
        const fileName = path.basename(filePath);
        await fs.copyFile(filePath,path.join(stagingPath,fileName))
        console.log(`Added ${fileName} to staging area.`);
    }catch(err){
        console.error("Error adding file:", err);
    }
    console.log("File added to the repository")
}