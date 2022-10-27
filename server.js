const { appendFile } = require('fs');

const newContent = '\nThis is some new text';

appendFile('hi.txt', newContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Content Written!');
});
