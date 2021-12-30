#include <stdio.h>
#include <math.h>
int main()
{
	float pi, volumen, radio, longitud, area;
	pi=3.1416;
		printf("\Dame el valor del radio y longitud: ");
		scanf("%f", &radio );
			scanf("%f", &longitud );
	area=pow((pi*radio),2);
	volumen= area*longitud;
	printf( "\nEl volumen  es : %f\n", volumen );
}

