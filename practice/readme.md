Pasos de la solución;
1. Evaluación de la cadena dada para visualizar si se cumple con los 20 caracteres minimos para la operación.
2. Declaración de variables que nos ayudarán para la separación de operadores, números y para almacenar el digito de un número NumeroActual
3. El primer ciclo for nos ayuda a recorrer la cadena caracter por caracter, esto para la separación de operadores y números(son almacenados en numeroActual) 
4. El segundo ciclo for nos ayuda a identificar que tipo de operación se realiza, en este caso por jerarquia primero se realizarán las divisiones y multiplicaciones correspondientes. Cada vez que se realice una división o multiplicación los resultados se van almacenando en las matrices de numeros y operadores, para seguir evaluando si existe alguna otra operación de esta jerarquía.
5. Si ya no encuentra alguna otra división o multiplicación procede a identificar los operadores durante el ultimo ciclo los cuales son + o - y vuelve a realizar esto hasta que no queden operadore. 
Ejemplo:
------cadena(4-7+8+9/2*3)-----------

ciclo 1: separación 
numeros: 4,7,8,9,2,3
operadores: -, +, *, /

ciclo 2: operacion de * y /
separa los numeros que serán divididos. que son: 9/2, el resultado de este será almacenado en numeroActual y vuelve a ordenar las cifras
numeros: 4,7,8,4.5,3 y vuelve a realizar lo mismo hasta quedar sin operadores * y /.

ciclo 3
separa los numeros y operadores que le quedan 
numeros: 4,7,8,13.5 luego el ciclo busca si es una suma o resta y procede a hacer los calculos necesarios y hasta que no queden operadores se imprime el resultado total. 


Resultados:
![Captura desde 2024-03-04 12-48-05](https://github.com/Internship-ciancoders-24-1/mi-lugar-de-trabajo-introduccion-Abigail-Alvarado/assets/74523252/28bfe67b-260a-428b-8ab5-8c82f7437d64)

![Captura desde 2024-03-04 12-48-36](https://github.com/Internship-ciancoders-24-1/mi-lugar-de-trabajo-introduccion-Abigail-Alvarado/assets/74523252/28bfe67b-260a-428b-8ab5-8c82f7437d64)