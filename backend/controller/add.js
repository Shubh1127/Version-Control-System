import fs from 'fs/promises';
import path from "path";
export async function add(){
    const repoPath = path.resolve(process.cwd(),".mygit")
    const stagingPath=path.join(repoPath,"staging")
    console.log("File added to the repository")
}