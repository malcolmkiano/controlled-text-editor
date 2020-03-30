// import the parsers
import parseCSS from './parsers/CSS';

export function parseCode(snippet, locked=false, options={}) {

  // index all the parsers available
  const parsers = {
    'CSS': parseCSS
  };

  // hold all the output
  let output = ''; 

  const data = snippet.code.split(/\n/);
  const parse = parsers[snippet.language];

  // send to the appropriate parser
  let lines = parse(data); 

  // add inputs, tabs, and wrappers
  let linenum = 0;
  lines.forEach(line => {

    linenum++;

    // hold each line's output
    let linetype = line.type;
    let lineoutput = line.content;

    // find input fields in code (for controlled editing)
    // and create an input element for each
    const inputvals = lineoutput.split(/!!!(.+)!!!/);
    if (inputvals.length > 1) {
      const field = inputvals[1];
      const ref = snippet.fields[field];
      const input = `<input name=${field} type="text" value="${ref.defaultValue}"/>`;
      
      lineoutput = inputvals[0] + (locked ? ref.expectedValue : input) + inputvals[2];
    }

    // replace tab characters
    if (lineoutput.length === 0){
      linetype = 'line-blank';
      lineoutput = '<pre></pre>';
    }
    lineoutput = lineoutput.replace(/\s\s|\t/g, '<pre>\t</pre>');

    // wrap the line in a div & add it to the main output stream
    lineoutput = `<div data-number="${linenum}" class="${linetype}">${lineoutput}</div>`;
    output += lineoutput;

  });

  // fallback if nothing works
  if (output.length === 0) output = snippet.code;
  return output;

}