import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = () => {
    const quizTopics=useLoaderData();
    const topics=quizTopics.data;
    
    return (
        <div className='topic-grid m-5'>
            {
                topics.map(topic => <Topic
                key={topic.id} topic={topic}
                ></Topic>)
            }
        </div>
        </div>
    );
};

export default Topics;
