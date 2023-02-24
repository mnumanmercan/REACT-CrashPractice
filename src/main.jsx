import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Posts, { loader as postsLoader } from './routes/Posts'
import NewPost, { action as newPostAction } from './routes/NewPost'
import PostDetails, {loader as postDetailsLoader} from './routes/PostDetails'
import RootLayout from './routes/RootLayout'
import './index.css'

const router = createBrowserRouter([ // bu dizi içinde tüm yolları ayrı birer obje olarak belirtebilir ve o yollarda açılmasını istediğin sayfayı element olarak atayabilirsin
  {
    path: '/',
    element: <RootLayout />,
    children: [// böylece bir layout içine kendi içinde bulunması gereken yol ve elementleri koyduk
      {
        path: '/',
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: '/create-post', element: <NewPost />, action: newPostAction },
          { path: '/:id' ,element: <PostDetails /> ,loader:postDetailsLoader }
        ]
      },

    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
