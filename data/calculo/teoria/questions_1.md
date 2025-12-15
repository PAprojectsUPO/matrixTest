# Solucionario Test de Cálculo
## 1. Límite de Sucesiones
**Pregunta:** Dada una sucesión $\{x_n\}$ tal que $\lim_{n \to \infty} x_n = 0$, entonces la sucesión $\frac{(x_n - 1) \tan(x_n)}{x_n}$...
* **(a)** converge a -1. ✅
* **(b)** converge a 0.
* **(c)** converge a 1.
**Justificación:** Ver [Definición 3.1 - Infinitésimos equivalentes](EB2.md#def-3-1)
Se aplica equivalencia de infinitésimos. Como $x_n \to 0$, entonces $\frac{\tan(x_n)}{x_n} \to 1$. El primer término $(x_n - 1) \to -1$. El producto es $-1 \cdot 1 = -1$.
---
## 2. Series Numéricas
**Pregunta:** Si $S_n = \frac{3n^2+2}{n-n^2}$ es la suma parcial $n$-ésima de la serie $\sum_{k=1}^{\infty} a_k$, entonces:
* **(a)** $\sum_{k=1}^{\infty} a_k = -3$. ✅
* **(b)** $\sum_{k=1}^{\infty} a_k = 3$.
* **(c)** Esos datos son insuficientes para calcular el valor de la serie.
**Justificación:** Ver [Definición 1.1 - Suma parcial y convergencia](EB3.md#def-1-1)
La suma de la serie es el límite de sus sumas parciales. $\lim_{n \to \infty} \frac{3n^2+2}{n-n^2} = \frac{3}{-1} = -3$.
---
## 3. Límites de Funciones y Sucesiones
**Pregunta:** Dada una función $f : \mathbb{R} \to \mathbb{R}$ tal que $\lim_{x \to 2} f(x) = 4$. Entonces...
* **(a)** $\lim_{n} f\left(\frac{-4n^2-1}{2n^2}\right) = 4$.
* **(b)** $\lim_{n} f\left(\frac{4n^2+1}{2n^2}\right) = 4$. ✅
* **(c)** Puede que no se cumplan ninguna de las anteriores.
**Justificación:** Ver [Definición 1.1 - Límite de función](EB4.md#def-1-1)
Por el Teorema Fundamental del Límite, si $x_n \to 2$, entonces $f(x_n) \to 4$. La sucesión en la opción (b) tiende a 2 ($\frac{4}{2}=2$), por lo tanto su imagen tiende a 4.
---
## 4. Continuidad de Funciones
**Pregunta:** Dadas dos funciones $f, g : A \subseteq \mathbb{R} \to \mathbb{R}$ continuas en $A$.
* **(a)** $\frac{f}{g}$ es continua en $A$.
* **(b)** $\sqrt{f \cdot g}$ es continua en $A$.
* **(c)** $\sqrt[3]{f \cdot g}$ es continua en $A$. ✅
**Justificación:** Ver [Proposición 2.1 - Álgebra de funciones continuas](EB6.md#prop-2-1)
La raíz cúbica está definida para todos los reales (positivos y negativos) y es continua. Las otras opciones fallan si $g=0$ o si el producto es negativo.
---
## 5. Matriz Jacobiana
**Pregunta:** Dada la función $f : \mathbb{R}^3 \to \mathbb{R}^4$.
* **(a)** La matriz Jacobiana de $f$ tiene dimensión $3 \times 4$. ✅
* **(b)** La matriz Jacobiana de $f$ tiene dimensión $4 \times 3$.
* **(c)** La matriz Jacobiana de $f$ tiene dimensión $3 \times 3$.
**Justificación:** Ver [Definición 1.1 - Matriz Hessiana](EB7.md#def-1-1)
Según la notación específica de los apuntes proporcionados (Práctica 4), la Jacobiana se define de tal forma que su dimensión es Entradas $\times$ Salidas ($3 \times 4$).
---
## 6. Matriz Hessiana y Puntos Críticos
**Pregunta:** Sea $f : \mathbb{R}^3 \to \mathbb{R}$ y $x_0 \in \mathbb{R}^3$ un punto crítico tal que:
$$Hf(x_0) = \begin{pmatrix} -1 & 1 & 0 \\ 1 & -2 & 0 \\ 0 & 0 & -1 \end{pmatrix}$$
Entonces:
* **(a)** $x_0$ es un punto de silla de $f$.
* **(b)** $x_0$ es un máximo local estricto de $f$. ✅
* **(c)** $x_0$ es un mínimo local estricto de $f$.
**Justificación:** Ver [Definición 3.1 - Máximo local](EB8.md#def-3-1) y [Definición 3.2 - Mínimo local](EB8.md#def-3-2)
Los menores principales son $\Delta_1 = -1$ (-), $\Delta_2 = 1$ (+), $\Delta_3 = -1$ (-). La secuencia de signos (-, +, -) indica que la matriz es Definida Negativa, lo que corresponde a un Máximo.
---
## 7. Criterio de la Primera Derivada
**Pregunta:** Sea $f : A \subseteq \mathbb{R} \to \mathbb{R}$ diferenciable y $a \in A$ un punto crítico.
* **(a)** Si $f'(x) > 0$ para $x < a$ y $f'(x) < 0$ para $x > a$, entonces $a$ es un mínimo. (Falso, es máximo).
* **(b)** Si $f'(x) < 0$ para $x < a$ y $f'(x) > 0$ para $x > a$, entonces $a$ es un máximo. (Falso, es mínimo).
* **(c)** Si $f'(x) > 0$ para $x < a$ y $f'(x) > 0$ para $x > a$, entonces $a$ es un punto de silla de $f$. ✅
**Justificación:** Ver [Proposición 2.1 - Crecimiento y decrecimiento](EB8.md#prop-2-1)
Si la función crece antes y después del punto crítico, no es un extremo local, sino un punto de inflexión o silla.
---
## 8. Longitud de Arco
**Pregunta:** Sean $f : [a, b] \subset \mathbb{R} \to \mathbb{R}$. La longitud de la gráfica de $f$ viene dada por:
* **(a)** $\int_a^b f(x)\sqrt{1+(f'(x))^2} dx$.
* **(b)** $\int_a^b \sqrt{1+(f'(x))^2} dx$. ✅
* **(c)** $\int_a^b \sqrt{1+f'(x)} dx$.
**Justificación:** Ver [Proposición 2.3 - Longitud de arco](EB11.md#prop-2-3)
Esta es la fórmula estándar derivada del teorema de Pitágoras para diferenciales de arco ($ds = \sqrt{dx^2 + dy^2}$).
---
## 9. Integral Definida
**Pregunta:** La integral definida $\int_0^{\pi/3} (\cos(x) - \sin(x)) dx$ vale:
* **(a)** $\frac{\sqrt{3}-1}{2}$. ✅
* **(b)** $1$.
* **(c)** $\frac{1}{\sqrt{2}}$.
**Justificación:** Ver [Definición 1.1 - Integral definida](EB11.md#def-1-1)
La primitiva es $\sin(x) + \cos(x)$. Evaluando: $(\sin(\frac{\pi}{3}) + \cos(\frac{\pi}{3})) - (\sin(0) + \cos(0)) = (\frac{\sqrt{3}}{2} + \frac{1}{2}) - 1 = \frac{\sqrt{3}-1}{2}$.
---
## 10. Ecuaciones Diferenciales
**Pregunta:** ¿Cuál de las siguientes funciones es solución de la ecuación diferencial $xy' - y = x^2 \cos(x)$?
* **(a)** $y(x) = -x \sin(x)$.
* **(b)** $y(x) = x \sin(x)$. ✅
* **(c)** $y(x) = x \cos(x)$.
**Justificación:** Ver [Definición 2.2 - Solución de EDO](EB14.md#def-2-2)
Si $y = x \sin(x)$, entonces $y' = \sin(x) + x \cos(x)$. Sustituyendo: $x(\sin(x) + x \cos(x)) - x \sin(x) = x^2 \cos(x)$. Se cumple la igualdad.
Si $y = x \sin(x)$, entonces $y' = \sin(x) + x \cos(x)$. Sustituyendo: $x(\sin(x) + x \cos(x)) - x \sin(x) = x^2 \cos(x)$. Se cumple la igualdad.