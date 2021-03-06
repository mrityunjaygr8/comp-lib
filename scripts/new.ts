import chalk from "chalk";
import fs from "fs";
import yargs from "yargs/yargs";
import indexTs from "./templates/indexTs";
import indexVue from "./templates/indexVue";
import packageJson from "./templates/packageJson";
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv)).argv;
const isWin: boolean = process.platform === "win32";


let packageFolder: string = "";

if (isWin) {
    packageFolder = __dirname.substr(0, __dirname.lastIndexOf("\\")) + "\\packages\\"
} else {
    packageFolder = __dirname.substr(0, __dirname.lastIndexOf("/")) + "/packages/"
}

const newPackageName: string = argv._[0] as string;
const validNMPPackageName = /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;

if (!validNMPPackageName.test(newPackageName)) {
    console.log(chalk.red("The entered package name is not a valid NPM package name"));
    process.exit(0)
}

const newPackagePath: string = packageFolder + newPackageName;
if (fs.existsSync(newPackagePath)) {
    console.log(chalk.red("Component already exists"));
    process.exit(0);
}

const newPackageNameCamelCase: string = newPackageName.split('-').map(el => el[0].toUpperCase() + el.slice(1)).join("");

console.log(chalk.green(`${newPackagePath} created`));
fs.mkdirSync(newPackagePath);
fs.mkdirSync(newPackagePath + "/src");


const filesToCreate = [
    {
        filePath: "/src/index.vue",
        content: indexVue({ packageName: newPackageNameCamelCase })
    },
    {
        filePath: "/package.json",
        content: packageJson({ packageName: newPackageName })
    },
    {
        filePath: "/index.ts",
        content: indexTs({ packageName: newPackageNameCamelCase })
    },
]

filesToCreate.forEach((file) => {
    const fileBuffer = new Uint8Array(Buffer.from(file.content));
    fs.writeFileSync(`${newPackagePath}${file.filePath}`, fileBuffer);
    console.log(`Creating File: ${newPackagePath}${file.filePath}`);
})

console.log(chalk.green(`Done creating ${newPackageName}`));