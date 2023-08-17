import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, SearchButton, SearchContainer } from "./Search.styles";
import { SearchBox } from "../../components/SearchBox";

export function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function searchBook() {
    if (search !== undefined && search !== "" && search !== null) {
      // Ir para página de resultados
      navigate(`/books?q=${search}`);
    }
  }

  return (
    <Container>
      <h1>Busque seus livros</h1>
      <SearchContainer>
        <SearchBox
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchBook();
            }
          }}
        />
        <SearchButton onClick={searchBook}>Buscar</SearchButton>
      </SearchContainer>
    </Container>
  );
}
