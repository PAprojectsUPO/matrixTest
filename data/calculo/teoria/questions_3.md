# Solucionario Test de Cálculo (Test_Tareas_C)
## 1. Límites de Sucesiones
**Pregunta:** Dada $\{x_{n}\}$ tal que $\lim_{n\rightarrow\infty}x_{n}=2$, la sucesión $\frac{\ln(x_{n}-1)}{|x_{n}-2|}$...
* **(a)** converge a 0.
* **(b)** converge a 1. ✅
* **(c)** converge a 2.
**Justificación:** Ver [Definición 3.1 - Infinitésimos equivalentes](EB2.md#def-3-1)
Usando $\ln(1+u) \sim u$ cuando $u \to 0$: $\frac{x_n - 2}{|x_n - 2|} = 1$ (aproximación por derecha).
---
## 2. Series Alternadas (Leibniz)
**Pregunta:** Si $\lim a_{k}=0$ y la serie alternada **diverge**, entonces:
* **(a)** $\{a_{k}\}$ es monótona decreciente.
* **(b)** $\{a_{k}\}$ no es monótona decreciente. ✅
* **(c)** $\{a_{k}\}$ puede ser creciente.
**Justificación:** Ver [Teorema 3.2 - Criterio de Leibniz](EB3.md#teo-3-2)
El criterio requiere dos condiciones: límite 0 y monotonía decreciente. Si falla la convergencia, falla la monotonía.
---
## 3. Definición de Límite Infinito
**Pregunta:** Si $\lim_{x\rightarrow a}f(x)=\infty$ entonces:
* **(a)** $\forall\epsilon>0\exists\delta>0$... (Definición de límite finito).
* **(b)** $\forall M>0\exists\delta>0$ tal que, si $0 < ||x-a||<\delta$ entonces $||f(x)||>M$. ✅
* **(c)** $\forall M>0\exists K>0$... (Límite en el infinito).
**Justificación:** Ver [Definición 3.1 - Límite infinito](EB4.md#def-3-1)
---
## 4. Álgebra de Funciones Continuas
**Pregunta:** Dadas $f,g$ continuas en $A$:
* **(a)** $f\cdot g$ es continua en A. ✅
* **(b)** $\frac{f}{g}$ es continua en A.
* **(c)** $\sqrt{f\cdot g}$ es continua en A.
**Justificación:** Ver [Proposición 2.1 - Álgebra de funciones continuas](EB6.md#prop-2-1)
El producto siempre es continuo; cociente y raíz tienen restricciones de dominio.
---
## 5. Teorema de Bolzano
**Pregunta:** Si $f(a)\cdot f(b)>0$ y $f$ continua:
* **(a)** Existe único $c$ con $f(c)=0$.
* **(b)** Existe al menos un $c$ con $f(c)=0$.
* **(c)** Puede que no exista ningún $c$ con $f(c)=0$. ✅
**Justificación:** Ver [Proposición 2.4 - Teorema de Bolzano](EB6.md#prop-2-4)
Bolzano requiere cambio de signo ($f(a) \cdot f(b) < 0$). Aquí tienen el mismo signo.
---
## 6. Diferenciabilidad de Composición
**Pregunta:** Con $f(x,y,z)=(e^{\frac{xy}{z}}, \ln(\frac{xy}{z}))$ y $g(u,v)=(u, -(u^{2}+v^{2}), u)$:
* **(a)** $f\circ g$ es diferenciable si $u \neq 0$.
* **(b)** $f\circ g$ es diferenciable si $v \neq 0$.
* **(c)** $f\circ g$ no es diferenciable. ✅
**Justificación:** Ver [Definición 2.2 - Diferenciabilidad](EB7.md#def-2-2)
El argumento del logaritmo es $-(u^2+v^2) \le 0$ siempre. No existe en los reales.
---
## 7. Matriz Hessiana Semidefinida
**Pregunta:** Si $Hf(x_{0})$ tiene autovalores $\{0, 1, 2\}$, entonces $x_0$:
* **(a)** puede ser máximo local estricto.
* **(b)** es máximo local estricto.
* **(c)** puede ser mínimo local estricto. ✅
**Justificación:** Ver [Definición 3.1 - Máximo local](EB8.md#def-3-1)
Autovalores no negativos $\implies$ semidefinida positiva $\implies$ posible mínimo.
---
## 8. Integración por Sustitución
**Pregunta:** Con cambio $2x=3\sin(t)$ en $\int\sqrt{9-4x^{2}}dx$:
* **(a)** $\int \cos^{2}(t)dt$.
* **(b)** $\frac{3}{2}\int \cos^{2}(t)dt$.
* **(c)** $\frac{9}{2}\int \cos^{2}(t)dt$. ✅
**Justificación:** Ver [Proposición 1.4 - Sustitución trigonométrica](EB10.md#prop-1-4)
$dx = \frac{3}{2}\cos(t)dt$, $\sqrt{9-4x^2} = 3\cos(t)$. Resultado: $\frac{9}{2}\int\cos^2(t)dt$.
---
## 9. Integración por Partes
**Pregunta:** Para $\int(x^{2}+2)e^{x}dx$:
* **(a)** $(x^{2}+2)e^{x}-\int x~e^{x}dx$.
* **(b)** $(x^{2}+2)e^{x}-2\int x~e^{x}dx$. ✅
* **(c)** $(x^{2}+2)e^{x}+2\int x~e^{x}dx$.
**Justificación:** Ver [Proposición 5.1 - Integración por partes](EB9.md#prop-5-1)
$u = x^2+2$, $dv = e^x dx$ $\implies$ resultado con factor $-2$.
---
## 10. Ecuaciones Diferenciales
**Pregunta:** Solución de $xy'-y=x$:
* **(a)** $y(x)=x+\ln(x)$
* **(b)** $y(x)=x \ln(x)$ ✅
* **(c)** $y(x)=x^{2}\ln(x)$
**Justificación:** Ver [Definición 2.2 - Solución de EDO](EB14.md#def-2-2)
$y = x\ln(x) \implies y' = \ln(x)+1$. Sustituyendo: $x(\ln(x)+1) - x\ln(x) = x$. ✓
El resultado es $x$, que coincide con el lado derecho de la ecuación. ¡Es la solución correcta!