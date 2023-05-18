import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Article = () => {
  const { url } = useParams()
  const article = useSelector((state) => state.news.value[url])
  const [artic, setArtic] = useState({})

  useEffect(() => {
    setArtic(article)
  }, [article])

  const ArticleWrapper = styled.div`
    display: flex;
    flex-direction: column;
  `

  const getMultimedia = () => {
    if (!artic?.multimedia?.length) return
    return artic.multimedia[0].url
  }

  return (
    <ArticleWrapper>
      <img src={getMultimedia()} alt="" style={{objectFit: 'cover', width: '100%', maxHeight: '70vh'}}/>
      <h1 style={{margin: 0}}>{artic?.title}</h1>
      <p>{artic?.abstract}</p>
      <a href={artic?.url} target="_blank">Leer artículo completo</a>
    </ArticleWrapper>
  )
}

export default Article