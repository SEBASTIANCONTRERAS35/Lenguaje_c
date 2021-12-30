#include <stdio.h>
#define p printf
int main ()
{
    int x,arr[100];
    for(x=0;x<=99;x++)
    {
        arr[x]=100-x;
    }
     for(x=0;x<=99;x++)
    {
     p("\nIndice:%d del arreglo, Contenido del arreglo:%d",x,x[arr]);
    }
    
    
    
    
 return 0;
}
