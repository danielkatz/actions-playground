const exec = require('@actions/exec');
const core = require('@actions/core');
const os = require('os');

const IMAGE = core.getInput('image');
const COMMAND = core.getInput('command');

const RUNNER_WORKSPACE = process.env.RUNNER_WORKSPACE;
const WORKSPACE = RUNNER_WORKSPACE.split('/').pop();

async function runDockerContainer() {
    core.debug('run docker container');
    await exec.exec('docker', [
        'container',
        'run',
        '--workdir', '/github/workspace',
        '--rm',
        '--network', 'host',
        '-v', '/home/runner/work/_temp/_github_home:/github/home',
        '-v', '/home/runner/work/_temp/_github_workflow:/github/workflow',
        '-v', `${RUNNER_WORKSPACE}/${WORKSPACE}:/github/workspace`,
        IMAGE,
        'sh', '-cex', COMMAND,
    ]);
}

async function run() {
    const platform = os.platform();

    core.debug('check platform');
    if (platform === 'linux') {
        await runDockerContainer();
    } else {
        core.setFailed(`Only Support linux platform, this platform is ${os.platform()}`);
    }
}

run().then(() => {
    console.log('Run success');
}).catch((e) => {
    core.setFailed(e.toString());
});
