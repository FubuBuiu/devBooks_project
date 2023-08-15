import { Container } from "./SearchBox.styles";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";
import { InputHTMLAttributes } from "react";

type SearchBox = InputHTMLAttributes<HTMLInputElement>;

export function SearchBox(props: SearchBox) {
  return (
    <>
      <Container>
        <SearchIcon />
        <input placeholder="Qual livro você quer buscar?" {...props} />
      </Container>
    </>
  );
}
