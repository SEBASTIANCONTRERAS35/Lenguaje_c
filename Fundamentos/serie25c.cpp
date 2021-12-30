#include<stdio.h>
#include<math.h>
int main (){

int x,c,d;
d=5;
c=100;
for (x=1; x<=10;x++)
{


	printf("\n%d  \n\n%d  \n\n%d \n", x,d,c);
	d+=5;
	c-=10;
}
return 0 ;
}
