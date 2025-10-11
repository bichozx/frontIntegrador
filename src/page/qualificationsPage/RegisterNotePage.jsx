import React, { useState } from 'react'

import { RegisterNote } from '../../component/qualifications/RegisterNote';

export const RegisterNotePage = () => {
    const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [nota3, setNota3] = useState("");
  const [promedio, setPromedio] = useState(0);
  const [estado, setEstado] = useState("Sin calificar");

  // Simular datos de prueba (después vendrán de la API)
  const estudiantes = [
    { id: 1, nombre: "Alan Brito - 10°" },
    { id: 2, nombre: "Zoyla Vaca - 11°" },
  ];

  const asignaturas = ["Matemáticas", "Lenguaje", "Ciencias", "Sociales", "Inglés"];

  const docentes = [
    "Prof. María González",
    "Prof. Carlos Rodríguez",
    "Prof. Ana Martínez",
  ];

  const periodos = [
    "Primer Trimestre 2024",
    "Segundo Trimestre 2024",
    "Tercer Trimestre 2024",
  ];

  // Calcular promedio automáticamente
  const calcularPromedio = (n1, n2, n3) => {
    const p1 = parseFloat(n1) || 0;
    const p2 = parseFloat(n2) || 0;
    const p3 = parseFloat(n3) || 0;
    const promedioCalc = (p1 * 0.3 + p2 * 0.3 + p3 * 0.4).toFixed(2);
    setPromedio(promedioCalc);

    if (promedioCalc >= 4.6) setEstado("Excelente");
    else if (promedioCalc >= 4.0) setEstado("Bueno");
    else if (promedioCalc >= 3.0) setEstado("Aceptable");
    else if (promedioCalc > 0) setEstado("Reprobado");
    else setEstado("Sin calificar");
  };

  const handleNotaChange = (setter, value) => {
    setter(value);
    calcularPromedio(
      value === nota1 ? value : nota1,
      value === nota2 ? value : nota2,
      value === nota3 ? value : nota3
    );
  };

  const handleRegistrar = (e) => {
    e.preventDefault();
    console.log("Datos registrados (futuro POST API):", {
      nota1,
      nota2,
      nota3,
      promedio,
    });
    alert("Nota registrada correctamente (simulado).");
  };
  return (
    <>
<RegisterNote
  handleRegistrar={handleRegistrar}
  handleNotaChange={handleNotaChange}
  nota1={nota1}
nota2={nota2}
nota3={nota3}
promedio={promedio}
estado={estado}
setNota1={setNota1}
setNota2={setNota2}
setNota3={setNota3}
setPromedio={setPromedio}
setEstado={setEstado}
asignaturas={asignaturas}
docentes={docentes}
periodos={periodos}
estudiantes={estudiantes}
/>
    </>
  )
}
