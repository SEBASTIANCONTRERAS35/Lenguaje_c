#include <stdio.h>
int main()
{
int dividendo, divisor, cociente, resto;
printf( "\nIntroduzca dividendo (entero):\t" );
scanf( "%d", &dividendo );
printf( "\nIntroduzca divisor (entero):\t" );
scanf( "%d", &divisor );
cociente = dividendo / divisor;
resto = dividendo % divisor;
printf( "\n%d div %d = %d ( Resto = %d )\n", dividendo, divisor, cociente, resto );
return 0;
}

