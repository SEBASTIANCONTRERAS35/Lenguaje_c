#include<stdio.h>
int main()
{
		float a,b;
	printf("\nIngrese las variable a y b:\n");
	scanf("%f %f",&a,&b);
	if(b<a)
	{
		
		printf( "/n\t% 2f es mayor que %.2f", a, b  );
	}
	else{
			printf( "/n \t% 2f es mayor que %.2f", b, a  );
	}

	return 0;
}

