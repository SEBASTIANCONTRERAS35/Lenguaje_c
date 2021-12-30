#include<stdio.h>
int main()
{
	float a,b,c;
	printf("\nIngrese las variable a y b:\n");
	scanf("%f %f",&a,&b);
	if(b!=0)
	{
		c=a/b;
		printf("%f/%f=%f" , a, b,c );
	}
	else{
			printf("\nerror");
				printf("\nEl valor de b es 0\n");
	}

	return 0;
}
