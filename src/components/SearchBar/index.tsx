import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import type { Product } from "../../@types";
import { SearchBarWrapper, SearchInput, SuggestionsList, SuggestionItem } from "./styles";

export const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const { products, loading } = useProducts();
    const [filtered, setFiltered] = useState<Product[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (query.length > 0 && products.length > 0) {
            const q = query.toLowerCase();
            setFiltered(
                products.filter(
                    (p: Product) =>
                        p.title.toLowerCase().includes(q) ||
                        p.category.toLowerCase().includes(q)
                )
            );
        } else {
            setFiltered([]);
        }
    }, [query, products]);

    const handleSelect = (id: number) => {
        setShowSuggestions(false);
        setQuery("");
        navigate(`/produto/${id}`);
    };

    const getCategoryLabel = (category: string) => {
        if (category === "men's clothing" || category === "women's clothing") return "Vestuário";
        if (category === "electronics") return "Eletrônicos";
        if (category === "jewelery") return "Joalheria";
        return category;
    };

    return (
        <SearchBarWrapper onBlur={() => setShowSuggestions(false)} onFocus={() => setShowSuggestions(true)}>
            <SearchInput
                ref={inputRef}
                type="text"
                placeholder="Buscar produtos..."
                value={query}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                autoComplete="off"
            />
            {showSuggestions && query.length > 0 && (
                <SuggestionsList>
                    {loading ? (
                        <SuggestionItem>Carregando...</SuggestionItem>
                    ) : filtered.length === 0 ? (
                        <SuggestionItem>Nenhum produto encontrado</SuggestionItem>
                    ) : (
                        filtered.slice(0, 8).map((p: Product) => (
                            <SuggestionItem key={p.id} onMouseDown={() => handleSelect(p.id)}>
                                <span className="searchbar-title">{p.title}</span>
                                <span className="searchbar-category">{getCategoryLabel(p.category)}</span>
                            </SuggestionItem>
                        ))
                    )}
                </SuggestionsList>
            )}
        </SearchBarWrapper>
    );
};
