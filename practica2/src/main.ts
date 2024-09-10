import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <label>Identificación del usuario</label>
  <input type="text" id="txtidentificacion" />
  <div id="estado"></div>
  <button id="btnvalidar">Validar</button>
`

const txtidentificacion = document.querySelector<HTMLInputElement>('#txtidentificacion')!;
const btnvalidar = document.querySelector<HTMLButtonElement>('#btnvalidar')!;
const estado = document.querySelector<HTMLDivElement>('#estado')!;

btnvalidar.onclick = () => {
  const identificacion = txtidentificacion.value;
  const numerosDeLaIdentificacion = identificacion.split("");

  //Cédula 
  if (identificacion.length === 10) {
    const provincia = parseInt(identificacion.substring(0, 2));
    const tercerDigito = parseInt(identificacion[2]);

    if (provincia < 1 || provincia > 24) {
      estado.innerHTML = "El código de provincia es inválido (debe estar entre 01 y 24).";
      return;
    }
    if (tercerDigito >= 6) {
      estado.innerHTML = "El tercer dígito debe ser menor a 6.";
      return;
    }

    const coeficiente = "212121212";
    let acumulador = 0;

    for (let i = 0; i < 9; i++) {
      let numeroAAcumular = parseInt(numerosDeLaIdentificacion[i]) * parseInt(coeficiente[i]);
      if (numeroAAcumular > 9) numeroAAcumular -= 9;
      acumulador += numeroAAcumular;
    }

    const residuo = 10 - (acumulador % 10);
    if (residuo === parseInt(numerosDeLaIdentificacion[9])) {
      estado.innerHTML = "Cédula válida";
      return;
    } else {
      estado.innerHTML = "Cédula inválida";
      return;
    }
  }

  //R.U.C. sociedades privadas, jurídicas y extranjeras sin cédula
  if (identificacion.length === 13) {
    const tercerDigito = parseInt(identificacion[2]);

    if (tercerDigito === 9) { 
      const coeficientes = "432765432";
      let acumulador = 0;

      for (let i = 0; i < 9; i++) {
        let numeroAAcumular = parseInt(numerosDeLaIdentificacion[i]) * parseInt(coeficientes[i]);
        if (numeroAAcumular >= 10) numeroAAcumular -= 9;
        acumulador += numeroAAcumular;
      }

      const digitoVerificador = parseInt(numerosDeLaIdentificacion[9]);
      if (digitoVerificador === (acumulador % 11)) {
        estado.innerHTML = "R.U.C. sociedad privada válida";
        return;
      } else {
        estado.innerHTML = "R.U.C. sociedad privada inválido";
        return;
      }
    }
// R.U.C. sociedades públicas.
    if (tercerDigito === 6) { 
      const coeficientes = "32765432";
      let acumulador = 0;

      for (let i = 0; i < 8; i++) {
        let numeroAAcumular = parseInt(numerosDeLaIdentificacion[i]) * parseInt(coeficientes[i]);
        if (numeroAAcumular >= 10) numeroAAcumular -= 9;
        acumulador += numeroAAcumular;
      }

      const digitoVerificador = parseInt(numerosDeLaIdentificacion[8]);
      if (digitoVerificador === (acumulador % 11)) {
        estado.innerHTML = "R.U.C. sociedad pública válida";
        return;
      } else {
        estado.innerHTML = "R.U.C. sociedad pública inválido";
        return;
      }
    }
//R.U.C de persona natural.
    if (tercerDigito === 0 || tercerDigito === 1 || tercerDigito === 2 || tercerDigito === 3 || tercerDigito === 4 || tercerDigito === 5) {
        const coeficiente = "212121212";
        let acumulador = 0;
    
        for (let i = 0; i < 9; i++) {
          let numeroAAcumular = parseInt(numerosDeLaIdentificacion[i]) * parseInt(coeficiente[i]);
          if (numeroAAcumular > 9) numeroAAcumular -= 9;
          acumulador += numeroAAcumular;
        }
    
        const residuo = 10 - (acumulador % 10);
        if (residuo === parseInt(numerosDeLaIdentificacion[9])) {
          estado.innerHTML = "Ruc de persona natural válida";
          return;
        } else {
          estado.innerHTML = "Ruc de persona natural inválida";
          return;
        }
    }
  }

  estado.innerHTML = "Identificación no válida";
}
