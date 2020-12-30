const list = [
  {
    title: "处理中心",
    key: "1",
    path: "/do",
    children: [
      {
        title: "选项1",
        key: "1-1",
        path: "/sub",
        children: [
          {
            title: "选项1.1",
            key: "1-1-1",
            path: "/menu1"
          }
        ]
      }
    ]
  },
  {
    title: "我是工作",
    key: "2",
    path: "/work",
    children: [
      {
        path: "/sub",
        title: "选项1",
        key: "2-1",
        children: [
          {
            title: "选项1.1",
            key: "2-1-1",
            path: "/menu2"
          }
        ]
      },
      {
        title: "选项2",
        key: "2-2",
        path: "/sub2",
        children: [
          {
            title: "选项2.1",
            key: "2-1-2",
            path: "/chiddd",
            children: [
              {
                title: "选项3.1",
                key: "3-1-2",
                path: "/menu3"
              }
            ]
          }
        ]
      }
    ]
  }
];
export default list;
