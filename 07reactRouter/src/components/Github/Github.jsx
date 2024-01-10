import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  return (
    <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                    <a href="https://github.com/roman-thapa" className="">
                      <img
                          src={data.avatar_url}
                          alt="GitHub Avatar"
                      />
                    </a>
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      <a href="https://github.com/roman-thapa" className="hover:underline">
                          {data.name}
                      </a>
                      </h2>
                      <p className="mt-6 text-gray-600">
                      Hey, I'm Roman, and my current learning journey is centered around the React Router project. Immersed in this hands-on experience, I'm delving into the nuances of React, particularly focusing on creating dynamic and seamless user interfaces. As I navigate through the intricacies of React Router, the project provides a practical backdrop for honing my skills and understanding the power of routing in React applications.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Within the React Router project, I'm not merely acquiring a skill; I'm actively transforming ideas into innovative web experiences. This immersive process fuels my growing passion for React, as I witness firsthand how this powerful library enhances the navigation and user interaction aspects of web development. The React Router project serves as a dynamic playground where I'm pushing boundaries and translating theoretical knowledge into practical expertise.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/roman-thapa')
    return response.json()
}