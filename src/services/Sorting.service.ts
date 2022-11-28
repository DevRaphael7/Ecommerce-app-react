export class SortingService {

    public key: string;

    constructor(key: string) {
        this.key = key;
    }

    public sortingBubbleSort (array: any[], asc = false) {
        let i: number, j: number;
        let aux;

        for (i=1; i<array.length; i++) {
            for (j=0; j < array.length-i; j++) {
                if (array[j][this.key] > array[j+1][this.key] && asc){
                    aux=array[j];
                    array[j]= array[j+1];
                    array[j+1]=aux;
                } else if (array[j][this.key] < array[j+1][this.key] && !asc) {
                    aux=array[j];
                    array[j]= array[j+1];
                    array[j+1]=aux;
                }
            }
        }

        return array;
    }
}