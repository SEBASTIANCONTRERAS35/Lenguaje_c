#include <stdio.h>
#include <math.h>
#define p printf
#define s scanf
int main()
{
	int i,x[20];
	for (i=0;i<=19;i++)
	{
		p("\nIngrese el elemento %d del arreglo:", i+1);
		s("%d",&x[i]);
	
	
	}
	p("\n Los elementos del arreglo multiplos de 7 son:");
	for(i=0;i<=19;i++)
	{
		if(x[i]%7==0)
		p("\n%d",x[i]);
		
	}
	return 0;
}
