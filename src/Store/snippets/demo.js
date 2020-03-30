// the code to be displayed in the editor
const code = `/* replace 'selector' with '.editor' */
!!!selector!!! {
  display: block;
  background: #000000;
}

#hero > .card {
  box-sizing: border-box;
}

button:hover {
  color: #FF0000;
}

html, body, input[type=text] {
  display: flex;
  background: !!!background!!!; /* change to '#29CA73' */
}`;

const fields = {
  'selector': {
    defaultValue: 'selector',
    expectedValue: '.editor',
    matchType: 'exact'
  },

  'background': {
    defaultValue: '#F75F45',
    expectedValue: '#29CA73',
    watch: {
      el: 'main',
      prop: 'background'
    },
  }
}


// all other options
export default {
  language: 'CSS',
  code,
  fields
};