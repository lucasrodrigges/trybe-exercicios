const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addShift = (obj, key, value) => {
  obj[key] = value;
  return obj;
}

const listKeys = (obj) => Object.keys(obj);

const sizeObj = (obj) => Object.entries(obj).length;

const objValues = (obj) => Object.values(obj);

const createObj = (obj1, obj2, obj3) => {
  // const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
  const allLessons = {};
  allLessons.lesson1 =  Object.assign(obj1);
  allLessons.lesson2 =  Object.assign(addShift(lesson2, 'turno', 'noite'));
  allLessons.lesson3 =  Object.assign(obj3);

  return allLessons;
}

const allLessons = createObj(lesson1, lesson2, lesson3);

const howManyStudents = (obj) => {
  const arr = Object.values(obj);
  const result = arr[0].numeroEstudantes + arr[1].numeroEstudantes + arr[2].numeroEstudantes;
  
  return result;
}

const getValueByNumber = (obj, num) => Object.values(obj)[num];

const verifyPair = (o, k, v) => o[k] === v;

const countMathStudents = (obj, subject) => {
  const arr_obj = Object.values(obj); 
  let result = 0;

  arr_obj.forEach(lessons => {
    if(lessons.materia === 'Matemática') {
      result += lessons.numeroEstudantes;
    }
  }); 
  return result;
}

const createReport = (obj, name) => {
  const arr_obj = Object.values(obj);
  const obj_report = {};
  const arr_aulas = [];
  let result = 0;
  
  arr_obj.forEach(lessons => {
    if(lessons.professor === name) {
      obj_report.professor = name;
      arr_aulas.push(lessons.materia);
      obj_report.aulas = arr_aulas;
      result += lessons.numeroEstudantes; 
      obj_report.estudantes = result;
    }
  });
  return obj_report;
}

// console.log(addShift(lesson2, 'turno', 'noite'));
// console.log(listKeys(lesson1));
// console.log(sizeObj(lesson3));
// console.log(objValues(lesson2));
// console.log(createObj(lesson1, lesson2, lesson3));
// console.log(howManyStudents(createObj(lesson1, lesson2, lesson3)));
// console.log(getValueByNumber(lesson1, 0));
// console.log(countMathStudents(allLessons, 'Matemática'));
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// console.log(createReport(allLessons, 'Maria Clara'));