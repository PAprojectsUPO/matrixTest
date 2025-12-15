## SESIÓN 8: DESARROLLOS DE TAYLOR Y OPTIMIZACIÓN
### Objetivos (Página 1)
1.  Introducir los desarrollos de Taylor de una función y aprender a calcularlos.
2.  Estudiar el crecimiento y decrecimiento de funciones.
3.  Definir el concepto de óptimo local y global y aprender a calcular los óptimos de una función.
### Contenidos
#### 1\. Desarrollos de Taylor (Página 1)
El objetivo de los desarrollos de Taylor es, dado una función, encontrar un polinomio que se aproxime bastante bien a dicha función en un punto dado.
<a name="def-1-1"></a>
**Definición 1.1** Dada una función $f:A\subseteq\mathbb{R}\to\mathbb{R}$ de clase $n$ en $A$ y un punto $a\in A$ se llama **polinomio de Taylor de grado $n$ de $f$ en $a$** al polinomio
$$P_{n,a}(x)=f(a)+\frac{f'(a)}{1\!}(x-a)+\frac{f''(a)}{2\!}(x-a)^{2}+\cdots+\frac{f^{n}(a)}{n\!}(x-a)^{n}.$$
<a name="def-1-2"></a>
**Definición 1.2** Dada una función $f:A\subseteq\mathbb{R}^{2}\to\mathbb{R}$ de clase 2 en $A$ y un punto $(a,b)\in A$ se llama **desarrollo de Taylor de grado 2 de $f$ en $(a, b)$** al polinomio
$$P_{(a,b)}(x,y)=f(a,b)+(\nabla f(a,b))^{t}\cdot\begin{pmatrix}x-a\\ y-b\end{pmatrix}+\frac{1}{2}(x-a,y-b)\cdot Hf(a,b)\cdot\binom{x-a}{y-b}.$$
#### 2\. Variación de funciones, crecimiento y decrecimiento (Página 2)
<a name="def-2-1"></a>
**Definición 2.1**
1.  Sea $f:A\subseteq\mathbb{R}\to\mathbb{R}$. Se dice que $f$ es **creciente en $A$** si para todo $x,y\in A$ con $x<y$ se tiene $f(x)\le f(y)$. Se dice que es **estrictamente creciente** si $f(x)<f(y)$.
2.  Sea $f:A\subseteq\mathbb{R}\to\mathbb{R}$. Se dice que $f$ es **decreciente en $A$** si para todo $x, y\in A$ con $x<y$ se tiene $f(y)\le f(x)$. Se dice que es **estrictamente decreciente** si $f(y)<f(x)$.
3.  Sea $f:A\subseteq\mathbb{R}\to\mathbb{R}$. Se dice que $f$ es **monótona en $A$** cuando es creciente o decreciente en $A$. Se dice que es **estrictamente monótona en $A$** si es estrictamente creciente o estrictamente decreciente en $A$.
<a name="prop-2-1"></a>
**Teorema 2.2** Sea $f:A\subseteq\mathbb{R}\to\mathbb{R}$ derivable en $A$.
  * La función $f$ es **estrictamente creciente en $A$** si $f'(x)>0$ para todo $x\in A$.
  * $f$ es **estrictamente decreciente en $A$** si $f'(x)<0$ para todo $x\in A$.
<a name="obs-2-3"></a>
**Observación 2.3** Los conceptos anteriores dejan de tener sentido para funciones de varias variables.
#### 3\. Concepto de óptimo (Página 2)
<a name="def-3-1"></a>
**Definición 3.1** Sea $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$ y $a\in A$. Se dice que $a$ es un **mínimo local de $f$** cuando existe un entorno de $a$ tal que $f(a)\le f(x)$ para todo $x$ de ese entorno. Si para todo $x$ del entorno de $a$ y distinto de $a$ se tiene $f(a)<f(x)$, se dice que $a$ es un **mínimo local estricto**.
<a name="def-3-2"></a>
**Definición 3.2** Sea $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$ y $a\in A$. Se dice que $a$ es un **máximo local de $f$** cuando existe un entorno de $a$ tal que $f(a)\ge f(x)$ para todo $x$ de ese entorno. Si para todo $x$ del entorno de $a$ y distinto de $a$ se tiene $f(a)>f(x)$, se dice que $a$ es un **máximo local estricto**.
<a name="def-3-3"></a>
**Definición 3.3** Sea $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$ y $a\in A$.
  * Se dice que $a$ es un **mínimo global de $f$ en $A$** si $f(a)\le f(x)$ para todo $x\in A$.
  * Es un **mínimo global estricto de $f$ en $A$** si $f(a)<f(x)$ para todo $x\in A$ distinto de $a$.
  * Es un **máximo global de $f$ en $A$** si $f(a)\ge f(x)$ para todo $x\in A$.
  * Es un **máximo global estricto de $f$ en $A$** si $f(a)>f(x)$ para todo $x\in A$ distinto de $a$.
<a name="def-3-4"></a>
**Definición 3.4** Se llama **óptimo** de una función a todo máximo o mínimo de la función.
<a name="obs-3-5"></a>
**Observación 3.5** No tiene sentido la definición de óptimo para funciones vectoriales.
#### 4\. Optimización sin restricciones (Página 3)
**Optimización** es el proceso de calcular un óptimo de una función, bien sea un máximo o un mínimo.
<a name="teo-4-1"></a>
**Teorema 4.1 (Condición necesaria de primer orden)** Sea una función $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$ diferenciable en $a\in A$. Si $a$ es un óptimo local de $f$, entonces $\nabla f(a)=0\in\mathbb{R}^{n}$.
<a name="def-4-2"></a>
**Definición 4.2** Sea $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$. Los puntos $a\in A$ tales que $\nabla f(a)=0$ se denominan **puntos críticos de $f$** o **puntos estacionarios de $f$**.
<a name="def-4-3"></a>
**Definición 4.3** Un punto crítico que no es óptimo se llama **punto de silla**.
<a name="prop-4-4"></a>
**Proposición 4.4** Sea $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$. $a\in A$ es **punto de silla de $f$** si, y sólo si, $a$ es punto crítico y para todo entorno de $a$ existen dos puntos $x_{1}$ y $x_{2}$ en dicho entorno, tales que $f(x_{1})<f(a)<f(x_{2})$.
<a name="teo-4-5"></a>
**Teorema 4.5 (Condición suficiente de segundo orden para una variable)** Sea $f:A\subseteq\mathbb{R}\to\mathbb{R}$ y $a\in A$ un punto crítico de $f$, es decir, $f'(a)=0$.
1.  Si $f''(a)>0$ entonces $a$ es un **mínimo local estricto** de $f$.
2.  Si $f''(a)<0$ entonces $a$ es un **máximo local estricto** de $f$.
3.  Si $f''(a)=0, f'''(a)=0,...,f^{n-1)}(a)=0, f^{n)}(a)\ne0$
      * (a) Si $n$ es impar entonces $a$ es un **punto de silla** de $f$.
      * (b) Si $n$ es par
        $$\begin{cases}f^{n)}(a)>0 & \text{entonces } a \text{ es un **mínimo local estricto** de } f \\ f^{n)}(a)<0 & \text{entonces } a \text{ es un **máximo local estricto** de } f\end{cases}$$
<a name="obs-4-6"></a>
**Observación 4.6** Dada una matriz $A\in\mathcal{M}_{n}(\mathbb{R})$, se llama **autovalor de $A$** a todo número $\lambda$ solución de $|A-\lambda I_{n}|=0$.
<a name="teo-4-7"></a>
**Teorema 4.7** (Página 3 y 4) Sea $A\in\mathcal{M}_{n}(\mathbb{R})$ una matriz simétrica, cuyos autovalores son $\lambda_{i}$, con $i=1,...,n$. Se verifica:
1.  $A$ es **Definida Positiva (DP)** $\iff \lambda_{i}>0 \forall i=1,...,n$.
2.  $A$ es **Definida Negativa (DN)** $\iff \lambda_{i}<0 \forall i=1,...,n$.
3.  $A$ es **Semidefinida Positiva (SDP)** $\iff \lambda_{i}\ge0 \forall i=1,...,n$ y existen $j,k$ tales que $\lambda_{j}>0$ y $\lambda_{k}=0$.
4.  $A$ es **Semidefinida Negativa (SDN)** $\iff \lambda_{i}\le0 \forall i=1,...,n$ y existen $j, k$ tales que $\lambda_{j}<0$ y $\lambda_{k}=0$.
5.  $A$ es **Indefinida** $\iff$ existen $j,k$ tales que $\lambda_j < 0$ y $\lambda_k > 0$.
6.  $A$ es **Nula** $\iff \lambda_i = 0 \forall i = 1, \dots, n$.
<a name="def-4-8"></a>
**Definición 4.8** Sea $A\in\mathcal{M}_{n}(\mathbb{R})$ una matriz cuadrada de orden $n$. Se denomina **menor principal $i$-ésimo**, denotado $\Delta_{i}$ al determinante de la submatriz resultante al eliminar las últimas $n-i$ filas y columnas de $A$.
<a name="teo-4-9"></a>
**Teorema 4.9** Sea $A\in\mathcal{M}_{n}(\mathbb{R})$ una matriz simétrica con rango $r$, con $\Delta_{1}\ne0; \Delta_{2}\ne0,...,\Delta_{r}\ne0$. Se verifica:
1.  $A$ es (DP) $\iff \Delta_{i}>0 \forall i=1,...,n$.
2.  $A$ es **(DN)** $\iff \Delta_1 < 0, \Delta_2 > 0, \Delta_3 < 0, \dots$
    $$\begin{cases} \Delta_n > 0 & \text{si } n \text{ es par} \\ \Delta_n < 0 & \text{si } n \text{ es impar}\end{cases}$$
3.  $\Delta_{i}>0, i=1,...,r \text{ y } \Delta_{j}=0, j=r+1,...,n \Rightarrow A$ es (SDP).
4.  $\Delta_{1}<0, \Delta_2 > 0, \dots$ y $\Delta_{j}=0, j=r+1,...,n \Rightarrow A$ es (SDN)
    $$\begin{cases} \Delta_r > 0 & \text{si } r \text{ es par} \\ \Delta_r < 0 & \text{si } r \text{ es impar}\end{cases}$$
5.  Si $r=n$ y no se verifica (1) ni (2) $\Rightarrow A$ es **Indefinida**.
6.  Si $r<n$ y no se verifica (3) ni (4) $\Rightarrow A$ es **Indefinida**.
<a name="teo-4-10"></a>
**Teorema 4.10 (Condición suficiente de segundo orden)** (Página 4) Sea una función $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}, f\in\mathcal{C}^{2}(A)$ y $a\in A$ un punto crítico de $f$, es decir, $\nabla f(a)=0$. Entonces se verifican:
1.  Si $Hf(a)$ es **definida positiva (DP)**, entonces $a$ es un **mínimo local estricto** de $f$.
2.  Si $Hf(a)$ es **definida negativa (DN)**, entonces $a$ es un **máximo local estricto** de $f$.
3.  Si $Hf(a)$ es **indefinida**, entonces $a$ es un **punto de silla** de $f$.
<a name="obs-4-11"></a>
**Observación 4.11** (Página 5) Con el enunciado del teorema anterior, si $Hf(a)$ es **semidefinida positiva (SDP)** o **negativa (SDN)** no sabemos si $a$ es óptimo o no pero, lo que si sabemos es que, si $a$ es un máximo, entonces $Hf(a)$ es SDN o DN y, si $a$ es mínimo, entonces $Hf(a)$ es SDP o DP.
