import { Container } from "./Thumbnail.style";
import { ReactComponent as ImageOff } from "../../icons/image_off_icon.svg";

interface ThumbnailProps {
  thumbnail?: string;
  title: string;
  size?: "small" | "large";
  bachgroundColor: string;
}

export function Thumbnail(props: ThumbnailProps) {
  return (
    <Container
      backgroundcolor={props.bachgroundColor}
      size={props.size ? props.size : "small"}
    >
      {props.thumbnail ? (
        <img src={props.thumbnail} alt={props.title} />
      ) : (
        <ImageOff />
      )}
    </Container>
  );
}
