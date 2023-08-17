import { Container } from "./SearchBox.styles";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";
import { InputHTMLAttributes } from "react";

type SearchBoxProps = InputHTMLAttributes<HTMLInputElement>;

export function SearchBox(props: SearchBoxProps) {
  return (
    <>
      <Container>
        <SearchIcon />
        <input placeholder="Qual livro você quer buscar?" {...props} />
      </Container>
    </>
  );
}
