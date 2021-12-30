//serie12.c
#include <stdio.h>
#include <math.h>
PI=3.1416;
int main()
{
float radio,  vol;
printf("\nRadio=\t");
scanf("%f", &radio);
vol=4.0/3.0*PI*pow(radio,2);
printf("\nEl volumen es %f\n", vol);
return 0;
}

