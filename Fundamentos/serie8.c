include <stdio.h>
int main()
{
 float dividendo, divisor;
 printf( "\nIntroduzca dividendo (entero):\t" );
 scanf( "%d", &dividendo )
 printf( "\nIntroduzca divisor (entero): \" );
 scanf( "%d", divisor );
 printf( "\n%d div %d = %d ( Resto = %d )\n", dividendo, divisor,   dividendo / divisor, dividendo % divisor );
 return 0;
}

