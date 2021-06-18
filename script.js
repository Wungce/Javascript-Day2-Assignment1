//Object create 
const Inventary_Data = {

    mask:900,
    sanitizer:500,
    paracetamol:900
}

//Object create 

const Price_List = {

    mask:20,
    sanitizer:100,
    paracetamol:50
}


//Properties call of object  methode two



const Mask_Price = Price_List.mask;

const sanitizer_Price = Price_List.sanitizer;

const Paracetamol_Price = Price_List.paracetamol;


const Total_price = Mask_Price + sanitizer_Price + Paracetamol_Price;

//Total price display.
console.log(Total_price);
