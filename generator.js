#! /usr/bin/env node

const path = require('path')
const {execSync} = require('child_process')
const fs = require('fs-extra')

const appTitle = process.argv[2] || 'tram-one-app'

const processFile = (file, currentPath) => {
  const filePath = path.join(currentPath, file)
  const newFilePath = filePath
    .replace(path.join(__dirname, 'template'), path.join(process.cwd(), appTitle))

  // copy a directory
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    // make the directory
    if (fs.existsSync(newFilePath)) {
      console.warn(`Folder ${newFilePath} already exists`)
    } else {
      fs.mkdirSync(newFilePath)
    }

    // process all the files in the directory
    const files = fs.readdirSync(filePath)
    files.forEach(file => processFile(file, filePath))
    return
  }

  // copy a file
  if (fs.existsSync(newFilePath)) {
    console.warn(`File ${newFilePath} already exists`)
  } else {
    const newFile = fs.readFileSync(filePath)
    if (filePath.match(/.*\.(png|ttf)/)) {
      fs.appendFileSync(newFilePath, newFile)
    } else {
      // if it's not a binary file, treat it as a template
      const templateFile = newFile.toString().replace(/%TITLE%/g, appTitle)
      fs.appendFileSync(newFilePath, templateFile)
    }
  }
}

const filePath = path.join(__dirname, 'template')
const projectPath = path.join(process.cwd(), appTitle)
console.log(`Creating ${projectPath} `)
console.log('Copying over project files')
processFile('', filePath)
console.log('Installing NPM Depenedencies')
execSync('npm install', {cwd: projectPath, stdio: 'inherit'})
console.log('')
console.log('Finished!')
console.log(`Navigate to '${appTitle}', and run 'npm start' to get started!`)
