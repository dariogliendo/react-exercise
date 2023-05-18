import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NewsCard = ({ news, ix }) => {

  const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #141514;
    border-radius: 3px;
    padding: 1rem;
    cursor: pointer;
  `;

  return (
    <CardContainer>
      <Link to={`/article/${ix}`}>
        <img src={news.multimedia[0].url} alt={news.title} style={{maxHeight: "200px"}}/>
      </Link>
      <span>{news.title}</span>
    </CardContainer>
  );
};

export default NewsCard;
