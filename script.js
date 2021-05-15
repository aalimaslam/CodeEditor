const textarea = document.getElementById('code');
const output = document.getElementById('output');

setInterval(()=>{

    if(textarea.value != ''){
        setInterval(()=>{
            let realCode = textarea.value;
            output.innerHTML = realCode;
        },3000)
    }

},3000)
