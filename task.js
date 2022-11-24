let TaskName=document.querySelector('#TaskName')
	function newElement() {
		if(TaskName.value==='') alert('Please add some task')
		createElements(TaskName.value)
		TaskName.value='' }

	function createElements(value){
	console.log(value)
	const p=document.createElement('p')
	p.textContent=value
	myList.appendChild(p)
}
		