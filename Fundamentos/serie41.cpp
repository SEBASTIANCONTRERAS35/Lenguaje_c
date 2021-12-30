#include <stdio.h>

int main()
{
    int i,n;
    float datos[10];
    for ( i = 0; i <= 9; i++)
    {
        n=i+1;
        printf("Ingrese el %i dato real\n",n);
        scanf("%f",&datos[i]);
    }

    for ( i = 0; i <= 9; i++)
    {
        n=i+1;
        printf("Dato %i = %.2f\n",n,datos[i]);
    }

    return 0;
}
