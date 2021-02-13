export const findArticle = (news=[] , articleId) =>
news.find(article => article.id === articleId)