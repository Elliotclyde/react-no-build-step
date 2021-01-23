import React from 'https://cdn.skypack.dev/react';
import ReactDom from 'https://cdn.skypack.dev/react-dom';
import htm from 'https://cdn.skypack.dev/htm';

const html = htm.bind(React.createElement);



const Card = ({message})=>{
    return html`<h1>Hello world with no builtt step</h1>`; 
}

ReactDom.render(html`<${Card}/>`,document.getElementById('root'));