console.log(`\n-------------------------------------\n`);

// Criando uma variável para armazenar o Date()
const data = new Date();
console.log(data);

console.log(`\n-------------------------------------\n`);

// Modificando a data para DD/MM/YYYY
console.log(data.toLocaleDateString('pt-BR'));

console.log(`\n-------------------------------------\n`);

// Criando um objeto configurável
const dataOptions = {
    weekend: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

console.log(data.toLocaleDateString('pt-BR', dataOptions));

console.log(`\n-------------------------------------\n`);

// Agora no formato Horas

console.log(data.toLocaleTimeString('eng')); // AM/PM
console.log(data.toLocaleTimeString('pt-BR'));// 24h

console.log(`\n-------------------------------------\n`);

// Criando objeto configurável

const horarioOptions = {
    hour12: false,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit', 
    timeZone: 'America/Sao_Paulo'
}

console.log(data.toLocaleTimeString('pt-BR', horarioOptions));

console.log(`\n-------------------------------------\n`);

// Mesclando os dois Objetos

console.log(data.toLocaleString('pt-BR', {
    ...dataOptions,
    ...horarioOptions
}))

console.log(`\n-------------------------------------\n`);

// Usando um OBJETO

const formataData = new Intl.DateTimeFormat('pt-BR', {
    ...dataOptions,
    ...horarioOptions
}) 

console.log(formataData.format(data));

console.log(`\n-------------------------------------\n`);