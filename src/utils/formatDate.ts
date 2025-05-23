
export function formatDate(dateStr: string): string {

    const d = new Date(dateStr);

    return d.toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" });

}
