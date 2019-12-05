import React from 'react';
import posts from '../Posts/posts';
import PostListItem from '../../../Components/PostListItem';
import Aside from '../../Aside/Aside';
import Banner from '../../../Components/Banner';

const TravelPostList = () => {
    return(
        <div id="category-page">
            <div id="banner">
            {
                posts.filter((item)=>item.category==="Travel")
                     .sort((a,b)=>{
                    let dateA = new Date (a.date),
                        dateB = new Date (b.date)
                        return dateA - dateB   
                })
                    .slice(0,1)
                    .map(({
                        id,
                        category,
                        title,
                        date,
                        author,
                        image,
                    })=> <Banner
                            key={id}
                            id={id}
                            image={image}
                            category={category}
                            title={title}
                            author={author}
                            date={date}
                        />      
                    )
                 }
        		</div>
            <div id="posts-area">
            {
                posts.filter((item)=>item.category==="Travel").map(({
					id,
					image,
					category,
					short_description,
					title,
					author,
					date,
				})=>(
					<div key={id}>
						<PostListItem
                        id={id}
						image={image}
						category={category}
						title={title}
						short_description={short_description}
						author={author}
						date={date}
						/>
					</div>
				))
            }
            </div>
            <Aside/>
        </div>
    )
}

export default TravelPostList