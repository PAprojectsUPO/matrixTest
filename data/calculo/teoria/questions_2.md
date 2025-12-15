# Solucionario Test de Teoría de Cálculo
## 1. Límites de Sucesiones
**Pregunta:** Dada una sucesión $\{x_{n}\}$ tal que $\lim_{n\rightarrow\infty}x_{n}=0$, entonces la sucesión $\frac{(2-x_{n})x_{n}}{2 \arcsin(x_{n})}$...
* **(a)** converge a 0.
* **(b)** converge a 1. ✅
* **(c)** converge a 2.
**Justificación:** Ver [Definición 3.1 - Infinitésimos equivalentes](EB2.md#def-3-1)
Este es un problema de límites indeterminados del tipo $0/0$. Utilizamos **infinitésimos equivalentes**: $\arcsin(x_n) \sim x_n$ cuando $x_n \to 0$. El límite se simplifica a $\frac{2-0}{2} = 1$.
---
## 2. Convergencia de Series
**Pregunta:** Sea $\{a_{n}\}$ una sucesión creciente de números reales positivos, entonces $\sum_{n=1}^{\infty}a_{n}$...
* **(a)** puede ser convergente.
* **(b)** puede ser oscilante.
* **(c)** es divergente a $+\infty$. ✅
**Justificación:** Ver [Observación 1.8 - Series de términos positivos](EB3.md#obs-1-8)
Una sucesión creciente y positiva no tiende a 0, por lo que falla la condición necesaria de convergencia. La serie diverge a $+\infty$.
---
## 3. Sumas Parciales y Término General
**Pregunta:** Si $S_{n}=n^{2}$ es la suma parcial n-ésima de la serie $\sum_{k=1}^{\infty}a_{k}$, entonces:
* **(a)** $a_{k}=2k$.
* **(b)** $a_{k}=2k-1$. ✅
* **(c)** $a_{k}=2k-2$.
**Justificación:** Ver [Definición 1.1 - Suma parcial](EB3.md#def-1-1)
La relación fundamental es $a_n = S_n - S_{n-1} = n^2 - (n-1)^2 = 2n - 1$.
---
## 4. Definición de Límite Vectorial
**Pregunta:** Dada una función $f:\mathbb{R}^{n}\rightarrow\mathbb{R}^{m}$ si $\lim_{x\rightarrow\infty}f(x)=l$ entonces...
* **(a)** $\forall\epsilon>0\exists K>0$ tal que, si $||x||>K$ entonces $||f(x)-l||<\epsilon$. ✅
* **(b)** $\forall M>0\exists K>0$ tal que, si $||x||>K$, entonces $||f(x)-l||>M$.
* **(c)** $\forall\epsilon>0\exists\delta>0$ tal que, si $||x||<\delta,$ entonces $||f(x)-l||<\epsilon$.
**Justificación:** Ver [Definición 3.3 - Límite en el infinito](EB4.md#def-3-3)
Esta es la definición formal de límite finito cuando $x \to \infty$.
---
## 5. Definición de Derivada
**Pregunta:** Sea $f:A\subseteq\mathbb{R}\rightarrow\mathbb{R}$ tal que $\lim_{s\rightarrow0}\frac{f(2+s)-f(2)}{2s}=1$, entonces...
* **(a)** $f^{\prime}(2)=1$.
* **(b)** $f^{\prime}(2)=2$. ✅
* **(c)** $f^{\prime}(0)=1$.
**Justificación:** Ver [Definición 3.1 - Derivada](EB6.md#def-3-1)
La expresión dada es $\frac{1}{2}f'(2) = 1$, por tanto $f'(2) = 2$.
---
## 6. Diferenciabilidad de Funciones Vectoriales
**Pregunta:** Dadas $f(x,y,z)=(x+e^{y-1},x \ln(yz))$ y $g(u,v)=(u,v,\sin(v))$. La función $f\circ g$ es...
* **(a)** diferenciable en (1, 1). ✅
* **(b)** diferenciable en (1, $\pi$).
* **(c)** diferenciable en (1, 2).
**Justificación:** Ver [Proposición 2.3 - Álgebra de funciones diferenciables](EB7.md#prop-2-3)
Para $v=1$: $v \cdot \sin(v) > 0$, la función está bien definida. Para $v=\pi$: $\sin(\pi)=0$, $\ln(0)$ no existe.
---
## 7. Polinomios de Taylor
**Pregunta:** Sea $P_{2,a}(x)$ el polinomio de Taylor de grado 2 en $a$. Se verifica:
* **(a)** $P_{2,a}^{\prime}(a)=f(a)+f^{\prime}(a)$.
* **(b)** $P_{2,a}^{\prime}(a)=f^{\prime}(a)$. ✅
* **(c)** $P_{2,a}^{\prime}(a)=2f^{\prime}(a)$.
**Justificación:** Ver [Definición 1.1 - Polinomio de Taylor](EB8.md#def-1-1)
El polinomio de Taylor coincide con la función y sus derivadas en el punto $a$: $P'_{2,a}(a) = f'(a)$.
---
## 8. Clasificación de Puntos Críticos (Hessiana)
**Pregunta:** Si los autovalores de $Hf(x_{0})$ verifican $\lambda_{1}\cdot\lambda_{2}\cdot\lambda_{3}\cdot\lambda_{4}>0$ entonces $x_0$...
* **(a)** es un mínimo local estricto de f.
* **(b)** es un máximo local estricto de f.
* **(c)** puede ser un punto de silla de f. ✅
**Justificación:** Ver [Definición 3.1 - Máximo local](EB8.md#def-3-1) y [Definición 3.2 - Mínimo local](EB8.md#def-3-2)
El producto positivo permite 0, 2 o 4 autovalores negativos. Con 2 positivos y 2 negativos se tiene un punto de silla.
---
## 9. Cálculo de Primitivas
**Pregunta:** ¿Cuál es correcta para $\int\frac{f^{\prime}(x)(f(x)+1)}{(f(x))^{2}}dx$?
* **(a)** $\ln((f(x))^{2})+c$.
* **(b)** $\ln|f(x)|-\frac{1}{f(x)}+c$. ✅
* **(c)** $\ln|f(x)|+\frac{1}{(f(x))^{2}}+c$.
**Justificación:** Ver [Definición 2.1 - Primitiva](EB9.md#def-2-1)
Con cambio $u = f(x)$: $\int \frac{u+1}{u^2} du = \ln|u| - \frac{1}{u} + C$.
---
## 10. Superficies de Revolución
**Pregunta:** El área al girar la gráfica de $f$ alrededor del eje $OX$ es:
* **(a)** $\int_{a}^{b}2\pi f(x)\sqrt{1+(f^{\prime}(x))^{2}}dx$. ✅
* **(b)** $\int_{a}^{b}\pi^{2}\sqrt{1+(f^{\prime}(x))^{2}}dz$.
* **(c)** $\int_{a}^{b}\pi f(x)\sqrt{1+f^{\prime}(x)} dx$.
**Justificación:** Ver [Proposición 2.4 - Área de superficie de revolución](EB12.md#prop-2-4)
Fórmula: $A = \int 2\pi f(x) \, ds$ donde $ds = \sqrt{1+(f'(x))^2} dx$.