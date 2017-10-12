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
/*
	while(condition) {
		console.log("Делаем что-то");
		i++;
	}
	*/

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

/*---------------------------------------------------------------------
	ПОПРОБУЙТЕ !
		Напишите цикл for, который печатает степени тройки, не превышающие
		10 000 (программа должна выводить 3, 9, 27 и т. д.)
		Перепишите это задание, вместо for использовав цикл while.
		(Подсказка: установите начальное значение перед входом в цикл.)
		---------------------------------------------------------------------*/

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

// УПРАЖНЕНИЯ

/*
	#1. Прекрасные животные
	Напишите цикл for, который изменяет массив животных, делая
	их прекрасными! Например, если есть следующий массив:
	var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
	то ваш цикл должен сделать его таким:
	["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур -
	прекрасное животное", "Комодский варан - прекрасное животное"]
	*/

	var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
	for(var i = 0; i < animals.length; i++) {
		console.log(animals[i] + " - прекрасное животное");
	}

/*
	#2. Генератор случайных строк
		Напишите генератор случайных строк. Для этого вам понадо-
		бится строка со всеми буквами алфавита:
		var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
		*/

		var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
		var randomString = "";

		while(randomString.length < 6) {
			randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
		}
		console.log(randomString);

/*
	#3. h4ck3r sp34k
		Переведите англоязычный текст на «хакерский язык» (h4ck3r
		sp34k)! Многим в интернете нравится заменять некоторые
		буквы похожими на них числами — например, число «4» похоже
		на букву «A», «3» похоже на «E», «1» — на «I», а «0» — на «О». Хотя
		цифры напоминают скорее заглавные буквы, мы будем заменять
		ими буквы строчные. Чтобы перевести обычный текст на «хакер-
		ский язык», понадобится строка с исходным текстом и новая
		пустая строка для результата:
		var input = "javascript is awesome";
		var output = "";
		*/

		var input = "javascript is awesome";
		var output = "";
		
		var dic = { 
			'a': '4', 
			'e': '3',
			'i': '1', 
			'o': '0'
		};

		for (var i = 0; i < input.length; i++) {
			output += dic[input[i]] === undefined ? input[i] : dic[input[i]];
		}

		console.log(output);