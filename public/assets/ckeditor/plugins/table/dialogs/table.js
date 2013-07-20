/*
 Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
*/
!function(){function e(e){for(var t,a=0,i=0,n=0,o=e.$.rows.length;o>n;n++){t=e.$.rows[n];for(var r,l=a=0,s=t.cells.length;s>l;l++)r=t.cells[l],a+=r.colSpan;a>i&&(i=a)}return i}function t(e){return function(){var t=this.getValue(),t=!!(CKEDITOR.dialog.validate.integer()(t)&&t>0);return t||(alert(e),this.select()),t}}function a(a,o){var r=function(e){return new CKEDITOR.dom.element(e,a.document)},l=a.editable(),s=a.plugins.dialogadvtab;return{title:a.lang.table.title,minWidth:310,minHeight:CKEDITOR.env.ie?310:280,onLoad:function(){var e=this,t=e.getContentElement("advanced","advStyles");t&&t.on("change",function(){var t=this.getStyle("width",""),a=e.getContentElement("info","txtWidth");a&&a.setValue(t,!0),t=this.getStyle("height",""),(a=e.getContentElement("info","txtHeight"))&&a.setValue(t,!0)})},onShow:function(){var e,t=a.getSelection(),i=t.getRanges(),n=this.getContentElement("info","txtRows"),r=this.getContentElement("info","txtCols"),l=this.getContentElement("info","txtWidth"),s=this.getContentElement("info","txtHeight");"tableProperties"==o&&((t=t.getSelectedElement())&&t.is("table")?e=t:0<i.length&&(CKEDITOR.env.webkit&&i[0].shrink(CKEDITOR.NODE_ELEMENT),e=a.elementPath(i[0].getCommonAncestor(!0)).contains("table",1)),this._.selectedElement=e),e?(this.setupContent(e),n&&n.disable(),r&&r.disable()):(n&&n.enable(),r&&r.enable()),l&&l.onChange(),s&&s.onChange()},onOk:function(){var e=a.getSelection(),t=this._.selectedElement&&e.createBookmarks(),i=this._.selectedElement||r("table"),n={};if(this.commitContent(n,i),n.info){if(n=n.info,!this._.selectedElement)for(var o=i.append(r("tbody")),l=parseInt(n.txtRows,10)||0,s=parseInt(n.txtCols,10)||0,d=0;l>d;d++)for(var c=o.append(r("tr")),u=0;s>u;u++){var p=c.append(r("td"));CKEDITOR.env.ie||p.append(r("br"))}if(l=n.selHeaders,!i.$.tHead&&("row"==l||"both"==l)){for(c=new CKEDITOR.dom.element(i.$.createTHead()),o=i.getElementsByTag("tbody").getItem(0),o=o.getElementsByTag("tr").getItem(0),d=0;d<o.getChildCount();d++)s=o.getChild(d),s.type==CKEDITOR.NODE_ELEMENT&&!s.data("cke-bookmark")&&(s.renameNode("th"),s.setAttribute("scope","col"));c.append(o.remove())}if(null!==i.$.tHead&&"row"!=l&&"both"!=l){for(c=new CKEDITOR.dom.element(i.$.tHead),o=i.getElementsByTag("tbody").getItem(0),u=o.getFirst();0<c.getChildCount();){for(o=c.getFirst(),d=0;d<o.getChildCount();d++)s=o.getChild(d),s.type==CKEDITOR.NODE_ELEMENT&&(s.renameNode("td"),s.removeAttribute("scope"));o.insertBefore(u)}c.remove()}if(!this.hasColumnHeaders&&("col"==l||"both"==l))for(c=0;c<i.$.rows.length;c++)s=new CKEDITOR.dom.element(i.$.rows[c].cells[0]),s.renameNode("th"),s.setAttribute("scope","row");if(this.hasColumnHeaders&&"col"!=l&&"both"!=l)for(d=0;d<i.$.rows.length;d++)c=new CKEDITOR.dom.element(i.$.rows[d]),"tbody"==c.getParent().getName()&&(s=new CKEDITOR.dom.element(c.$.cells[0]),s.renameNode("td"),s.removeAttribute("scope"));n.txtHeight?i.setStyle("height",n.txtHeight):i.removeStyle("height"),n.txtWidth?i.setStyle("width",n.txtWidth):i.removeStyle("width"),i.getAttribute("style")||i.removeAttribute("style")}if(this._.selectedElement)try{e.selectBookmarks(t)}catch(m){}else a.insertElement(i),setTimeout(function(){var e=new CKEDITOR.dom.element(i.$.rows[0].cells[0]),t=a.createRange();t.moveToPosition(e,CKEDITOR.POSITION_AFTER_START),t.select()},0)},contents:[{id:"info",label:a.lang.table.title,elements:[{type:"hbox",widths:[null,null],styles:["vertical-align:top"],children:[{type:"vbox",padding:0,children:[{type:"text",id:"txtRows","default":3,label:a.lang.table.rows,required:!0,controlStyle:"width:5em",validate:t(a.lang.table.invalidRows),setup:function(e){this.setValue(e.$.rows.length)},commit:n},{type:"text",id:"txtCols","default":2,label:a.lang.table.columns,required:!0,controlStyle:"width:5em",validate:t(a.lang.table.invalidCols),setup:function(t){this.setValue(e(t))},commit:n},{type:"html",html:"&nbsp;"},{type:"select",id:"selHeaders",requiredContent:"th","default":"",label:a.lang.table.headers,items:[[a.lang.table.headersNone,""],[a.lang.table.headersRow,"row"],[a.lang.table.headersColumn,"col"],[a.lang.table.headersBoth,"both"]],setup:function(e){var t=this.getDialog();t.hasColumnHeaders=!0;for(var a=0;a<e.$.rows.length;a++){var i=e.$.rows[a].cells[0];if(i&&"th"!=i.nodeName.toLowerCase()){t.hasColumnHeaders=!1;break}}null!==e.$.tHead?this.setValue(t.hasColumnHeaders?"both":"row"):this.setValue(t.hasColumnHeaders?"col":"")},commit:n},{type:"text",id:"txtBorder",requiredContent:"table[border]","default":a.filter.check("table[border]")?1:0,label:a.lang.table.border,controlStyle:"width:3em",validate:CKEDITOR.dialog.validate.number(a.lang.table.invalidBorder),setup:function(e){this.setValue(e.getAttribute("border")||"")},commit:function(e,t){this.getValue()?t.setAttribute("border",this.getValue()):t.removeAttribute("border")}},{id:"cmbAlign",type:"select",requiredContent:"table[align]","default":"",label:a.lang.common.align,items:[[a.lang.common.notSet,""],[a.lang.common.alignLeft,"left"],[a.lang.common.alignCenter,"center"],[a.lang.common.alignRight,"right"]],setup:function(e){this.setValue(e.getAttribute("align")||"")},commit:function(e,t){this.getValue()?t.setAttribute("align",this.getValue()):t.removeAttribute("align")}}]},{type:"vbox",padding:0,children:[{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtWidth",requiredContent:"table{width}",controlStyle:"width:5em",label:a.lang.common.width,title:a.lang.common.cssLengthTooltip,"default":a.filter.check("table{width}")?500>l.getSize("width")?"100%":500:0,getValue:i,validate:CKEDITOR.dialog.validate.cssLength(a.lang.common.invalidCssLength.replace("%1",a.lang.common.width)),onChange:function(){var e=this.getDialog().getContentElement("advanced","advStyles");e&&e.updateStyle("width",this.getValue())},setup:function(e){this.setValue(e.getStyle("width"))},commit:n}]},{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtHeight",requiredContent:"table{height}",controlStyle:"width:5em",label:a.lang.common.height,title:a.lang.common.cssLengthTooltip,"default":"",getValue:i,validate:CKEDITOR.dialog.validate.cssLength(a.lang.common.invalidCssLength.replace("%1",a.lang.common.height)),onChange:function(){var e=this.getDialog().getContentElement("advanced","advStyles");e&&e.updateStyle("height",this.getValue())},setup:function(e){(e=e.getStyle("height"))&&this.setValue(e)},commit:n}]},{type:"html",html:"&nbsp;"},{type:"text",id:"txtCellSpace",requiredContent:"table[cellspacing]",controlStyle:"width:3em",label:a.lang.table.cellSpace,"default":a.filter.check("table[cellspacing]")?1:0,validate:CKEDITOR.dialog.validate.number(a.lang.table.invalidCellSpacing),setup:function(e){this.setValue(e.getAttribute("cellSpacing")||"")},commit:function(e,t){this.getValue()?t.setAttribute("cellSpacing",this.getValue()):t.removeAttribute("cellSpacing")}},{type:"text",id:"txtCellPad",requiredContent:"table[cellpadding]",controlStyle:"width:3em",label:a.lang.table.cellPad,"default":a.filter.check("table[cellpadding]")?1:0,validate:CKEDITOR.dialog.validate.number(a.lang.table.invalidCellPadding),setup:function(e){this.setValue(e.getAttribute("cellPadding")||"")},commit:function(e,t){this.getValue()?t.setAttribute("cellPadding",this.getValue()):t.removeAttribute("cellPadding")}}]}]},{type:"html",align:"right",html:""},{type:"vbox",padding:0,children:[{type:"text",id:"txtCaption",requiredContent:"caption",label:a.lang.table.caption,setup:function(e){if(this.enable(),e=e.getElementsByTag("caption"),0<e.count()){var e=e.getItem(0),t=e.getFirst(CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT));t&&!t.equals(e.getBogus())?(this.disable(),this.setValue(e.getText())):(e=CKEDITOR.tools.trim(e.getText()),this.setValue(e))}},commit:function(e,t){if(this.isEnabled()){var i=this.getValue(),n=t.getElementsByTag("caption");if(i)0<n.count()?(n=n.getItem(0),n.setHtml("")):(n=new CKEDITOR.dom.element("caption",a.document),t.getChildCount()?n.insertBefore(t.getFirst()):n.appendTo(t)),n.append(new CKEDITOR.dom.text(i,a.document));else if(0<n.count())for(i=n.count()-1;i>=0;i--)n.getItem(i).remove()}}},{type:"text",id:"txtSummary",requiredContent:"table[summary]",label:a.lang.table.summary,setup:function(e){this.setValue(e.getAttribute("summary")||"")},commit:function(e,t){this.getValue()?t.setAttribute("summary",this.getValue()):t.removeAttribute("summary")}}]}]},s&&s.createAdvancedTab(a,null,"table")]}}var i=CKEDITOR.tools.cssLength,n=function(e){var t=this.id;e.info||(e.info={}),e.info[t]=this.getValue()};CKEDITOR.dialog.add("table",function(e){return a(e,"table")}),CKEDITOR.dialog.add("tableProperties",function(e){return a(e,"tableProperties")})}();