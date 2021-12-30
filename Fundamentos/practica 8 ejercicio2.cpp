#include<stdio.h>

int main(void){
  int numero, suma = 0, total = 0, i;

  printf("Ingresa 10 numeros:\n");
  for(i = 1; i <= 10; i++){
    printf("%d: ", i);
    scanf("%d",&numero);
    suma = suma + numero;
  }
  total = suma / 10;
  printf("El promedio es %d", total);

return 0;
}

