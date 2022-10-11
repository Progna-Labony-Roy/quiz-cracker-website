import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Alltopics = () => {
    const quizTopics=useLoaderData();
    const topics=quizTopics.data;
    
    return (
        <div className='container grid mt-5'>
            {
                topics.map(topic => <Topic
                key={topic.id} topic={topic}
                ></Topic>)
            }
        </div>
    );
};

export default Alltopics;