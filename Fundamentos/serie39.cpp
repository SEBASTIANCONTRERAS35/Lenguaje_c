#include <stdio.h>

int main()
{
    int i,numeracion[80];
    for ( i = 0; i <= 79; i++)
    {
        numeracion[i]=(i*2)+1;
    }
    i=0;
    for ( i = 0; i <= 79; i++)
    {
       printf("Indice del arreglo: %i\t\tValor del arreglo: %i\n",i,numeracion[i]);
       
    }

    return 0;
}
