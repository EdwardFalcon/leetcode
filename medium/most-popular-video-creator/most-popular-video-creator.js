/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
var mostPopularCreator = function (creators, ids, views) {
  const authors = {};
  let maxViews = 0;
  for (let i = 0; i < creators.length; i++) {
    const name = creators[i];
    if (!authors[name]) {
      authors[name] = {
        name,
        videos: [],
        views: [],
        total: 0,
        max: 0,
      };
    }
    authors[name].videos.push(ids[i]);
    authors[name].views.push(views[i]);
    authors[name].total += views[i];
    authors[name].max = Math.max(authors[name].max, views[i]);
    maxViews = Math.max(maxViews, authors[name].total);
  }
  const answer = [];
  for (let name in authors) {
    if (authors[name].total === maxViews) {
      const author = authors[name];
      const videos = author.videos.filter(
        (v, i) => author.views[i] === author.max
      );
      videos.sort();
      answer.push([name, videos[0]]);
    }
  }
  return answer;
};
