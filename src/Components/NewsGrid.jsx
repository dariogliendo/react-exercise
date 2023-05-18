import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setNews } from "../Reducers/newsSlice";

const NewsGrid = ({ sport }) => {
  const news = useSelector((state) => state.news.value)
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data } = await axios.get(
          "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=qkKbInStoXtJ1h4dAv7ILP13Eo4xPG1l"
        );
        const filteredNews = data.results.filter((f) => f.subsection === sport);
        dispatch(setNews(sport ? filteredNews : data.results))
      } catch (error) {
        console.error(error);
      }
    }
    fetchNews();
  }, [dispatch]);

  const getTitle = () => {
    switch (sport) {
      case 'soccer': return 'Fútbol'
      case 'golf': return 'Golf'
      case 'basketball': return 'Básquet'
      case 'tennis': return 'Tenis'
      case 'autoracing': return 'Automovilismo'
      default: return 'Home'
    }
  }

  const renderNews = news.map((n, ix) => <NewsCard news={n} ix={ix} key={ix} />);

  const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
  `

  const NewsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  `

  return (
    <ContentWrapper>
      <h1 style={{margin: '0'}}>{getTitle()}</h1>
      <NewsContainer>
        {renderNews}
      </NewsContainer>
    </ContentWrapper>
  );
};

export default NewsGrid;
