let countTasks = 1;
let isOldToYoung = false;
function createTask() {
		let title = (document.getElementById("inputTitle")).value;
		let description = (document.getElementById("inputText")).value;
		let ul = document.getElementById("currentTasks");
		
		let li = `<li class="list-group-item d-flex w-100 mb-2" id="li${++countTasks}">
                        <div class="w-100 mr-2">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1" id="tli${countTasks}">${title}</h5>			
                            </div>
                            <p class="mb-1 w-100" id="pli${countTasks}">${description}</p>
                        </div>
                        <div class="dropdown m-2 dropleft">
                            <button class="btn btn-secondary h-100" type="button" id="dropdownMenuItem1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                            </button>
                            <div class="dropdown-menu p-2 flex-column" aria-labelledby="dropdownMenuItem1">
                                <button type="button" id="btnCli${countTasks}" class="btn btn-success w-100" onclick="completeTask()">Complete</button>
                                <button type="button" id="btnIli${countTasks}" class="btn btn-info w-100  my-2">Edit</button>
                                <button type="button" class="btn btn-danger w-100"  onclick="deleteTask()">Delete</button>
                            </div>
                        </div>
                    </li>`;
		ul.insertAdjacentHTML("beforeend", li);
		
		
}

function deleteTask(){
	let elem = document.activeElement;
	elem = elem.closest(".list-group-item");
	elem.remove();
	countTasks-=1;
}

function completeTask(){
	let elem = document.activeElement;
	
	elem = elem.closest(".list-group-item");

	let ul = document.getElementById("completedTasks");
	ul.append(elem)
	
	document.getElementById(`btnC${elem.id}`).remove();
	document.getElementById(`btnI${elem.id}`).remove();
	
}

function editTask(){
	
	let elem = document.activeElement;
	elem = elem.closest(".list-group-item");
	let ID = elem.id;
	
	
	let str = prompt("Введите новый заголовок");
	
	elem = document.getElementById(`t${ID}`);
	
	let whereToPaste = elem.closest("div");
	elem.remove();
	
	whereToPaste.insertAdjacentHTML("afterbegin", `<h5 id="t${ID}" class="mb-1">${str}</h5>`);
	
	
	
	let str1 = prompt("Введите новое описание");
	
	
	elem = document.getElementById(`p${ID}`);
	whereToPaste = elem.closest("div");
	elem.remove();
	
	whereToPaste.insertAdjacentHTML("beforeend", `<p id="p${ID}" class="mb-1 w-100">${str1}</p>`);
}
