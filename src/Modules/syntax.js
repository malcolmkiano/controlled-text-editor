// import the parsers
import parseCSS from './parsers/CSS';

export function parseCode(snippet, locked=false) {

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

  lines.forEach(line => {

    // hold each line's output
    let lineoutput = line; 

    // find input fields in code (for controlled editing)
    // and create an input element for each
    const inputvals = lineoutput.split(/!!!(.+)!!!/);
    if (inputvals.length > 1) {
      const field = inputvals[1];
      const ref = snippet.fields[field];
      const input = `<input name=${field} type="text" size="${ref.default.length - 1}" value="${ref.default}"/>`;
      
      lineoutput = inputvals[0] + (locked ? ref.expected : input) + inputvals[2];
    }

    // replace tab characters
    if (lineoutput.length === 0) lineoutput = line ? line : '<pre></pre>';
    lineoutput = lineoutput.split(/\s\s|\t/).join('<pre>\t</pre>');

    // wrap the line in a div & add it to the main output stream
    lineoutput = `<div class="line">${lineoutput}</div>`;
    output += lineoutput;

  });

  // fallback if nothing works
  if (output.length === 0) output = snippet.code;
  return output;

}