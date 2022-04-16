

 const numeros = [100, 200, 300, 400, 500];

 numeros
.map(num => ({valor: num, aleatorio: Math.random()}))
.sort((obj1, obj2) => obj1.aleatorio - obj2.aleatorio)
.map(obj => obj.valor)

