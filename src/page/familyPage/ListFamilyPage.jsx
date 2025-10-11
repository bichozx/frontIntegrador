import React, { useEffect, useState } from 'react'

import { TableFamily } from '../../component/family/TableFamily'

export const ListFamilyPage = () => {
    const [familiares, setFamiliares] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Datos iniciales (simulación, luego se reemplazan con fetch)
  useEffect(() => {
    setFamiliares([
      {
        id: 1,
        estudiante: 'Alan Brito',
        familiar: 'María Brito',
        parentesco: 'Madre',
        telefono: '3101234567',
        email: 'maria.brito@gmail.com',
        acudiente: true,
      },
      {
        id: 2,
        estudiante: 'Alan Brito',
        familiar: 'Carlos Brito',
        parentesco: 'Padre',
        telefono: '3112345678',
        email: 'carlos.brito@gmail.com',
        acudiente: false,
      },
      {
        id: 3,
        estudiante: 'Zoyla Vaca',
        familiar: 'Ana Vaca',
        parentesco: 'Madre',
        telefono: '3123456789',
        email: 'ana.vaca@gmail.com',
        acudiente: true,
      },
    ]);
  }, []);

  // Filtro de búsqueda
  const filteredFamiliares = familiares.filter((f) =>
    f.familiar.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handlers
  const handleView = (id) => {
    const fam = familiares.find((f) => f.id === id);
    alert(`Ver detalles de ${fam?.familiar}`);
  };

  const handleEdit = (id) => {
    alert(`Editar familiar ID: ${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Deseas eliminar este familiar?')) {
      setFamiliares((prev) => prev.filter((f) => f.id !== id));
    }
  };
  return (
    <div>
      <TableFamily
        familiares={familiares}
        setSearchTerm={setSearchTerm}
        filteredFamiliares={filteredFamiliares}
        handleView={handleView}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  )
}
