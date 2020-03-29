// the code to be displayed in the editor
const code = `/* replace 'selector' with '.editor' */
!!!selector!!! {
  display: block;
  background: #000000;
}

#hero > .card {
  box-sizing: border-box;
}

a:hover, button:hover {
  color: #FF0000;
}

html, body, input[type=text] {
  display: flex;
  background: !!!background!!!; /* change to '#29CA73' */
}`;


// all other options
export default {
  language: 'CSS',
  code,

  fields: {
    'selector': {
      default: 'selector',
      expected: '.editor',
      caseSensitive: true
    },

    'background': {
      default: '#F75F45',
      expected: '#29CA73',
      watch: {
        el: 'main',
        prop: 'background'
      },
    }
  }
};