/* SPCFORK - 2023-06-20 - too lazy to be ""fancy"" */

var editor = document.getElementById('editor');
var preview = document.getElementById('preview');

var htmlCode;

editor.addEventListener('input', function() {
  var chubmlCode = editor.value;
  htmlCode = CHUBparse(chubmlCode);
  preview.innerHTML = htmlCode;
});

var settheme = (a) => {
  document.documentElement.style.setProperty('--primary-color', `var(--${a})`);
}

const downloadFile = () => {
  const link = document.createElement("a");
  const content = document.querySelector("#editor").value;
  const file = new Blob([content], { type: 'text/plain' });
  
  link.href = URL.createObjectURL(file);
  link.download = "sample.txt";
  
  link.click();
  
  URL.revokeObjectURL(link.href);
};

const downAsChub = () => {
  const link = document.createElement("a");
  const content = htmlCode.trim();
  const file = new Blob([content], { type: 'text/plain' });
  
  link.href = URL.createObjectURL(file);
  link.download = "sample.txt";
  
  link.click();
  
  URL.revokeObjectURL(link.href);
};

console.log(CHUBparse(`
div;
  hey;
`))

// function htmlToChubML(html) {
//   const doc = new DOMParser().parseFromString(html, 'text/html');
  
//   function getChubML(node, indent = '') {
//     let chubML = '';

//     // Process node name
//     chubML += `${indent}${node.nodeName.toLowerCase()}`;

//     // Process attributes
//     const attrs = Array.from(node.attributes);
//     if (attrs.length > 0) {
//       attrs.forEach((attr) => {
//         chubML += ` %${attr.name}="${attr.value}"`;
//       });
//     }

//     // Process child nodes
//     if (node.childNodes.length > 0) {
//       chubML += ';\n';
//       const childNodes = Array.from(node.childNodes);
//       childNodes.forEach((child) => {
//         if (child.nodeType === Node.TEXT_NODE) {
//           chubML += `${indent}  "${child.textContent.trim()}";\n`;
//         } else if (child.nodeType === Node.ELEMENT_NODE) {
//           chubML += getChubML(child, `${indent}  `);
//         }
//       });
//       chubML += `${indent}//\n`;
//     } else {
//       chubML += ';\n';
//     }

//     return chubML;
//   }

//   return getChubML(doc.documentElement);
// }


const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Website</title>
    </head>
    <body>
      <h1>Welcome to my website</h1>
      <p>This is the homepage</p>
    </body>
  </html>
`;

const chubML = htmlToChub(html);
console.log(chubML);
