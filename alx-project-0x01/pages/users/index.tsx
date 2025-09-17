import React from 'react'
import PostCard from '../../components/common/PostCard'
import Button from '../../components/common/Button'
import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header' 

function index() {
  return (
    <div>index</div>
  )
}

export default index

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}