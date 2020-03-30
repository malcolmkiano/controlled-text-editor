export default function CSS(lines) {
  let output = [];
  lines.forEach(line => {

    // to hold the output for the current line
    let lineoutput = '';
    let linetype = 'line';

    // highlight tag selectors
    const selectorlist = line.split(/\s{|{/);
    if (selectorlist.length > 1) {
      selectorlist.forEach(set => {
        if (set) {

          // multiple selectors in one rule?
          const selectors = set.split(/,\s|,/);
          selectors.forEach(group => {

            linetype = 'line-selector';

            // direct child, child, or adjacent selectors?
            const portions = group.split(/(\s>\s|>)|(\s\+\s|\+)|(\s~\s|~)|(,\s|,)|(\s)/);
            portions.forEach(selector => {
              if (!selector) return false;

              // split into tags and pseudo-elements/state-selectors
              const parts = selector.split(/::|:/);
              const raw = parts[0];
              if (raw.length > 0) {

                // check for attribute selectors
                let inner = raw.split(/\[/);
                if (inner.length > 1) inner[1] = '[' + inner[1];

                inner.forEach(segment => {
                  if (!segment) return false;

                  // determine selector type
                  let type = 'tag';
                  if (segment.match(/(\s>\s|>)|(\s\+\s|\+)|(\s~\s|~)|(,\s|,)/))
                    type = 'spec';
                  if (segment.startsWith('#'))
                    type = 'id';
                  if (segment.startsWith('.') || segment.startsWith('['))
                    type = 'selector';

                  lineoutput += `<span class="${type}">${segment}</span>`;

                });
              }

              // pseudo-selectors
              if (parts.length > 1) {
                const ps = selector.split(parts[0])[1].split(parts[1])[0];
                lineoutput += `<span class="pseudo">${ps + parts[1]}</span>`;
              }

            });

            // add commas
            if (selectors.findIndex(item => item === group) !== selectors.length - 1) {
              lineoutput += ', ';
            }

          });

        }

        else {
          lineoutput += ' {';
        }

      });

    }

    // highlight properties & values
    const ruleparts = line.split(/;/);
    if (ruleparts.length > 1) {

      linetype = 'line-rule';

      const definition = ruleparts[0].split(/\t|\s\s/)[1];
      const space = ruleparts[0].split(definition)[0];

      const rule = definition.split(/:\s|:/);
      const prop = rule[0];
      const val = rule[1];
      lineoutput += space;
      lineoutput += `<span class="prop">${prop}</span>: `;

      // value highlighting
      lineoutput += `<span class="val">${val}</span>`;
      lineoutput += `;`;

      // space between semi-colon and comma
      if (ruleparts[1])
        lineoutput += ' ';

    }

    // highlight comments
    const comments = line.split(/\/\*/);
    if (comments.length > 1) {

      if (linetype === 'line') linetype = 'line-comment';

      comments.forEach(comment => {
        if (comment.endsWith('*/')) {
          lineoutput += `<span class="comment">/*${comment.split(/\*\//)[0]}*/</span>`;
        }
      });
    }

    // closing rules
    if (line.includes('}')){
      if (linetype === 'line') linetype = 'line-closing';
      lineoutput += '}';
    }

    // send it out
    output.push({
      content: lineoutput,
      type: linetype
    });

  });

  return output;

}
