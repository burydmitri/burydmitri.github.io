"use strict";$(document).ready(function(){console.log("Succes loading");var e=$(document.body),t=parseInt((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||!1;e.addClass(t?"iOS iOS-"+t:"no-ios");var o,n,i=(n=!1,o=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(o)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|)|g1 u|g560|gene|gf-5|g-mo|go(.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| ||a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(o.substr(0,4)))&&(n=!0),n);e.addClass(i?"touch":"no-touch")}),function(){var t=document.querySelector(".js-stats__all"),o=document.querySelector(".js-stats__to-do"),n=document.querySelector(".js-stats__completed"),C={all:0,todo:0,completed:0,addTask:function(){this.all++,this.todo++,t.textContent=this.all,o.textContent=this.todo},completeTask:function(){this.todo--,this.completed++,o.textContent=this.todo,n.textContent=this.completed},uncompleteTask:function(){this.todo++,this.completed--,o.textContent=this.todo,n.textContent=this.completed},deleteTask:function(e){this.all--,e.isCompleted?(this.completed--,n.textContent=this.completed):(this.todo--,o.textContent=this.todo),t.textContent=this.all},clearAll:function(){this.all=0,this.todo=0,this.completed=0,t.textContent=this.all,o.textContent=this.todo,n.textContent=this.completed}};!function(){function s(e){if(null!==e){var t=!0,o=!1,n=void 0;try{for(var i,r=l[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var a=i.value;if(a.hasAttribute("checked"))switch(a.value){case"active":e.sort(function(e,t){return e.isCompleted&&!t.isCompleted?1:!e.isCompleted&&t.isCompleted?-1:0});break;case"completed":e.sort(function(e,t){return e.isCompleted&&!t.isCompleted?-1:!e.isCompleted&&t.isCompleted?1:0});break;case"alphabetically":e.sort(function(e,t){return e.text>t.text?1:e.text==t.text?0:e.text<t.text?-1:void 0});break;default:e.sort(function(e,t){return t.index-e.index})}}}catch(e){o=!0,n=e}finally{try{!t&&r.return&&r.return()}finally{if(o)throw n}}return e}}function m(){var e=Array.from(_);localStorage.setItem("tasks",JSON.stringify(e))}function p(){return _.length%2?"note__border-bot_yellow":"note__border-bot_blue"}function v(){y.classList.remove(y.classList[2]),u.value="",f.classList.remove("main__wrapper_edit"),r.classList.remove("field_active")}function d(e,t,o){var n,i=0<arguments.length&&void 0!==e?e:"",r=1<arguments.length&&void 0!==t&&t,a=2<arguments.length&&void 0!==o?o:_.length,l=document.querySelector(".template").content.cloneNode(!0).children[0];l.querySelector(".note__check").addEventListener("click",(n=l,function(){n.classList.toggle("note_completed"),n.isCompleted?(n.isCompleted=!1,C.uncompleteTask()):(n.isCompleted=!0,C.completeTask()),m()}));var c,s,d,u=l.querySelector(".note__content");l.querySelector(".note__edit").addEventListener("click",(s=(c=l).querySelector(".note__content"),function(){c.classList.toggle("note_edited"),f.classList.toggle("main__wrapper_edit"),s.toggleAttribute("readonly"),s.focus(),c.text=s.value,m()})),l.querySelector(".note__delete").addEventListener("click",(d=l,function(){f.classList.contains("main__wrapper_edit")&&f.classList.remove("main__wrapper_edit"),d.remove(),C.deleteTask(d),m()})),l.querySelector(".note__border-bot").classList.add(p()),h.prepend(l),l.index=a,l.text=i,u.textContent=i,l.isCompleted=r,C.addTask(),l.isCompleted&&(l.classList.add("note_completed"),C.completeTask()),v(),m()}var f=document.querySelector(".main__wrapper"),e=document.querySelector(".filter__sort"),t=document.querySelector(".sort-menu"),o=document.querySelectorAll(".sort-menu__wrap"),l=document.querySelectorAll(".sort-menu__radio"),n=document.querySelector(".filter__clear"),h=document.querySelector(".js-notes-wrap"),i=document.querySelector(".js-create-task"),r=document.querySelector(".js-field"),a=document.querySelector(".js-field__add"),c=document.querySelector(".js-field__calcel"),u=document.querySelector(".js-field__content"),y=document.querySelector(".js-field__border-bot"),_=h.children;e.addEventListener("click",function(){t.classList.toggle("sort-menu_active")});var b=!0,g=!1,k=void 0;try{for(var w,x=function(){var e=w.value,r=e.querySelector(".sort-menu__radio");e.addEventListener("click",function(){if(r.hasAttribute("checked"))return"";var e=!0,t=!1,o=void 0;try{for(var n,i=l[Symbol.iterator]();!(e=(n=i.next()).done);e=!0){n.value.removeAttribute("checked")}}catch(e){t=!0,o=e}finally{try{!e&&i.return&&i.return()}finally{if(t)throw o}}r.setAttribute("checked","checked"),function(e){var t=!(h.innerHTML=""),o=!1,n=void 0;try{for(var i,r=e[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var a=i.value;h.append(a)}}catch(e){o=!0,n=e}finally{try{!t&&r.return&&r.return()}finally{if(o)throw n}}}(s(Array.from(_)))})},S=o[Symbol.iterator]();!(b=(w=S.next()).done);b=!0)x()}catch(e){g=!0,k=e}finally{try{!b&&S.return&&S.return()}finally{if(g)throw k}}i.addEventListener("click",function(){y.classList.add(p()),f.classList.add("main__wrapper_edit"),r.classList.add("field_active"),setTimeout(function(){return u.focus()},300)}),n.addEventListener("click",function(){h.innerHTML="",C.clearAll(),m()}),a.addEventListener("click",function(){return d(u.value)}),c.addEventListener("click",v);!function(){var e=localStorage.getItem("tasks"),t=JSON.parse(e);console.log(t);var o=s(t);if(console.log(o),null!=t){var n=!0,i=!1,r=void 0;try{for(var a,l=o[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var c=a.value;d(c.text,c.isCompleted,c.index)}}catch(e){i=!0,r=e}finally{try{!n&&l.return&&l.return()}finally{if(i)throw r}}}}()}()}();