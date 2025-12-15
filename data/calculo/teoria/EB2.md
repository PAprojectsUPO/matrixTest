## SESIÓN 2: SUCESIONES E INDUCCIÓN
### Objetivos
1.  Aprender a calcular límites de sucesiones y ver criterios de convergencia para saber si una sucesión converge o no.
2.  Aprender a hacer demostraciones por inducción.
-----
### Contenidos
#### 1\. Álgebra de límites
<a name="prop-1-1"></a>
**Proposición 1.1** Si existen los límites de dos sucesiones ${x_{n}}_n$ e ${y_{n}}_n$, se tiene
1.  $\lim_{n\to\infty}(rx_{n})=r(\lim_{n\to\infty}x_{n})$ para todo $r\in\mathbb{R}$.
2.  $\lim_{n\to\infty}(x_{n}\pm y_{n})=\lim_{n\to\infty}x_{n}\pm \lim_{n\to\infty}y_{n}$, salvo en el caso en que resulte la indeterminación $\infty-\infty$.
3.  $\lim_{n\to\infty}(x_{n}\cdot y_{n})=(\lim_{n\to\infty}x_{n})\cdot(\lim_{n\to\infty}y_{n})$, salvo en el caso en que resulte la indeterminación $0\cdot(\pm\infty)$.
4.  Si $y_{n}\ne 0$ para todo $n$, $\lim_{n\to\infty}\frac{x_{n}}{y_{n}}=\frac{\lim_{n\to\infty}x_{n}}{\lim_{n\to\infty}y_{n}}$, salvo en el caso en que resulte la indeterminación $\frac{\infty}{\infty}$ o $\frac{0}{0}$.
5.  Si $\lim_{n\to\infty}x_{n}>0$, $\lim_{n\to\infty}(x_{n}^{y_{n}})=(\lim_{n\to\infty}x_{n})^{\lim_{n\to\infty}y_{n}}$, salvo en el caso en que resulten las indeterminaciones $1^{\pm\infty}, \infty^{0} \text{ y } 0^{0}$.
<a name="prop-1-2"></a>
**Proposición 1.2** Dadas dos sucesiones ${x_{n}}_n$ e ${y_{n}}_n$ tales que $\lim_{n\to\infty}x_{n}=\lim_{n\to\infty}y_{n}=l$. Si existe otra sucesión ${z_{n}}_n$ tal que $x_{n}\le z_{n}\le y_{n}$ para todo $n$, entonces $\lim_{n\to\infty}z_{n}=l$.
#### 2\. Cálculo de límites
Daremos algunos procedimientos para calcular el límite de una sucesión cuando nos aparecen algunas de las indeterminaciones anteriores.
1.  **Expresiones racionales:** sea
    $$x_{n}=\frac{a_{p}n^{p}+a_{p-1}n^{p-1}+\cdots+a_{1}n+a_{0}}{b_{q}n^{q}+b_{q-1}n^{q-1}+\cdots+b_{1}n+b_{0}}$$
    con $a_{p}\ne0$ y $b_{q}\ne0$. Entonces
    $$\lim_{n\to\infty}x_{n}=\begin{cases} +\infty \text{ si } p>q \text{ y } a_{p}b_{q}>0\\ -\infty \text{ si } p>q \text{ y } a_{p}b_{q}<0\\ 0 \text{ si } p<q\\ \frac{a_{p}}{b_{q}} \text{ si } p=q\end{cases}$$
    Esta regla se puede obtener a partir de las propiedades anteriores.
2.  **Indeterminaciones del tipo $1^{\infty}$.** Teniendo en cuenta que el número $e$ de Euler se define como
    $$e=\lim_{n\to\infty}\left(1+\frac{1}{n}\right)^{n}$$
    se obtienen las siguientes propiedades:
    
      * a) Si ${x_{n}}_n$ es una sucesión divergente y $x_{n}\ne0$ para todo $n$, entonces
        $$\lim_{n\to\infty}\left(1+\frac{1}{x_{n}}\right)^{x_{n}}=e.$$
      * b) Si ${y_{n}}_n$ es una sucesión que converge a $0$ y $y_{n}\ne0$ para todo $n$, entonces
        $$\lim_{n\to\infty}(1+y_{n})^{\frac{1}{y_{n}}}=e.$$
    
<a name="obs-2-1"></a>
    **Observación 2.1** Lo importante aquí es darse cuenta de que la sucesión inicial tiende a la indeterminación $1^{\infty}$, luego hay que "arreglar" la expresión para poder calcular el límite usando las propiedades anteriores.
3.  **Expresiones irracionales:** intentamos hacer operaciones sobre el término general para que, de alguna manera, desaparezca el problema de la raíz.
<a name="prop-2-2"></a>
**Proposición 2.2 (Criterio de la raíz)** Si existe $\lim_{n\to\infty}\frac{x_{n}}{x_{n-1}}$, entonces existe $\lim_{n\to\infty}\sqrt[n]{x_{n}}$ y coincide con el anterior.
<a name="prop-2-3"></a>
**Proposición 2.3 (Criterio de la media aritmética)** Sea ${x_{n}}_n$ una sucesión con $\lim_{n\to\infty}x_{n}=l$. Entonces
$$\lim_{n\to\infty}\frac{x_{1}+x_{2}+\cdots+x_{n}}{n}=l.$$
<a name="prop-2-4"></a>
**Proposición 2.4 (Criterio de la media geométrica)** Sea ${x_{n}}_n$ una sucesión de términos positivos tal que $\lim_{n\to\infty}x_{n}=l$. Entonces
$$\lim_{n\to\infty}\sqrt[n]{x_{1}x_{2}\cdots x_{n}}=l.$$
#### 3\. Sucesiones equivalentes
<a name="def-3-1"></a>
**Definición 3.1** Dos sucesiones ${x_{n}}_n$ e ${y_{n}}_n$ se dicen **equivalentes**, y se denota $x_{n}\sim y_{n}$, si $\lim_{n\to\pm\infty}\frac{x_{n}}{y_{n}}=1$.
  * Si ambas tienden a 0 se dicen **infinitésimos equivalentes**.
  * Si ambas tienden a $+\infty$ se dicen **infinitos equivalentes**.
**Algunas equivalencias conocidas son:**
  * $\sin(x_{n})\sim x_{n}$ cuando $x_{n}\to0$.
  * $\tan(x_{n})\sim x_{n}$ cuando $x_{n}\to0$.
  * $1-\cos(x_{n})\sim\frac{x_{n}^{2}}{2}$ cuando $x_{n}\to0$.
  * $\arcsin(x_{n})\sim x_{n}$ cuando $x_{n}\to0$.
  * $\arctan(x_{n})\sim x_{n}$ cuando $x_{n}\to0$.
  * $\ln(1+x_{n})\sim x_{n}$ cuando $x_{n}\to0$.
  * $\ln(x_{n})\sim(x_{n}-1)$ cuando $x_{n}\to1$.
  * **Fórmula de Stirling:** $n\!\sim\sqrt{2\pi n}\cdot n^{n}\cdot e^{-n}$.
#### 4\. Demostraciones por inducción
El proceso de demostración de una fórmula, que depende de un número natural arbitrario $n$, por inducción, consiste en demostrar que la fórmula es válida para $n=1$ y que, bajo la hipótesis de que es válida para un $n$ arbitrario, también es válida para el número siguiente, es decir, para $n+1$. Con esto se probaría que la fórmula es válida para todo $n$ ya que, como es válida para $n=1$ es válida para el siguiente, es decir, para $n=2$. Pero, de nuevo, como es válida para $n=2$, es válida para el siguiente, es decir, para $n=3$, y así sucesivamente.
Este tipo de procesos o demostraciones se identifican como el "efecto dominó". Todos hemos visto alguna vez como, al colocar fichas de dominó formando una hilera y empujar la primera ficha de manera que caiga sobre la segunda, todas las fichas acaban tumbadas. Para ello, sólo hay que asegurarse de que cada ficha va a tumbar a la siguiente, y provocar la caída de la primera para que caigan todas. El proceso de inducción es exactamente el mismo.
<a name="ej-4-1"></a>
**Ejemplo 4.1** Veamos que $1+2+3+\cdots+n=\frac{n(n+1)}{2}$ para todo $n\ge1$.
1.  **En primer lugar, probamos que la fórmula es cierta para $n=1$.**
      * $n=1$: Tenemos $1=\frac{1(1+1)}{2}$, luego la fórmula se verifica para $n=1$ (nos estamos asegurando de que la primera ficha del dominó va a caer).
2.  **$n\to n+1$**
      * Ahora suponemos que es cierta para $n$, es decir, que se cumple
        $$1+2+\cdots+n=\frac{n(n+1)}{2} \to \text{Hipótesis de inducción}$$
      * y tenemos que probar que se verifica para $n+1$, es decir, que se cumple
        $$1+2+\cdots+n+(n+1)=\frac{(n+1)((n+1)+1)}{2}$$
        (nos aseguramos de que, si una ficha de dominó cae, caerá la siguiente).
      * Por hipótesis de inducción tenemos
        $$1+2+\cdots+n+(n+1)=\frac{n(n+1)}{2}+(n+1),$$
      * por tanto,
        $$1+2+\cdots+n+(n+1)=\frac{n(n+1)+2(n+1)}{2}=\frac{(n+1)(n+2)}{2}$$
      * y la fórmula queda probada.
