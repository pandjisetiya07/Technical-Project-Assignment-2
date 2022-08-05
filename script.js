const btn = document.getElementById('calculate');

 btn.addEventListener('click', function(){
    
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    if(height == "" || weight == ""){
        alert("Silahkan isi terlebih dahulu!");
        return;
    }

    if(height == "0" || weight == "0"){
        alert("silahkan isi dengan benar")
        return;
    }

    //BMI = weight KG
    height = height / 100

    let BMI = (weight / (height * height));

    BMI = BMI.toFixed(1);
    //console.log(BMI);
    document.querySelector('.nilai').innerHTML = BMI ;

    let status = '';
    if(BMI <= 18.5){
        status = "Underweight";
    }else if(BMI >= 18.5 && BMI <= 24.9){
        status = "Normal Wight";
    }else if(BMI >= 25 && BMI <= 29.9){
        status = "Overweight";
    }else{
        status = "Obesity";
    }
    document.querySelector('.comment').innerHTML = status 

 });