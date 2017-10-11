// Условные конструкции
var name = "Vitalii";
console.log("Hello " + name);

if(name.length > 6) {
	console.log("Ну и длиннющее же у вас имя!");
} else {
	console.log("Имя у вас не из длинных.")
}

// Цепочка из конструкций if... else
var lemonChicken = false;
var beefWithBlackBean = true;
var sweetAndSourPork = true;

if (lemonChicken) {
	console.log("Отлично! Я буду курицу с лимоном!");
} else if (beefWithBlackBean) {
	console.log("Заказываю говядину.");
} else if (sweetAndSourPork) {
	console.log("Ладно, закажу свинину.");
} else {
	console.log("Что ж, остается рис с яйцом.");
}

/*-----------------------------------------------------------------------
	ПОПРОБУЙТЕ !
		Напишите программу с переменной name. Если в этой переменной находится
		ваше имя, напечатайте: «Привет мне!» — иначе напечатайте: «Привет,
		незнакомец!» (Подсказка: используйте === для сравнения переменной name
		с вашим именем.)
		Теперь дополните программу, чтобы она здоровалась с вашим папой,
		если в name его имя, и с вашей мамой, если в name ее имя. Если же там
		что-то иное, по-прежнему печатайте «Привет, незнакомец!».
		------------------------------------------------------------------------*/

		var name = "Andrew";

		if(name === "Vitalii") {
			console.log("Привет мне!");
		} else if (name === "Andrew") {
			console.log("Привет, папа!");
		} else if(name === "Victoria") {
			console.log("Привет, мама!");
		} else {
			console.log("Привет, незнакомец!");
		}

// Циклы

// Цикл while

// while(condition) {
// 	console.log("Делаем что-то");
// 	i++;
// }

var sheepCounted = 0;

while(sheepCounted < 10) {
	console.log("Підраховано овець: " + sheepCounted + "!");
	sheepCounted++;
}
console.log("Хрррррррррр-псссс");

// Цикл for
for(var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
	console.log("Підраховано овець: " + sheepCounted + "!");
}
console.log("Хрррррррррр-псссс");

var timesToSayHello = 3;
for(var i = 0; i < timesToSayHello; i++) {
	console.log("Hello");
}

// Цикл for, массивы и строки
var animals = ["лев", "фламинго", "белый медведь", "удав"];
for(var i = 0; i < animals.length; i++) {
	console.log(animals[i]);
}

var name = "Nick";
for(var i = 0; i < name.length; i++) {
	console.log("В моем имени есть буква " + name[i] + ".");
}

// Другие варианты применения for
for(var x = 2; x < 10000; x *= 2) {
	console.log(x);
}

/*
	ПОПРОБУЙТЕ !
		Напишите цикл for, который печатает степени тройки, не превышающие
		10 000 (программа должна выводить 3, 9, 27 и т. д.)
		Перепишите это задание, вместо for использовав цикл while.
		(Подсказка: установите начальное значение перед входом в цикл.)
*/

// for
for(var a = 3; a < 10000; a *= 3) {
	console.log(a)
}

// while
var b = 3;
while(b < 10000) {
	console.log(b);
	b *= 3;
}