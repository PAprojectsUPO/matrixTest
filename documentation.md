# Test de Álgebra Lineal - Documentación

## 📋 Descripción General

Aplicación web interactiva para evaluar conocimientos de álgebra lineal mediante tests modulares con múltiples niveles de dificultad. La aplicación está diseñada para estudiantes universitarios y permite practicar conceptos fundamentales y avanzados de álgebra lineal de manera estructurada y progresiva.

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
- **Respuesta Instantánea**: Indicación visual inmediata de correcto/incorrecto
- **Identificación de Respuesta Correcta**: Resaltado de la opción correcta
- **Información Detallada en Resultados**: Módulo y nivel seleccionados mostrados en pantalla de resultados
- **Resumen Completo**: Revisión de todas las preguntas con respuestas correctas
- ✅ **Pistas (Hints) Disponibles**: Ayuda contextual para guiar al estudiante durante la pregunta.
- ✅ **Justificación de Respuestas**: Explicación detallada (rationale) visible tras seleccionar una opción, aclarando por qué es correcta o incorrecta.

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
- **Responsive Design**: Adaptación perfecta a dispositivos móviles y escritorio
- **Tipografía Clara**: Fuente Inter para máxima legibilidad
- **Animaciones Suaves**: Transiciones fluidas y feedback visual

### **Navegación Intuitiva**
- **Flujo Lineal**: Módulo → Dificultad → Quiz → Resultados
- **Botón de Retroceso**: Opción para volver a selección de módulos
- **Estados Visuales**: Indicadores claros del progreso actual
- **Controles Dinámicos**: Botones que aparecen según el contexto

### **Accesibilidad**
- **Contraste Alto**: Colores que cumplen estándares de accesibilidad
- **Navegación por Teclado**: Soporte completo para navegación sin mouse
- **Responsive**: Funcionamiento óptimo en pantallas de cualquier tamaño

## 🔧 Arquitectura Técnica

### **Frontend**
- **HTML5 Semántico**: Estructura clara y accesible
- **CSS3 + Tailwind**: Estilos modernos con sistema de utilidades
- **JavaScript Vanilla**: Lógica pura sin dependencias externas
- **MathJax**: Renderizado perfecto de expresiones matemáticas

### **Gestión de Datos**
- **JSON Estructurado**: Base de datos local con estructura modular
- **Selección Aleatoria**: Algoritmos eficientes para variedad de preguntas
- **Estado de Aplicación**: Gestión completa del estado del usuario

### **Características de Red**
- **URLs Relativas**: Compatibilidad con cualquier servidor
- **Acceso Multi-dispositivo**: Funciona desde cualquier dispositivo en la red local
- **Sin Dependencias Externas**: Funcionamiento offline (excepto MathJax CDN)

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
- ✅ Implementación de 4 módulos especializados
- ✅ Navegación entre módulos y dificultades
- ✅ Información contextual de cada módulo

### **Banco de Preguntas Expandido**
- ✅ 180+ preguntas totales distribuidas en módulos
- ✅ Cobertura completa de temas de álgebra lineal
- ✅ Preguntas categorizadas por dificultad y subtemas

### **Experiencia de Usuario Mejorada**
- ✅ Pantalla de resultados con información de módulo/nivel
- ✅ Botón de retroceso en selección de dificultad
- ✅ Flujo de navegación optimizado
- ✅ Feedback visual mejorado (colores, iconos y justificaciones en los botones de opción)
- ✅ Implementación de Pistas (Hints) para las preguntas
- ✅ Justificación/Razón fundamental para cada opción de respuesta integrada en el feedback

### **Compatibilidad de Red**
- ✅ URLs relativas para acceso desde múltiples dispositivos
- ✅ Funcionalidad completa en red local
- ✅ Sin dependencias de localhost específico

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
- ✅ **Pistas (Hints) para las preguntas**: Ayuda contextual para guiar al estudiante. (Implementado)
- ✅ **Retroalimentación Detallada por Opción (Rationale)**: Explicación de por qué cada opción es correcta o incorrecta, mejorando la comprensión. (Implementado)

### **Funcionalidades Avanzadas**
- **Modo Estudio**: Revisión de conceptos antes del test
- **Tests Adaptativos**: Dificultad que se ajusta según el rendimiento
- **Visualizaciones Interactivas**: Representaciones gráficas de conceptos
- **Exportación de Resultados**: Informes en PDF

### **Tecnología**
- **Base de Datos**: Migración a sistema de almacenamiento persistente
- **API RESTful**: Backend para gestión avanzada de datos
- **PWA**: Aplicación web progresiva para uso offline
- **Análisis de Datos**: Insights sobre patrones de aprendizaje

### **Estructura de Preguntas Mejorada (Implementada Parcialmente/En Progreso)**
- **Formato de pregunta enriquecido**: Se ha adaptado la aplicación para soportar una estructura de datos para cada pregunta que incluye el texto de la pregunta, una pista (`hint`), y un array de opciones (`options`). La justificación (`explanation`) ahora se muestra directamente con la opción seleccionada.
  La estructura actual en `questions.json` es:
  ```json
  {
      "text": "Pregunta...",
      "options": ["Opción A", "Opción B", "Opción C", "Opción D"],
      "correctAnswer": "Opción B",
      "hint": "Pista para la pregunta...",
      "explanation": "Explicación detallada de la respuesta correcta y/o por qué las otras son incorrectas."
  }
  ```
- **Mejora Futura Propuesta para `questions.json` y `script.js`**:
  Adoptar una estructura de datos más detallada por opción para `questions.json` y adaptar `script.js` para manejarla. Esto permitiría mostrar justificaciones individuales para *cada* opción, no solo la general.
  Ejemplo de la nueva estructura futura:
  ```json
  {
      "question": "Según el Teorema de Rouché-Frobenius, si para un sistema de ecuaciones con 3 incógnitas (n=3) se cumple que $rg(A) = rg(A^*) = 2$, ¿cómo se clasifica el sistema?",
      "hint": "Compara el rango con el número de incógnitas. ¿Son iguales o es menor?",
      "answerOptions": [
          { "text": "Sistema Compatible Determinado (S.C.D.)", "isCorrect": false, "rationale": "Esta clasificación requiere que el rango sea igual al número de incógnitas." },
          { "text": "Sistema Compatible Indeterminado (S.C.I.)", "isCorrect": true, "rationale": "Efectivamente, cuando el rango de las matrices es igual pero menor que el número de incógnitas, existen infinitas soluciones." },
          { "text": "Sistema Incompatible (S.I.)", "isCorrect": false, "rationale": "Para que un sistema sea incompatible, el rango de la matriz de coeficientes (A) debe ser diferente al de la matriz ampliada (A*)." },
          { "text": "Sistema Homogéneo", "isCorrect": false, "rationale": "Un sistema homogéneo se define porque sus términos independientes son todos cero, no por el valor de su rango." }
      ]
  }
  ```
- **Adaptación Futura de la Lógica de la Aplicación**: Modificar el código JavaScript (`script.js`) para:
    - Parsear la nueva estructura detallada de `answerOptions` en `questions.json`.
    - Mostrar la `hint` (ya implementado).
    - Mostrar la `rationale` específica de la opción seleccionada por el usuario.
    - Ajustar la lógica de `selectAnswer`, `renderFeedback`, y `generateQuestion` para acomodar estos nuevos campos por opción.

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

La aplicación **Test de Álgebra Lineal** ha evolucionado hacia una plataforma educativa integral que combina contenido académico riguroso con una experiencia de usuario moderna y accesible. Con su sistema modular, niveles de dificultad progresivos, y feedback detallado, proporciona una herramienta valiosa tanto para el autoaprendizaje como para la evaluación formal en el ámbito universitario.

La arquitectura técnica robusta y la interfaz intuitiva garantizan una experiencia de aprendizaje fluida y efectiva, mientras que el diseño responsive y las características de accesibilidad aseguran que la aplicación sea utilizable por el mayor número de estudiantes posible.