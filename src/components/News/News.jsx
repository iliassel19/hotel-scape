import React from "react";
import News1 from "../../assets/news-1.jpg";
import News2 from "../../assets/news-2.jpg";
import News3 from "../../assets/news-3.jpg";
import NewsBox from "./NewsBox";
const newsData = [
  {
    id: 1,
    date: "22 February 2022",
    title: "Once in a Lifetime a new luxury hotel affiliation",
    img: News1,
    alt: "Hotel Bedroom",
  },
  {
    id: 2,
    date: "15 Mars 2022",
    title: "Sense of Wellness",
    img: News2,
    alt: "Woman in a hotel bedroom",
  },
  {
    id: 3,
    date: "28 Mars 2022",
    title: "Meet & Travel Mag",
    img: News3,
    alt: "Hotel in nature",
  },
];
const News = () => {
  return (
    <section className="col-start-1 col-end-[-1] px-20 pb-24 border-b-[2px] border-b-grey-border">
      <h2 className="text-5xl text-green-very-dark font-Serif mb-16">
        <span className="text-green-dark text-7xl font-HandWritten leading-[0]">
          Our latest
        </span>{" "}
        News
      </h2>
      <div className="flex items-start gap-8">
        {newsData.map((news) => (
          <NewsBox key={news.id} {...news} />
        ))}
      </div>
    </section>
  );
};

export default News;
