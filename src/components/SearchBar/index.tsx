import { useState, useRef, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import type { Product } from "../../@types";

import * as S from "./styles";

import { useProducts } from "../../hooks/useProducts";

import { getCategoryLabel } from "../../utils/categoryUtils";

export const SearchBar = () => {

    const { products, loading } = useProducts();

    const inputRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState<Product[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

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

    return (
        <S.SearchBarWrapper onBlur={() => setShowSuggestions(false)} onFocus={() => setShowSuggestions(true)}>
            <S.SearchInput ref={inputRef} type="text" placeholder="Buscar produtos..." value={query} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}onFocus={() => setShowSuggestions(true)} autoComplete="off"/>
            {showSuggestions && query.length > 0 && (
                <S.SuggestionsList>
                    {loading ? (
                        <S.SuggestionItem>Carregando...</S.SuggestionItem>
                    ) : filtered.length === 0 ? (
                        <S.SuggestionItem>Nenhum produto encontrado</S.SuggestionItem>
                    ) : (
                        filtered.slice(0, 8).map((p: Product) => (
                            <S.SuggestionItem key={p.id} onMouseDown={() => handleSelect(p.id)}>
                                <span className="searchbar-title">{p.title}</span>
                                <span className="searchbar-category">{getCategoryLabel(p.category)}</span>
                            </S.SuggestionItem>
                        ))
                    )}
                </S.SuggestionsList>
            )}
        </S.SearchBarWrapper>
    );

};
