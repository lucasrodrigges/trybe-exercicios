function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// QUESTÃO 01
function addDays() { 
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let ulDaysAcess = document.querySelector('#days');


  for (let day of dezDaysList) {
    let newElement = document.createElement('li');

    if (day === 24 || day === 31) {
      newElement.innerHTML = day;
      newElement.className = 'day holiday';
      ulDaysAcess.appendChild(newElement);  
    } else if (day === 4 || day === 11 || day === 18) {
      newElement.innerHTML = day;
      newElement.className = 'day friday';
      ulDaysAcess.appendChild(newElement);  
    } else if (day === 25) {
      newElement.innerHTML = day;
      newElement.className = 'day friday holiday';
      ulDaysAcess.appendChild(newElement);
    } else {
      newElement.innerHTML = day;
      newElement.className = 'day';
      ulDaysAcess.appendChild(newElement);
    }
  }
}

addDays();

// QUESTÃO 02
function creatBtn (feriados) {
  
}