## SESIÓN 9: OPTIMIZACIÓN CON RESTRICCIONES Y CÁLCULO DE PRIMITIVAS
### Objetivos
1.  Calcular óptimos de funciones con restricciones.
2.  Introducir el concepto de primitiva o integral indefinida de una función.
3.  Aprender a calcular integrales indefinidas.
-----
### Contenidos
#### 1\. Optimización restringida (Página 1)
Muy a menudo, lo interesante es optimizar la función pero considerándola en un conjunto más reducido que su dominio. Es decir, optimizar la función $f:A\subseteq \mathbb{R}^{n}\to\mathbb{R}$ sujeta a que la variable pertenezca a un conjunto $X\subseteq A$, que se suele llamar **conjunto factible**.
Si el conjunto factible viene dado por una condición sobre las variables donde aparecen sólo desigualdades estrictas, no hay apenas diferencia con la optimización sin restricciones. se hace igual pero sólo consideramos los puntos críticos que estén en el conjuto factible.
<a name="ej-1-1"></a>
**Ejemplo 1.1** Optimizar la función $f(x,y)=2x^{3}-3xy+(x+y)^{2}$ en el conjunto $X={(x,y)\in\mathbb{R}^{2}:x+y>-\frac{1}{3}}$.
La otra posibilidad es que aparezcan restricciones de igualdad. En ese caso, intentaremos resolver las ecuaciones de restricción y sustituimos las soluciones en la función a optimizar.
#### 2\. Primitiva e integral indefinida de una función (Página 2)
<a name="def-2-1"></a>
**Definición 2.1** Dadas dos funciones $f,F:A\subseteq\mathbb{R}\to\mathbb{R}$, decimos que $F$ es una **primitiva de $f$** si es derivable en $A$ y se verifica $F'(x)=f(x)$ para todo $x\in A$.
<a name="def-2-2"></a>
**Definición 2.2** Se llama **integral indefinida** de la función $f:A\subseteq\mathbb{R}\to\mathbb{R}$ al conjunto de todas sus primitivas y se denota por
$$\int f(x)dx=F(x)+c$$
para todo $c\in\mathbb{R}$, donde $F$ verifica $F'(x)=f(x)$ para todo $x\in A$.
#### 3\. Propiedades de las integrales indefinidas
Para las integrales indefinidas se verifican las siguientes propiedades de linealidad:
1.  $$\int kf(x)dx=k\int f(x)dx$$
    para todo $k\in\mathbb{R}$.
2.  $$\int(f(x)+g(x))dx=\int f(x)dx+\int g(x)dx.$$
**Integrales inmediatas**
Veamos a continuación los diferentes tipos de integrales inmediatas que debemos conocer.
1.  **Tipo potencial:**
    $$\int x^{r}dx=\frac{x^{r+1}}{r+1}+c \text{ para todo } r\in\mathbb{R}\setminus{-1}, \quad \int(f(x))^{r}\cdot f^{\prime}(x)dx=\frac{(f(x))^{r+1}}{r+1}+c \text{ para todo } r\in\mathbb{R}\setminus{-1}.$$
2.  **Tipo logaritmo:**
    $$\int\frac{1}{x}dx=\ln|x|+c, \quad \int\frac{f^{\prime}(x)}{f(x)}dx=\ln|f(x)|+c.$$
*(Página 3)*
3.  **Tipo exponencial:**
    $$\int e^{x}dx=e^{x}+c, \quad \int e^{f(x)}f^{\prime}(x)dx=e^{f(x)}+c,$$
    $$\int a^{x}dx=\frac{a^{x}}{\ln(a)}+c \text{ para todo } a>0, \quad \int a^{f(x)}f^{\prime}(x)dx=\frac{a^{f(x)}}{\ln(a)}+c \text{ para todo } a>0.$$
4.  **Tipo trigonométrico directo:**
    $$\int \sin(x)dx=-\cos(x)+c, \quad \int \sin(f(x))f^{\prime}(x)dx=-\cos(f(x))+c,$$
    $$\int \cos(x)dx=\sin(x)+c, \quad \int \cos(f(x))f^{\prime}(x)dx=\sin(f(x))+c,$$
    $$\int\frac{1}{\cos^{2}(x)}dx=\tan(x)+c, \quad \int\frac{f^{\prime}(x)}{\cos^{2}(f(x))}dx=\tan(f(x))+c,$$
    $$\int\frac{1}{\sin^{2}(x)}dx=-\cot(x)+c \left(\cot(x)=\frac{1}{\tan(x)}\right); \quad \int\frac{f^{\prime}(x)}{\sin^{2}(f(x))}dx=-\cot(f(x))+c.$$
*(Página 4)*
5.  **Tipo trigonométrico inverso:**
    $$\int\frac{1}{\sqrt{1-x^{2}}}dx=\arcsin(x)+c, \quad \int\frac{f^{\prime}(x)}{\sqrt{1-(f(x))^{2}}}dx=\arcsin(f(x))+c,$$
    $$\int\frac{1}{1+x^{2}}dx=\arctan(x)+c, \quad \int\frac{f^{\prime}(x)}{1+(f(x))^{2}}dx=\arctan(f(x))+c.$$
#### 5\. Métodos de integración
En muchas ocasiones no podemos integrar de forma directa, entonces intentamos aplicar el siguiente método de integración.
<a name="prop-5-1"></a>
##### 5.1. Método de integración por partes
Dadas dos funciones $u=u(x)$ y $v=v(x)$ derivables, sabemos que la derivada de su producto es $d(u\cdot v)=du\cdot v+u\cdot dv$. Si integramos obtenemos $\int d(u\cdot v)= \int du\cdot v+\int u\cdot dv$ o, lo que es lo mismo,
$$\int u\cdot dv=u\cdot v-\int v\cdot du.$$
