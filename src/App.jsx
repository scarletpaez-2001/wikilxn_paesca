import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

// Importación estática de los archivos Markdown
import inicioMD from '../dosc_paesca/01_inicio_paesca.md?raw';
import libreMD from '../dosc_paesca/02_A_software_libre_paesca.md?raw';
import instalMD from '../dosc_paesca/03_B_instalacion_config_paesca.md?raw';
import permisosMD from '../dosc_paesca/04_C_permisos_linea_comandos_paesca.md?raw';
import paquetesMD from '../dosc_paesca/05_D_gestor_paquetes_paesca.md?raw';
import nginxMD from '../dosc_paesca/06_E_nginx_despliegue_paesca.md?raw';
import bitacoraMD from '../dosc_paesca/07_bitacora_ia_paesca.md?raw';

const documentos = [
  { id: '01', titulo: 'Portada e Inicio', contenido: inicioMD },
  { id: '02', titulo: 'Software Libre', contenido: libreMD },
  { id: '03', titulo: 'Instalación y Base', contenido: instalMD },
  { id: '04', titulo: 'Permisos por Consola', contenido: permisosMD },
  { id: '05', titulo: 'Gestor de Paquetes', contenido: paquetesMD },
  { id: '06', titulo: 'Nginx y Despliegue', contenido: nginxMD },
  { id: '07', titulo: 'Bitácora de IA', contenido: bitacoraMD }
];

function App() {
  const [docSeleccionado, setDocSeleccionado] = useState(documentos[0]);

  return (
    <div className="wiki-container">
      {/* Menú Lateral */}
      <aside className="wiki-sidebar">
        <h2 className="wiki-title">WIKILXN</h2>
        <nav className="wiki-nav">
          {documentos.map((doc) => (
            <button
              key={doc.id}
              className={`wiki-nav-item ${docSeleccionado.id === doc.id ? 'active' : ''}`}
              onClick={() => setDocSeleccionado(doc)}
            >
              {doc.id}. {doc.titulo}
            </button>
          ))}
        </nav>
      </aside>

      {/* Contenido Principal */}
      <main className="wiki-content">
        <div className="markdown-body">
          <ReactMarkdown>{docSeleccionado.contenido}</ReactMarkdown>
        </div>
      </main>
    </div>
  );
}

export default App;