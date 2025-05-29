window.onload = () =>{
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateBmi);
}

function calculateBmi(){
    const height = document.querySelector('#height').value;  // to find the input field value
    const weight = document.querySelector('#weight').value;  // fetch wight
    // console.log(document.querySelector('#height').value);
    const result = document.querySelector('#result');
    //check height or weight are empty or not ??if empty then shows error.
    if(!height || isNaN(height) || height < 0){
        result.innerText = "please provide a valid height";
        return;
    }
    else if(!weight || isNaN(weight) || weight < 0){
        result.innerText = "please provide a valid weight";
        return;
    }

    const bmi = (weight / ((height * height)/10000)).toFixed(2);
    if(bmi < 18.5){
        result.innerText = `under weight: ${bmi}`;
    }else if(bmi >= 18.5 && bmi < 24.9){
        result.innerText = `Normal: ${bmi}`;
    }else if(bmi >= 25 && bmi < 29.9){
        result.innerText = `over Weight: ${bmi}`;
    }
    else if(bmi >= 30 && bmi < 34.9){
        result.innerText = `obesity(Class I): ${bmi}`;
    }
    else if(bmi >= 35 && bmi < 39.9){
        result.innerText = `obesity(Class II): ${bmi}`;
    }else{
        result.innerText = `Extreme obesity: ${bmi}`;
    }

}