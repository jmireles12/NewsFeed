export const FindArticle = (news=[] , articleId) =>
news.find(article => article.id === articleId)