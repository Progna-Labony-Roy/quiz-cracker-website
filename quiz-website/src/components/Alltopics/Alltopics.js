import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Alltopics.css';

const Alltopics = () => {
    const quizTopics=useLoaderData();
    const topics=quizTopics.data;
    
    return (
        <div className='m-5 '>
            <div className='grid'>
            {
                topics.map(topic => <Topic
                key={topic.id} topic={topic}
                ></Topic>)
            }
        </div>
        </div>
    );
};

export default Alltopics;