#include <stdio.h>
#include <math.h>
int main ()
{
	float lados,perimetro;
	printf("\Dame el valor de los lados");
	scanf("%f", &lados);
	perimetro=lados*4;
	printf( "\nEl perimetro es : %f\n", perimetro );
}
