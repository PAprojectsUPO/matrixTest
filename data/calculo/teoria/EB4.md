## SESIÓN 4: LÍMITES DE FUNCIONES

### Objetivos

1.  Introducir el concepto de límite de una función.
2.  Definir los límites en el infinito.

-----

### Contenidos

#### 1\. Límites de funciones reales de una variable (Página 1)

Sabemos que una función real de una variable definida en un conjunto $A\subseteq\mathbb{R}$ es una aplicación $f:A\to\mathbb{R}$. Al conjunto $A$ donde está definida la función se le denomina **dominio de $f$** y se denota $A=\text{Dom}(f)$.

<a name="def-1-1"></a>
<a name="prop-1-3"></a>
**Definición 1.1** Se dice que el límite cuando $x$ tiende a $a$ de la función $f(x)$ es $l$, y se denota
$$\lim_{x\to a}f(x)=l$$
si para todo $\epsilon>0$ existe $\delta>0$ tal que, si $0<|x-a|<\delta$ entonces $|f(x)-l|<\epsilon$. (Intuitivamente, esta definición afirma que si el límite, cuando $x$ tiende a $a$, de la función $f(x)$ es $l$, es porque, cuando $x$ se acerca a $a$, $f(x)$ se acerca a $l$.)

#### 2\. Límites de funciones reales de varias variables (Página 1 y 2)

<a name="def-2-1"></a>
**Definición 2.1** Se llama **función real de $n$ variables** a una aplicación $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$. Al conjunto $A$ donde la función está definida se le denomina dominio de la función y se denota $A=\text{Dom}(f)$.

<a name="def-2-2"></a>
**Definición 2.2** Se llama **función vectorial de $n$ variables** a una aplicación $f:A\subseteq \mathbb{R}^{n}\to\mathbb{R}^{m}$. Se suele representar $f=(f_{1},f_{2},...,f_{m})$ donde $f_{i}:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$ para todo $i=1,...,m$ se denominan **funciones componentes** de $f$.

*(Página 2)*
Para dar la definición de límite de una función de varias variables necesitamos ver como se puede representar o expresar en $\mathbb{R}^{n}$ que dos puntos se acerquen o estén próximos.

<a name="def-2-3"></a>
**Definición 2.3** Se define la **norma euclídea** de un punto $x=(x_{1},x_{2},...,x_{n})$ en $\mathbb{R}^{n}$ como
$$||x||=\sqrt{x_{1}^{2}+x_{2}^{2}+\cdots+x_{n}^{2}}.$$
(En $\mathbb{R}$ se tiene $||x||=|x|$). Con dicha norma podemos definir la **distancia** entre dos puntos $a=(a_{1},a_{2},...,a_{n})$ y $x=(x_{1},x_{2},...,x_{n})$ de $\mathbb{R}^{n}$ como
$$d(a,x)=||a-x||=\sqrt{(a_{1}-x_{1})^{2}+(a_{2}-x_{2})^{2}+\cdots+(a_{n}-x_{n})^{2}}=||x-a||=d(x,a).$$

<a name="def-2-4"></a>
**Definición 2.4** Dada una función vectorial $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}^{m}$ (es real si $m=1$), se dice que el límite cuando $x$ tiende a $a$ de $f(x)$ es $l=(l_{1},l_{2},...,l_{m})\in\mathbb{R}^{m}$, y se denota
$$\lim_{x\to a}f(x)=l$$
si para todo $\epsilon>0$ existe $\delta>0$ tal que, si $0<||x-a||<\delta$ entonces $||f(x)-l||<\epsilon$. (Intuitivamente, esta definición afirma que si el límite, cuando $x$ tiende a $a$, de la función $f(x)$ es $l$, es porque, cuando $x$ se acerca a $a$ en $\mathbb{R}^{n}$, $f(x)$ se acerca a $l$ en $\mathbb{R}^{m}$.)

#### 3\. Límites infinitos (Página 2 y 3)

<a name="def-3-1"></a>
**Definición 3.1** Dada una función vectorial $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}^{m}$ (real si $m=1$), se dice que el límite cuando $x$ tiende a $a$ de $f(x)$ es $\infty$, y se denota
$$\lim_{x\to a}f(x)=\infty,$$
si para todo $M>0$ existe $\delta>0$ tal que, si $0<||x-a||<\delta$ entonces $||f(x)||>M$. (Intuitivamente, esta definición afirma que si el límite, cuando $x$ tiende a $a$, de la función $f(x)$ es $\infty$, es porque, cuando $x$ se acerca a $a$ en $\mathbb{R}^{n}$, $||f(x)||$ es todo lo grande que queramos).

<a name="def-3-2"></a>
**Definición 3.2** Dada una función real $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$, se dice que el límite cuando $x$ tiende a $a$ de $f(x)$ es $+\infty$ ($-\infty$), y se denota
$$\lim_{x\to a}f(x)=+\infty \quad (-\infty),$$
si para todo $M>0$ existe $\delta>0$ tal que, si $0<||x-a||<\delta$ entonces $f(x)>M$ ($f(x)<-M$).

*(Página 3)*
<a name="def-3-3"></a>
**Observación 3.3** Se verifican las siguientes implicaciones
$$\lim_{x\to a}f(x)=-\infty \quad \Rightarrow \quad \lim_{x\to a}f(x)=\infty$$
$$\lim_{x\to a}f(x)=+\infty \quad \Rightarrow \quad \lim_{x\to a}f(x)=\infty$$

<a name="def-3-4"></a>
**Definición 3.4** Dada una función vectorial $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}^{m}$, se dice que el límite cuando $x$ tiende a $\infty$ de $f(x)$ es $l\in\mathbb{R}^{m}$ y se denota
$$\lim_{x\to\infty}f(x)=l,$$
si para todo $\epsilon>0$ existe $K>0$ tal que, si $x\in A$ y $||x||>K$ entonces $||f(x)-l||<\epsilon$ (para ello se necesita que el dominio de la función sea no acotado).
(Intuitivamente, esta definición afirma que si el límite, cuando $x$ tiende a $\infty$, de la función $f(x)$ es $l$, es porque, cuando $||x||$ crece mucho en $\mathbb{R}^{n}$, $f(x)$ se aproxima mucho a $l$ en $\mathbb{R}^{m}$).

<a name="def-3-5"></a>
**Definición 3.5** Dada una función vectorial $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}^{m}$, se dice que el límite cuando $x$ tiende a $\infty$ de $f(x)$ es $\infty$, y se denota
$$\lim_{x\to\infty}f(x)=\infty,$$
si para todo $M>0$ existe $K>0$ tal que, si $x\in A$ y $||x||>K$ entonces $||f(x)||>M$.
(Intuitivamente, esta definición afirma que si el límite, cuando $x$ tiende a $\infty$, de la función $f(x)$ es $\infty$, es porque, cuando $||x||$ crece mucho en $\mathbb{R}^{n}$, también lo hace $||f(x)||$ en $\mathbb{R}^{m}$).

<a name="def-3-6"></a>
**Definición 3.6** Dada una función real $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$ se dice que el límite cuando $x$ tiende a $\infty$ de $f(x)$ es $+\infty$ ($-\infty$), y se denota
$$\lim_{x\to\infty}f(x)=+\infty \quad (-\infty),$$
si para todo $M>0$ existe $K>0$ tal que, si $x\in A$ y $||x||>K$ entonces $f(x)>M$ ($f(x)<-M$).

### Bibliografía (Página 3)

Véase la Bibliografía recomendada por temas disponible en el Aula Virtual.
