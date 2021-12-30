#include<stdio.h>
#define p printf
int main()
{
	int i,par[50],aux;
	aux=2;
	for(i=0; i<=99; i++)//Asignacion del arreglo 
	{
		par[i]=aux;
		aux+=2;
		
	}
	for(i=0; i<=49; i++)//Impresión del arreglo
	{
		p("\nIndice:%d\tContenido:%d", i, par[i]);

	}
	p("\n%d", par[15]);
	return 0;
}
