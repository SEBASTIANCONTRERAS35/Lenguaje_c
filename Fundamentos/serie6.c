#include <stdio.h>
int main()
{
float altura, base;
printf( "\nIntroduzca base:\t" );
scanf( "%f", &base );
printf( "\n Introduzca altura:\t" );
scanf( "%f", &altura );
printf( "\nEl area del triangulo es: %f\n", (base * altura )/ 2.0 );
return 0;
}

