export default function Cart(){
    let counter =0;


    // Though all the codes are correct, the counter will not work.
    // Because this code is for Normal Js, not for React. React uses a Special function named useState()
    //see Counter.tsx
    const handleAddToCart =()=>{
        counter=counter+1;
    }


    return (
        <div>
            <h2>Shopping Cart</h2>
            <p>Items in the cart: {counter}</p>
            <button onClick={handleAddToCart}> Add Item</button>
        </div>
    )




}
