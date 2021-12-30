#include <stdio.h>
#include <math.h>
int main ()
{
	float lados,area;
	printf("\Dame el valor de los lados");
	scanf("%f", &lados);
	area=pow(lados,2);
	printf( "\nEl area es : %f\n", area );
}

