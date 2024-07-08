import sdk from '@stackblitz/sdk';
import { sourceCode, highlightedCode } from './source-code';

// Setup
document.getElementById('code').innerHTML = await highlightedCode;

const btn = document.getElementById('btn');

// Opening the project
btn.addEventListener('click', () => {
  sdk.openProject({
    template: 'create-react-app',
    files: {
      'index.js': ``,
      'index.html': `<h1>Hello, StackBlitz!</h1>`,
    },
  });
});
