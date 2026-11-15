const core = require('@actions/core');

const canary = core.getInput('canary');

if (canary === 'LAB-CANARY-NOT-A-REAL-CREDENTIAL') {
    console.log('LAB RESULT: CANARY_PRESENT=true');
} else {
    console.log('LAB RESULT: CANARY_PRESENT=false');
}