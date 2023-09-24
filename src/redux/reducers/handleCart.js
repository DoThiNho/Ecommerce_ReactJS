const cart = []

const handleCart = (state = cart, action) => {
    switch (action.type) {
        case "ADDITEM":
            const productToAdd = action.payload;
            const existingProduct = state.find((x) => x.id === productToAdd.id);

            if (existingProduct) {
                return state.map((x) =>
                    x.id === productToAdd.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                return [...state, { ...productToAdd, qty: 1 }];
            }

        case "DELITEM":
            const productToDelete = action.payload;
            const existingProductToDelete = state.find(
                (x) => x.id === productToDelete.id
            );

            if (existingProductToDelete) {
                if (existingProductToDelete.qty === 1) {
                    return state.filter((x) => x.id !== productToDelete.id);
                } else {
                    return state.map((x) =>
                        x.id === productToDelete.id ? { ...x, qty: x.qty - 1 } : x
                    );
                }
            } else {
                return state;
            }

        default:
            return state;
    }
};

export default handleCart;
