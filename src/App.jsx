import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

// Importación estática de los archivos Markdown (Vite ?raw)
import inicioMD from '../dosc_paesca/01_inicio_paesca.md?raw';
import libreMD from '../dosc_paesca/02_A_software_libre_paesca.md?raw';
import instalMD from '../dosc_paesca/03_B_instalacion_config_paesca.md?raw';
import permisosMD from '../dosc_paesca/04_C_permisos_linea_comandos_paesca.md?raw';
import paquetesMD from '../dosc_paesca/05_D_gestor_paquetes_paesca.md?raw';
import nginxMD from '../dosc_paesca/06_E_nginx_despliegue_paesca.md?raw';
import bitacoraMD from '../dosc_paesca/07_bitacora_ia_paesca.md?raw';

const documentos = [
  { id: '01', titulo: 'Portada', contenido: inicioMD },
  { id: '02', titulo: 'Software Libre', contenido: libreMD },
  { id: '03', titulo: 'Instalación', contenido: instalMD },
  { id: '04', titulo: 'Permisos', contenido: permisosMD },
  { id: '05', titulo: 'Gestor de Paquetes', contenido: paquetesMD },
  { id: '06', titulo: 'Nginx', contenido: nginxMD },
  { id: '07', titulo: 'Bitácora de IA', contenido: bitacoraMD }
];

function Sidebar({ items, selectedId, onSelect, isOpen, onClose }) {
  return (
    <aside className={`wiki-sidebar ${isOpen ? 'open' : 'closed'}`} aria-hidden={!isOpen}>
      <div className="sidebar-header">
        <h2 className="wiki-title">WIKILXN</h2>
        <button className="close-btn" onClick={onClose} aria-label="Cerrar menú">×</button>
      </div>

      <nav className="wiki-nav" aria-label="Navegación de la wiki">
        {items.map((doc) => (
          <button
            key={doc.id}
            className={`wiki-nav-item ${selectedId === doc.id ? 'active' : ''}`}
            onClick={() => onSelect(doc)}
          >
            <span className="nav-id">{doc.id}</span>
            <span className="nav-title">{doc.titulo}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

function App() {
  const [docSeleccionado, setDocSeleccionado] = useState(documentos[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="wiki-container">
      {/* Mobile header with toggle */}
      <header className="mobile-header">
        <button
          className="menu-toggle"
          onClick={() => setSidebarOpen((s) => !s)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
        <div className="mobile-title">WIKILXN</div>
      </header>

      <Sidebar
        items={documentos}
        selectedId={docSeleccionado.id}
        onSelect={(doc) => {
          setDocSeleccionado(doc);
          setSidebarOpen(false);
        }}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Contenido Principal */}
      <main className="wiki-content" role="main">
        <div className="markdown-body">
          <ReactMarkdown>{docSeleccionado.contenido}</ReactMarkdown>
        </div>
      </main>
    </div>
  );
}

export default App;