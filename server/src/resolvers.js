let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial",
  },
];

const resolvers = {
  Query: {
    info: () => "This is the API of a hackernews",
    feed: () => links,
  },
  Mutation: {
    post: (parent, args) => {
      let idCount = links.length;
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      };
      links.push(link);
      return link;
    },
  },
};

module.exports = resolvers;
