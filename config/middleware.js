module.exports = {
  settings: {
    logger: {
      level: "error",
    },
    public: {
      path: "/data/public",
    },
    cors: {
      enabled: true,
      origin: ["http://localhost:3000", "http://localhost:1337"],
    },
  },
};
