# Solucionario Test de Cálculo (Test_Tareas_D)
# TEST TEORÍA
## 1. Comportamiento de Sucesiones
Apellidos: **(Espacio para Apellidos)**
Nombre: **(Espacio para Nombre)**
**Pregunta:** Si para todo $M>0$ existe $n_{0}$ tal que $a_{n}<M$ para $n\ge n_{0}$:
Cada respuesta incorrecta resta $\\frac{1}{3}$ de una respuesta correcta.
* **(a)** $\{a_{n}\}$ es acotada.
* **(b)** $\lim_{n\rightarrow\infty}a_{n}=-\infty$.
* **(c)** Ninguna de las anteriores. ✅
## Página 1
**Justificación:** Ver [Definición 2.2 - Límite de sucesión](EB1.md#def-2-2)
La condición no implica acotación inferior ni divergencia a $-\infty$.
**(1) Sea ${a\_n}$ una sucesión de números reales. Si se verifica que para todo $M\>0$ existe un valor $n\_0\\in\\mathbb{N}$ tal que para todo $n\\ge n\_0$ se tiene que $a\_n\<M$ entonces**
---
  * **(a)** ${a\_n}$ es una sucesión acotada.
  * **(b)** $\\lim\_{n\\to\\infty}a\_n=-\\infty$.
  * **(c)** Ninguna de las anteriores.
## 2. Sumas Parciales de Series
**(2) Si $S\_n=\\frac{2n^{2}+1}{n+n^{2}}$ es la suma parcial $n$-ésima de la serie $\\sum\_{k=1}^{\\infty}a\_k$, entonces:**
**Pregunta:** Si $S_{n}=\frac{2n^{2}+1}{n+n^{2}}$, entonces $\sum_{k=2}^{\infty}a_{k}$:
  * **(a)** $\\sum\_{k=2}^{\\infty}a\_k=2$
  * **(b)** $\\sum\_{k=2}^{\\infty}a\_k=\\frac{1}{2}$.
  * **(c)** Esos datos son insuficientes para calcular el valor de la serie.
* **(a)** $2$.
* **(b)** $\frac{1}{2}$. ✅
* **(c)** Datos insuficientes.
**(3) El dominio de la función $f(x)=\\frac{x}{\\ln(x+2)}$ es**
**Justificación:** Ver [Definición 1.1 - Suma parcial](EB3.md#def-1-1)
$\sum_{k=1}^{\infty}a_k = 2$, $a_1 = S_1 = \frac{3}{2}$. Respuesta: $2 - \frac{3}{2} = \frac{1}{2}$.
  * **(a)** ${x\\in\\mathbb{R}:x\>-2}$.
  * **(b)** ${x\\in\\mathbb{R}:x\>-2,x\\ne0}$
  * **(c)** ${x\\in\\mathbb{R}:x\>-2,x\\ne-1}$.
---
**(4) Dada una función $f:\\mathbb{R}^n\\to\\mathbb{R}$ si $\\lim\_{x\\to a}f(x)=-\\infty$ entonces**
## 3. Dominio de Funciones
  * **(a)** $\\forall M\>0, \\exists\\delta\>0$ tal que, si $||x-a||\<\\delta$ entonces $f(x)\<M$
  * **(b)** $\\forall M\>0, \\exists\\delta\>0$ tal que, si $||x-a||\<\\delta$, entonces $f(x)\<-M$.
  * **(c)** $\\forall M\>0, \\exists K\>0$ tal que, si $||x-a||\>K$ entonces $f(x)\<-M$.
**Pregunta:** Dominio de $f(x)=\frac{x}{\ln(x+2)}$:
**(5) Dada una función $f:\\mathbb{R}\\to\\mathbb{R}$ tal que para toda sucesión $x\_n$ cumpliendo $\\lim\_{n}x\_n=1$ se verifica $\\lim\_{n}f(x\_n)=2$, entonces**
* **(a)** $\{x:x>-2\}$.
* **(b)** $\{x:x>-2,x\ne0\}$.
* **(c)** $\{x:x>-2,x\ne-1\}$. ✅
  * **(a)** puede ocurrir que $\\lim\_{x\\to 1}f(x)\\ne 2$
  * **(b)** si $f$ no es continua en $x=1$, puede ocurrir que $\\lim\_{x\\to 1}f(x)\\ne 2$
  * **(c)** se verifica $\\lim\_{x\\to 1}f(x)=2$.
**Justificación:** Ver [Proposición 2.1 - Álgebra de funciones continuas](EB6.md#prop-2-1)
$x+2>0$ y $\ln(x+2)\ne0 \implies x>-2$ y $x\ne-1$.
-----
---
## Página 2
## 4. Límite Infinito en un Punto
**(6) La función $f:\\mathbb{R}^2\\to\\mathbb{R}$ dada por**
$$f(x,y)=\\begin{cases} \\frac{y^{2}}{x+y^{3}} & \\text{si } (x,y)\\ne(0,0) \\ 0 & \\text{si } (x,y)=(0,0) \\end{cases}$$
**no es continua en $(0,0)$ porque:**
**Pregunta:** Si $\lim_{x\rightarrow a}f(x)=-\infty$ entonces:
  * **(a)** Uno de los límites reiterados no existe.
  * **(b)** Existen los límites reiterados pero no coinciden.
  * **(c)** El límite de la función en la dirección $y=x$ es distinto de 0.
* **(a)** $\forall M>0\exists\delta>0$: $f(x)<M$.
* **(b)** $\forall M>0\exists\delta>0$: si $||x-a||<\delta$, $f(x)<-M$. ✅
* **(c)** Límite en el infinito.
**(7) La derivada direccional de la función $f(x,y)=x+y^{2}$ en la dirección del vector $(1, 1)$ en el punto $(0,0)$ es:**
**Justificación:** Ver [Definición 3.2 - Límite $-\infty$](EB4.md#def-3-2)
  * **(a)** $\\sqrt{2}$.
  * **(b)** $\\frac{1}{\\sqrt{2}}$
  * **(c)** $0$.
---
**(8) Sea $f:\\mathbb{R}^n\\to\\mathbb{R}$, $x\_0\\in \\mathbb{R}^n$ tal que $\\nabla f(x\_0)=\\underline{0}$ y $H f(x\_0)$ es semidefinida negativa. Entonces:**
## 5. Caracterización Secuencial (Criterio de Heine)
  * **(a)** $x\_0$ no puede ser un punto de silla de $f$.
  * **(b)** $x\_0$ no puede ser un mínimo local de $f$.
  * **(c)** $x\_0$ es un máximo local de $f$.
**Pregunta:** Si para toda $x_{n} \to 1$ se tiene $\lim_{n}f(x_{n})=2$:
**(9) Si $F(x)$ es una primitiva de la función $f(x)$, entonces**
* **(a)** puede que $\lim_{x\rightarrow1}f(x)\ne2$.
* **(b)** si $f$ no es continua, puede que el límite no sea 2.
* **(c)** $\lim_{x\rightarrow1}f(x)=2$. ✅
  * **(a)** $\\int f(x)F(x)dx=\\frac{(f(x))^{2}}{2}+c.$
  * **(b)** $\\int f(x)F(x)dx=f(x)+c.$
  * **(c)** $\\int f(x)F(x)dx=\\frac{(F(x))^{2}}{2}+c$.
**Justificación:** Ver [Proposición 1.3 - Caracterización secuencial](EB4.md#prop-1-3)
**(10) ¿Cuál de las siguientes funciones es solución de la ecuación diferencial $xy'-3y-x^3=0$?**
---
  * **(a)** $y(x)=x^{3}\\ln(x)$
  * **(b)** $y(x)=x^{2}-\\frac{\\ln(x)}{x}$
  * **(c)** $y(x)=x^{3}+\\ln(x)$
## 6. Límites Reiterados
**Pregunta:** $f(x,y)=\frac{y^{2}}{x+y^{3}}$ con $f(0,0)=0$ no es continua en $(0,0)$ porque:
* **(a)** Uno de los límites reiterados no existe. ✅
* **(b)** Los límites reiterados existen pero no coinciden.
* **(c)** El límite direccional $y=x$ es distinto de 0.
**Justificación:** Ver [Proposición 2.3 - Límites reiterados](EB5.md#prop-2-3)
$\lim_{y\to0}\frac{y^2}{y^3} = \lim_{y\to0}\frac{1}{y}$ no existe.
---
## 7. Derivada Direccional
**Pregunta:** Derivada direccional de $f(x,y)=x+y^{2}$ en dirección $(1,1)$ en $(0,0)$:
* **(a)** $\sqrt{2}$.
* **(b)** $\frac{1}{\sqrt{2}}$. ✅
* **(c)** 0.
**Justificación:** Ver [Definición 4.1 - Derivadas parciales](EB6.md#def-4-1)
$\nabla f(0,0) = (1,0)$. Unitario: $(\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}})$. Producto: $\frac{1}{\sqrt{2}}$.
---
## 8. Puntos Críticos (Hessiana Semidefinida)
**Pregunta:** Si $Hf(x_0)$ es semidefinida negativa:
* **(a)** $x_{0}$ no puede ser punto de silla.
* **(b)** $x_{0}$ no puede ser mínimo local. ✅
* **(c)** $x_{0}$ es máximo local.
**Justificación:** Ver [Definición 3.2 - Mínimo local](EB8.md#def-3-2)
Semidefinida negativa excluye mínimos (que requieren positiva).
---
## 9. Primitivas
**Pregunta:** Si $F(x)$ es primitiva de $f(x)$, entonces $\int f(x)F(x)dx$:
* **(a)** $\frac{(f(x))^{2}}{2}+c$.
* **(b)** $f(x)+c$.
* **(c)** $\frac{(F(x))^{2}}{2}+c$. ✅
**Justificación:** Ver [Definición 2.1 - Primitiva](EB9.md#def-2-1)
Con $u = F(x)$, $du = f(x)dx$: $\int u\,du = \frac{u^2}{2}$.
---
## 10. Ecuaciones Diferenciales
**Pregunta:** Solución de $xy'-3y-x^{3}=0$:
* **(a)** $y(x)=x^{3}\ln(x)$. ✅
* **(b)** $y(x)=x^{2}-\frac{\ln(x)}{x}$.
* **(c)** $y(x)=x^{3}+\ln(x)$.
**Justificación:** Ver [Definición 2.2 - Solución de EDO](EB14.md#def-2-2)
$y = x^3\ln(x) \implies y' = 3x^2\ln(x) + x^2$. Verificación: $x(y') - 3y - x^3 = 0$. ✓
La ecuación se satisface perfectamente ($0=0$).