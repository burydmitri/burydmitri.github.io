$(document).ready(() => {
  // eslint-disable-next-line no-console
  console.log('Succes loading');
  const body = $(document.body);
  // Check iOS device
  const isIOS =
    parseInt(
      `${
        (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(
          navigator.userAgent,
        ) || [0, ''])[1]
      }`
        .replace('undefined', '3_2')
        .replace('_', '.')
        .replace('_', ''),
    ) || false;
  body.addClass(isIOS ? `iOS iOS-${isIOS}` : 'no-ios');
  // Check touch device
  const isTouch = (function () {
    let check = false;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
          a,
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|)|g1 u|g560|gene|gf-5|g-mo|go(.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| ||a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
          a.substr(0, 4),
        )
      ) {
        check = true;
      }
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  })();
  body.addClass(isTouch ? 'touch' : 'no-touch');
});

const numAllTasks = document.querySelector('.js-stats__all');
const numToDoTasks = document.querySelector('.js-stats__to-do');
const numCompletedTasks = document.querySelector('.js-stats__completed');

const sortByButton = document.querySelector('.filter__sort');
const sortMenu = document.querySelector('.sort-menu');
const sortMenuWrappers = document.querySelectorAll('.sort-menu__wrap');
const sortMenuRadio = document.querySelectorAll('.sort-menu__radio');

const mainWrap = document.querySelector('.main__wrapper');
const notesWrap = document.querySelector('.main__notes-wrap');
const taskCheckboxes = document.querySelectorAll('.note__check');
const buttonsEdit = document.querySelectorAll('.note__edit');
const buttonsClear = document.querySelectorAll('.note__clear');
const buttonsDelete = document.querySelectorAll('.note__delete');

const addMenuButton = document.querySelector('.add-task');
const addMenu = document.querySelector('.add-menu');
const createButton = document.querySelector('.add-menu__add');
const cancelButton = document.querySelector('.add-menu__calcel');
const textareaAdd = document.querySelector('.add-menu__content');
const addMenuBorder = document.querySelector('.add-menu__border-bot');

const data = notesWrap.children;

let toDoCounter = 0;
let completedCounter = 0;
numToDoTasks.textContent = toDoCounter;
numCompletedTasks.textContent = completedCounter;

const saveData = () => {
  let dataArray = Array.from(data);
  localStorage.setItem('tasks', JSON.stringify(dataArray));
  localStorage.setItem('completedNum', completedCounter)
}

sortByButton.addEventListener('click', () => { 
  sortMenu.classList.toggle('sort-menu_active');
});

const sortTasks = (arr) => {
  for (let radio of sortMenuRadio) {
    if (radio.hasAttribute('checked') && radio.value === 'by default') {
      arr.sort((a, b) => {+a.index - +b.index});
    }
    if (radio.hasAttribute('checked') && radio.value === 'active') {

    }
    if (radio.hasAttribute('checked') && radio.value === 'completed') {

    }
    if (radio.hasAttribute('checked') && radio.value === 'alphabetically') {

    }
  }
}

for (let wrap of sortMenuWrappers){
  wrap.addEventListener('click', () => {
    if (wrap.children[0].hasAttribute('checked')) return '';
    for (let radio of sortMenuRadio) { radio.removeAttribute('checked') }
    wrap.children[0].setAttribute('checked', 'checked');
    sortTasks();
  })
}

// elem.setAttribute('Test', 123); // (2) атрибут Test установлен
// alert( document.body.innerHTML ); // (3) в HTML видны все атрибуты!

const giveCompletedListener = (cbox) => {
  cbox.addEventListener('click', () => { 
    cbox.parentElement.classList.toggle('note_completed');
    if (cbox.parentElement.isCompleted){
      cbox.parentElement.isCompleted = false;
      toDoCounter++;
      numToDoTasks.textContent = toDoCounter;
      completedCounter--;
      numCompletedTasks.textContent = completedCounter;
      saveData();
    } else{
      cbox.parentElement.isCompleted = true;
      toDoCounter--;
      numToDoTasks.textContent = toDoCounter;
      completedCounter++;
      numCompletedTasks.textContent = completedCounter;
      saveData();
    }
  })
}
const deleteTaskListener = (but) => {
  but.addEventListener('click', () => { 
    but.parentElement.remove();
    numAllTasks.textContent = data.length;
    saveData();
  })
}
const clearTaskListener = (but) => {
  but.addEventListener('click', () => { 
    if (mainWrap.classList.contains('main__wrapper_edit')) { 
      mainWrap.classList.remove('main__wrapper_edit') 
    }
    but.parentElement.remove();
    toDoCounter--;
    numToDoTasks.textContent = toDoCounter;
    numAllTasks.textContent = data.length;
    saveData();
  })
}
const editTaskListener = (but) => {
  but.addEventListener('click', () => { 
    but.parentElement.classList.toggle('note_edited');
    mainWrap.classList.toggle('main__wrapper_edit');
    but.parentElement.children[1].toggleAttribute('readonly'); 
    but.parentElement.children[1].focus();
    but.parentElement.text = but.parentElement.children[1].value;
    saveData();  
  });
}
const choiceOfBotColor = () => {
  if (!(data.length % 2)) return 'note__border-bot_blue';
  return 'note__border-bot_yellow';
}
const addMenuCancel = () => {
  addMenuBorder.classList.remove(addMenuBorder.classList[1]);
  textareaAdd.value = '';
  mainWrap.classList.remove('main__wrapper_edit');
  addMenu.classList.remove('add-menu_active');
}

let indexOfTask = 1;
const createTask = (text = '', isCompleted = false) => {
  let task = document.createElement('div');
  task.classList.add('note'); 
  task.classList.add('main__note');

  let checkbox = document.createElement('button');
  checkbox.classList.add('note__check');
  giveCompletedListener(checkbox);

  let noteContent = document.createElement('textarea'); 
  noteContent.classList.add('note__content');
  noteContent.setAttribute('readonly', 'readonly');
  noteContent.setAttribute('maxlength', 43);

  let editButton = document.createElement('button');
  editButton.classList.add('note__edit');
  editTaskListener(editButton);

  let clearButton = document.createElement('button');
  clearButton.classList.add('note__clear');
  clearTaskListener(clearButton);

  let deleteButton = document.createElement('button');
  deleteButton.classList.add('note__delete');
  deleteTaskListener(deleteButton);

  let borderBot = document.createElement('div');
  borderBot.classList.add('note__border-bot');
  borderBot.classList.add(choiceOfBotColor());

  mainWrap.prepend(task);
  task.append(checkbox);
  task.append(noteContent);
  task.append(editButton);
  task.append(clearButton);
  task.append(deleteButton);
  task.append(borderBot);


  task.index = indexOfTask++;
  task.text = text;
  noteContent.textContent = text;
  task.isCompleted = isCompleted;
  if (task.isCompleted){
      task.classList.add('note_completed');
      toDoCounter--;
      numToDoTasks.textContent = toDoCounter;
  }
  notesWrap.prepend(task); 
  numAllTasks.textContent = data.length;
  toDoCounter++;
  numToDoTasks.textContent = toDoCounter;

  addMenuCancel();
  saveData();
}

addMenuButton.addEventListener('click', () => { 
  addMenuBorder.classList.add(choiceOfBotColor());
  mainWrap.classList.add('main__wrapper_edit');
  addMenu.classList.add('add-menu_active');
  setTimeout(() => textareaAdd.focus(), 300);
});

createButton.addEventListener('click', () => createTask( textareaAdd.value ));
cancelButton.addEventListener('click', addMenuCancel);

const startPage = () => {
  completedCounter = localStorage.getItem('completedNum') || 0;
  numCompletedTasks.textContent = completedCounter;
  let tasks = localStorage.getItem('tasks');
  let arr = JSON.parse(tasks);
  if (arr != null) {for (let item of arr) createTask(item.text, item.isCompleted)};
}

for (let cbox of taskCheckboxes) { giveCompletedListener(cbox) };
for (let but of buttonsEdit) { editTaskListener(but) };
for (let but of buttonsClear) { clearTaskListener(but) };
for (let but of buttonsDelete) { deleteTaskListener(but) };

startPage();