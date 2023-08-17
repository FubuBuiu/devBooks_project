import { useEffect, useState } from "react";
import { Navigate, useLocation, useSearchParams } from "react-router-dom";
import { googleBooksApi } from "../../services/googleBooksApi";
import { Thumbnail } from "../../components/Thumbnail";
import { Container, Subtitle, Title } from "./Books.styles";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    description: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
}

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
    (async () => {
      setLoading(true);
      await googleBooksApi
        .get(`/volumes?q=${query}&maxResults=40`)
        .then((response) => setBooks(response.data));
      setLoading(false);
    })();
  }, [query]);

  if (!query) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return (
    <Container>
      {loading ? (
        <h1>CARREGANDO...</h1>
      ) : (
        <>
          {books && (
            <>
              <h1>Resultado da sua busca</h1>
              <ul>
                {books.items.map((book) => (
                  <li key={book.id}>
                    <Thumbnail
                      thumbnail={book.volumeInfo.imageLinks?.thumbnail}
                      title={book.volumeInfo.title}
                      bachgroundColor="#d9d9d9"
                    />

                    <Title>{book.volumeInfo.title}</Title>
                    <Subtitle>{book.volumeInfo.subtitle}</Subtitle>
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </Container>
  );
}
