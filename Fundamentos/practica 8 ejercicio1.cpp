#include<stdio.h>
#include<math.h>

int main(){
int i;
float a;    
     for(i=1;i<=50;i++){
         if (i%2==0){
             a=sin(i);
             printf("\nsen(%d)= %f\n",i,a);
         }else
         if(i%2!=0){
             a=cos(i);
             printf("\ncos(%d)=%f\n",i,a);
         }
     }
return 0;
}
