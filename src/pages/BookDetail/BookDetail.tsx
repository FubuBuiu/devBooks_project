import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { googleBooksApi } from "../../services/googleBooksApi";
import {
  BackButton,
  Container,
  Content,
  Description,
  Subtitle,
  Title,
} from "./BookDetail.styles";
import { Thumbnail } from "../../components/Thumbnail";
import { ReactComponent as ArrowLeftIcon } from "../../icons/arrow_left.svg";

export interface Book {
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

export function BookDetail() {
  const [book, setBook] = useState<Book | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const { bookId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (bookId !== "" && bookId !== undefined && bookId !== null) {
      (async () => {
        try {
          setLoading(true);
          const response = await googleBooksApi.get(`volumes/${bookId}`);
          setBook(response.data);
        } catch (error) {
          // TODO PENSAR EM ALGUM TRATAMENTO DE ERRO
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [bookId]);

  function goBack() {
    navigate(-1);
  }

  // TODO RESOLVER O PROBLEMA DO TITLE

  return (
    <>
      {loading ? (
        <h1>CARREGANDO...</h1>
      ) : (
        <Container>
          <>
            <BackButton onClick={goBack}>
              <ArrowLeftIcon />
            </BackButton>
            <Thumbnail
              thumbnail={book?.volumeInfo.imageLinks?.thumbnail}
              title={book?.volumeInfo.title}
              size="large"
              bachgroundColor="#ef552b"
            />
            <Content>
              <Title>{book?.volumeInfo.title}</Title>
              <Subtitle>{book?.volumeInfo.subtitle}</Subtitle>
              <Description>{book?.volumeInfo.description}</Description>
            </Content>
          </>
        </Container>
      )}
    </>
  );
}
