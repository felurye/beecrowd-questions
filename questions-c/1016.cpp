#include <iostream>
#define x 1000
#define y 1500

using namespace std;

int main(){

	int km, distanciaX = 0, distanciaY = 0, min = 0;
    	cin >> km;
    km *= 1000;

    while(distanciaY-distanciaX < km){
    	distanciaX += x;
    	distanciaY += y;
    	min++;
    }
    
    cout << min << " minutos\n";

    return 0;
}
