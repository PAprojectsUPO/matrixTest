## SESIÓN 3: SERIES
### Objetivos
1.  Introducir el concepto de serie numérica y aprender a calcularla.
2.  Ver los distintos criterios de convergencia para una serie.
-----
### Contenidos
#### 1\. Series numéricas (Página 1)
El concepto de serie aparece al intentar sumar una cantidad infinita de números. Nuestra primera intuición puede ser, pensar que, al sumar una cantidad infinita de números positivos nos saldrá "infinito". Nada más lejos de la realidad. Pensemos en el segmento unidad. Si lo dividimos en dos trozos iguales, nos aparecen dos segmentos de longitud $1/2$, es decir, $1=\frac{1}{2}+\frac{1}{2}$. Si volvemos a dividir el segmento de la derecha por la mitad, nos quedará una partición de longitudes igual a
$$1=\frac{1}{2}+\left(\frac{1}{4}+\frac{1}{4}\right)=\frac{1}{2}+\frac{1}{4}+\frac{1}{4}.$$
$$1=\frac{1}{2}+\frac{1}{4}+\left(\frac{1}{8}+\frac{1}{8}\right)=\frac{1}{2}+\frac{1}{4}+\frac{1}{8}+\frac{1}{8}.$$
Si volvemos a dividir en dos el segmento de la derecha queda.
Si seguimos haciendo esto indefinidamente, obtenemos
$$1=\frac{1}{2}+\frac{1}{4}+\frac{1}{8}+\frac{1}{16}+\frac{1}{32}+\cdots=\frac{1}{2}+\frac{1}{2^{2}}+\frac{1}{2^{3}}+\frac{1}{2^{4}}+\frac{1}{2^{5}}+\cdots=\sum_{n=1}^{\infty}\frac{1}{2^{n}}$$
Es decir, la suma infinita de términos positivos puede ser finita.
<a name="def-1-1"></a>
**Definición 1.1** (Página 2) Dada una sucesión ${a_{k}}_k$ de números reales, se puede construir otra sucesión asociada:
$$S_{1}=a_{1}, S_{2}=a_{1}+a_{2} , S_{3}=a_{1}+a_{2}+a_{3},....,S_{n}=a_{1}+a_{2}+\cdots+a_{n}=\sum_{k=1}^{n}a_{k}.$$
Al límite de la sucesión ${S_{n}}_n$ se le denomina **serie de término general** $a_{k}$, y se denota
$$\sum_{k=1}^{\infty}a_{k}=\lim_{n\to\infty}S_{n}=\lim_{n\to\infty}\sum_{k=1}^{n}a_{k}.$$
A $S_{n}$ se le denomina **suma parcial $n$-ésima** de la serie.
Se dice que la serie **converge** si existe el límite y es un valor finito $S$, en cuyo caso se escribe $\sum_{k=1}^{\infty}a_{k}=S$. Si $\lim_{n\to\infty}S_{n}=\pm\infty$, se dice que la serie **diverge** y se escribe $\sum_{k=1}^{\infty}a_{k}=\pm\infty$. Si no existe el límite se dice que la serie es **oscilante**.
<a name="prop-1-2"></a>
**Proposición 1.2 (Condición necesaria de convergencia)** Si la serie $\sum_{k=1}^{\infty}a_{k}$ converge, entonces $\lim_{k\to\infty}a_{k}=0$.
<a name="prop-1-3"></a>
**Proposición 1.3** Si $\sum_{k=1}^{\infty} a_k = A\in\mathbb{R}$ y $\sum_{k=1}^{\infty} b_k = B\in\mathbb{R}$, entonces
$$\sum_{k=1}^{\infty}(\alpha a_{k}+\beta b_{k})=\alpha A+\beta B$$
para todo $\alpha,\beta\in\mathbb{R}$.
<a name="def-1-4"></a>
**Definición 1.4** Se llama **serie geométrica** de razón $r\in\mathbb{R}$ a la serie $\sum_{k=1}^{\infty}r^{k}$.
<a name="prop-1-5"></a>
**Proposición 1.5** La serie geométrica $\sum_{k=1}^{\infty}r^{k}$ es **convergente** si, y sólo si, $|r|<1$, en cuyo caso
$$\sum_{k=1}^{\infty}r^{k}=\frac{r}{1-r}$$
<a name="obs-1-6"></a>
**Observación 1.6** Es posible que la serie no empiece en el término $k=1$, en cuyo caso, el valor sería distinto, pero el comportamiento (si es convergente, divergente u oscilante) es el mismo. Se puede comprobar que si $|r|<1$ se tiene $\sum_{k=m}^{\infty}r^{k}=\frac{r^{m}}{1-r}$.
<a name="def-1-7"></a>
**Definición 1.7** Se dice que la serie $\sum_{k=1}^{\infty}a_{k}$ es una **serie de términos positivos** si $a_{k}\ge0$ para todo $k\ge1$.
<a name="obs-1-8"></a>
**Observación 1.8** La sucesión de sumas parciales de una serie de términos positivos es siempre monótona creciente, por tanto, es convergente o divergente a $+\infty$.
#### 2\. Criterios de convergencia para series de términos positivos (Página 3)
Veamos ahora algunos métodos para saber si una serie de términos positivos converge o no. Para ello, en primer lugar, veamos un resultado de convergencia para una serie que es muy útil en lo que sigue.
<a name="prop-2-1"></a>
**Proposición 2.1** La serie $\sum_{k=1}^{\infty}\frac{1}{k^{\alpha}}$ converge si, y sólo si, $\alpha>1$.
**(1) Criterio de comparación**
  * **Comparación directa:** Supongamos que $a_{k}\le b_{k}$ para todo $k\ge1$.
      * Si la serie $\sum_{k=1}^{\infty}b_{k}$ converge, entonces la serie $\sum_{k=1}^{\infty}a_{k}$ converge.
      * Si la serie $\sum_{k=1}^{\infty}a_{k}$ diverge, entonces la serie $\sum_{k=1}^{\infty}b_{k}$ diverge.
  * **Criterio del límite:** Supongamos ahora que $\lim_{k\to\infty}\frac{a_{k}}{b_{k}}=\lambda$.
      * Si $\lambda\in(0,+\infty)$, entonces $\sum_{k=1}^{\infty}a_{k}$ converge si, y sólo si, $\sum_{k=1}^{\infty}b_{k}$ converge.
      * Si $\lambda=0$ se tiene que, si $\sum_{k=1}^{\infty}b_{k}$ converge entonces $\sum_{k=1}^{\infty}a_{k}$ converge.
      * Si $\lambda=+\infty$ se tiene que, si $\sum_{k=1}^{\infty}b_{k}$ diverge entonces $\sum_{k=1}^{\infty}a_{k}$ diverge.
**(2) Criterio de Prinsheim**
Supongamos que $\lim_{k\to\infty}k^{\alpha}a_{k}=\lambda$.
  * Si $\lambda\ne+\infty$ y $\alpha>1$ entonces la serie $\sum_{k=1}^{\infty}a_{k}$ converge.
  * Si $\lambda\ne0$ y $\alpha\le1$ entonces la serie $\sum_{k=1}^{\infty}a_{k}$ diverge.
**(3) Criterio de la raíz o de Cauchy** (Páginas 3 y 4)
Supongamos que $\lim_{k\to\infty}\sqrt[k]{a_{k}}=\lambda$.
  * Si $\lambda<1$, la serie $\sum_{k=1}^{\infty}a_{k}$ converge.
  * Si $\lambda>1$, la serie $\sum_{k=1}^{\infty}a_{k}$ diverge.
Hay que tener en cuenta que todos estos criterios son condiciones suficientes de convergencia, pero no necesarias para la convergencia o divergencia de la serie.
**(4) Criterio de D'Alambert o del cociente**
Supongamos que $\lim_{k\to\infty}\frac{a_{k+1}}{a_{k}}=\lambda$.
  * Si $\lambda<1$, la serie $\sum_{k=1}^{\infty}a_{k}$ converge.
  * Si $\lambda>1$, la serie $\sum_{k=1}^{\infty}a_{k}$ diverge.
**(5) Criterio de Raabe**
Supongamos que $\lim_{k\to\infty}k\left(1-\frac{a_{k+1}}{a_{k}}\right)=\lambda$.
  * Si $\lambda<1$, la serie $\sum_{k=1}^{\infty}a_{k}$ diverge.
  * Si $\lambda>1$, la serie $\sum_{k=1}^{\infty}a_{k}$ converge.
**(6) Criterio logarítmico**
Supongamos que $\lim_{k\to\infty}\frac{\ln(\frac{1}{a_{k}})}{\ln(k)}=\lambda$.
  * Si $\lambda<1$, la serie $\sum_{k=1}^{\infty}a_{k}$ diverge.
  * Si $\lambda>1$, la serie $\sum_{k=1}^{\infty}a_{k}$ converge.
#### 3\. Criterios de convergencia para series que no son de términos positivos (Página 4)
En primer lugar observemos que, si todos los términos $a_{n}$ de la serie son negativos, entonces $\sum_{n}^{\infty}a_{n}=-\sum_{n}^{\infty}(-a_{n})$ y la serie $\sum_{n}^{\infty}(-a_{n})$ es de términos no negativos, por tanto, podemos aplicar todos los criterios anteriores para estudiar el caracter de la serie de partida.
(Página 5) Si la serie tiene un número finito $a_{1},a_{2},...,a_{m}$ de términos negativos (positivos) y el resto positivos (negativos), se puede considerar
$$\sum_{n=1}^{\infty}a_{n}=\sum_{n=1}^{m}a_{n}+\sum_{n=m}^{\infty}a_{n},$$
en consecuencia, el caracter de la serie $\sum_{n=1}^{\infty}a_{n}$ será el mismo que el de la serie $\sum_{n=m}^{\infty}a_{n}$. Si $\sum_{n=m}^{\infty}a_{n}=S$ entonces $\sum_{n=1}^{\infty}a_{n}=\sum_{n=1}^{m}a_{n}+S$.
<a name="teo-3-1"></a>
**Teorema 3.1** Si la serie $\sum_{n=1}^{\infty}|a_{n}|$ converge (se dice **absolutamente convergente**), entonces $\sum_{n=1}^{\infty}a_{n}$ converge.
<a name="teo-3-2"></a>
**Teorema 3.2 (Teorema de Leibnitz)** Sea la serie alternada $\sum_{n}^{\infty}(-1)^{n}a_{n}$ con $a_{n}\ge0$ para todo $n$. Si $\lim_{n\to\infty}a_{n}=0$ y la sucesión ${a_{n}}_n$ es monótona decreciente ($a_{1}\ge a_{2}\ge a_{3}\ge\cdots$), entonces $\sum_{n}^{\infty}(-1)^{n}a_{n}$ converge.
