import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'

function Commits({ repository, onError }) {
    const [commits, setCommits] = useState([])

    const [username, repo] = repository.full_name.split('/')
    const url = `https://api.github.com/repos/${username}/${repo}/commits`

    async function getCommits() {
        try {
            const { data } = await axios.get(url)
            setCommits(data)
        } catch (err) {
            onError(err.message)
        }
    }

    useEffect(() => {
        getCommits()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [repository])

    return (
        <div className='mt-5 border border-gray-700 px-5 py-2'>
            <h1>Commits</h1>
            <div className='space-y-2'>
                {commits.length > 0 && commits.map(({ commit }, i) => <div key={i} className='bg-slate-800 px-3 py-1'>
                    <div className='flex justify-between'>
                        <small className='block text-gray-300'> {commit.message}</small>
                        <small className='block text-gray-400 w-[100px]'> {moment(commit.author.date).fromNow()}</small>
                    </div>
                    <div className='ps-3 border-s border-gray-500'>
                        <small className='block'>Author: {commit.author.name}</small>
                        <small className='block'>Email: {commit.author.email}</small>
                        <small className='block'>Commiter: {commit.committer.name}</small>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Commits