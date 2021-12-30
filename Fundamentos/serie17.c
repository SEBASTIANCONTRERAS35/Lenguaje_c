#include<stdio.h>
int main()
{
	int menu;
	float a,b,c;
	printf("\nSeleccione una accion:\n");
		printf("\n-1-Ejercicio15\n");
			printf("\n-2-Ejercicio16\n");
			scanf("%d",&menu);
			switch(menu){
	case 1:
				
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

}
					break
					case 2:
							
	printf("\nIngrese las variable a y b:\n");
	scanf("%f %f",&a,&b);
	if(b<a)
	{
		
		printf( "/n\t% 2f es mayor que %.2f", a, b  );
	}
	else{
			printf( "/n \t% 2f es mayor que %.2f", b, a  );
	}


}

						
						break;
						default:
							printf("\n No valida \n")
							break;
							
			}
			return 0;
	

}
