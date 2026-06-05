const button = document.querySelector('.add_item'); //находим кнопку которая добавляет позицию

const input = document.querySelector('.new_item'); //находим где пользователь пишет данные

const list = document.querySelector('.today_list'); //находим лист куда надо добавить позицию


button.addEventListener('click',AddItem); //обработчик который вызывает функцию добавления по клику
input.addEventListener('keydown', (e) => { //обработчик который вызывает функцию добавления по enter
  if (e.key === 'Enter') AddItem();
});




function AddItem () {  //объявляем функцию
    const item = input.value; //создаем переменную и в нее кладем что написал пользователь

    if (!input.value.trim()) {
    document.querySelector('.error').style.display = 'block';  //если ввод пустой находится error в html и показывается
    return;
    }
    document.querySelector('.error').style.display = 'none'; //ксли не пустой то не показывается

    const li = document.createElement('li'); //создаем переменную и в ней делаем новый пустой пункт

    li.innerText = item; //кладем в пустой пункт то что написал пользователь
    li.innerHTML = `<span>○ ${item}</span>`; //делаем кружок


    const delButton = document.createElement('button'); //создаем кнопку удаления пункта
    delButton.className = 'del_button'; //даем ей класс для css
    delButton.innerText = 'x';  //ставим на кнопку крестик
    delButton.addEventListener('click', () => li.remove()); //обработчик который удаляет пункт по клику

    li.appendChild(delButton); //делаем кнопку видимой

    list.appendChild(li); //добавляем пункт в лист
    input.value = ''; //очищаем input


    li.addEventListener('click', () => {  //зачеркиваем пункт при нажатии меняя класс на done
    li.classList.toggle('done');
    });
}