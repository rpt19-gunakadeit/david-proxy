import App from './App.jsx';

var path = window.location.pathname.split('/');
console.log('path', path);
var productId = path[2]; 
var styleId = Number(path[3]); 

ReactDOM.render(<App productId={productId} styleId={styleId}/>, document.getElementById('root'));
