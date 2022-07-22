(()=>{var t={599:t=>{"use strict";t.exports=flarum.core.compat["mentions/fragments/PostQuoteButton"]}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r);const t=flarum.core.compat["common/extend"],e=flarum.core.compat["common/app"];var o=n.n(e);const i=flarum.core.compat["common/components/Page"];var a=n.n(i);const c=flarum.core.compat["common/components/TextEditor"];var l=n.n(c);const s=flarum.core.compat["common/components/DiscussionPage"];var u=n.n(s);function p(t){return{inline:[t.inline.left,t.inline.right],display:[t.block.left,t.block.right]}}const d=function(t,e){for(var n=t.querySelectorAll(".katex-mathml + .katex-html"),r=0;r<n.length;r++){var o=n[r];o.remove?o.remove():o.parentNode&&o.parentNode.removeChild(o)}for(var i=t.querySelectorAll(".katex-mathml"),a=0;a<i.length;a++){var c=i[a],l=c.querySelector("annotation");l&&(c.replaceWith?c.replaceWith(l):c.parentNode&&c.parentNode.replaceChild(l,c),l.innerHTML=e.inline[0]+l.innerHTML+e.inline[1])}for(var s=t.querySelectorAll(".katex-display annotation"),m=0;m<s.length;m++){var u=s[m];u.innerHTML=e.display[0]+u.innerHTML.substr(e.inline[0].length,u.innerHTML.length-e.inline[0].length-e.inline[1].length)+e.display[1]}return t};function f(t,e){return void 0===e&&(e=!1),t.attribute("mathren.aliases_as_primary")&&!1===e?{inline:t.attribute("mathren.primary_inline_delimiter_alias"),block:t.attribute("mathren.primary_block_delimiter_alias")}:{inline:t.attribute("mathren.primary_inline_delimiter"),block:t.attribute("mathren.primary_block_delimiter")}}function h(t){var e=t instanceof Element?t:t.parentElement;return e&&e.closest(".katex")}function v(t){var e=h(t.startContainer);e&&t.setStartBefore(e);var n=h(t.endContainer);n&&t.setEndAfter(n)}const y=flarum.core.compat["common/components/CommentPost"];var b=n.n(y);const x=flarum.core.compat["components/TextEditor"];var g=n.n(x);function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}const C=flarum.core.compat["common/components/Button"];var k=n.n(C);const w=flarum.core.compat["common/Component"];var S=n.n(w);const E=flarum.core.compat["common/components/Dropdown"];var T=n.n(E);const D=flarum.core.compat["common/utils/ItemList"];var A=n.n(D);const O=flarum.core.compat["common/helpers/icon"];var P=n.n(O);const q=flarum.core.compat["forum/components/DiscussionComposer"];var B=n.n(q);const M=flarum.core.compat["forum/components/EditPostComposer"];var N=n.n(M);const j=flarum.core.compat["forum/components/ReplyComposer"];var L=n.n(j);function R(){return[B(),N(),L()]}var H=function(t){var e,n;function r(){return t.apply(this,arguments)||this}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,_(e,n);var i=r.prototype;return i.view=function(){return T().component({className:"MathRen-buttonsDropdown",buttonClassName:"Button Button--flat",label:P()("fas fa-square-root-alt")},this.items().toArray())},i.items=function(){var t=this,e=new(A());return e.add("mathren-blockButton",k().component({icon:"fas fa-vector-square",onclick:function(){return t.wrapSelection(!0)}},o().translator.trans("the-turk-mathren.forum.composer.block_expression")),50),e.add("mathren-inlineButton",k().component({icon:"fas fa-grip-lines",onclick:function(){return t.wrapSelection()}},o().translator.trans("the-turk-mathren.forum.composer.inline_expression")),0),e},i.wrapSelection=function(t){void 0===t&&(t=!1);var e=o().composer.body.componentClass;this.delimiters=f.bind(this,o().forum,-1===R().indexOf(e))();var n=t?this.delimiters.block.left:this.delimiters.inline.left,r=t?this.delimiters.block.right:this.delimiters.inline.right,i=this.attrs.textEditor.getSelectionRange();i[0]!=i[1]?(this.attrs.textEditor.insertAt(i[0],n),this.attrs.textEditor.insertAt(i[1]+n.length,r)):(this.attrs.textEditor.replaceBeforeCursor(i[0],n+r),this.attrs.textEditor.moveCursorTo(i[0]+n.length))},r}(S()),W=function(t,e,n){for(var r=n,o=0,i=t.length;r<e.length;){var a=e[r];if(o<=0&&e.slice(r,r+i)===t)return r;"\\"===a?r++:"{"===a?o++:"}"===a&&o--,r++}return-1},I=/^\\begin{/;var F=function(t,e){var n=function(t,e){for(var n,r=[],o=new RegExp("("+e.map((function(t){return t.left.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")})).join("|")+")");-1!==(n=t.search(o));){n>0&&(r.push({type:"text",data:t.slice(0,n)}),t=t.slice(n));var i=e.findIndex((function(e){return t.startsWith(e.left)}));if(-1===(n=W(e[i].right,t,e[i].left.length)))break;var a=t.slice(0,n+e[i].right.length),c=I.test(a)?a:t.slice(e[i].left.length,n);r.push({type:"math",data:c,rawData:a,display:e[i].display}),t=t.slice(n+e[i].right.length)}return""!==t&&r.push({type:"text",data:t}),r}(t,e.splitAtDelimiters);if(1===n.length&&"text"===n[0].type)return null;for(var r=document.createDocumentFragment(),o=0;o<n.length;o++)if("text"===n[o].type)r.appendChild(document.createTextNode(n[o].data));else{var i=document.createElement("span"),a=n[o].data,c=!0===n[o].display?e.primaryBlockDelimiter:e.primaryInlineDelimiter;i.textContent=c.left+a+c.right,r.appendChild(i)}return r};const X=function t(e,n,r){for(var o=0;o<e.childNodes.length;o++){var i=e.childNodes[o];if(3===i.nodeType){var a=F(i.textContent,n);a&&(o+=a.childNodes.length-1,e.replaceChild(a,i))}else 1===i.nodeType&&t(i,n)}return!0===r?e.innerText:e};o().initializers.add("the-turk-mathren",(function(){var e=function(t,e,n){void 0===t&&(t=""),void 0===e&&(e=!1),void 0===n&&(n=!0);var r=document.createElement("span");return r.textContent=t,X(r,i(e),n)},r=function(t){o().forum.attribute("mathren.aliases_as_primary")&&t.querySelectorAll("code").forEach((function(t){return t.textContent=e(t.textContent,!0)}))},i=function(t){void 0===t&&(t=!1);var e=f.bind(void 0,o().forum,!t)(),n=o().forum.attribute("mathren.bbcode_delimiters"),r=o().forum.attribute("mathren.explicit_bbcode_delimiters"),i=o().forum.attribute("mathren.alias_delimiters"),a=t?n.concat(r):i;return{primaryBlockDelimiter:e.block,primaryInlineDelimiter:e.inline,splitAtDelimiters:a}};(0,t.extend)(b().prototype,"oncreate",(function(){if("flarum-mentions"in flarum.extensions&&app.forum.attribute("mathren.enable_copy_tex")){var t=n(599),e=this.attrs.post,r=f.bind(this,app.forum)();if(!(e.isHidden()||app.session.user&&!e.discussion().canReply())){var o=this.$(".Post-body"),i=$('<div class="MathRen-quoteButtonContainer"></div>'),a=new t(e),c=function(t){setTimeout((function(){var e=function(t,e){var n=window.getSelection();if(!n.isCollapsed){var r=n.getRangeAt(0),o=r.commonAncestorContainer;if(t[0]===o||$.contains(t[0],o)){v(r);var i=r.cloneContents();i.querySelector(".katex-mathml")&&(i=d(i,e).textContent);var a=$("<div>").append(i);return a.find("img.emoji").replaceWith((function(){return this.alt})),a.find("img").replaceWith((function(){return"![]("+this.src+")"})),a.find("a").replaceWith((function(){return"["+this.innerText+"]("+this.href+")"})),a.text()}}return""}(o,p(r));if(e){a.content=e,m.render(i[0],a.render());var n=window.getSelection().getRangeAt(0).getClientRects(),c=n[0];if(t.clientY<c.bottom&&t.clientX-c.right<c.left-t.clientX)a.showStart(c.left,c.top);else{var l=n[n.length-1];a.showEnd(l.right,l.bottom)}}}),1)};this.$().after(i).on("mouseup",c),"ontouchstart"in window&&document.addEventListener("selectionchange",c,!1)}}})),(0,t.extend)(g().prototype,"toolbarItems",(function(t){!0===app.forum.attribute("mathren.enable_editor_buttons")&&t.add("the-turk-mathren",m(H,{textEditor:this.attrs.composer.editor}))})),(0,t.extend)(u().prototype,"oncreate",(function(){if(app.forum.attribute("mathren.enable_copy_tex")){var t=f.bind(this,app.forum)();document.addEventListener("copy",(function(e){var n=window.getSelection();if(!n.isCollapsed&&e.clipboardData){var r=e.clipboardData,o=n.getRangeAt(0);v(o);var i=o.cloneContents();if(i.querySelector(".katex-mathml")){var a=Array.prototype.map.call(i.childNodes,(function(t){return t instanceof Text?t.textContent:t.outerHTML})).join("");r.setData("text/html",a),r.setData("text/plain",d(i,p(t)).textContent),e.preventDefault()}}}))}})),(0,t.extend)(a().prototype,["oncreate","onupdate"],(function(){return r(document)})),s9e&&s9e.TextFormatter&&(0,t.override)(s9e.TextFormatter,"preview",(function(t,n,o){t(e(n),o),r(o)})),R().forEach((function(n){(0,t.override)(n.prototype,"onsubmit",(function(t){this.composer.fields.content(e(this.composer.fields.content())),t()}))})),(0,t.extend)(l().prototype,"oncreate",(function(t,n){var r=n.dom.querySelector("textarea"),i=o().composer.body.componentClass;if(-1===R().indexOf(i))r.addEventListener("input",(function(){r.value=e(r.value)}));else{if(!o().forum.attribute("mathren.aliases_as_primary"))return;r.value=e(this.value,!0)}}))}),-500)})(),module.exports=r})();
//# sourceMappingURL=forum.js.map