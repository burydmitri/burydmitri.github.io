"use strict";$(document).ready(function(){console.log("Succes loading");var e=$(document.body),t=parseInt((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||!1;e.addClass(t?"iOS iOS-"+t:"no-ios");var o,a,n=(a=!1,o=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(o)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|)|g1 u|g560|gene|gf-5|g-mo|go(.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| ||a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(o.substr(0,4)))&&(a=!0),a);e.addClass(n?"touch":"no-touch")});var numAllTasks=document.querySelector(".js-stats__all"),numToDoTasks=document.querySelector(".js-stats__to-do"),numCompletedTasks=document.querySelector(".js-stats__completed"),sortByButton=document.querySelector(".filter__sort"),sortMenu=document.querySelector(".sort-menu"),sortMenuWrappers=document.querySelectorAll(".sort-menu__wrap"),sortMenuRadio=document.querySelectorAll(".sort-menu__radio"),mainWrap=document.querySelector(".main__wrapper"),notesWrap=document.querySelector(".main__notes-wrap"),taskCheckboxes=document.querySelectorAll(".note__check"),buttonsEdit=document.querySelectorAll(".note__edit"),buttonsClear=document.querySelectorAll(".note__clear"),buttonsDelete=document.querySelectorAll(".note__delete"),addMenuButton=document.querySelector(".add-task"),addMenu=document.querySelector(".add-menu"),createButton=document.querySelector(".add-menu__add"),cancelButton=document.querySelector(".add-menu__calcel"),textareaAdd=document.querySelector(".add-menu__content"),addMenuBorder=document.querySelector(".add-menu__border-bot"),data=notesWrap.children,toDoCounter=0,completedCounter=0;numToDoTasks.textContent=toDoCounter,numCompletedTasks.textContent=completedCounter;var saveData=function(){var e=Array.from(data);localStorage.setItem("tasks",JSON.stringify(e)),localStorage.setItem("completedNum",completedCounter)};sortByButton.addEventListener("click",function(){sortMenu.classList.toggle("sort-menu_active")});var sortTasks=function(e){var t=!0,o=!1,a=void 0;try{for(var n,r=sortMenuRadio[Symbol.iterator]();!(t=(n=r.next()).done);t=!0){var d=n.value;d.hasAttribute("checked")&&"by default"===d.value&&e.sort(function(e,t){e.index,t.index}),d.hasAttribute("checked")&&d.value,d.hasAttribute("checked")&&d.value,d.hasAttribute("checked")&&d.value}}catch(e){o=!0,a=e}finally{try{!t&&r.return&&r.return()}finally{if(o)throw a}}},_iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0;try{for(var _step2,_loop=function(){var r=_step2.value;r.addEventListener("click",function(){if(r.children[0].hasAttribute("checked"))return"";var e=!0,t=!1,o=void 0;try{for(var a,n=sortMenuRadio[Symbol.iterator]();!(e=(a=n.next()).done);e=!0){a.value.removeAttribute("checked")}}catch(e){t=!0,o=e}finally{try{!e&&n.return&&n.return()}finally{if(t)throw o}}r.children[0].setAttribute("checked","checked"),sortTasks()})},_iterator2=sortMenuWrappers[Symbol.iterator]();!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=!0)_loop()}catch(e){_didIteratorError2=!0,_iteratorError2=e}finally{try{!_iteratorNormalCompletion2&&_iterator2.return&&_iterator2.return()}finally{if(_didIteratorError2)throw _iteratorError2}}var giveCompletedListener=function(e){e.addEventListener("click",function(){e.parentElement.classList.toggle("note_completed"),e.parentElement.isCompleted?(e.parentElement.isCompleted=!1,toDoCounter++,numToDoTasks.textContent=toDoCounter,completedCounter--):(e.parentElement.isCompleted=!0,toDoCounter--,numToDoTasks.textContent=toDoCounter,completedCounter++),numCompletedTasks.textContent=completedCounter,saveData()})},deleteTaskListener=function(e){e.addEventListener("click",function(){e.parentElement.remove(),numAllTasks.textContent=data.length,saveData()})},clearTaskListener=function(e){e.addEventListener("click",function(){mainWrap.classList.contains("main__wrapper_edit")&&mainWrap.classList.remove("main__wrapper_edit"),e.parentElement.remove(),toDoCounter--,numToDoTasks.textContent=toDoCounter,numAllTasks.textContent=data.length,saveData()})},editTaskListener=function(e){e.addEventListener("click",function(){e.parentElement.classList.toggle("note_edited"),mainWrap.classList.toggle("main__wrapper_edit"),e.parentElement.children[1].toggleAttribute("readonly"),e.parentElement.children[1].focus(),e.parentElement.text=e.parentElement.children[1].value,saveData()})},choiceOfBotColor=function(){return data.length%2?"note__border-bot_yellow":"note__border-bot_blue"},addMenuCancel=function(){addMenuBorder.classList.remove(addMenuBorder.classList[1]),textareaAdd.value="",mainWrap.classList.remove("main__wrapper_edit"),addMenu.classList.remove("add-menu_active")},indexOfTask=1,createTask=function(e,t){var o=0<arguments.length&&void 0!==e?e:"",a=1<arguments.length&&void 0!==t&&t,n=document.createElement("div");n.classList.add("note"),n.classList.add("main__note");var r=document.createElement("button");r.classList.add("note__check"),giveCompletedListener(r);var d=document.createElement("textarea");d.classList.add("note__content"),d.setAttribute("readonly","readonly"),d.setAttribute("maxlength",43);var i=document.createElement("button");i.classList.add("note__edit"),editTaskListener(i);var s=document.createElement("button");s.classList.add("note__clear"),clearTaskListener(s);var l=document.createElement("button");l.classList.add("note__delete"),deleteTaskListener(l);var c=document.createElement("div");c.classList.add("note__border-bot"),c.classList.add(choiceOfBotColor()),mainWrap.prepend(n),n.append(r),n.append(d),n.append(i),n.append(s),n.append(l),n.append(c),n.index=indexOfTask++,n.text=o,d.textContent=o,n.isCompleted=a,n.isCompleted&&(n.classList.add("note_completed"),toDoCounter--,numToDoTasks.textContent=toDoCounter),notesWrap.prepend(n),numAllTasks.textContent=data.length,toDoCounter++,numToDoTasks.textContent=toDoCounter,addMenuCancel(),saveData()};addMenuButton.addEventListener("click",function(){addMenuBorder.classList.add(choiceOfBotColor()),mainWrap.classList.add("main__wrapper_edit"),addMenu.classList.add("add-menu_active"),setTimeout(function(){return textareaAdd.focus()},300)}),createButton.addEventListener("click",function(){return createTask(textareaAdd.value)}),cancelButton.addEventListener("click",addMenuCancel);var startPage=function(){completedCounter=localStorage.getItem("completedNum")||0,numCompletedTasks.textContent=completedCounter;var e=localStorage.getItem("tasks"),t=JSON.parse(e);if(null!=t){var o=!0,a=!1,n=void 0;try{for(var r,d=t[Symbol.iterator]();!(o=(r=d.next()).done);o=!0){var i=r.value;createTask(i.text,i.isCompleted)}}catch(e){a=!0,n=e}finally{try{!o&&d.return&&d.return()}finally{if(a)throw n}}}};startPage();