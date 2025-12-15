## SESIÓN 7: DIFERENCIABILIDAD DE FUNCIONES DE VARIAS VARIABLES
### Objetivos
1.  Calcular derivadas de orden superior, gradiente y la matriz Hessiana.
2.  Introducir el concepto de diferenciabilidad para funciones de varias variables.
3.  Aprender a determinar el conjunto donde una función dada es diferenciable.
4.  Diferenciabilidad de funciones vectoriales.
-----
### Contenidos
#### 1\. Derivadas de orden superior (Página 1)
Sean $f:\mathbb{R}^{n}\to\mathbb{R}$ y $v\in\mathbb{R}^{n}\setminus{0}$, la derivada de $f$ con respecto al vector $v$ se puede considerar como una función
$$D_{v}f:\mathbb{R}^{n}\to\mathbb{R}$$
$$x\to D_{v}f(x)$$
Si derivamos esta función con respecto a otro vector $w\in\mathbb{R}^{n}\setminus{0}$ obtenemos lo que se llama **derivada segunda de $f$** (respecto a $v$ y $w$), $D_{w}(D_{v}f)$.
Si realizamos esto sobre las derivadas parciales, se obtiene lo que se conoce como **derivadas parciales de segundo orden**. Se pueden denotar de las siguientes formas:
$$D_{j,i}f(x)=D_{j,i}^{2}f(x)=D_{i}(D_{j}f)(x)=\frac{\partial}{\partial x_{i}}\left(\frac{\partial f}{\partial x_{j}}(x)\right)=\frac{\partial^{2}f}{\partial x_{i}\partial x_{j}}(x).$$
<a name="def-1-1"></a>
**Definición 1.1** Sea $f:\mathbb{R}^{n}\to\mathbb{R}$. Se define la **matriz hessiana de $f$ en un punto $x\in\mathbb{R}^{n}$** donde existan las derivadas parciales de $f$ de segundo orden como (Página 2)
$$H f(x)=\begin{pmatrix} D_{11}f(x) & D_{12}f(x) & \cdots & D_{1n}f(x)\\ D_{21}f(x) & D_{22}f(x) & \cdots & D_{2n}f(x)\\ \vdots & \vdots & \ddots & \vdots\\ D_{n1}f(x) & D_{n2}f(x) & \cdots & D_{nn}f(x)\end{pmatrix}_{n\times n}$$
#### 2\. Diferenciabilidad de funciones de varias variables (Página 2)
<a name="def-2-1"></a>
**Definición 2.1** Una función $g:\mathbb{R}^{n}\to\mathbb{R}^{m}$ es una **aplicación lineal** si existe una matriz $M\in\mathcal{M}_{m\times n}(\mathbb{R})$ tal que
$$g\begin{pmatrix}x_{1}\\ x_{2}\\ \vdots\\ x_{n}\end{pmatrix}=M\begin{pmatrix}x_{1}\\ x_{2}\\ \vdots\\ x_{n}\end{pmatrix}.$$
<a name="def-2-2"></a>
**Definición 2.2** Sean $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$ y $a\in A$. Se dice que $f$ es **diferenciable en el punto $a$** si existe una aplicación lineal $Df(a):\mathbb{R}^{n}\to\mathbb{R}$ tal que
$$\lim_{x\to a}\frac{f(x)-f(a)-Df(a)(x-a)}{||x-a||}=0$$
o, lo que es lo mismo,
$$\lim_{h\to 0}\frac{f(a+h)-f(a)-Df(a)(h)}{||h||}=0.$$
La aplicación $Df(a):\mathbb{R}^{n}\to\mathbb{R}$ se llama **diferencial de $f$ en $a$**.
<a name="prop-2-3"></a>
**Proposición 2.3 (Álgebra de funciones diferenciables)** Sean dos funciones $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$ y $g:B\subseteq\mathbb{R}^{n}\to\mathbb{R}$ diferenciables en $a\in A\cap B$. Entonces:
1.  $\alpha f+\beta g$ es diferenciable en $a$ para todo $\alpha, \beta\in\mathbb{R}$.
2.  $f\cdot g$ es diferenciable en $a$.
3.  Si $g(a)\ne0$, $\frac{f}{g}$ es diferenciable en $a$.
<a name="teo-2-4"></a>
**Teorema 2.4 (Condición necesaria de diferenciabilidad)** Si $f$ es diferenciable en $a$, entonces es continua en $a$.
*(Página 3)*
<a name="cor-2-5"></a>
**Corolario 2.5** Si $f$ no es continua en $a$, entonces $f$ no puede ser diferenciable en $a$.
<a name="teo-2-6"></a>
**Teorema 2.6 (Condición suficiente de diferenciabilidad)** Si existen todas las derivadas parciales de $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$ en un entorno de un punto $a$ y, al menos, $n-1$ de ellas son continuas en $a$, entonces $f$ es diferenciable en $a$.
<a name="teo-2-7"></a>
**Teorema 2.7** Si $f$ es diferenciable en $a$, entonces
$$Df(a)(v)=(\nabla f(a))^{t}\cdot v$$
para todo $v\in\mathbb{R}^{n}$. Además, si $v\ne0$ se tiene $Df(a)(v)=D_{v}f(a)$.
<a name="obs-2-8"></a>
**Observación 2.8** Este teorema nos proporciona la única aplicación lineal $Df(a)$ con la que habría que comprobar la definición de diferenciabilidad.
<a name="def-2-9"></a>
**Definición 2.9** Sea $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$, $k\in\mathbb{N}$. Se dice que $f$ es de **clase $k$ en $A$**, y se escribe $f\in\mathcal{C}^{k}(A)$, si todas las derivadas parciales de $f$ hasta orden $k$ son continuas en $A$. Si $f\in\mathcal{C}^{k}(A)$ para todo $k\in\mathbb{N}$, se escribe $f\in\mathcal{C}^{\infty}(A)$.
#### 3\. Diferenciabilidad de funciones vectoriales (Página 3)
<a name="prop-3-1"></a>
**Definición 3.1** Sea una función vectorial $f=(f_{1},...,f_{m}):A\subseteq\mathbb{R}^{n}\to\mathbb{R}^{m}$, con $f_{i}:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$ y un punto $a\in A$. Se dice que $f$ es **diferenciable en $a$** si $f_{i}$ es diferenciable en $a$ para todo $i=1,2,...,m$.
<a name="def-3-2"></a>
**Definición 3.2** Se define la **matriz Jacobiana de una función vectorial $f=(f_{1},f_{2},...,f_{m})$**, en un punto $x$ donde sea diferenciable, como la matriz $m\times n$:
$$J f(x) = \begin{pmatrix} \frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} & \cdots & \frac{\partial f_1}{\partial x_n} \\ \frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} & \cdots & \frac{\partial f_2}{\partial x_n} \\ \vdots & \vdots & \ddots & \vdots \\ \frac{\partial f_m}{\partial x_1} & \frac{\partial f_m}{\partial x_2} & \cdots & \frac{\partial f_m}{\partial x_n} \end{pmatrix}$$
<a name="def-3-3"></a>
**Definición 3.3** Si $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}^{m}$ es diferenciable en $a\in A$ se llama **diferencial de $f$ en $a$** a la aplicación lineal $Df(a):\mathbb{R}^{n}\to\mathbb{R}^{m}$ dada por
$$Df(a)(v)=(Jf(a))^{t}\cdot v$$
para todo $v\in\mathbb{R}^{n}$.
*(Página 4)*
<a name="teo-3-4"></a>
**Teorema 3.4 (Regla de la cadena)** Si $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}^{m}$ es diferenciable en $a\in A$ y $g:B\subseteq\mathbb{R}^{m}\to\mathbb{R}^{p}$ es diferenciable en $f(a)\in B$, entonces
$$g\circ f:A\cap f^{-1}(B)\subseteq\mathbb{R}^{n}\to\mathbb{R}^{p}$$
es diferenciable en $a$ y $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$. Luego
$$J(g\circ f)(a)=Jg(f(a))\cdot Jf(a).$$
