import Pic from '../images/pic.jpg'
import React from 'react'
import Layout from '../components/Layout'
import { SocialIcon } from 'react-social-icons';

export default function Intro() {
    return (
        <Layout>
            <div className='flex justify-around items-center h-full mt-20'>
                <div className='flex flex-col justify-center items-start text-3xl'>
                    <h1>
                        Hello!
                    </h1>
                    <br />
                    <h1>I am <b className='text-primary leading-loose'>Carlos Joco</b></h1>
                    <p className='text-3xl leading-loose'>Looking for a <b className='text-primary'>Web Developer</b>?</p>
                    <p className='text-3xl leading-loose'>Hire me!</p>
                    <div className='flex justify-center items-center gap-5 leading-loose mt-2'>
                        <SocialIcon url="https://www.linkedin.com/in/carlos-joco-gumanay/" />
                        <SocialIcon url="https://github.com/jocogum10" />
                    </div>

                </div>
                <div className="flex justify-end items-center" >
                    <img src={Pic} className="rounded-3xl max-h-80" />
                </div>

            </div>
        </Layout>


    )
}
