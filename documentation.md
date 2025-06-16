# Test de Álgebra Lineal - Documentación

## 📋 Descripción General

Aplicación web interactiva para evaluar conocimientos de álgebra lineal mediante tests modulares con múltiples niveles de dificultad. La aplicación está diseñada para estudiantes universitarios y permite practicar conceptos fundamentales y avanzados de álgebra lineal de manera estructurada y progresiva. Cuenta con un diseño moderno y una interfaz completamente responsiva.

## 🎯 Características Principales

### **Sistema Modular**
- **4 Módulos Especializados**: Cada módulo cubre temas específicos de álgebra lineal
- **Selección de Módulo**: Interfaz intuitiva para elegir el área de estudio
- **Información Contextual**: Descripción detallada de cada módulo antes de comenzar

### **Niveles de Dificultad**
- **Básico**: Conceptos fundamentales y definiciones
- **Intermedio**: Aplicaciones y teoremas importantes
- **Avanzado**: Conceptos complejos y aplicaciones especializadas

### **Generación Dinámica de Preguntas**
- **Selección Aleatoria**: 10 preguntas aleatorias por sesión de cada nivel
- **Sin Repetición**: Algoritmo que evita preguntas duplicadas en la misma sesión
- **Variedad Garantizada**: Amplio banco de preguntas por módulo y nivel

### **Feedback Inmediato e Integral**
- **Respuesta Instantánea**: Indicación visual inmediata de correcto/incorrecto con iconos y colores
- **Identificación de Respuesta Correcta**: Resaltado automático de la opción correcta
- **Información Detallada en Resultados**: Módulo y nivel seleccionados mostrados en pantalla de resultados
- **Resumen Completo**: Revisión de todas las preguntas con respuestas correctas
- ✅ **Pistas (Hints) Integradas**: Ayuda contextual visible durante cada pregunta
- ✅ **Justificación Detallada**: Explicación completa de cada respuesta mostrada inmediatamente después de seleccionar
- ✅ **Feedback Visual Mejorado**: Iconos de verificación/error y texto explicativo estructurado

## 📚 Módulos Disponibles

### **Álgebra Lineal I**
- **Temas**: Matrices, determinantes, sistemas de ecuaciones lineales
- **Enfoque**: Fundamentos básicos y operaciones matriciales
- **Preguntas**: 45 preguntas distribuidas en 3 niveles (15 por nivel)

### **Álgebra Lineal II**
- **Temas**: Espacios vectoriales, aplicaciones lineales, conceptos avanzados
- **Enfoque**: Estructuras abstractas y transformaciones lineales
- **Preguntas**: 45 preguntas distribuidas en 3 niveles (15 por nivel)

### **Álgebra Lineal III**
- **Temas**: Producto escalar, ortogonalidad, códigos lineales, factorización QR, mínimos cuadrados
- **Enfoque**: Métodos numéricos y aplicaciones especializadas
- **Preguntas**: 45 preguntas distribuidas en 3 niveles (15 por nivel)

### **Álgebra Lineal IV** ⭐ *Recién Agregado*
- **Temas**: Autovalores y autovectores, ecuaciones en diferencias, formas cuadráticas
- **Enfoque**: Análisis espectral y aplicaciones dinámicas
- **Preguntas**: 45 preguntas distribuidas en 3 niveles (15 por nivel)

## 🎨 Diseño y Experiencia de Usuario

### **Interfaz Moderna**
- **Tema Oscuro**: Diseño elegante y cómodo para estudios prolongados
- **Título con Gradiente**: Header principal con efecto degradado multicolor tipo Apple Intelligence
- **Responsive Design**: Adaptación perfecta a dispositivos móviles y escritorio
- **Tipografía Clara**: Fuente Inter para máxima legibilidad
- **Animaciones Suaves**: Transiciones fluidas y feedback visual optimizado

### **Navegación Intuitiva**
- **Flujo Lineal**: Módulo → Dificultad → Quiz → Resultados
- **Botón de Retroceso**: Opción para volver a selección de módulos desde cualquier pantalla
- **Estados Visuales**: Indicadores claros del progreso actual
- **Controles Dinámicos**: Botones que aparecen según el contexto
- **Navegación Bidireccional**: Botones "Atrás" y "Siguiente" durante el quiz

### **Accesibilidad y Usabilidad**
- **Contraste Alto**: Colores que cumplen estándares de accesibilidad WCAG
- **Navegación por Teclado**: Soporte completo para navegación sin mouse
- **Responsive**: Funcionamiento óptimo en pantallas desde 320px hasta 1200px+
- **Feedback Contextual**: Mensajes claros sobre el estado de cada pregunta
- **Centrado de Elementos**: Botones y contenido principal perfectamente alineados

## 🔧 Arquitectura Técnica

### **Frontend**
- **HTML5 Semántico**: Estructura clara y accesible con elementos apropiados
- **CSS3 Puro**: Estilos modernos optimizados sin dependencias externas de CSS
- **JavaScript Vanilla**: Lógica pura sin frameworks, máximo rendimiento
- **MathJax**: Renderizado perfecto de expresiones matemáticas LaTeX

### **Gestión de Datos**
- **JSON Estructurado**: Base de datos local con estructura modular
- **Selección Aleatoria**: Algoritmos eficientes para variedad de preguntas
- **Estado de Aplicación**: Gestión completa del estado del usuario

### **Características de Red**
- **URLs Relativas**: Compatibilidad con cualquier servidor
- **Acceso Multi-dispositivo**: Funciona desde cualquier dispositivo en la red local
- **Sin Dependencias Externas**: Funcionamiento offline (excepto MathJax CDN)

### **Despliegue con Docker**
La aplicación puede ser desplegada utilizando Docker. Se proporciona un `Dockerfile` para construir una imagen de la aplicación.

**Construcción de la Imagen:**
Para construir la imagen Docker, navega a la raíz del proyecto (`matrixTest`) en tu terminal y ejecuta:
```bash
docker build -t matrix-test-app .
```

**Ejecución del Contenedor:**

*   **Durante el Desarrollo (con volumen):**
    Para facilitar el desarrollo y ver los cambios en tiempo real, puedes montar el directorio actual como un volumen dentro del contenedor. Ejecuta el siguiente comando desde la raíz del proyecto:
    ```bash
    docker run -d -p 8080:80 -v ${PWD}:/usr/share/nginx/html matrix-test-app
    ```
    La aplicación estará disponible en `http://localhost:8080`.

*   **En Producción (sin volumen - Próximamente):**
    La intención futura es ejecutar el contenedor sin necesidad de montar un volumen, utilizando los archivos copiados durante la construcción de la imagen.
    ```bash
    docker run -d -p 8080:80 matrix-test-app
    ```

## 📊 Funcionalidades de Evaluación

### **Sistema de Puntuación**
- **Contador en Tiempo Real**: Seguimiento de aciertos durante el quiz
- **Porcentaje Final**: Cálculo automático del rendimiento
- **Historial de Respuestas**: Registro completo para revisión

### **Pantalla de Resultados Mejorada**
- **Información Contextual**: Módulo y nivel de dificultad seleccionados
- **Puntuación Destacada**: Visualización clara del resultado
- **Revisión Detallada**: Lista completa de preguntas con respuestas correctas
- **Opción de Reinicio**: Retorno fácil al menú principal

## 🚀 Mejoras Implementadas Recientemente

### **Sistema Modular Completo**
- ✅ Implementación de 4 módulos especializados completamente funcionales
- ✅ Navegación fluida entre módulos y niveles de dificultad
- ✅ Información contextual detallada de cada módulo

### **Banco de Preguntas Expandido**
- ✅ 180+ preguntas totales distribuidas estratégicamente en módulos
- ✅ Cobertura completa de temas fundamentales y avanzados de álgebra lineal
- ✅ Preguntas categorizadas por dificultad y subtemas específicos

### **Experiencia de Usuario Mejorada**
- ✅ Pantalla de resultados con información completa de módulo/nivel
- ✅ Sistema de navegación bidireccional con botones "Atrás" y "Siguiente"
- ✅ Flujo de navegación completamente optimizado y probado
- ✅ Feedback visual premium con iconos SVG y colores semánticos
- ✅ Sistema de pistas (hints) completamente integrado y funcional
- ✅ Justificación detallada de respuestas con formato mejorado
- ✅ Título principal con gradiente multicolor estilo Apple Intelligence

### **Optimización Técnica**
- ✅ Eliminación de archivos CSS no utilizados (styles_backup.css, styles_new.css)
- ✅ Código CSS optimizado y sin dependencias innecesarias
- ✅ Estructura de archivos limpia y mantenible
- ✅ Compatibilidad completa de red local mejorada

### **Interfaz y Diseño**
- ✅ Botones perfectamente centrados en todas las pantallas
- ✅ Sistema de layout responsive mejorado para todos los dispositivos
- ✅ Feedback de opciones con estructura visual clara y legible
- ✅ Animaciones y transiciones suavizadas

## 🎯 Casos de Uso

### **Para Estudiantes**
- **Autoevaluación**: Verificar comprensión de conceptos específicos
- **Preparación de Exámenes**: Práctica intensiva por módulos
- **Estudio Progresivo**: Avance gradual por niveles de dificultad
- **Identificación de Debilidades**: Revisión de áreas que requieren más estudio

### **Para Educadores**
- **Herramienta de Evaluación**: Tests rápidos en clase
- **Asignación de Práctica**: Ejercicios específicos por tema
- **Seguimiento de Progreso**: Evaluación del nivel de comprensión
- **Recurso Complementario**: Apoyo a clases teóricas

## 🔮 Mejoras Futuras Propuestas

### **Sistema de Usuarios**
- **Perfiles Personalizados**: Registro y seguimiento individual
- **Historial de Progreso**: Análisis temporal del rendimiento
- **Estadísticas Avanzadas**: Métricas detalladas por módulo y tema

### **Contenido Expandido**
- **Más Módulos**: Álgebra Lineal V, VI (temas especializados)
- **Recursos Complementarios**: Enlaces a material de estudio
- **Banco de Preguntas Ampliado**: Más preguntas por módulo y nivel

### **Funcionalidades Avanzadas**
- **Modo Estudio**: Revisión de conceptos antes del test
- **Tests Adaptativos**: Dificultad que se ajusta según el rendimiento
- **Visualizaciones Interactivas**: Representaciones gráficas de conceptos
- **Exportación de Resultados**: Informes en PDF
- **Sistema de Guardado**: Progreso persistente entre sesiones

### **Tecnología**
- **Base de Datos**: Migración a sistema de almacenamiento persistente
- **API RESTful**: Backend para gestión avanzada de datos
- **PWA**: Aplicación web progresiva para uso offline
- **Análisis de Datos**: Insights sobre patrones de aprendizaje

### **Estructura de Archivos Actualizada**

```
matrixTest/
├── Dockerfile              # Configuración de contenedor Docker
├── documentation.md         # Documentación completa del proyecto  
├── index.html              # Estructura HTML principal
├── questions.json          # Base de datos de preguntas estructurada
├── script.js              # Lógica JavaScript completa
└── styles.css             # Estilos CSS optimizados
```

**Archivos Eliminados (Ya no necesarios):**
- `styles_backup.css` - Archivo de respaldo CSS no utilizado
- `styles_new.css` - Archivo temporal CSS no utilizado

### **Estructura de Preguntas Implementada**
- **Formato de pregunta enriquecido**: La aplicación utiliza una estructura de datos robusta para cada pregunta que incluye texto, pista, opciones y explicación detallada. Esta estructura está completamente implementada y funcional.
  
  **Estructura actual en `questions.json` (Completamente implementada):**
  ```json
  {
      "id": "AL_BAS_001",
      "subCategory": "Matrices básicas",
      "text": "¿Qué propiedad debe cumplir la matriz de paridad H de un código lineal para detectar t errores?",
      "hint": "Considera la relación entre la distancia mínima del código y la capacidad de detección de errores.",
      "options": [
          "Cualquier conjunto de t columnas debe ser linealmente dependiente",
          "H debe tener rango t",
          "H debe ser cuadrada",
          "H debe tener determinante cero"
      ],
      "correctAnswer": "Cualquier conjunto de t columnas debe ser linealmente dependiente",
      "explanation": "Para detectar t errores, la distancia mínima del código debe ser d ≥ t + 1, lo que implica que no hay combinaciones lineales de t columnas de H que den 0."
  }
  ```

### **Características Técnicas Implementadas**
- ✅ **Sistema de Pistas**: Cada pregunta incluye una pista contextual
- ✅ **Explicaciones Detalladas**: Justificación completa de la respuesta correcta
- ✅ **Identificadores Únicos**: Sistema de IDs para tracking de preguntas
- ✅ **Subcategorías**: Organización temática dentro de cada módulo
- ✅ **Feedback Inmediato**: Visualización instantánea de correcto/incorrecto
- ✅ **Renderizado MathJax**: Soporte completo para fórmulas matemáticas
- **Mejora Futura Propuesta para Feedback por Opción**:
  Adoptar una estructura de datos más detallada por opción individual para `questions.json` que permita mostrar justificaciones específicas para *cada* opción, no solo la explicación general.
  
  **Ejemplo de estructura futura propuesta:**
  ```json
  {
      "question": "Según el Teorema de Rouché-Frobenius...",
      "hint": "Compara el rango con el número de incógnitas...",
      "answerOptions": [
          { 
              "text": "Sistema Compatible Determinado (S.C.D.)", 
              "isCorrect": false, 
              "rationale": "Esta clasificación requiere que el rango sea igual al número de incógnitas." 
          },
          { 
              "text": "Sistema Compatible Indeterminado (S.C.I.)", 
              "isCorrect": true, 
              "rationale": "Cuando el rango es igual pero menor que el número de incógnitas, existen infinitas soluciones." 
          }
      ]
  }
  ```

- **Adaptación Futura de la Lógica**: Modificar `script.js` para parsear la nueva estructura y mostrar la justificación específica de cada opción seleccionada.

## 📋 Requisitos del Sistema

### **Cliente (Navegador)**
- **Navegadores Modernos**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- **JavaScript Habilitado**: Requerido para funcionalidad completa
- **Conexión a Internet**: Solo para carga inicial de MathJax
- **Resolución Mínima**: 320px (móvil) - Óptima: 1024px+

### **Servidor (Desarrollo)**
- **Servidor HTTP Simple**: Python, Node.js, o cualquier servidor web
- **Puerto Configurable**: Flexibilidad para diferentes entornos
- **Archivos Estáticos**: Capacidad de servir HTML, CSS, JS, JSON

## 🏁 Conclusión

La aplicación **Test de Álgebra Lineal** representa una plataforma educativa madura y completamente funcional que combina contenido académico riguroso con una experiencia de usuario excepcional. 

**Logros Destacados:**
- ✅ **Sistema Modular Completo**: 4 módulos especializados con 180+ preguntas
- ✅ **Interfaz Premium**: Diseño moderno con gradientes y animaciones fluidas  
- ✅ **Feedback Integral**: Sistema de pistas, explicaciones y justificaciones detalladas
- ✅ **Optimización Técnica**: Código limpio, sin dependencias innecesarias
- ✅ **Accesibilidad Total**: Responsive design y navegación optimizada

La arquitectura técnica robusta, la interfaz intuitiva con elementos visuales premium, y las características de accesibilidad garantizan una experiencia de aprendizaje efectiva y moderna. El sistema de feedback detallado con pistas integradas y explicaciones inmediatas maximiza el valor educativo de cada sesión de práctica.

**Estado Actual**: Aplicación completamente funcional y lista para uso en producción educativa.