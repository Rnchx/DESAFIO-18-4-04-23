function calcular(){
    let a = Number (document.getElementById("lado_a").value);
    let b = Number (document.getElementById("lado_b").value);
    let c = Number (document.getElementById("lado_c").value);

    let perimetro = a + b + c;
    let sp =  perimetro / 2;
    let area = Math.sqrt (sp*((sp-a)*(sp-b)*(sp-c)));
    
    document.getElementById("perimetro").innerHTML = `O perímetro é ${perimetro}`
    document.getElementById("area").innerHTML = `A área é ${area}`

    if (a == b && b == c) {
        document.getElementById("tipo").innerHTML = `É um triângulo equilátero`
    }

    else if (a == b && c != b) {
        document.getElementById("tipo").innerHTML = `É um triângulo isósceles`
    }

    else {
        document.getElementById("tipo").innerHTML = `É um triângulo escaleno`
    }

}