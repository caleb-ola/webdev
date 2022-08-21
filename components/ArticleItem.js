import articleStyles from "../styles/Article.module.css";
import Link from "next/dist/client/link";

const ArticleItem = ({ article }) => {
  return (
    <Link href="/articles/[id" as={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title}</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
