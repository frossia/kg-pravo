/*
 Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
*/
!function(){function e(e){return e.type==CKEDITOR.NODE_TEXT&&0<e.getLength()&&(!a||!e.isReadOnly())}function t(e){return!(e.type==CKEDITOR.NODE_ELEMENT&&e.isBlockBoundary(CKEDITOR.tools.extend({},CKEDITOR.dtd.$empty,CKEDITOR.dtd.$nonEditable)))}var a,i=function(){return{textNode:this.textNode,offset:this.offset,character:this.textNode?this.textNode.getText().charAt(this.offset):null,hitMatchBoundary:this._.matchBoundary}},n=["find","replace"],o=[["txtFindFind","txtFindReplace"],["txtFindCaseChk","txtReplaceCaseChk"],["txtFindWordChk","txtReplaceWordChk"],["txtFindCyclic","txtReplaceCyclic"]],r=function(r,l){function s(e,t){var a=r.createRange();return a.setStart(e.textNode,t?e.offset:e.offset+1),a.setEndAt(r.editable(),CKEDITOR.POSITION_BEFORE_END),a}function d(e){var t=r.getSelection(),a=r.editable();return t&&!e?(e=t.getRanges()[0].clone(),e.collapse(!0)):(e=r.createRange(),e.setStartAt(a,CKEDITOR.POSITION_AFTER_START)),e.setEndAt(a,CKEDITOR.POSITION_BEFORE_END),e}var c=new CKEDITOR.style(CKEDITOR.tools.extend({attributes:{"data-cke-highlight":1},fullMatch:1,ignoreReadonly:1,childRule:function(){return 0}},r.config.find_highlight,!0)),u=function(a,i){var n=this,o=new CKEDITOR.dom.walker(a);o.guard=i?t:function(e){!t(e)&&(n._.matchBoundary=!0)},o.evaluator=e,o.breakOnFalse=1,a.startContainer.type==CKEDITOR.NODE_TEXT&&(this.textNode=a.startContainer,this.offset=a.startOffset-1),this._={matchWord:i,walker:o,matchBoundary:!1}};u.prototype={next:function(){return this.move()},back:function(){return this.move(!0)},move:function(e){var t=this.textNode;if(null===t)return i.call(this);if(this._.matchBoundary=!1,t&&e&&0<this.offset)this.offset--;else if(t&&this.offset<t.getLength()-1)this.offset++;else{for(t=null;!(t||(t=this._.walker[e?"previous":"next"].call(this._.walker),this._.matchWord&&!t||this._.walker._.end)););this.offset=(this.textNode=t)?e?t.getLength()-1:0:0}return i.call(this)}};var p=function(e,t){this._={walker:e,cursors:[],rangeLength:t,highlightRange:null,isMatched:0}};p.prototype={toDomRange:function(){var e=r.createRange(),t=this._.cursors;if(1>t.length){var a=this._.walker.textNode;if(!a)return null;e.setStartAfter(a)}else a=t[0],t=t[t.length-1],e.setStart(a.textNode,a.offset),e.setEnd(t.textNode,t.offset+1);return e},updateFromDomRange:function(e){var t=new u(e);this._.cursors=[];do e=t.next(),e.character&&this._.cursors.push(e);while(e.character);this._.rangeLength=this._.cursors.length},setMatched:function(){this._.isMatched=!0},clearMatched:function(){this._.isMatched=!1},isMatched:function(){return this._.isMatched},highlight:function(){if(!(1>this._.cursors.length)){this._.highlightRange&&this.removeHighlight();var e=this.toDomRange(),t=e.createBookmark();c.applyToRange(e),e.moveToBookmark(t),this._.highlightRange=e,t=e.startContainer,t.type!=CKEDITOR.NODE_ELEMENT&&(t=t.getParent()),t.scrollIntoView(),this.updateFromDomRange(e)}},removeHighlight:function(){if(this._.highlightRange){var e=this._.highlightRange.createBookmark();c.removeFromRange(this._.highlightRange),this._.highlightRange.moveToBookmark(e),this.updateFromDomRange(this._.highlightRange),this._.highlightRange=null}},isReadOnly:function(){return this._.highlightRange?this._.highlightRange.startContainer.isReadOnly():0},moveBack:function(){var e=this._.walker.back(),t=this._.cursors;return e.hitMatchBoundary&&(this._.cursors=t=[]),t.unshift(e),t.length>this._.rangeLength&&t.pop(),e},moveNext:function(){var e=this._.walker.next(),t=this._.cursors;return e.hitMatchBoundary&&(this._.cursors=t=[]),t.push(e),t.length>this._.rangeLength&&t.shift(),e},getEndCharacter:function(){var e=this._.cursors;return 1>e.length?null:e[e.length-1].character},getNextCharacterRange:function(e){var t,a;return a=this._.cursors,a=(t=a[a.length-1])&&t.textNode?new u(s(t)):this._.walker,new p(a,e)},getCursors:function(){return this._.cursors}};var m=function(e,t){var a=[-1];t&&(e=e.toLowerCase());for(var i=0;i<e.length;i++)for(a.push(a[i]+1);0<a[i+1]&&e.charAt(i)!=e.charAt(a[i+1]-1);)a[i+1]=a[a[i+1]-1]+1;this._={overlap:a,state:0,ignoreCase:!!t,pattern:e}};m.prototype={feedCharacter:function(e){for(this._.ignoreCase&&(e=e.toLowerCase());;){if(e==this._.pattern.charAt(this._.state))return this._.state++,this._.state==this._.pattern.length?(this._.state=0,2):1;if(!this._.state)return 0;this._.state=this._.overlap[this._.state]}return null},reset:function(){this._.state=0}};var h=/[.,"'?!;: \u0085\u00a0\u1680\u280e\u2028\u2029\u202f\u205f\u3000]/,g=function(e){if(!e)return!0;var t=e.charCodeAt(0);return t>=9&&13>=t||t>=8192&&8202>=t||h.test(e)},b={searchRange:null,matchRange:null,find:function(e,t,a,i,n,o){this.matchRange?(this.matchRange.removeHighlight(),this.matchRange=this.matchRange.getNextCharacterRange(e.length)):this.matchRange=new p(new u(this.searchRange),e.length);for(var l=new m(e,!t),c=0,h="%";null!==h;){for(this.matchRange.moveNext();(h=this.matchRange.getEndCharacter())&&(c=l.feedCharacter(h),2!=c);)this.matchRange.moveNext().hitMatchBoundary&&l.reset();if(2==c){if(a){var b=this.matchRange.getCursors(),f=b[b.length-1],b=b[0],v=r.createRange();if(v.setStartAt(r.editable(),CKEDITOR.POSITION_AFTER_START),v.setEnd(b.textNode,b.offset),b=v,f=s(f),b.trim(),f.trim(),b=new u(b,!0),f=new u(f,!0),!g(b.back().character)||!g(f.next().character))continue}return this.matchRange.setMatched(),!1!==n&&this.matchRange.highlight(),!0}}return this.matchRange.clearMatched(),this.matchRange.removeHighlight(),i&&!o?(this.searchRange=d(1),this.matchRange=null,arguments.callee.apply(this,Array.prototype.slice.call(arguments).concat([!0]))):!1},replaceCounter:0,replace:function(e,t,i,n,o,l,s){if(a=1,e=0,this.matchRange&&this.matchRange.isMatched()&&!this.matchRange._.isReplaced&&!this.matchRange.isReadOnly()){if(this.matchRange.removeHighlight(),t=this.matchRange.toDomRange(),i=r.document.createText(i),!s){var d=r.getSelection();d.selectRanges([t]),r.fire("saveSnapshot")}t.deleteContents(),t.insertNode(i),s||(d.selectRanges([t]),r.fire("saveSnapshot")),this.matchRange.updateFromDomRange(t),s||this.matchRange.highlight(),this.matchRange._.isReplaced=!0,this.replaceCounter++,e=1}else e=this.find(t,n,o,l,!s);return a=0,e}},f=r.lang.find;return{title:f.title,resizable:CKEDITOR.DIALOG_RESIZE_NONE,minWidth:350,minHeight:170,buttons:[CKEDITOR.dialog.cancelButton],contents:[{id:"find",label:f.find,title:f.find,accessKey:"",elements:[{type:"hbox",widths:["230px","90px"],children:[{type:"text",id:"txtFindFind",label:f.findWhat,isChanged:!1,labelLayout:"horizontal",accessKey:"F"},{type:"button",id:"btnFind",align:"left",style:"width:100%",label:f.find,onClick:function(){var e=this.getDialog();b.find(e.getValueOf("find","txtFindFind"),e.getValueOf("find","txtFindCaseChk"),e.getValueOf("find","txtFindWordChk"),e.getValueOf("find","txtFindCyclic"))||alert(f.notFoundMsg)}}]},{type:"fieldset",label:CKEDITOR.tools.htmlEncode(f.findOptions),style:"margin-top:29px",children:[{type:"vbox",padding:0,children:[{type:"checkbox",id:"txtFindCaseChk",isChanged:!1,label:f.matchCase},{type:"checkbox",id:"txtFindWordChk",isChanged:!1,label:f.matchWord},{type:"checkbox",id:"txtFindCyclic",isChanged:!1,"default":!0,label:f.matchCyclic}]}]}]},{id:"replace",label:f.replace,accessKey:"M",elements:[{type:"hbox",widths:["230px","90px"],children:[{type:"text",id:"txtFindReplace",label:f.findWhat,isChanged:!1,labelLayout:"horizontal",accessKey:"F"},{type:"button",id:"btnFindReplace",align:"left",style:"width:100%",label:f.replace,onClick:function(){var e=this.getDialog();b.replace(e,e.getValueOf("replace","txtFindReplace"),e.getValueOf("replace","txtReplace"),e.getValueOf("replace","txtReplaceCaseChk"),e.getValueOf("replace","txtReplaceWordChk"),e.getValueOf("replace","txtReplaceCyclic"))||alert(f.notFoundMsg)}}]},{type:"hbox",widths:["230px","90px"],children:[{type:"text",id:"txtReplace",label:f.replaceWith,isChanged:!1,labelLayout:"horizontal",accessKey:"R"},{type:"button",id:"btnReplaceAll",align:"left",style:"width:100%",label:f.replaceAll,isChanged:!1,onClick:function(){var e=this.getDialog();for(b.replaceCounter=0,b.searchRange=d(1),b.matchRange&&(b.matchRange.removeHighlight(),b.matchRange=null),r.fire("saveSnapshot");b.replace(e,e.getValueOf("replace","txtFindReplace"),e.getValueOf("replace","txtReplace"),e.getValueOf("replace","txtReplaceCaseChk"),e.getValueOf("replace","txtReplaceWordChk"),!1,!0););b.replaceCounter?(alert(f.replaceSuccessMsg.replace(/%1/,b.replaceCounter)),r.fire("saveSnapshot")):alert(f.notFoundMsg)}}]},{type:"fieldset",label:CKEDITOR.tools.htmlEncode(f.findOptions),children:[{type:"vbox",padding:0,children:[{type:"checkbox",id:"txtReplaceCaseChk",isChanged:!1,label:f.matchCase},{type:"checkbox",id:"txtReplaceWordChk",isChanged:!1,label:f.matchWord},{type:"checkbox",id:"txtReplaceCyclic",isChanged:!1,"default":!0,label:f.matchCyclic}]}]}]}],onLoad:function(){var e,t=this,a=0;this.on("hide",function(){a=0}),this.on("show",function(){a=1}),this.selectPage=CKEDITOR.tools.override(this.selectPage,function(i){return function(r){i.call(t,r);var l,s=t._.tabs[r];if(l="find"===r?"txtFindWordChk":"txtReplaceWordChk",e=t.getContentElement(r,"find"===r?"txtFindFind":"txtFindReplace"),t.getContentElement(r,l),s.initialized||(CKEDITOR.document.getById(e._.inputId),s.initialized=!0),a){var d,c,r="find"===r?1:0,s=1-r,u=o.length;for(c=0;u>c;c++)l=this.getContentElement(n[r],o[c][r]),d=this.getContentElement(n[s],o[c][s]),d.setValue(l.getValue())}}})},onShow:function(){b.searchRange=d();var e=this.getParentEditor().getSelection().getSelectedText(),t=this.getContentElement(l,"find"==l?"txtFindFind":"txtFindReplace");t.setValue(e),t.select(),this.selectPage(l),this[("find"==l&&this._.editor.readOnly?"hide":"show")+"Page"]("replace")},onHide:function(){var e;b.matchRange&&b.matchRange.isMatched()&&(b.matchRange.removeHighlight(),r.focus(),(e=b.matchRange.toDomRange())&&r.getSelection().selectRanges([e])),delete b.matchRange},onFocus:function(){return"replace"==l?this.getContentElement("replace","txtFindReplace"):this.getContentElement("find","txtFindFind")}}};CKEDITOR.dialog.add("find",function(e){return r(e,"find")}),CKEDITOR.dialog.add("replace",function(e){return r(e,"replace")})}();