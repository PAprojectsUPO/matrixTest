## SESIÓN 1: SUCESIONES
### Objetivos
1.  Introducir la noción de sucesión de números reales y algunos tipos de sucesiones.
2.  Introducir el concepto de límite de una sucesión.
-----
### Contenidos
#### 1\. Sucesiones de números reales
<a name="def-1-1"></a>
**Definición 1.1** Una sucesión de números reales es una aplicación
$$x:\mathbb{N}^*\longrightarrow\mathbb{R}$$
$$n\longrightarrow x(n)=x_n$$
donde $\mathbb{N}^*=\mathbb{N}\setminus{0}$. Al elemento $x_n$ se le llama término general de la sucesión.
**Notación 1.2** La sucesión anterior suele denotarse por ${x_n}_n$, ${x_n}_{n\in\mathbb{N}^*}$ o ${x_n:n\in\mathbb{N}^*}$. En definitiva, la sucesión ${x_n}_n$ consiste en el conjunto infinito ${x_1,x_2,x_3,...}$.
<a name="def-1-3"></a>
**Definición 1.3** Una sucesión ${x_n}_n$ se dice que viene dada o definida por recurrencia si se da el valor del primer elemento de la sucesión $x_1$, y la expresión del término $n$-ésimo viene dada en función del término anterior, es decir, $x_n=f(x_{n-1})$, donde $f$ es cualquier función.
#### 2\. Límite de una sucesión
En muchas ocasiones es importante el comportamiento de una sucesión ${x_n}_n$ cuando $n$ crece arbitrariamente, por ello se introduce el concepto de límite de una sucesión.
<a name="def-2-2"></a>
**Definición 2.1** Dada una sucesión de término general $x_n$ se dice que la sucesión tiene límite $l$, o tiende a $l$, o es convergente a $l$, y se denota por $\lim_{n\to\infty}x_n=l$, cuando para todo $\epsilon>0$ existe $n_0\in\mathbb{N}$ (que dependerá de $\epsilon$) tal que, si $n\ge n_0$ se verifica $||x_n-l||<\epsilon$. Lo cuál, se puede escribir, usando sólo símbolos matemáticos, como
$$\forall\epsilon>0\exists n_0(\epsilon)\in\mathbb{N}/\forall n\ge n_0, |x_n-l|<\epsilon.$$
(Intuitivamente, $\lim_{n\to\infty}x_n=l$ si los términos de la sucesión se aproximan al número $l$ cuando $n$ se hace suficientemente grande).
<a name="obs-2-2"></a>
**Observación 2.2** De la definición se deduce que $\lim_{n\to\infty}x_n=0$ si y sólo si $\lim_{n\to\infty}|x_n|=0$.
<a name="def-2-3"></a>
**Definición 2.3** Se dice que ${x_n}_n$ es una sucesión de Cauchy si se verifica que
$$\forall\epsilon>0\exists n_0(\epsilon)\in\mathbb{N}/\forall n, m\ge n_0, |x_n-x_m|<\epsilon$$
<a name="prop-2-4"></a>
**Proposición 2.4** Una sucesión es convergente si, y sólo si, es de Cauchy.
<a name="def-2-5"></a>
**Definición 2.5** Se dice que una sucesión de término general $x_n$ diverge a $+\infty$, y se escribe $\lim_{n\to\infty}x_n=+\infty$, si
$$\forall M>0\exists n_0(M)\in\mathbb{N}/\forall n\ge n_0, x_n>M$$
(Intuitivamente, cuando los términos de la sucesión se hacen infinitamente grandes cuando $n$ tiende a infinito).
<a name="def-2-6"></a>
**Definición 2.6** Se dice que una sucesión de término general $x_n$ diverge a $-\infty$, y se escribe $\lim_{n\to\infty}x_n=-\infty$, si
$$\forall M>0\exists n_0(M)\in\mathbb{N}/\forall n\ge n_0, x_n<-M.$$
(Intuitivamente, cuando los términos de la sucesión se "acercan" a $-\infty$ cuando $n$ tiende a infinito).
<a name="def-2-7"></a>
**Definición 2.7** Se dice que una sucesión de término general $x_n$ es divergente, y se escribe $\lim_{n\to\infty}x_n=\infty$, si
$$\forall M>0\exists n_0(M)\in\mathbb{N}/\forall n\ge n_0, |x_n|>M.$$
(Intuitivamente, cuando los términos de la sucesión se hacen infinitamente grandes en valor absoluto, cuando $n$ tiende a infinito).
<a name="def-2-8"></a>
**Definición 2.8** Una sucesión convergente, divergente a $+\infty$ o divergente a $-\infty$ se dice que tiene límite. Una sucesión que no posee límite se llama oscilante.
<a name="prop-2-9"></a>
**Proposición 2.9** Si una sucesión posee límite, éste es único.
#### 3\. Subsucesiones
<a name="def-3-1"></a>
**Definición 3.1** Dada una sucesión ${x_n}_n$ se llama subsucesión de ${x_n}_n$ a todo conjunto ${x_{n_k}}_k\subseteq{x_n}_n$ donde ${n_k}$ es cualquier sucesión de números naturales. (Intuitivamente, una subsucesión de ${x_n}_n$ es el conjunto que resulta de quedarnos con una cantidad infinita de términos de dicha sucesión).
<a name="prop-3-2"></a>
**Proposición 3.2** Si una sucesión converge, cualquier subsucesión suya converge al mismo límite.
<a name="obs-3-3"></a>
**Observación 3.3** Si encontramos dos subsucesiones de ${x_n}_n$ que convergen a límites distintos, entonces la sucesión ${x_n}_n$ no converge.
<a name="prop-3-4"></a>
**Proposición 3.4** Si una sucesión diverge, diverge a $+\infty$ o diverge a $-\infty$, cualquier subsucesión suya diverge, diverge a $+\infty$ o diverge a $-\infty$, respectivamente.
#### 4\. Sucesiones monótonas y acotadas
<a name="def-4-1"></a>
**Definición 4.1** Una sucesión ${x_n}_n$ se dice:
  * **monótona creciente** si $x_n\le x_{n+1}$ para todo $n\ge 1$.
  * **estrictamente monótona creciente** si $x_n < x_{n+1}$ para todo $n\ge 1$.
  * **monótona decreciente** si $x_n\ge x_{n+1}$ para todo $n\ge 1$.
  * **estrictamente monótona decreciente** si $x_n > x_{n+1}$ para todo $n\ge 1$.
  * **monótona** si es monótona creciente o monótona decreciente.
  * **estrictamente monótona** si es estrictamente monótona creciente o estrictamente monótona decreciente.
<a name="def-4-2"></a>
**Definición 4.2** Una sucesión ${x_n}_n$ se dice **acotada** si existe un número $M>0$ tal que $|x_n|\le M$ para todo $n\ge 1$.
<a name="prop-4-3"></a>
**Proposición 4.3** Toda sucesión monótona y acotada es convergente.
<a name="def-4-4"></a>
**Definición 4.4**
  * Se dice que la sucesión ${x_n}$ es una **sucesión aritmética** si existe un número $d$ tal que $x_{n+1}=x_n+d$ para todo $n\ge 1$.
  * Se dice que la sucesión es **geométrica** si existe un número $d$ tal que $x_n=d^n$.
<a name="prop-4-5"></a>
**Proposición 4.5**
  * Una sucesión aritmética siempre diverge, a $+\infty$ si $d>0$ y a $-\infty$ si $d<0$.
  * Una sucesión geométrica converge a cero si $|d|<1$, si $d>1$ diverge a $+\infty$ y si $d\le -1$ es oscilante.
