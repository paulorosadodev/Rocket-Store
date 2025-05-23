
export function formatPrice(value: number, useSymbol: boolean = true): string {
    
    const formattedPrice = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    
    return useSymbol ? formattedPrice : formattedPrice.replace("R$", "").trim();

}
