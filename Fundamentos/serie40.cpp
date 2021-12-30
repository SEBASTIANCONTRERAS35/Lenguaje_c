#define p printf
#include<stdio.h>
int main()
{
	int s,i,multiplos[30],aux;
	aux=3;
	s=0;
    for (i=0;i<=29;i++)
    {
    	multiplos[i]=aux;
    	aux+=3;
    	s+=multiplos[i];
	}
	for(i=0;i<=29;i++)
	{
		p("\nindice:%d\tContenido:%d",i, multiplos[i]);
	p("\nLa suma es: %d",s);
}
	return 0;
}
