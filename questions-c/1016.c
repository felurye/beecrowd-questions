#include <stdio.h>
int main(){
	int km, distanciax=0, distanciay=0, min=0;
	int x=1000, y=1500;
	
	scanf("%d", &km);
	km *= 1000;
	
	while (distanciay-distanciax < km){
    	distanciax += x;
    	distanciay += y;
    	min++;
	}
	
	printf("%d minutos\n", min);
	
	return 0;
}
