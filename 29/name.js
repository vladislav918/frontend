const firstName = 'Богдан>';
const lastName = 'Иванов';
const patronymic = 'Петрович';
const yearOfBirth = 1990;
const profile = 'Прикладная информатика';

const result1 = 'firstName: ' + firstName + '\n' +
                'lastName: ' + lastName + '\n' +
                'patronymic: ' + patronymic + '\n' +
                'yearOfBirth: ' + yearOfBirth + '\n' +
                'profile: ' + profile;

console.log(result1);

const result2 = `firstName: ${firstName}
lastName: ${lastName}
patronymic: ${patronymic}
yearOfBirth: ${yearOfBirth}
profile: ${profile}`;

console.log(result2);