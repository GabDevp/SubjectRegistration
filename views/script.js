document.addEventListener('DOMContentLoaded', () =>{
    const guardar = document.getElementById("guardar");

    const registrarPersona = () => {
        const materia = document.getElementById("materia").value;
        const dia = document.getElementById("dia").value;
        const profesor = document.getElementById("profesor").value;
        const cupo = document.getElementById("cupos").value;
        const fecha = document.getElementById("fecha").value;
        const creditos = document.getElementById("creditos").value;

        fetch("http://localhost:4000/persona/registro",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    materia,
                    dia,
                    profesor,
                    cupo,
                    fecha,
                    creditos
                })
            }
        ).then(response => response.json())
        .then(data => {
            console.log(data.mensaje);
            document.getElementById("myForm").reset();
        })
    };

    if(guardar){
        guardar.addEventListener("click", registrarPersona);
    }
});