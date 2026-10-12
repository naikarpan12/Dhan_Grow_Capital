import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "@phosphor-icons/react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import { getArticle } from "@/lib/articles";
import { BRAND } from "@/lib/site";

const DEFAULT_DISCLAIMER =
  "Mutual fund investments are subject to market risks. This article is for general educational purposes only and does not constitute investment advice or a recommendation to buy, sell or hold any security or scheme. Past performance is not indicative of future returns. Please read all scheme-related documents carefully and consult a qualified advisor before making investment decisions.";

function ArticleBlock({ block }) {
  if (block.type === "h3") {
    return (
      <h3 className="font-display text-2xl md:text-3xl leading-tight tracking-tight mt-12 mb-4">
        {block.text}
      </h3>
    );
  }
  if (block.type === "quote") {
    return (
      <blockquote className="font-display italic text-2xl md:text-3xl leading-snug border-l-2 border-terracotta pl-6 my-10 text-black/80">
        {block.text}
      </blockquote>
    );
  }
  if (block.type === "ul") {
    return (
      <ul className="mt-4 space-y-3 list-disc pl-5 font-body text-base md:text-lg leading-relaxed text-black/70">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return (
    <p className="mt-4 font-body text-base md:text-lg leading-relaxed text-black/70">
      {block.text}
    </p>
  );
}

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticle(slug);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | ${BRAND.name}`;
    }
  }, [article]);

  if (!article) {
    return <Navigate to="/#insights" replace />;
  }

  return (
    <div className="grain min-h-screen" data-testid="article-page">
      <Navbar />
      <main className="pt-32 pb-24 md:pb-40">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <Link
            to="/#insights"
            className="overline inline-flex items-center gap-2 text-black/50 hover:text-terracotta transition-colors duration-300"
            data-testid="article-back-link"
          >
            <ArrowLeft size={14} />
            Back to Insights
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <div className="flex items-center justify-between border-b border-ink pb-6">
              <span className="overline">{article.tag}</span>
              <span className="overline opacity-60">
                {article.date} · {article.read}
              </span>
            </div>
            <h1
              className="font-display text-4xl md:text-6xl leading-[1.05] tracking-[-0.02em] mt-8"
              data-testid="article-title"
            >
              {article.title}
            </h1>

            <article className="mt-10" data-testid="article-body">
              {article.body.map((block, i) => (
                <ArticleBlock key={i} block={block} />
              ))}
            </article>

            <p className="mt-16 pt-8 border-t border-ink font-mono-num text-[11px] leading-relaxed text-black/50">
              {(article.disclaimer || DEFAULT_DISCLAIMER).toUpperCase()}
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
