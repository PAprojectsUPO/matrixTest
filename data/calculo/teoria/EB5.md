## SESIÓN 5: LÍMITES DE FUNCIONES
### Objetivos
1.  Ver las propiedades básicas de los límites de funciones.
2.  Definir los límites laterales, direccionales y reiterados. Aprender a calcularlos y a utilizarlos.
-----
### Contenidos
#### 1\. Propiedades de los límites (Página 1)

En esta sección estudiaremos las propiedades fundamentales de los límites. Consideremos que:
$$\lim_{x\to a}f(x)=l$$

<a name="teo-1-1"></a>
<a name="prop-1-3"></a>
**Teorema 1.1 (Teorema fundamental del límite)**
Sea una función $f:A\subseteq \mathbb{R}\to\mathbb{R}$. Entonces existe si, y sólo si, para toda sucesión ${x_{n}}\subseteq A$ tal que $\lim_{n\to\infty}x_{n}=a$, se verifica $\lim_{n\to\infty}f(x_{n})=l$.

<a name="obs-1-2"></a>
**Observación 1.2**
El Teorema fundamental del límite puede generalizarse a funciones $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$, pero para ello se necesita trabajar con sucesiones de vectores.

Para el siguiente teorema, consideremos que:
$$\lim_{x\to a}f(x)=\alpha$$

<a name="teo-1-3"></a>
**Teorema 1.3**
Sean $f,g:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$ tales que $\lim_{x\to a}f(x)=\alpha$ y $\lim_{x\to a}g(x) = \beta$. Entonces:
a) $\lim_{x\to a}(f(x)\pm g(x))=\alpha\pm\beta$.
b) $\lim_{x\to a}f(x)\cdot g(x)=\alpha\cdot\beta$.
c)
$$\lim_{x\to a}\frac{f(x)}{g(x)}=\frac{\alpha}{\beta} \quad \text{si } \beta\ne0.$$
<a name="teo-1-4"></a>
**Teorema 1.4**
Sean $f,g,h:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$ tales que $f(x)\le h(x)\le g(x)$ para todo $x\in A$. Si $\lim_{x\to a}f(x)=l=\lim_{x\to a}g(x)$, entonces
$$\lim_{x\to a}h(x)=l$$
#### 2\. Límites laterales, direccionales y reiterados (Página 2)
Sea la función $f:\mathbb{R}\to\mathbb{R}$ dada por
$$f(x)=\begin{cases}0 \quad \text{si } x<0\\ 1 \quad \text{si } x\ge0\end{cases}$$
se puede comprobar que, si nos acercamos a $0$ por la derecha, la función se aproxima al valor $1$ (de hecho, es constante igual a $1$), es decir, $\lim_{x\to 0^{+}}f(x)=1$, y si nos acercamos a $0$ por la izquierda, la función se aproxima al valor $0$ (de hecho, es constante igual a $0$), es decir, $\lim_{x\to 0^{-}}f(x)=0$.
<a name="def-2-1"></a>
**Definición 2.1**
Sea $f:\mathbb{R}\to\mathbb{R}$, $A=\text{Dom}(f)$ y $a\in\mathbb{R}$ tal que para todo $\delta>0$ se verifica $(a-\delta,a)\cap A\ne\emptyset$. Entonces, se dice que el límite cuando $x$ tiende a $a$ por la izquierda de $f(x)$ es $l\in\mathbb{R}$, y se denota
$$\lim_{x\to a^{-}}f(x)=l,$$
si para todo $\epsilon>0$ existe $\delta>0$ tal que, si $x\in(a-\delta,a)\cap A$ entonces $|f(x)-l|<\epsilon$.
<a name="def-2-2"></a>
**Definición 2.2**
Sea $f:\mathbb{R}\to\mathbb{R}$, $A=\text{Dom}(f)$ y $a\in\mathbb{R}$ tal que para todo $\delta>0$ se verifica $(a,a+\delta)\cap A\ne\emptyset$. Entonces, se dice que el límite cuando $x$ tiende a $a$ por la derecha de $f(x)$ es $l\in\mathbb{R}$, y se denota
$$\lim_{x\to a^{+}}f(x)=l,$$
si para todo $\epsilon>0$ existe $\delta>0$ tal que, si $x\in(a,a+\delta)\cap A$ entonces $|f(x)-l|<\epsilon$.
<a name="obs-2-3"></a>
**Observación 2.3**
De manera análoga se pueden definir los límites laterales en un punto de modo que valgan $\infty$, $+\infty$ o $-\infty$.
<a name="teo-2-4"></a>
**Teorema 2.4**
Sea $f:\mathbb{R}\to\mathbb{R}$, $A=\text{Dom}(f)$, $l\in\mathbb{R}\cup{+\infty,-\infty}$ y $a\in\mathbb{R}$ tal que para todo $\delta>0$ se verifica $(a-\delta, a)\cap A\ne\emptyset$ y $(a,a+\delta)\cap A\ne\emptyset$. Entonces
$$\exists \lim_{x\to a}f(x)=l \iff \begin{cases}\exists \lim_{x\to a^{-}}f(x)=l\\ \exists \lim_{x\to a^{+}}f(x)=l\end{cases}$$
Si consideramos ahora una función $f:\mathbb{R}^{2}\to\mathbb{R}$ podemos aproximarnos al punto $a\in\mathbb{R}^{2}$ de muchas más formas que antes. A cada una de estas formas de (Página 3) aproximarnos las llamaremos **direcciones**. Las direcciones para aproximarnos a un punto $a=(a_{1},a_{2})$ que normalmente usaremos serán
$$y=a_{2}+p(x-a_{1}), \quad y=a_{2}+p(x-a_{1})^{2}, \quad \dots, \quad y=a_{2}+p(x-a_{1})^{k}$$
$$x=a_{1}+p(y-a_{2}), \quad x=a_{1}+p(y-a_{2})^{2}, \quad \dots, \quad x=a_{1}+p(y-a_{2})^{k},$$
con $p$ cualquier número en $\mathbb{R}$. Y el **límite direccional** de una función $f(x,y)$ en la dirección, por ejemplo, $x=a_{1}+p(y-a_{2})^{2}$, es
$$\lim_{x=a_{1}+p(y-a_{2})^{2}}f(x,y)=\lim_{y\to a_{2}}f(a_{1}+p(y-a_{2})^{2},y),$$
que es un límite de una variable.
<a name="teo-2-5"></a>
**Teorema 2.5**
Sea $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$. Si existe $\lim_{x\to a}f(x)$, entonces existen todos los límites direccionales de $f$ en $a$ y coinciden con este.
<a name="prop-2-3"></a>
**Definición 2.6**
Sea $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$ y $a=(a_{1},a_{2},...,a_{n})\in\mathbb{R}^{n}$. Llamaremos **límite parcial de orden 1** de $f$ respecto a la variable $i$-ésima a
$$\lim_{x_{i}\to a_{i}}f(x_{1},...,x_{i},...,x_{n}).$$
El resultado da una función de $n-1$ variables. Cada límite parcial de orden 1 (hay $n-1$) de los $n$ límites parciales de orden 1 se denominan límites parciales de orden 2, y así sucesivamente.
Los límites parciales de orden $n$ (hay $n\!$) son números reales, y se llaman **límites reiterados** de $f$ en $A$.
<a name="teo-2-7"></a>
**Teorema 2.7**
Sea $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$ $a=(a_{1},a_{2},...,a_{n})\in\mathbb{R}^{n}$. Si existen todos los límites parciales de $f$ en $a$ (de hasta orden $n-1$) y existe $\lim_{x\to a}f(x)$, entonces existen todos los límites reiterados y coinciden con este.
<a name="cor-2-8"></a>
**Corolario 2.8**
Si se calculan dos límites direccionales y no coinciden, o si alguno de los direccionales no existe, o si uno de los límites reiterados no existe, existiendo todos los parciales (hasta orden $n-1$), o si dos límites reiterados no coinciden, existiendo todos los parciales, no puede existir el límite.
