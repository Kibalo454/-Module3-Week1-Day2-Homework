new Vue({
  el: "#container",
  components: {
    headcomp: { template: "<div class='logo'>Food Blog</div>" },
    blogtitle: { template: "<span>Latest Posts</span>" }
  },
  data: {
    posts: [
      {
        profilepic: "/images/chili.jpg",
        name: "Alex",
        date: "Nov 8, 2025",
        reply: " • 2 replies",
        message: "White chicken chili came out great.",
        foodielevel: "Enthusiast",
        bio: "Home cook. Chili fan.",
        thisBox: false
      },
      {
        profilepic: "/images/chili.jpg",
        name: "Sam",
        date: "Nov 7, 2025",
        reply: "",
        message: "Tried a new spice blend.",
        foodielevel: "Beginner",
        bio: "Learning daily.",
        thisBox: false
      }
    ]
  },
  methods: {
    authorinfo(list, current) {
      list.forEach(p => p.thisBox = false);
      current.thisBox = true;
    }
  }
});
