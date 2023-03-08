import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import axios from 'axios'
import NewsItem from '../../components/NewsItem';


const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d2ed852ae77f4da293150ffb380990ed")
      setArticles(res.data.articles)
    }
    getArticles();
  }, []);

  return (
    <Box m="20px">
      <Header title="NEWS" subtitle="Current News" />
      <Box
        display={'flex'}
        flexDirection='column'
        justifyContent={'center'}
        alignItems='center'
      >
        {articles.map(({ title, description, url, urlToImage }) => (
          <NewsItem title={title} description={description} url={url} urlToImage={urlToImage} />
        ))}
      </Box>
    </Box>
  )
}

export default News
