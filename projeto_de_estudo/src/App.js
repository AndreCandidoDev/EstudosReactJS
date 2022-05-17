import React from 'react'
import './App.css';

class App extends React.Component{

  
  state={
    posts: [],
  }

  componentDidMount(){
    this.loadPosts()
  }   

  loadPosts = async() => {
    const postResponse = fetch('https://jsonplaceholder.typicode.com/posts')
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')

    const [posts, photos] = await Promise.all([postResponse, photosResponse])

    const postsJson = await posts.json()
    const photosJson = await photos.json()

    const postsAndPhotos = postsJson.map(
      (post, index) => {
        return {...post, cover: photosJson[index].url}
      }
    )

    this.setState({posts: postsAndPhotos})
  }

  render(){
    //const name = this.state.name
    const { posts } = this.state //Atribuição via desestruturação
   
    return (
      <section className='container'>
        <div className="posts">
          {posts.map(post => (
            <div className='post'>
              <img src={post.cover} alt={post.title}/>
              <div key={post.id} className='post-content'>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default App;
