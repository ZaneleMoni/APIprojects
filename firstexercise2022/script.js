let content = [
    {
        image_url: "https://picsum.photos/200/300?random=1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, est.",
    },
    {
        image_url: "https://picsum.photos/200/300?random=2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, est.",
    },
    {
        image_url: "https://picsum.photos/200/300?random=3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, est.",
    },
    {
        image_url: "https://picsum.photos/200/300?random=4",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, est.",
    },
    {
        image_url: "https://picsum.photos/200/300?random=5",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, est.",
    },
    {
        image_url: "https://picsum.photos/200/300?random=6",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, est.",
    },
    {
        image_url: "https://picsum.photos/200/300?random=7",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, est.",
    },
    {
        image_url: "https://picsum.photos/200/300?random=8",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, est.",
    },
    {
        image_url: "https://picsum.photos/200/300?random=9",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, est.",
    },
    {
        image_url: "https://picsum.photos/200/300?random=10",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, est.",
    },
  
]

for (let item of content){
    document.getElementById('content').innerHTML +=`
      <img src = "${item.image_url}">
            <p>${item.text}</p>
    `
};