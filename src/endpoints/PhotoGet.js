import React from 'react'

const PhotoGet = () => {
  const [photos, setPhotos] = React.useState([])

function handleClick(){
  fetch('https://dogsapi.origamid.dev/json/api/photo', {
    method: 'Get',
    headers: {
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZG9nc2FwaS5vcmlnYW1pZC5kZXYiLCJpYXQiOjE2NDIxODU0NjQsIm5iZiI6MTY0MjE4NTQ2NCwiZXhwIjoxNjQyMjcxODY0LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxNSJ9fX0.Z33vb_JFPuYLVx-enKSB9M2HlxX8Y4bSwb6uuTybtU0'
    }
  })
  .then(res => res.json())
  .then(json => setPhotos(json))
}
console.log(photos)
  return (
    <div>
      <button onClick={handleClick}> Carregar</button>
      {photos.length > 0 && photos.map(photo => <img key={photo.id} src={photo.src} alt="teste"/>)}
    </div>
  )
}

export default PhotoGet
