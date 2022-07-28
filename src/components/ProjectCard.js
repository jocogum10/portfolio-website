import React from 'react'

export default function ProjectCard(props) {
    const { project } = props
    return (
        <div className='p-6 max-w-sm bg-zinc-900/20 rounded-3xl'>
            <a href={project.svn_url} target="_blank">
                <h5 className='text-2xl'>{project.name}</h5>
                <p>Language: {project.language}</p>
                <p>Last Update: {new Date(project.updated_at).toDateString()}</p>
                
            </a>
        </div>

    )
}
