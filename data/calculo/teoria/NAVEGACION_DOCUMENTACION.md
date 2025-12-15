# Sistema de Navegación - Documentación de Cambios

## Resumen
Se ha implementado un sistema completo de navegación mediante enlaces desde los archivos de preguntas (`questions_*.md`) hacia las fuentes teóricas (`EB*.md`).

## Cambios Realizados

### 1. Anclas HTML en Archivos de Teoría (EB1.md - EB14.md)

Se agregaron anclas HTML antes de cada:
- **Definición** (formato: `<a name="def-X-Y"></a>`)
- **Teorema** (formato: `<a name="teo-X-Y"></a>`)
- **Proposición** (formato: `<a name="prop-X-Y"></a>`)
- **Observación** (formato: `<a name="obs-X-Y"></a>`)
- **Corolario** (formato: `<a name="cor-X-Y"></a>`)
- **Ejemplo** (formato: `<a name="ej-X-Y"></a>`)

Donde X-Y representa el número de la sección (ej: "1-1" para "1.1", "2-3" para "2.3").

**Ejemplo:**
```markdown
<a name="def-3-1"></a>
**Definición 3.1** Dos sucesiones ${x_{n}}_n$ e ${y_{n}}_n$ se dicen **equivalentes**...
```

### 2. Corrección de Enlaces en Archivos de Preguntas

Se corrigieron todos los enlaces en los archivos `questions_1.md` hasta `questions_5.md`:

**Antes:**
```markdown
[Definición 3.1 - Infinitésimos equivalentes](Teoria/EB2.md#def-3-1)
```

**Después:**
```markdown
[Definición 3.1 - Infinitésimos equivalentes](EB2.md#def-3-1)
```

## Estadísticas

- **Archivos de teoría procesados:** 14 (EB1.md - EB14.md)
- **Archivos de preguntas procesados:** 5 (questions_1.md - questions_5.md)
- **Total de enlaces corregidos:** 52
- **Anclas agregadas:** ~100+ (distribuidas en los 14 archivos)

## Estructura de Referencias

### Formato de Anclas por Tipo

| Tipo | Prefijo | Ejemplo de Ancla | Ejemplo de Enlace |
|------|---------|------------------|-------------------|
| Definición | `def` | `<a name="def-2-1"></a>` | `EB1.md#def-2-1` |
| Teorema | `teo` | `<a name="teo-1-1"></a>` | `EB5.md#teo-1-1` |
| Proposición | `prop` | `<a name="prop-3-2"></a>` | `EB1.md#prop-3-2` |
| Observación | `obs` | `<a name="obs-2-2"></a>` | `EB1.md#obs-2-2` |
| Corolario | `cor` | `<a name="cor-1-1"></a>` | `EB*.md#cor-1-1` |
| Ejemplo | `ej` | `<a name="ej-2-1"></a>` | `EB*.md#ej-2-1` |

## Archivos Modificados

### Archivos de Teoría
1. `data/calculo/teoria/EB1.md` - Sucesiones
2. `data/calculo/teoria/EB2.md` - Sucesiones e Inducción
3. `data/calculo/teoria/EB3.md` - Series
4. `data/calculo/teoria/EB4.md` - Límites de Funciones
5. `data/calculo/teoria/EB5.md` - Límites de Funciones (continuación)
6. `data/calculo/teoria/EB6.md` - Continuidad y Derivadas
7. `data/calculo/teoria/EB7.md` - Diferenciabilidad
8. `data/calculo/teoria/EB8.md` - Taylor y Optimización
9. `data/calculo/teoria/EB9.md` - Optimización Restringida y Primitivas
10. `data/calculo/teoria/EB10.md` - Métodos de Integración
11. `data/calculo/teoria/EB11.md` - Aplicaciones Geométricas
12. `data/calculo/teoria/EB12.md` - Aplicaciones Geométricas (continuación)
13. `data/calculo/teoria/EB13.md` - Integrales Múltiples
14. `data/calculo/teoria/EB14.md` - Ecuaciones Diferenciales

### Archivos de Preguntas
1. `data/calculo/teoria/questions_1.md` - 11 enlaces corregidos
2. `data/calculo/teoria/questions_2.md` - 11 enlaces corregidos
3. `data/calculo/teoria/questions_3.md` - 10 enlaces corregidos
4. `data/calculo/teoria/questions_4.md` - 10 enlaces corregidos
5. `data/calculo/teoria/questions_5.md` - 10 enlaces corregidos

## Cómo Usar el Sistema de Navegación

1. **Desde un archivo de preguntas:**
   - Haz clic en cualquier enlace de justificación (ej: "Ver Definición 3.1...")
   - Serás dirigido automáticamente a la definición/teorema/proposición correspondiente en el archivo de teoría

2. **Ejemplo de navegación:**
   ```
   questions_1.md (línea 7)
   └─> Click en "Definición 3.1 - Infinitésimos equivalentes"
       └─> Navega a EB2.md#def-3-1
           └─> Muestra la Definición 3.1 en EB2.md
   ```

## Verificación

Para verificar que un enlace funciona correctamente:
1. Abre el archivo de preguntas
2. Localiza el enlace (formato: `[Texto](EBX.md#ancla)`)
3. Verifica que el archivo `EBX.md` contenga la ancla correspondiente antes de la definición/teorema

## Mantenimiento Futuro

Si se agregan nuevas definiciones, teoremas o proposiciones:

1. **En archivos de teoría (EB*.md):**
   - Agregar ancla HTML antes del elemento:
     ```markdown
     <a name="tipo-X-Y"></a>
     **Tipo X.Y** Descripción...
     ```

2. **En archivos de preguntas (questions_*.md):**
   - Usar el formato de enlace:
     ```markdown
     [Descripción](EBX.md#tipo-X-Y)
     ```

## Notas Técnicas

- Las anclas HTML son compatibles con Markdown y funcionan en la mayoría de visualizadores
- Los enlaces son relativos, por lo que funcionan correctamente dentro del mismo directorio
- El formato de anclas sigue el estándar HTML: `<a name="id"></a>`
- Los IDs de anclas usan guiones en lugar de puntos para compatibilidad (ej: "1-1" en lugar de "1.1")
