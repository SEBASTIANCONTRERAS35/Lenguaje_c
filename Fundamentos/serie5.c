#include <stdio.h>
#include <math.h>
int main()
{
float altura, area, base;
printf( "\nIntroduzca base:\t" );
scanf( "%f",&base );
printf( "\nIntroduzca altura:\t" );
scanf( "%f", &altura );
area= base * altura / 2.0;
printf( "\nEl area del triangulo es: %f\n", area );
return 0;
}

