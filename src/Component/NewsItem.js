import React from 'react'

const NewsItem=(props)=> {
        let { title, description, imageUrl, newsUrl, author, date,source } = props
        return (
            <div className='my-3'>
                <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'50%',zIndex:'1'}}>
                            {source}
                        </span>
                    <img src={!imageUrl ? "https://cdn.24.co.za/files/Cms/General/d/7059/e7cd4deac6fd40a681385b60919cbd9e.png" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className='card-text'><small className='text-muted'>by {author} on {new Date(date).toLocaleDateString()}</small></p>
                        <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-dark">ReadMore</a>
                    </div>
                </div>
            </div>
        )
}
export default NewsItem
