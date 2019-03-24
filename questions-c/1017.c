#include <stdio.h>

int main(){

	double h, vel, km, consumo=12, litros;
    
	scanf("%lf", &h);
    scanf("%lf", &vel);

    km = vel * h;
    litros= km/consumo;
    

    printf("%.3lf\n", litros);

    return 0;
}
