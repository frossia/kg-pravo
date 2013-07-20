/*
 Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("specialchar",function(e){var t,a,i=e.lang.specialchar,n=function(a){var i,a=a.data?a.data.getTarget():new CKEDITOR.dom.element(a);"a"==a.getName()&&(i=a.getChild(0).getHtml())&&(a.removeClass("cke_light_background"),t.hide(),a=e.document.createElement("span"),a.setHtml(i),e.insertText(a.getText()))},o=CKEDITOR.tools.addFunction(n),r=function(e,i){var n,i=i||e.data.getTarget();if("span"==i.getName()&&(i=i.getParent()),"a"==i.getName()&&(n=i.getChild(0).getHtml())){a&&l(null,a);var o=t.getContentElement("info","htmlPreview").getElement();t.getContentElement("info","charPreview").getElement().setHtml(n),o.setHtml(CKEDITOR.tools.htmlEncode(n)),i.getParent().addClass("cke_light_background"),a=i}},l=function(e,i){i=i||e.data.getTarget(),"span"==i.getName()&&(i=i.getParent()),"a"==i.getName()&&(t.getContentElement("info","charPreview").getElement().setHtml("&nbsp;"),t.getContentElement("info","htmlPreview").getElement().setHtml("&nbsp;"),i.getParent().removeClass("cke_light_background"),a=void 0)},s=CKEDITOR.tools.addFunction(function(t){var a,t=new CKEDITOR.dom.event(t),i=t.getTarget();a=t.getKeystroke();var o="rtl"==e.lang.dir;switch(a){case 38:(a=i.getParent().getParent().getPrevious())&&(a=a.getChild([i.getParent().getIndex(),0]),a.focus(),l(null,i),r(null,a)),t.preventDefault();break;case 40:(a=i.getParent().getParent().getNext())&&(a=a.getChild([i.getParent().getIndex(),0]))&&1==a.type&&(a.focus(),l(null,i),r(null,a)),t.preventDefault();break;case 32:n({data:t}),t.preventDefault();break;case o?37:39:(a=i.getParent().getNext())?(a=a.getChild(0),1==a.type?(a.focus(),l(null,i),r(null,a),t.preventDefault(!0)):l(null,i)):(a=i.getParent().getParent().getNext())&&((a=a.getChild([0,0]))&&1==a.type?(a.focus(),l(null,i),r(null,a),t.preventDefault(!0)):l(null,i));break;case o?39:37:(a=i.getParent().getPrevious())?(a=a.getChild(0),a.focus(),l(null,i),r(null,a),t.preventDefault(!0)):(a=i.getParent().getParent().getPrevious())?(a=a.getLast().getChild(0),a.focus(),l(null,i),r(null,a),t.preventDefault(!0)):l(null,i)}});return{title:i.title,minWidth:430,minHeight:280,buttons:[CKEDITOR.dialog.cancelButton],charColumns:17,onLoad:function(){for(var t,a,n=this.definition.charColumns,r=e.config.specialChars,l=CKEDITOR.tools.getNextId()+"_specialchar_table_label",d=['<table role="listbox" aria-labelledby="'+l+'" style="width: 320px; height: 100%; border-collapse: separate;" align="center" cellspacing="2" cellpadding="2" border="0">'],c=0,u=r.length;u>c;){d.push('<tr role="presentation">');for(var p=0;n>p;p++,c++){if(t=r[c]){t instanceof Array?(a=t[1],t=t[0]):(a=t.replace("&","").replace(";","").replace("#",""),a=i[a]||t);var m="cke_specialchar_label_"+c+"_"+CKEDITOR.tools.getNextNumber();d.push('<td class="cke_dark_background" style="cursor: default" role="presentation"><a href="javascript: void(0);" role="option" aria-posinset="'+(c+1)+'"',' aria-setsize="'+u+'"',' aria-labelledby="'+m+'"',' class="cke_specialchar" title="',CKEDITOR.tools.htmlEncode(a),'" onkeydown="CKEDITOR.tools.callFunction( '+s+', event, this )" onclick="CKEDITOR.tools.callFunction('+o+', this); return false;" tabindex="-1"><span style="margin: 0 auto;cursor: inherit">'+t+'</span><span class="cke_voice_label" id="'+m+'">'+a+"</span></a>")}else d.push('<td class="cke_dark_background">&nbsp;');d.push("</td>")}d.push("</tr>")}d.push("</tbody></table>",'<span id="'+l+'" class="cke_voice_label">'+i.options+"</span>"),this.getContentElement("info","charContainer").getElement().setHtml(d.join(""))},contents:[{id:"info",label:e.lang.common.generalTab,title:e.lang.common.generalTab,padding:0,align:"top",elements:[{type:"hbox",align:"top",widths:["320px","90px"],children:[{type:"html",id:"charContainer",html:"",onMouseover:r,onMouseout:l,focus:function(){var e=this.getElement().getElementsByTag("a").getItem(0);setTimeout(function(){e.focus(),r(null,e)},0)},onShow:function(){var e=this.getElement().getChild([0,0,0,0,0]);setTimeout(function(){e.focus(),r(null,e)},0)},onLoad:function(e){t=e.sender}},{type:"hbox",align:"top",widths:["100%"],children:[{type:"vbox",align:"top",children:[{type:"html",html:"<div></div>"},{type:"html",id:"charPreview",className:"cke_dark_background",style:"border:1px solid #eeeeee;font-size:28px;height:40px;width:70px;padding-top:9px;font-family:'Microsoft Sans Serif',Arial,Helvetica,Verdana;text-align:center;",html:"<div>&nbsp;</div>"},{type:"html",id:"htmlPreview",className:"cke_dark_background",style:"border:1px solid #eeeeee;font-size:14px;height:20px;width:70px;padding-top:2px;font-family:'Microsoft Sans Serif',Arial,Helvetica,Verdana;text-align:center;",html:"<div>&nbsp;</div>"}]}]}]}]}]}});