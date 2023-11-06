import React from 'react';
import InformationCenterSection from './InformationCenterSection';

const InformationCenterPage = (props) => {
    const faqs = [
        {id:1, question: 'How do I apply?', answer: 'I dont know'},
        {id:2, question: 'How much time?', answer: 'Chamak Challo'}
    ];

    
    return (
        <div>
            <h3>{props.name}</h3>
            <ul>
                {faqs.map((faq, index) => (
                    <InformationCenterSection key={index} question={faq.question} answer={faq.answer} />
                ))}
            </ul>
        </div>
    );
}

export default InformationCenterPage;