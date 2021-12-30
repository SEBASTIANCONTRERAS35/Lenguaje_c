#include <stdio.h>
#include <math.h>
int main()
{
	float volumen, base, altura, longitud;
		printf("\Dame el valor de la base, altura y longitud: ");
	scanf("%f", &base );
		scanf("%f", &altura );
			scanf("%f", &longitud );
	volumen=(base*altura)*longitud;
	printf( "\nEl volumen  es : %f\n", volumen );
}

