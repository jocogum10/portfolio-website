import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import githubApi from '../utilities/githubApi'

export default function Projects() {
  const [repos, setRepos] = useState({
    success: false,
    data: []
  })
  console.log(repos)

  useEffect(() => {
    const fetchRepositories = async () => {
      const repositories = await githubApi('jocogum10')
      setRepos(repositories);
    }
    fetchRepositories()
  }, [])

  const projectnames = repos.data.map((project, index) => {
    // return <p key={project.id}>{project.full_name}</p>
    const created_on = new Date(project.created_at).getFullYear()
    const year_now = new Date().getFullYear()
    if (project.language && created_on === year_now) {
      return <ProjectCard key={project.id} project={project} />
    }

  })


  return (
    <Layout>
      <div className='flex flex-col justify-center items-center'>
        <div className='text-3xl mt-10 mb-10'>Projects</div>
        <div className='flex flex-wrap justify-center items-center gap-5'>
          {repos.success ?
            projectnames :
            (<h1>Loading...</h1>)
          }
        </div>
      </div>

    </Layout>

  )
}
