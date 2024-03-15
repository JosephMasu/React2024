import React from 'react'
import Container from "../components/container/Container"
import PostForm from "../Post-form/PostForm.jsx"

function AddPost() {
  return (
    <div className='py-6'>
      <Container>
        <PostForm />
      </Container>
    </div>
  )
}

export default AddPost