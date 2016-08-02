class Article {
  constructor(main) {
    this.main = main
    store.articles.push(this)
  }
}
