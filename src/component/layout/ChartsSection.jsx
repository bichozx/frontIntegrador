import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";

import React from "react";

// Registrar componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const ChartsSection = () => {
  // --- Datos del gráfico de líneas ---
  const rendimientoData = {
    labels: ["Matemáticas", "Ciencias", "Lengua", "Historia", "Inglés"],
    datasets: [
      {
        label: "Rendimiento (%)",
        data: [78, 85, 80, 70, 90],
        borderColor: "#4e73df",
        backgroundColor: "rgba(78, 115, 223, 0.05)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const rendimientoOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  // --- Datos del gráfico de pastel ---
  const gradoData = {
    labels: ["Primaria", "Secundaria"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["#4e73df", "#1cc88a"],
        hoverBackgroundColor: ["#2e59d9", "#17a673"],
        borderWidth: 1,
      },
    ],
  };

  const gradoOptions = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    cutout: "70%",
  };

  return (
    <div className="row">
      {/* Rendimiento Chart */}
      <div className="col-xl-8 col-lg-7 mb-4">
        <div className="card shadow h-100">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              Rendimiento por Asignatura
            </h6>
          </div>
          <div className="card-body">
            <div className="chart-area" style={{ height: "300px" }}>
              <Line data={rendimientoData} options={rendimientoOptions} />
            </div>
          </div>
        </div>
      </div>

      {/* Distribución por Grado */}
      <div className="col-xl-4 col-lg-5 mb-4">
        <div className="card shadow h-100">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              Distribución por Grado
            </h6>
          </div>
          <div className="card-body text-center">
            <div className="chart-pie pt-4 pb-2" style={{ height: "250px" }}>
              <Doughnut data={gradoData} options={gradoOptions} />
            </div>
            <div className="mt-4 small">
              <span className="mr-2">
                <i className="fas fa-circle text-primary"></i> Primaria
              </span>
              <span className="mr-2">
                <i className="fas fa-circle text-success"></i> Secundaria
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
