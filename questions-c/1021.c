#include <stdio.h>
int main(){

    double valor, troco;
    double cem, cinquenta, vinte, dez, cinco, dois, um, m50, m25, m10, m5, m1;

    scanf("%lf",&valor);

    troco = valor;

    cem = troco / 100;
    troco = troco - (cem *100);

    cinquenta = troco / 50;
    troco = troco - (cinquenta * 50);

    vinte = troco / 20;
    troco = troco - (vinte * 20);

    dez = troco /10;
    troco = troco -(dez * 10);

    cinco = troco / 5;
    troco = troco - (cinco * 5);

    dois = troco / 2;
    troco = troco - (dois * 2);
	
	um = troco / 1;
    troco = troco - (um * 1);
    
    m50 = troco / 0.50;
    troco = troco - (m50 * 0.50);
    
    m25 = troco / 0.25;
    troco = troco - (m25 * 0.25);
    
    m10 = troco / 0.10;
    troco = troco - (m10 * 0.10);
    
    m5 = troco / 0.5;
    troco = troco - (m5 * 0.25);
    
    
    printf("NOTAS:\n");
    printf("%lf nota(s) de R$ 100.00\n", cem);
    printf("%lf nota(s) de R$ 50.00\n", cinquenta);
    printf("%lf nota(s) de R$ 20.00\n", vinte);
    printf("%lf nota(s) de R$ 10.00\n", dez);
    printf("%lf nota(s) de R$ 5.00\n", cinco);
    printf("%lf nota(s) de R$ 2.00\n", dois);
    printf("MOEDAS:\n");
    printf("%lf moeda(s) de R$ 1.00\n", troco);

   return(0);
}
