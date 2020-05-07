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

(function () {
    
  const numAllTasks = document.querySelector('.js-stats__all');
  const numToDoTasks = document.querySelector('.js-stats__to-do');
  const numCompletedTasks = document.querySelector('.js-stats__completed');

  const counters = {
    all: 0,
    todo: 0,
    completed: 0,
    addTask() {
      this.all++;
      this.todo++;
      numAllTasks.textContent = this.all;
      numToDoTasks.textContent = this.todo;
    },
    completeTask() {
      this.todo--;
      this.completed++;
      numToDoTasks.textContent = this.todo;
      numCompletedTasks.textContent = this.completed;
    },
    uncompleteTask() {
      this.todo++;
      this.completed--;
      numToDoTasks.textContent = this.todo;
      numCompletedTasks.textContent = this.completed;
    },
    deleteTask(task) {
      this.all--;
      if (task.isCompleted){
        this.completed--;
        numCompletedTasks.textContent = this.completed;
      } else{
        this.todo--;
        numToDoTasks.textContent = this.todo;
      }
      numAllTasks.textContent = this.all;
    },
    clearAll() {
      this.all = 0;
      this.todo = 0;
      this.completed = 0;
      numAllTasks.textContent = this.all;
      numToDoTasks.textContent = this.todo;
      numCompletedTasks.textContent = this.completed;
    }
  };

  (function () {
    const mainWrap = document.querySelector('.main__wrapper');

    const sortByButton = document.querySelector('.filter__sort');
    const sortMenu = document.querySelector('.sort-menu');
    const sortMenuWrappers = document.querySelectorAll('.sort-menu__wrap');
    const sortMenuRadio = document.querySelectorAll('.sort-menu__radio');
    const buttonClearAll = document.querySelector('.filter__clear');

    const notesWrap = document.querySelector('.js-notes-wrap');

    const buttonCreateTask = document.querySelector('.js-create-task');
    const fieldCreateTask = document.querySelector('.js-field');
    const buttonAddTask = document.querySelector('.js-field__add');
    const buttonCancel = document.querySelector('.js-field__calcel');
    const textareaAdd = document.querySelector('.js-field__content');
    const fieldBorder = document.querySelector('.js-field__border-bot');

    const data = notesWrap.children;

    const getSortedArr = (arr) => {
      if (arr === null) return;
      for (let radio of sortMenuRadio) {
        if (!(radio.hasAttribute('checked'))) continue;
        switch (radio.value) {
          case 'active':
            arr.sort((a, b) => {
              if (a.isCompleted && !b.isCompleted) return -1
              if (!a.isCompleted && b.isCompleted) return 1
              return 0
            });
            break;
          case 'completed':
            arr.sort((a, b) => {
              if (a.isCompleted && !b.isCompleted) return 1
              if (!a.isCompleted && b.isCompleted) return -1
              return 0
            });
            break;
          case 'alphabetically':
            arr.sort((a, b) => {
              if (a.text > b.text) return -1
              if (a.text == b.text) return 0
              if (a.text < b.text) return 1
            });
            break;
          default:
            arr.sort((a, b) => {return +a.index - +b.index});
        }
      }
      return arr;
    }
    const sortTasks = (arr) => {
      notesWrap.innerHTML = '';
      for (let item of arr) {
        notesWrap.prepend(item);
      }
      saveData();
    }
    const saveData = () => {
      let dataArray = Array.from(data);
      localStorage.setItem('tasks', JSON.stringify(dataArray));
    }
    const getColorClass = () => {
      if (!(data.length % 2)) return 'note__border-bot_blue';
      return 'note__border-bot_yellow';
    }
    const toggleCompleted = (task) => {
      task.classList.toggle('note_completed');
      if (task.isCompleted){
        task.isCompleted = false;
        counters.uncompleteTask();
        saveData();
      } else{
        task.isCompleted = true;
        counters.completeTask();
        saveData();
      } 
    }
    const editTask = (task, textarea) => {
      task.classList.add('note_edited');
      mainWrap.classList.add('main__wrapper_edit');
      textarea.removeAttribute('readonly'); 
      textarea.focus();
    }
    const saveTask = (task, textarea) => {
      task.classList.remove('note_edited');
      mainWrap.classList.remove('main__wrapper_edit');
      textarea.setAttribute('readonly', 'readonly'); 
      task.text = textarea.value;
      saveData();
    }
    const cancelEdit = (task, textarea) => {
      task.classList.remove('note_edited');
      mainWrap.classList.remove('main__wrapper_edit');
      textarea.value = task.text;
      textarea.setAttribute('readonly','readonly'); 
    }
    const deleteTask = (task) => {
      return () => {
        if (mainWrap.classList.contains('main__wrapper_edit')) { 
          mainWrap.classList.remove('main__wrapper_edit') 
        }
        task.remove();
        counters.deleteTask(task);
        saveData();
      }
    }
    const clearAll = () => {
      notesWrap.innerHTML = '';
      counters.clearAll();
      saveData();
    }
    const hideField = () => {
      fieldBorder.classList.remove(fieldBorder.classList[2]);
      textareaAdd.value = '';
      mainWrap.classList.remove('main__wrapper_edit');
      fieldCreateTask.classList.remove('field_active');
    }
    const createTask = (text = '', isCompleted = false, index = data.length) => {
      let task = document.querySelector('.template').content.cloneNode(true).children[0];

      let checkbox = task.querySelector('.note__check');
      checkbox.addEventListener('click', () => toggleCompleted(task));

      let taskContent = task.querySelector('.note__content');

      let editButton = task.querySelector('.note__edit');
      editButton.addEventListener('click', () => editTask(task, task.querySelector('.note__content')));

      let saveButton = task.querySelector('.note__save');
      saveButton.addEventListener('click', () => saveTask(task, task.querySelector('.note__content')));

      let cancelButton = task.querySelector('.note__cancel');
      cancelButton.addEventListener('click', () => cancelEdit(task, task.querySelector('.note__content')));


      let deleteButton = task.querySelector('.note__delete');
      deleteButton.addEventListener('click', deleteTask(task));

      let borderBot = task.querySelector('.note__border-bot');
      borderBot.classList.add(getColorClass());

      notesWrap.prepend(task);

      task.index = index;
      task.text = text;
      taskContent.textContent = text;
      task.isCompleted = isCompleted;
      counters.addTask();
      if (task.isCompleted){
          task.classList.add('note_completed');
          counters.completeTask();
      }
      
      hideField();
      saveData();
    } 

    sortByButton.addEventListener('click', () => { 
      sortMenu.classList.toggle('sort-menu_active');
    });
    for (let wrap of sortMenuWrappers){
      const radio = wrap.querySelector('.sort-menu__radio');
      wrap.addEventListener('click', () => {
        if (radio.hasAttribute('checked')) return '';
        for (let radioEl of sortMenuRadio) { radioEl.removeAttribute('checked') }
        radio.setAttribute('checked', 'checked');
        let arrSorted = getSortedArr(Array.from(data));
        sortTasks(arrSorted);
      })
    }

    buttonCreateTask.addEventListener('click', () => { 
      fieldBorder.classList.add(getColorClass());
      mainWrap.classList.add('main__wrapper_edit');
      fieldCreateTask.classList.add('field_active');
      setTimeout(() => textareaAdd.focus(), 300);
    });
    buttonClearAll.addEventListener('click', clearAll);

    buttonAddTask.addEventListener('click', () => createTask( textareaAdd.value ));
    buttonCancel.addEventListener('click', hideField);

    const startPage = () => {
      const tasks = localStorage.getItem('tasks');
      const arr = JSON.parse(tasks);
      const arrSorted = getSortedArr(arr);
      if (arr != null) {for (let item of arrSorted) createTask(item.text, item.isCompleted, item.index)};
    }

    startPage();
  }());
}());