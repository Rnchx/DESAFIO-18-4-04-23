function calcular(){
    let a = Number (document.getElementById("lado_a").value);
    let b = Number (document.getElementById("lado_b").value);
    let c = Number (document.getElementById("lado_c").value);

    let perimetro = (a + b + c).toFixed(2);
    let sp =  perimetro / 2;
    let area = Math.sqrt (sp*((sp-a)*(sp-b)*(sp-c))).toFixed(2);
    
    document.getElementById("perimetro").innerHTML = `O perímetro é ${perimetro}`
    document.getElementById("area").innerHTML = `A área é ${area}`

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        
        document.getElementById("perimetro").innerHTML = ``
        document.getElementById("area").innerHTML = ``
        document.getElementById("tipo").innerHTML = `VALOR INVÁLIDO`
        return
      } 
      
       if (a <= 0 || b <= 0 || c <= 0) {

        document.getElementById("perimetro").innerHTML = ``
        document.getElementById("area").innerHTML = ``
        document.getElementById("tipo").innerHTML = `VALOR INVÁLIDO`
        return
      } 
      
     if (a + b <= c || a + c <= b || b + c <= a) {

        document.getElementById("perimetro").innerHTML = `...`
        document.getElementById("area").innerHTML = `...`
        document.getElementById("tipo").innerHTML = `VALOR INVÁLIDO`
        return
      } 


    if (a == b && b == c) {
        document.getElementById("tipo").innerHTML = `É um triângulo equilátero`
    }

    else if (a == b && c != b) {
        document.getElementById("tipo").innerHTML = `É um triângulo isósceles`
    }

    else {
        document.getElementById("tipo").innerHTML = `É um triângulo escaleno`
    }
    
    let restop = perimetro %2 ==0;
    let restoa = area %2 ==0;

    
}