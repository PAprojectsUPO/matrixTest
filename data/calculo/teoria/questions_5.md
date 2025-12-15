# Solucionario Test de Cálculo (Test_Tareas_E)
## 1. Límites de Sucesiones Positivas
**Pregunta:** Si $\{a_{n}\}$ positiva y $a_{n}<M$ para todo $M>0$ a partir de cierto $n_0$:
* **(a)** $\{a_{n}\}$ es no acotada.
* **(b)** $\lim_{n\rightarrow\infty}a_{n}=M$.
* **(c)** $\lim_{n\rightarrow\infty}a_{n}=0$. ✅
**Justificación:** Ver [Definición 2.2 - Límite de sucesión](EB1.md#def-2-2)
La condición $0 < a_n < M$ para $M$ arbitrariamente pequeño implica límite 0.
---
## 2. Series Geométricas
**Pregunta:** $\sum_{k=3}^{\infty}\frac{1}{2^{k}}$ vale:
* **(a)** 1.
* **(b)** 1/2.
* **(c)** 1/4. ✅
**Justificación:** Ver [Proposición 1.5 - Serie geométrica](EB3.md#prop-1-5).
$\sum_{k=3}^{\infty}r^k = \frac{r^3}{1-r} = \frac{1/8}{1/2} = 1/4$.
---
## 3. Continuidad y Límites
**Pregunta:** Si existe $\lim_{x\to a}f(x)$ y coincide con límites direccionales/reiterados:
* **(a)** $f$ es continua en $a$.
* **(b)** $f$ es continua en $a$.
* **(c)** Puede que $f$ no sea continua en $a$. ✅
**Justificación:** Ver [Definición 1.1 - Continuidad](EB6.md#def-1-1)
Continuidad requiere además que $f(a) = L$. Si $f(a)$ no está definido o es diferente, no es continua.
---
## 4. Derivadas Parciales Cruzadas
**Pregunta:** Si $\frac{\partial f}{\partial x}=\frac{y^{2}\cos(x)}{x^{2}}$, entonces $\frac{\partial^{2}f}{\partial y\partial x}(\pi,1)$:
* **(a)** $\frac{2}{\pi^{2}}$.
* **(b)** $-\frac{2}{\pi^{2}}$. ✅
* **(c)** $-\frac{1}{\pi^{2}}$.
**Justificación:** Ver [Definición 1.1 - Derivadas de orden superior](EB7.md#def-1-1)
$\frac{\partial}{\partial y}(y^2\frac{\cos x}{x^2}) = 2y\frac{\cos x}{x^2}$. En $(\pi,1)$: $2 \cdot \frac{-1}{\pi^2} = -\frac{2}{\pi^2}$.
---
## 5. Extremos (Segunda Derivada)
**Pregunta:** Si $f'(a)=0$ y $f''(a)>0$:
* **(a)** Existen $x_1, x_2$ con $f(x_1) < f(a) < f(x_2)$.
* **(b)** $f(x) < f(a)$ en entorno de $a$.
* **(c)** $f(x) > f(a)$ en entorno de $a$. ✅
**Justificación:** Ver [Definición 3.1 - Mínimo local](EB8.md#def-3-1)
$f''(a) > 0$ implica mínimo local: $f(x) > f(a)$ para $x \ne a$ cercanos.
---
## 6. Puntos Críticos (Hessiana)
**Pregunta:** Si en $a$ hay máximo local estricto, $Hf(a)$:
* **(a)** Es definida negativa (requeriría positiva).
* **(b)** Es definida o semidefinida negativa. ✅
* **(c)** Es indefinida.
**Justificación:** Ver [Definición 3.2 - Máximo local](EB8.md#def-3-2)
Máximo requiere curvatura "hacia abajo" en todas direcciones.
---
## 7. Diferenciabilidad Vectorial
**Pregunta:** $f:\mathbb{R}\to\mathbb{R}^{n}$ es diferenciable si:
* **(a)** $n-1$ componentes son continuas.
* **(b)** $n-1$ componentes son diferenciables.
* **(c)** Ninguna es cierta. ✅
**Justificación:** Ver [Proposición 3.1 - Diferenciabilidad vectorial](EB7.md#prop-3-1)
Todas las $n$ componentes deben ser diferenciables.
---
## 8. Cambio de Variable
**Pregunta:** Con $x^{2}=t$ en $\int x^{2}\cos(x^{2})dx$:
* **(a)** $\int t\cos(t)dt$.
* **(b)** $\int\sqrt{t}\cos(t)dt$.
* **(c)** $\frac{1}{2}\int\sqrt{t}\cos(t)dt$. ✅
**Justificación:** Ver [Proposición 1.1 - Cambio de variable](EB10.md#prop-1-1)
$dx = \frac{dt}{2\sqrt{t}}$. Resultado: $\frac{1}{2}\int\sqrt{t}\cos(t)dt$.
---
## 9. Superficie de Revolución
**Pregunta:** Área al girar $f(x)=\sin(x)$ alrededor de $y=-2$:
* **(a)** $\int 2\pi\sin(x)\sqrt{1+\cos^{2}(x)}dx$.
* **(b)** $\int 2\pi(\sin(x)-2)\sqrt{1+\cos^{2}(x)}dx$.
* **(c)** $\int 2\pi(\sin(x)+2)\sqrt{1+\cos^{2}(x)}dx$. ✅
**Justificación:** Ver [Proposición 2.4 - Área de superficie de revolución](EB12.md#prop-2-4)
Radio de giro: $\sin(x) - (-2) = \sin(x) + 2$.
---
## 10. Ecuaciones Diferenciales
**Pregunta:** Solución de $xy'-3y=0$:
* **(a)** $y(x)=3x^{2}$
* **(b)** $y(x)=2x^{3}$ ✅
* **(c)** $y(x)=x^{2}+x^{3}$
**Justificación:** Ver [Definición 2.2 - Solución de EDO](EB14.md#def-2-2)
$y = 2x^3 \implies y' = 6x^2$. Verificando: $x(6x^2) - 3(2x^3) = 0$. ✓
[cite: 710, 712]