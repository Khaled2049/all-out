// Create new link element
const style = document.createElement('link');
style.setAttribute('rel', 'stylesheet');
style.setAttribute('href', 'css/style.css');

// Append to the `head` element
document.head.appendChild(style);

// Create new link element
const fonts = document.createElement('link');
fonts.setAttribute('rel', 'stylesheet');
fonts.setAttribute('href', 'css/fonts.css');

// Append to the `head` element
document.head.appendChild(fonts);