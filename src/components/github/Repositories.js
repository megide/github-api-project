import React from 'react'
import Commits from './Commits'

function Repositories({ data, onError}) {

    


    return (<div className=''>
        <div className='mb-3'>Repositories</div>

        <div className='space-y-2'>
            {data.map((repo, i) => (
                <div key={i} className='px-5 py-2 shadow bg-slate-800 rounded'>
                    <div className='flex gap-5 flex-1'>
                        <img src={repo.owner.avatar_url} onClick={() => {
                            window.location.href = repo.owner.html_url
                        }}
                            alt=""
                            className='h-[50px] rounded-full cursor-pointer' />
                        <div>
                            <div className='flex justify-between'>
                                <h1 onClick={() => window.location.href = repo.html_url} className='cursor-pointer text-md text-gray-300'>{repo.full_name}</h1>
                            </div>
                            <small className='block text-gray-400'>{repo.description}</small>
                            <div className='flex gap-3 justify-around mt-3'>
                                <p className='text-xs border border-slate-700 py-1 px-3 rounded-full '>{repo.visibility}</p>
                                <p className='text-xs border border-slate-700 py-1 px-3 rounded-full '>{repo.forks_count} Folk</p>
                                <p className='text-xs border border-slate-700 py-1 px-3 rounded-full '>{repo.watchers} watchers</p>
                                <p className='text-xs border border-slate-700 py-1 px-3 rounded-full '>{repo.open_issues} issues</p>
                                <p className='text-xs border border-slate-700 py-1 px-3 rounded-full '>{repo.default_branch}</p>

                                {/* commit views */}



                            </div>
                            <div className='block'>
                                <Commits repository={repo} onError={onError}/>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Repositories