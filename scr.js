
document.addEventListener("DOMContentLoaded", ready);

function ready(){

	//Создание и удаление событий
	var btn1=document.getElementById('testBtn1');
	btn1.addEventListener('click', fClick);

	document.getElementById('testBtn2').addEventListener('click', function(){
		alert("Событие удалено");
		btn1.removeEventListener('click', fClick);
	});

	function fClick(e){
		alert("Произошло событие");
		e.stopPropagation();
		console.log(e);
	}

	document.getElementById('block').addEventListener('click', ()=>alert("Ты нажал на блок !"));


//let 
	function shooterBuilder(){
		let shooter=[];
		for(let i=0; i<10; i++){
			shooter.push(i);
		}

		return shooter;
	}

	let a=shooterBuilder();
	console.log(a);

	//деструктуризация
	let [f,s, ...rest]=["Микита", "Пищуленок", "Александрович", "город Минск"];
	console.log(`Имя ${f} Фамилия ${s}`);
	//alert(rest);

//ф-я с начальным знчением. второй парамеир не обязательный
	function multply(a,b=2){
		return a*b;
	}

//Пробую генерить таблы
      const tableEl = document.querySelector('table');

const headerRow = tableEl.createTHead().insertRow();
headerRow.insertCell().textContent = 'Make';
headerRow.insertCell().textContent = 'Model';
headerRow.insertCell().textContent = 'Color';

const newRow = tableEl.insertRow();
newRow.insertCell().textContent = 'Yes';
newRow.insertCell().textContent = 'No';
newRow.insertCell().textContent = 'Thank you';

		


}