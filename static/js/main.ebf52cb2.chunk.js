(this["webpackJsonpcontrolled-text-editor"]=this["webpackJsonpcontrolled-text-editor"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(6),l=n.n(c),o=(n(13),n(1)),r=n(2),i=n(3),p=n(4),d=[{language:"CSS",code:"/* replace 'selector' with '.editor' */\n!!!selector!!! {\n  display: block;\n  background: #000000;\n}\n\n#hero > .card {\n  box-sizing: border-box;\n}\n\na:hover, button:hover {\n  color: #FF0000;\n}\n\nhtml, body, input[type=text] {\n  display: flex;\n  background: !!!background!!!; /* change to '#29CA73' */\n}",fields:{selector:{default:"selector",expected:".editor",caseSensitive:!0},background:{default:"#F75F45",expected:"#29CA73",watch:{el:"main",prop:"background"}}}}],u=n(7);function h(e){var t=[];return e.forEach((function(e){var n="",a=e.split(/\s{|{/);a.length>1&&a.forEach((function(e){if(e){var t=e.split(/,\s|,/);t.forEach((function(e){e.split(/(\s>\s|>)|(\s\+\s|\+)|(\s~\s|~)|(,\s|,)|(\s)/).forEach((function(e){if(!e)return!1;var t=e.split(/::|:/),a=t[0];if(a.length>0){var s=a.split(/\[/);s.length>1&&(s[1]="["+s[1]),s.forEach((function(e){if(!e)return!1;var t="tag";e.match(/(\s>\s|>)|(\s\+\s|\+)|(\s~\s|~)|(,\s|,)/)&&(t="spec"),e.startsWith("#")&&(t="id"),(e.startsWith(".")||e.startsWith("["))&&(t="selector"),n+='<span class="'.concat(t,'">').concat(e,"</span>")}))}if(t.length>1){var c=e.split(t[0])[1].split(t[1])[0];n+='<span class="pseudo">'.concat(c+t[1],"</span>")}})),t.findIndex((function(t){return t===e}))!==t.length-1&&(n+=", ")}))}else n+=" {"}));var s=e.split(/;/);if(s.length>1){var c=s[0].split(/\t|\s\s/)[1],l=s[0].split(c)[0],o=c.split(/:\s|:/),r=o[0],i=o[1];n+=l,n+='<span class="prop">'.concat(r,"</span>: "),n+='<span class="val">'.concat(i,"</span>"),n+=";",s[1]&&(n+=" ")}var p=e.split(/\/\*/);p.length>1&&p.forEach((function(e){e.endsWith("*/")&&(n+='<span class="comment">/*'.concat(e.split(/\*\//)[0],"*/</span>"))})),e.includes("}")&&(n+="}"),t.push(n)})),t}function f(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={CSS:h},a="",s=e.code.split(/\n/),c=n[e.language],l=c(s);return l.forEach((function(n){var s=n,c=s.split(/!!!(.+)!!!/);if(c.length>1){var l=c[1],o=e.fields[l],r="<input name=".concat(l,' type="text" size="').concat(o.default.length-1,'" value="').concat(o.default,'"/>');s=c[0]+(t?o.expected:r)+c[2]}0===s.length&&(s=n||"<pre></pre>"),s=s.split(/\s\s|\t/).join("<pre>\t</pre>"),s='<div class="line">'.concat(s,"</div>"),a+=s})),0===a.length&&(a=e.code),a}n(14);var v=function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleInput=function(e){var t=e.target;t.size=t.value.length>1?t.value.length-1:1;var n=t.name,s=a.state.fields[n],c=s.caseSensitive?t.value===s.expected:t.value.toLowerCase()===s.expected.toLowerCase();s.watch&&(document.querySelector(s.watch.el).style="".concat(s.watch.prop,": ").concat(t.value||s.default)),a.props.onComplete(n,c)},a.state=Object(u.a)({},e.snippet,{code:f(e.snippet,e.locked)}),a}return Object(r.a)(n,[{key:"componentDidUpdate",value:function(e){e.locked!==this.props.locked&&this.setState({code:f(this.props.snippet,this.props.locked)})}},{key:"render",value:function(){return s.a.createElement("div",{className:"editor",dangerouslySetInnerHTML:{__html:this.state.code},onInput:this.handleInput})}}]),n}(s.a.Component),m=(n(15),function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleComplete=function(e,t){var n=a.state.fields;n[e]=t,a.setState({fields:n},(function(){"selector"===e&&a.setState({darkEditor:t})}))},a.state={snippets:d,index:0,fields:{}},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state.snippets[this.state.index],t=this.state.fields,n=Object.values(t).filter((function(e){return!0===e})).length===Object.values(e.fields).length;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"window animated ".concat(n?"tada":"")},s.a.createElement("div",{className:"frame"},s.a.createElement("span",{className:"btn btn-close"}),s.a.createElement("span",{className:"btn btn-minimize"}),s.a.createElement("span",{className:"btn btn-fullscreen"})),s.a.createElement("div",{className:"content ".concat(this.state.darkEditor?"dark":"")},s.a.createElement(v,{snippet:e,onComplete:this.handleComplete,locked:n}))))}}]),n}(s.a.Component));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(m,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.ebf52cb2.chunk.js.map