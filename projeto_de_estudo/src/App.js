import React from 'react'
import { loadPosts } from './utils/load-post';
import './App.css';
import { Posts } from './components/Posts';

class App extends React.Component{
  
  state={
    posts: [],
  }

  async componentDidMount(){
    await this.loadPosts()
  }   

  loadPosts = async() => {
    const postsAndPhotos = await loadPosts()
    this.setState({posts: postsAndPhotos})
  }

  render(){
    //const name = this.state.name
    const { posts } = this.state //Atribuição via desestruturação
   
    return (
      <section className='container'>
        <Posts
          posts={posts}
        />
      </section>
    );
  }
}

export default App;
