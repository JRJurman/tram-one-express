const requireYML = require('require-yml')
const {execSync} = require('child_process')

const circleConfig = requireYML('./.circleci/config.yml')

const runCommands = circleConfig.jobs.build.steps
  .filter(step => step.run)
  .map(step => step.run)
  .forEach(step => {
    execSync(step, {stdio: 'inherit'})
  })
