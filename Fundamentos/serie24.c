#include<stdio.h>
#include<math.h>
int main (){

int x,c,d;
for (x=1; x<=50;x++)
{

	d=pow(x,2);
	c=pow(x,3);
	printf("\n%d numero original \n\n%d es el cuadrado \n\n%d es el cubo\n", x,d,c);
}
return 0 ;
}
