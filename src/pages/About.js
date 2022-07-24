import React from 'react'
import Layout from '../components/Layout'

export default function About() {
    const techStack = [
        {
            name: 'HTML5',
            link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
        },
        {
            name: 'CSS3',
            link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
        },
        {
            name: 'JavaScript',
            link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        },
        {
            name: 'Tailwind CSS',
            link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg'
        },
        {
            name: 'Sass',
            link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
        },
        {
            name: 'React JS',
            link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        {
            name: 'Typescript',
            link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
        },
        // {
        //     name: 'Ruby on Rails',
        //     link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg'
        // },
        {
            name: 'Python',
            link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
        },
        {
            name: 'Pandas',
            link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg'
        },
        {
            name: 'Jupyter',
            link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg'
        },
        
        {
            name: 'Flask',
            link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg'
        },
        {
            name: 'Bootstrap',
            link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
        },
        {
            name: 'Git',
            link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
        },
        {
            name: 'MySQL',
            link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
        },
        {
            name: 'MS SQL Server',
            link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg'
        },
        
    ]

    return (
        <Layout>
            <div className='grid grid-cols-2 h-full mt-5 mx-5 gap-5'>
                <div className='leading-loose'>
                    <h1>I am Carlos Joco Gumanay.</h1>
                    <br />
                    <h1>I am a Data Automation Engineer since July 2021.</h1>
                    <p>I mostly work with Power BI for data visualization, Python for extracting, and cleaning data, Excel VBA to generate charts used for reports.</p>
                    <br />
                    <p>Currently, I am attending a bootcamp to learn web development.</p>
                    <p>For front-end I am learning React JS and for backend I am learning Ruby On Rails</p>
                    <p></p>
                    <br />
                    <p>I have been self-learning since 2018 about programming and I learned Python as my first language.</p>
                    <p>I am using Python mostly for it's data-related tasks.</p>
                    <p>Through self-learning, I was able to use Python for web development using the Flask framework.</p>
                    <p>I lean more towards web development, and I am open to positions that I can apply these skills.</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-5 bg-zinc-900/20 rounded '>
                    <h1 className='text-3xl mt-10'>Tech Experience</h1>
                    <div className='flex justify-center items-center flex-wrap gap-5 mb-10'>
                        {
                            techStack.map((item) => (
                                <div className='flex flex-col justify-center items-center h-25 w-25 p-1 ' key={item.name}>
                                    <img src={`${item.link}`} className='h-20 w-20'/>
                                    <p>{item.name}</p>
                                </div>
                            ))
                        }


                    </div>
                </div>

            </div>
        </Layout>
    )
}
