//your JS code here. If required.
// let test=document.getElementById("test");
// test.innerText="a";
let data=document.getElementById("fname");
data.addEventListener("blur",()=>{
let value=data.value;
	let value2=value.toUpperCase();
	// test.innerText=value2;
data.value=value2;
})
