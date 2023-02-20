import Helmet from "react-helmet";

interface HeadProps {
  title: string;
}

function Head({ title }: HeadProps) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default Head;
