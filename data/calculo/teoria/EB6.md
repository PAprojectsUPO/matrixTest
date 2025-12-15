## SESIÓN 6: CONTINUIDAD, DERIVADA DE FUNCIONES DE UNA Y VARIAS VARIABLE
### Objetivos
1.  Estudiar la continuidad de funciones.
2.  Ver el álgebra de las funciones continuas.
3.  Ver algunos resultados sobre funciones continuas.
4.  Introducir el concepto de derivada de una función de una variable y aprender a calcularla.
5.  Introducir los conceptos de derivadas direccionales y parciales y aprender a calcularlas.
-----
### Contenidos
#### 1\. Continuidad de funciones (Página 1)
<a name="def-1-1"></a>
**Definición 1.1** Sea $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$ y $a\in A$. Se dice que $f$ es **continua en $a$** cuando
$$f(a)=\lim_{x\to a}f(x).$$
Se dice que $f$ es **continua en un subconjunto $B\subseteq A$** si es continua en todo punto de $B$.
**Ejemplos de funciones continuas:**
1.  Los polinomios son siempre continuos.
2.  Senos y Cosenos son siempre continuos.
3.  La raíz cuadrada es una función continua donde el radicando sea mayor o igual que cero. (Página 2)
4.  La función exponencial es siempre continua.
5.  El logaritmo (en cualquier base) es continuo donde "lo que aparezca dentro de dicho logaritmo" sea estrictamente positivo.
<a name="prop-2-1"></a>
#### 2\. Álgebra de funciones continuas (Página 2)
Sean dos funciones $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$ y $g:B\subseteq\mathbb{R}^{n}\to\mathbb{R}$. Si $f$ es continua en $A'\subseteq A$ y $g$ continua en $B'\subseteq B$, se tienen las siguientes propiedades:
  * **a)** La suma $f+g$ es continua en la intersección $A'\cap B'$
    $$(f+g):A'\cap B'\subseteq\mathbb{R}^{n}\to\mathbb{R}, \quad (f+g)(x)=f(x)+g(x).$$
  * **b)** La multiplicación $f\cdot g$ continua en la intersección $A'\cap B'$
    $$(f\cdot g):A'\cap B'\subseteq\mathbb{R}^{n}\to\mathbb{R}, \quad (f\cdot g)(x)=f(x)\cdot g(x).$$
  * **c)** El cociente de $f$ por $g$ es continuo en la intersección $A'\cap B'$ salvo donde se anula el denominador
    $$\frac{f}{g}:\left[(A'\cap B')\setminus(g^{-1}{0})\right]\subseteq\mathbb{R}^{n}\to\mathbb{R}, \quad \left(\frac{f}{g}\right)(x)=\frac{f(x)}{g(x)}$$
    con $g^{-1}{0}={x\in\mathbb{R}^{n}:g(x)=0}$.
<a name="def-2-1"></a>
**Definición 2.1** Una función vectorial $f=(f_{1},...,f_{m}):A\subseteq\mathbb{R}^{n}\to\mathbb{R}^{m}$ es **continua en un punto $a\in A$** si cada una de sus componentes $f_{i}$ es continua en $a$.
**Composición de funciones continuas.** Sean dos funciones vectoriales $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}^{m}$ y $g:B\subseteq\mathbb{R}^{m}\to\mathbb{R}^{k}$ continuas en $A'\subseteq A$ y $B'\subseteq B$, respectivamente. La composición de dichas funciones $g\circ f:\mathbb{R}^{n}\to\mathbb{R}^{k}$, $(g\circ f)(x)=g(f(x))$, es continua en $A'\cap f^{-1}(B')$, donde $f^{-1}(B')={x\in\mathbb{R}^{n}:f(x)\in B'}$.
<a name="prop-2-4"></a>
**Teorema 2.2 (Teorema de Bolzano)** (Página 3) Sea $f:[a,b]\subseteq\mathbb{R}\to\mathbb{R}$ continua en $[a,b]$. Si $f(a)\cdot f(b)<0$, entonces existe un punto $c\in(a,b)$ tal que $f(c)=0$.
<a name="teo-2-3"></a>
**Teorema 2.3 (Teorema de los valores intermedios)** Sea $f:[a,b]\subseteq\mathbb{R}\to\mathbb{R}$ continua en $[a,b]$. Entonces existen $c, d\in[a,b]$ tales que $f([a,b])=[f(c),f(d)]$.
#### 3\. Concepto de derivada de una función de una variable (Página 3)
<a name="def-3-1"></a>
**Definición 3.1** Sea $f:A\subseteq\mathbb{R}\to\mathbb{R}$. Diremos que $f$ tiene **derivada en el punto $a\in A$** o es **derivable en el punto $a\in A$** si existe el siguiente límite
$$\lim_{s\to 0}\frac{f(a+s)-f(a)}{s}$$
En caso de que exista dicho límite, se le llama **derivada de $f$ en $a$** y se denota por $f'(a)$.
Este valor resulta ser la pendiente de la recta tangente a la gráfica de $f(x)$ en el punto $(a,f(a))$, es decir, la pendiente de la recta $y-f(a)=f'(a)(x-a)$.
**Derivadas de algunas funciones reales de una variable:**
  * $f(x)=c\in\mathbb{R} \Rightarrow f'(x)=0 \quad \forall x\in\mathbb{R}$
  * $f(x)=x^{n} \text{ con } n\in\mathbb{N} \Rightarrow f'(x)=nx^{n-1} \quad \forall x\in\mathbb{R}$
  * $f(x)=x^{\alpha} \text{ con } \alpha\in\mathbb{R} \Rightarrow f'(x)=\alpha x^{\alpha-1} \begin{cases}\forall x\in\mathbb{R}\setminus{0} \text{ si } \alpha<1\\ \forall x\in\mathbb{R} \text{ si } \alpha\ge1\end{cases}$
  * $f(x)=\ln(x) \Rightarrow f'(x)=\frac{1}{x} \quad \forall x>0$.
  * $f(x)=a^{x} \text{ con } a>0 \Rightarrow f'(x)=a^{x}\ln(a) \quad \forall x\in\mathbb{R}$
  * $f(x)=e^{x} \Rightarrow f'(x)=e^{x} \quad \forall x\in\mathbb{R}$
  * $f(x)=\sin(x) \Rightarrow f'(x)=\cos(x) \quad \forall x\in\mathbb{R}$
  * $f(x)=\cos(x) \Rightarrow f'(x)=-\sin(x) \quad \forall x\in\mathbb{R}$
  * $f(x)=\tan(x) \Rightarrow f'(x)=1+\tan^{2}(x)=\frac{1}{\cos^{2}(x)} \quad \forall x\in\mathbb{R} \text{ tal que } \cos(x)\ne0$
*(Página 4)*
  * $f(x)=\arctan(x) \Rightarrow f'(x)=\frac{1}{1+x^{2}} \quad \forall x\in\mathbb{R}$.
  * $f(x)=\arcsin(x) \Rightarrow f'(x)=\frac{1}{\sqrt{1-x^{2}}} \quad \forall x\in(-1,1)$.
  * $f(x)=h(x)+g(x) \Rightarrow f'(x)=h'(x)+g'(x).$
  * $f(x)=h(x)\cdot g(x) \Rightarrow f'(x)=h'(x)\cdot g(x)+h(x)\cdot g'(x).$
  * $f(x)=\frac{h(x)}{g(x)} \Rightarrow f'(x)=\frac{h'(x)\cdot g(x)-h(x)\cdot g'(x)}{(g(x))^{2}} \quad \forall x \text{ tal que } g(x)\ne0.$
**Regla de la cadena.** Si una función $f$ es derivable en un punto $x$ y otra función $g$ es derivable en el punto $f(x)$, entonces la composición $g\circ f$ es derivable en $x$ y su derivada es
$$(g\circ f)'(x)=g'(f(x))\cdot f'(x).$$
<a name="teo-3-2"></a>
**Teorema 3.2 (Regla de L'Hôpital)** Sean dos funciones $f$ y $g$ derivables en $(a, b)$ excepto, posiblemente, en un punto $c\in(a,b)$ y $g'(x)\ne0$ en $(a,b)\setminus{c}$. Si $\lim_{x\to c}f(x)=\lim_{x\to c}g(x)=0$ y existe $\lim_{x\to c}\frac{f'(x)}{g'(x)}$, entonces
$$\lim_{x\to c}\frac{f(x)}{g(x)}=\lim_{x\to c}\frac{f'(x)}{g'(x)}.$$
<a name="obs-3-3"></a>
**Observación 3.3** La regla de L'Hôpital también se verifica si $c=\pm\infty$ y si $\lim_{x\to c}f(x)=\lim_{x\to c}g(x)=\pm\infty$.
#### 4\. Derivadas direccionales y parciales de funciones de varias variables (Página 4)
<a name="def-4-1"></a>
**Definición 4.1** Sea una función de $n$ variables $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$. Diremos que $f$ tiene **derivada en $a\in A$**, o es **derivable en $a\in A$**, **respecto al vector $v\in\mathbb{R}^{n}\setminus{0}$** si existe
$$\lim_{\lambda\to 0}\frac{f(a+\lambda v)-f(a)}{\lambda}$$
A este límite se le llama **derivada de $f$ en $a$ respecto del vector $v$**, y se denota $D_{v}f(a)$.
<a name="def-4-2"></a>
**Definición 4.2** En la situación de la definición anterior, se llama **derivada direccional de $f$ en $a$ en la dirección de $v$** o **derivada de $f$ en $a$ siguiendo la dirección de $v$** a $D_{\frac{v}{||v||}}f(a)$.
<a name="def-4-3"></a>
**Definición 4.3** (Página 5) Sea una función $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$. Se llama **derivada parcial $i$-ésima de $f$ en $a\in A$** a $D_{e_{i}}f(a)$, donde $e_{i}=(0,...,0,1,0,...,0)$ es el vector $i$-ésimo de la base canónica de $\mathbb{R}^{n}$, es decir,
$$D_{e_{i}}f(a)=\lim_{\lambda\to 0}\frac{f(a+\lambda e_{i})-f(a)}{\lambda}=\lim_{\lambda\to 0}\frac{f(a_{1},...,a_{i-1},a_{i}+\lambda,a_{i+1},...,a_{n})-f(a)}{\lambda}$$
Se suele denotar también como
$$\frac{\partial f}{\partial x_{i}}(a)=\frac{\partial f}{\partial x_{i}}|_a=D_{i}f(a).$$
<a name="obs-4-4"></a>
**Observación 4.4** Para calcular la derivada parcial de una función, se consideran todas las demás variables como constantes y se deriva.
<a name="def-4-5"></a>
**Definición 4.5** Sea $f:A\subseteq\mathbb{R}^{n}\to\mathbb{R}$. Para cada $x\in A$ donde existan todas las derivadas parciales de $f$, se define el **gradiente de $f$ en ese punto $x$** como el vector columna
$$\nabla f(x)=\begin{pmatrix}\frac{\partial f}{\partial x_{1}}(x)\\ \frac{\partial f}{\partial x_{2}}(x)\\ \vdots\\ \frac{\partial f}{\partial x_{n}}(x)\end{pmatrix}$$
También se puede ver el gradiente como una aplicación
$$\nabla f:\mathbb{R}^{n}\to\mathbb{R}^{n}$$
$$x\to\nabla f(x)$$