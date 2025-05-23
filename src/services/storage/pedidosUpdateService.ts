
const pedidosCounter = { value: 0 };

export function triggerPedidosUpdate() {
    pedidosCounter.value++;
}

export function getPedidosUpdateCounter() {
    return pedidosCounter.value;
}
