import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useSearchParams } from "react-router-dom";
import { googleBooksApi } from "../../services/googleBooksApi";
import { Thumbnail } from "../../components/Thumbnail";
import { Container, LoadingContainer, Subtitle, Title } from "./Books.styles";
import { Book } from "../BookDetail";
import Lottie from "lottie-react";
import searchingBookAnimation from "../../animations/searching_book_animation.json";

interface BookList {
  totalItems: number;
  items: Book[];
}

export function Books() {
  const location = useLocation();
  const [books, setBooks] = useState<BookList | undefined>(undefined);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // TODO Melhorar essa lógica
    if (query !== "" && query !== undefined && query !== null) {
      (async () => {
        try {
          setLoading(true);
          const response = await googleBooksApi.get(
            `/volumes?q=${query}&maxResults=40`
          );
          setBooks(response.data);
        } catch (error) {
          // TODO PENSAR EM ALGUM TRATAMENTO DE ERRO
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [query]);

  if (!query) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return (
    // TODO Ver se precisa simplificar a lógica
    <>
      {loading ? (
        <LoadingContainer>
          <Lottie
            animationData={searchingBookAnimation}
            loop={true}
            style={{
              width: "25%",
            }}
          />
        </LoadingContainer>
      ) : (
        <Container>
          {books && (
            <>
              <h1>Resultado da sua busca</h1>
              <ul>
                {books.items.map((book) => (
                  <li key={book.id}>
                    <Link to={`/books/${book.id}`}>
                      <Thumbnail
                        thumbnail={book.volumeInfo.imageLinks?.thumbnail}
                        title={book.volumeInfo.title}
                        bachgroundColor="#d9d9d9"
                      />

                      <Title>{book.volumeInfo.title}</Title>
                      <Subtitle>{book.volumeInfo.subtitle}</Subtitle>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </Container>
      )}
    </>
  );
}
